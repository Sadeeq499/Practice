// const { String, } = require('joi');
const mangoose = require('mongoose');

const schema = new mangoose.Schema({
    name:{
        type:String,
        required:true,
        min:6,
        max:50
    },
    email:{
        type:String,
        required:true,
        min:8,
        max:100
    },
    password:{
        type:String,
        required:true,
        min:8,
        max:60
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mangoose.model('User', schema);   // important part of mangoose to create a model and export
// on the basis of mangoose