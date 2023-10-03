const mongoose = require('mongoose')

const propertySchema = new mongoose.Schema({
    image:{
        type:String
    },
    name:{
        type:String,
        required: true
    },
    propertyType:{
        type:String
    },
    location:{
        type:String,
    },
    room:{
        type:Number
    },
    bed:{
        type:Number
    },
    bath:{
        type:Number
    },
    area:{
        type:Number
    },
    price:{
        type:String
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model("Property",propertySchema);