const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// use to jwt authentication
const key = process.env.key
router.post("/register", (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then((users) => {
    
      if (users.length >= 1) {
        return res.status(200).json({
          msg: "This Email id already used",
          success: false
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
           
            return res.status(500).json({
              error: err,
            });
          } else {
            const user = new User({
              name: req.body.name,
              email: req.body.email,
              phone: req.body.phone,
              password: hash,
            });
            user
              .save()
              .then((result) => {
                
                res
                  .status(200)
                  .json({ success: true, result: result,msg:'success' });
              })
              .catch((err) => {
                // console.log(err);
                res.status(500).json({
                  error: err,
                });
              });
          }
        });
      }
    });
});

router.post("/login", (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        return res.status(200).json({
          msg: "User does not exist",
          success: false
        });
      } else {
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
          if (!result) {
            return res.status(200).json({
              msg: "Password Not Matched",
              success: false
            });
          }
          if (result) {
        
            const token = jwt.sign({
                name:user[0].name,
                email:user[0].email,
                phone: user[0].phone,
                _id: user[0]._id
            },
            key,
            {
              expiresIn: "12h"
            },
            );
            delete user[0].password
            res.status(200).json({
              user:user[0],
              token:token,
              msg: "success",
              success: true
            });
          }
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
