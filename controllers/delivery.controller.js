const Delivery=require("../models/delivery.model");
const PERMANET='permanet';


//Add new delivery to the deliveries collection
const addDelivery=async(req,res)=>{
if(req.body!=null){
    
    const delivery=new Delivery(req.body);
    try{
const newDelivery=await delivery.save();

res.status(200).json(newDelivery);
    }catch(err){

        res.status(400).json({message: err.message})  
    }
}
}

//Get delivery address according to user email

const getPermanetAddresses=async(req,res)=>{
if(req.params.user!=null){
    try{
        console.log(req.params.user)
      const deliveries=await Delivery.find({user:req.params.user,status:PERMANET});
      res.status(200).json(deliveries);
    }catch(err){
        res.status(400).json({message: err.message})
    }
}
}

module.exports={
    addDelivery,
    getPermanetAddresses
}