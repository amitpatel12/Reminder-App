const express = require('express');
router = express.Router()
const Reminder = require('../model/message')
router.get("/getAllReminder/:id", async (req, res) => {
    try {
       const result = await Reminder.find({userId:req.params.id})
       res.status(200).json(result)
    } catch (error) {
       res.status(500).json({success: false, error: error})
    }
   }) 
   router.post("/addReminder", async (req, res) => {
       try {
           const { title,description, phone, userId, remindAt } = req.body
       const reminder = new Reminder({
            userId,
           title,
           description,
           remindAt,
           phone,
           isReminded: false
       })
   
       await reminder.save()
       res.status(200).json({success: true})
   
       } catch (error) {
           res.status(500).json({success: false, error: error})
       }
       
   
   
   
   })
   router.post("/deleteReminder", async (req, res) => {
      try {
       const id = req.body.id
      await Reminder.deleteOne({_id: id})
   
      res.status(200).json({success: true})
   
      } catch (error) {
       res.status(500).json({success: false, error: error})
      }
   })

module.exports = router