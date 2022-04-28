const express = require('express')
const app = express()
const mongoose = require('mongoose')
const hotels = require('./controllers/hotels')
async function conn(){
    await mongoose.connect('mongodb://localhost:27017/trippy_basics')
}
conn()
app.use(express.json())
app.use('/', hotels)
app.listen(4000)