const express = require('express')
var router = express.Router()
const HotelModel = require('../models/Hotel')

router.get('/hotels', (req, res, next)=>{
    HotelModel.find().then(data=>res.json(data))
})
router.get('/hotels/:id', (req, res, next)=>{
    HotelModel.find({id:req.params.id}).then(data=>res.json(data))
})
router.post('/hotels', (req, res, next)=>{
    const info = req.body
    const newHotel = new HotelModel({
        Name:info.Name,
        Adress:info.Adress,
        City:info.City,
        Country:info.Country,
        Stars:info.Stars,
        hasSpa:info.hasSpa,
        hasPool:info.hasPool,
        priceCategory:info.price    
    })
    newHotel.save()
})
router.put('/hotels/:id', (req, res, next)=>{
    HotelModel.updateOne({_id:req.params.id}, {$set:{Name:req.query.name}}).then(ok=>console.log(ok))
    res.json(req.query.name)
})
router.delete('/hotels/:id', (req, res, next)=>{
    console.log(req.params.id)
    HotelModel.findOneAndDelete({_id:req.params.id}).then(oui=>console.log(oui))
})
module.exports = router