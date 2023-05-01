require('dotenv').config()
const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require('body-parser')
const cors = require("cors")
const Reminder = require('./model/message.js')
const userRouter = require('./route/user')
const messageRouter = require('./route/message')

//APP config
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

//DB config
require('./db/config.js')







//Whatsapp reminding functionality

setInterval( async() => {
    try {
        const reminderList = await Reminder.find({})
        if(reminderList){
            reminderList.forEach( async (reminder) => {
                if(!reminder.isReminded){
                    const now = new Date()
                    if((new Date(reminder.remindAt) - now) < 0) {
                        Reminder.updateOne({_id: reminder._id}, {isReminded: true})
                        .then(() => {
                            const accountSid  = process.env.ACCOUNT_SID 
                            const authToken = process.env.AUTH_TOKEN
                            const reminderMsg = "*" + reminder.title + "*" + "\n" + reminder.description;
                            const client = require('twilio')(accountSid , authToken); 
                            client.messages 
                                .create({ 
                                    body: reminderMsg, 
                                    from: 'whatsapp:+14155238886',       
                                    to: `whatsapp:+91${reminder.phone}` //YOUR PHONE NUMBER INSTEAD OF 8888888888
                                }) 
                                .then(message => console.log(message.sid))
                        })
                        
                           
                        
                    }
                }
            })
        }
        
    } catch (error) {
        console.log(error)
    }
        
    
},1000)
;


app.use('/', userRouter)

app.use('/', messageRouter)

app.listen(9000, () => console.log("Be started"))