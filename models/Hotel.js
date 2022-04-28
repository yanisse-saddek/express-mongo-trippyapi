const mongoose = require('mongoose')

const Hotel = mongoose.Schema({
    Name:String,
    Adress:String,
    City:String,
    Country:String,
    Stars:Number,
    hasSpa:Boolean,
    hasPool:Boolean,
    priceCategory:Number
})
const HotelModel = new mongoose.model('Hotel', Hotel)

module.exports = HotelModel