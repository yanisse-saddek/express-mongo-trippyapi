const mongoose = require('mongoose')

const Table = mongoose.Schema({
    seat:Number,
    isVIP:Boolean,
    Restaurant:{
        type:mongoose.Types.ObjectId,
        ref:"Restaurant"
    }
})
const TableModel = new mongoose.model('Table', Table)

module.exports = TableModel