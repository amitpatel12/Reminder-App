const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: 'String',
        unique: true
    },
    password: String,
    phone: String,
    token:{
        type: 'String',
        default: '',
    }
})
const user = mongoose.model("user", userSchema)
module.exports = user

