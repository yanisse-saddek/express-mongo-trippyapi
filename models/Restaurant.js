const mongoose = require('mongoose')

const Restaurant = mongoose.Schema({
    Name:String,
    Adress:String,
    City:String,
    Country:String,
    Stars:Number,
    Cuisine:String,    
    priceCategory:Number
})
const RestaurantModel = new mongoose.model('Hotel', Hotel)

module.exports = RestaurantModel 