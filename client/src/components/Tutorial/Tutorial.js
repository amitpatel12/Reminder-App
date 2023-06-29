import React from 'react'
import './Tutorial.css'
import Qrcode from '../../Images/Qrcode.png'
import whatsapp from '../../Images/whatsapp.jpg'
import whatsapp_success from '../../Images/chat.png'
import { Link } from 'react-router-dom'
const Tutorial = () => {
  return (
    <>
      <div className='tutorial'>
        <h1> Setup your WhatsApp Bot</h1>
        <h3> Scan the Qr Code and save Bot Number</h3>
        <img src={Qrcode} alt = 'QR CODE'/>
        <p>Type Message <span className='whatsapp-message'>join if-bat </span> and send it</p>
        <img src={whatsapp} alt = 'QR CODE'/>
        <h3>All Done</h3>
        <img src={whatsapp_success} alt = 'success message'/>
        <h3>Now you are ready to add Reminder</h3>
        <div className='done'>
        <Link to='/dashboard'>Done</Link>
        </div>
        
      </div>
    </>
  )
}

export default Tutorial
