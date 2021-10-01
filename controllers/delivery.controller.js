const Delivery=require("../models/delivery.model");

const addDelivery=async(req,res)=>{
if(req.body!=null){
    
    const delivery=new Delivery(req.body);
    try{
const newDelivery=await delivery.save();

res.status(200).json(newDelivery);
    }catch(err){

        res.status(200).json(newDelivery);    
    }
}
}
module.exports={
    addDelivery
}