import React from 'react'
import './signup.css'
import background from "../../Images/background.jpg";
import { useState } from "react";

import { Link, Navigate, useNavigate } from "react-router-dom";

import Switch from "react-switch";
import axios from 'axios';
import { url } from '../../url/url';

const SignUp = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [check, setCheck] = useState(false);
  const [wait, setWait] = useState('')
  const navigate = useNavigate()

  const handleData = async (e) => {
    e.preventDefault();
    try {
      if(!phone || !name || !email || !password){
        alert("Please enter all fields")
        return;
      }
     
      setWait("Waiting")
      let response = await axios.post(`${url}/register`,{name,email,password,phone})
      response = response.data
      if(response.success){
        console.log(response.data)
        setEmail('')
        setPassword('')
        setPhone('')
        setName('')
        setWait(response.msg)
        navigate('/')
      }
        else{
          setWait(response.msg)
        }
      
    } catch (error) {
      setWait('Error')
      console.log(error)
    }
   
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
            
          </div>
          <div className='right-info'>
            <form>
            {
      wait && <p className={wait === 'Error' ? "error-msg" : 'waiting-msg'} style={{textAlign:'center', fontWeight:'600', paddingTop: '10px'}}>{wait}...</p>
    }
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
            <Link to="/">
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