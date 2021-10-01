const mongoose=require('mongoose');

const deliverySchema=new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
        trim:true
    },
    user:{
        type:String,
        required:true,
        trim:true
    },
    address:{
        type:String,
        required:true,
        trim:true
    },
    city:{
        type:String,
        required:true,
        trim:true
    },
     zipcode:{
        type:Number ,
        required:true,
        trim:true
    },
    state:{
        type:String,
        required:true,
        trim:true
    },
    status:{
        type:String,
        required:true,
        trim:true
    },
})

module.exports=mongoose.model("delivery",deliverySchema)