const express = require('express')
const mongoose=require("mongoose")
const userschema=new mongoose.Schema({
    "user":{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users'
    },
    "name":{
        type:String,
        required:true
    },
    "email":{
        type:String,
        required:true,
        unique:true
    },
    "password":{
        type:String,
        required:true

    },
    "time":{
        type:Date,
        default:Date.now
    }


});
const Users=new mongoose.model("User",userschema);
module.exports=Users;
console.log("done");