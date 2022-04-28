const express = require('express')
const app = express()
const mongoose = require('mongoose')
const hotels = require('./controllers/hotels')
const restaurants = require('./controllers/restaurants')
async function conn(){
    await mongoose.connect('mongodb://localhost:27017/trippy_basics')
}
conn()
app.use(express.json())
app.use('/hotel', hotels)
app.use('/restaurant', restaurants)
app.listen(4000)