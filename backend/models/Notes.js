const express = require('express')
const mongoose=require("mongoose")
const noteschema=new mongoose.Schema({
    "user":{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users'
    },
    
    "title":{
        type:String,
        required:true
    },
    "description":{
        type:String,
        required:true,
       
    },
    "tag":{
        type:String,
        required:true

    },
    "time":{
        type:Date,
        default:Date.now
    }


});
const Notes=new mongoose.model("Note",noteschema);

module.exports=Notes;
console.log("done Notes");