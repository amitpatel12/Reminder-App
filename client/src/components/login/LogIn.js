import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import "./login.css";
import Switch from "react-switch";
import { url } from "../../url/url";


const LogIn = ({setUser}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(false);
  const [wait, setWait] = useState('');
  const navigate = useNavigate();

  const handleData = async (e) => {
    e.preventDefault();
    // console.log(email, password)
    try {
      if(!email || !password) {
        alert("Please enter all fields")
        return;
      }
      setWait("Waiting")
      let response = await axios.post(`${url}/login`, {email,password})
      response = response.data;
      
      if(response.token){
        localStorage.setItem('user', JSON.stringify(response.user))
        localStorage.setItem('token', response.token)
       
        setWait("success")
        navigate('/dashboard')
      }
      else{
        setWait(response.msg)
      }
    
    } catch (error) {
      setWait("Error")
      console.log('Error happing submitting form', error)
    }
  };

  return (
    <div className="container login">
      <div className="login-details">
        <div className="left" >
        <div className="left-title">
          <h3>INSPIRED BY THE FUTURE:</h3>
          <h1>THE VISION UI DASHBOARD</h1>
        </div>
        </div>
        <div className="right">
          <div className="message">
            <h1>Nice to see you!</h1>
            <p>Enter your email and password to signin</p>
          </div>

   <form>
    {
      wait && <p className={wait === 'Error' ? "error-msg" : 'waiting-msg'} style={{textAlign:'center', fontWeight:'600', paddingTop: '10px'}}>{wait}...</p>
    }
          <div className="email inputs ">
            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              name="email"
              value={email}
              id="email"
              placeholder="Email address"
              required
              autocomplete="off"
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

          <div className="remember">
            <Switch checked = {check} onChange={() => setCheck(!check)} onColor = '#571AE8' uncheckedIcon= {false} checkedIcon ={false} height={25}/>
            <span>Remember Me</span>
          </div>

          <div className="submit">
            <button type="submit" onClick={handleData}>
              SIGN IN
            </button>
          </div>
          </form>
          <div className="login-register">
            <div>Don't Have Account ?</div>
            <Link to="/signup">
              <span>Sign up</span>
            </Link>
          </div>

          <div className="login-register">

            <Link to="/">
              <div className="forgot">Forgot Password?</div>
            </Link>
          </div>

          <div className="footer-message">
            <div>@2023, Made with ❤️ by Amit for a better web</div>
            <div className="footer-message-tag">
              <span>Marketplace</span>
              <span>Blog</span>
              <span>Licence</span>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;