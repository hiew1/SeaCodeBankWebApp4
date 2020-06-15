const mongoose = require('mongoose');

// mongoose Schema
const customSchema = new mongoose.Schema({
    adminName : {
        type : String,
        required : true
    },
    customerName : {
        type : String,
        required : true
    },
    customerAddress : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    },
    items : [
        {
            description : {
                type : String,
                required : true
            },
            amount : {
                type : Number,
                required : true
            }
        }
    ],
    finalTotal : {
        type : Number,
        required : true
    },
    terms : {
        type : String,
       // required : true
    },
    depositDescription : {
        type : String,
        required : true
    }
});

// exporting
module.exports = mongoose.model('deposit', customSchema );