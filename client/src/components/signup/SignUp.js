import React from 'react'
import './signup.css'
import background from "../../Images/background.jpg";
import { useState } from "react";

import { Link } from "react-router-dom";

import Switch from "react-switch";
import axios from 'axios';
import { url } from '../../url/url';

const SignUp = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [check, setCheck] = useState(false);

  const handleData = async (e) => {
    e.preventDefault();
    const response = await axios.post(`${url}/register`,{name,email,password,phone})
    console.log(response.data)
  };
  return (
    <div className="container login">
      <div className="login-details">
        <div className="left" style={{backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="left-title">
          <h3>INSPIRED BY THE FUTURE:</h3>
          <h1>THE VISION UI DASHBOARD</h1>
        </div>
        </div>
        <div className="right">
          <div className="right-message">
            <h1>Welcome!</h1>
            <p>Use these awesome forms to login or create new</p>
            <p>account in your project for me</p>
          </div>
          <div className='right-info'>
            <form>
           
            <div className="email inputs ">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              id="name"
              placeholder="Name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="email inputs ">
            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              name="email"
              value={email}
              id="email"
              placeholder="Email address"
              required
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="password inputs">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Password"
              required
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>


          <div className="email inputs ">
            <label htmlFor="email">Mobile No</label>
            <input
              type="text"
              name="phone"
              value={phone}
              id="email"
              placeholder="Mobile Number"
              required
              autoComplete="off"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="remember">
            <Switch checked = {check} onChange={() => setCheck(!check)} onColor = '#571AE8' uncheckedIcon= {false} checkedIcon ={false} height={25}/>
            <span>Remember Me</span>
          </div>

          <div className="submit">
            <button type="submit" onClick={(e)=>handleData(e)}>
              SIGN UP
            </button>
          </div>
          </form>
          <div className="login-register">
            <div>Don't Have Account ?</div>
            <Link to="/login">
              <span>SignIn</span>
            </Link>
          </div>
          </div>
          </div>
          </div>
          </div>

  )
}

export default SignUp