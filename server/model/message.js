const mongoose = require('mongoose')
const reminderSchema = new mongoose.Schema({
    userId: String,
    title: String,
    description: String,
    remindAt: String,
    phone: String,
    isReminded: Boolean
})
const Reminder = mongoose.model("reminder", reminderSchema)

module.exports = Reminder