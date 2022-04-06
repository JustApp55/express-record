// Dependencies
const express = require('express')
const mongoose = require('mongoose')
require("dotenv").config()
const cors = require('cors')
const db = mongoose.connection

//Environment Varables 
const app = express()
const mongoURI = process.env.MONGODB_URI 
const PORT = process.env.PORT || 3001

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true},
    () => console.log('MongoDB connection established:', mongoURI))

// Error / Disconnection
db.on('error', err => console.log(err.message + ' is Mongod not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))  

// Middleware
app.use(express.urlencoded({ extended: false}))
app.use(express.json())
app.use(express.static('public')) // express will use the public directory for static files... this way the app will find index.html as the route of the app. We can then attach React to that file
app.use(cors())

// Routes
const albumController = require('./controllers/album.js')
app.use('/album', albumController)

app.listen(PORT, () => {
    console.log('Playing!, New Wine', PORT)
})
