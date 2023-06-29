import React, { useState } from 'react'
import './navbar.css'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  
    const navigate = useNavigate()

    const user = JSON.parse(localStorage.getItem('user'))

    const handleLogout = () => {
      localStorage.clear()
      navigate('/')
    }

   

  return (
    <div className='Navbar'>
      <div className='logo'>
         <div> ReminderApp</div>
        
      </div>

      <div className='NavbarItem'>

      <div className='tutorial-link'>
        <Link to='/tutorial'>Tutorial</Link>
        </div>



        <div className="dropdown">
  <button className="dropbtn">Profile</button>
  <div className="dropdown-content">
    {
        user && <div>{user.name}</div>
    }
    
    <div onClick={handleLogout}>Logout</div>
  </div>
</div>

      
      </div>


    </div>
  


  )
}

export default Navbar
