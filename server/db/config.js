const mongoose = require('mongoose')
const DB = process.env.MONGODB_URL
mongoose.connect(DB, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(() => { console.log("database connection established")})
.catch(error => {console.log('Error connecting to Mongo', error)})

