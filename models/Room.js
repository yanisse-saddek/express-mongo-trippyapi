const mongoose = require('mongoose')

const Room = mongoose.Schema({
    People:Number,
    Price:Number,
    hasBathroom:Boolean,
    Hotel:{
        type:mongoose.Types.ObjectId,
        ref:"Hotel"
    }
})
const RoomModel = new mongoose.model('Room', Room)

module.exports = RoomModel