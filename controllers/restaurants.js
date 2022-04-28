const express = require('express')
var routerRestaurant = express.Router()
const RestaurantModel = require('../models/Restaurant')

routerRestaurant.get('/restaurants', (req, res, next)=>{
    RestaurantModel.find().skip(req.query.page).limit(3).then(data=>res.json(data))
})
routerRestaurant.get('/restaurants/:id', (req, res, next)=>{
    RestaurantModel.find({id:req.params.id}).then(data=>res.json(data))
})
routerRestaurant.post('/restaurants', (req, res, next)=>{
    const info = req.body
    const newRestaurant = new RestaurantModel({
        Name:info.Name,
        Adress:info.Adress,
        City:info.City,
        Country:info.Country,
        Stars:info.Stars,
        Cuisine:info.Cuisine,    
        priceCategory:info.Price
    })
    newRestaurant.save().then(data=>res.json(data))
})
routerRestaurant.put('/restaurants/:id', (req, res, next)=>{
    RestaurantModel.updateOne({_id:req.params.id}, {$set:{Name:req.query.name}}).then(data=>res.json(data))
})
routerRestaurant.delete('/restaurants/:id', (req, res, next)=>{
    console.log(req.params.id)
    RestaurantModel.findOneAndDelete({_id:req.params.id}).then(data=>res.json(data))
})
module.exports = routerRestaurant