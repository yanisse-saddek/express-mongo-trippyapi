const express = require('express')
var routerHotel = express.Router()
const HotelModel = require('../models/Hotel')
const RoomModel = require('../models/Room')

routerHotel.get('/hotels', (req, res, next)=>{
    HotelModel.find().skip(req.query.page).limit(3).then(data=>res.json(data))
})
routerHotel.get('/hotels/:id', (req, res, next)=>{
    HotelModel.find({id:req.params.id}).then(data=>res.json(data))
})
routerHotel.post('/hotels', (req, res, next)=>{
    const info = req.body
    const newHotel = new HotelModel(info)

    newHotel.save().then(data=>res.json(data))
})
routerHotel.post('/hotels/rooms/:id', (req, res, next)=>{
    const newRoom = new RoomModel(req.body)
    newRoom.save().then(data=>res.json(data))
})
routerHotel.get('/hotels/:id/rooms', (req, res, next)=>{
    RoomModel.find({Hotel:req.params.id}).then(data=>res.json(data))
})
routerHotel.put('/hotels/:id', (req, res, next)=>{
    HotelModel.updateOne({_id:req.params.id}, {$set:{Name:req.query.name}}).then(ok=>console.log(ok))
    res.json(req.query.name)
})
routerHotel.delete('/hotels/:id', (req, res, next)=>{
    console.log(req.params.id)
    HotelModel.findOneAndDelete({_id:req.params.id}).then(data=>res.json(data))
})
module.exports = routerHotel