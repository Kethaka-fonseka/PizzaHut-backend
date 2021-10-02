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


//update delivery details

const updateDelivery=async(req,res)=>{
    if(req.params.id!=null){
        try{
  const location=await Delivery.findById(req.params.id);
  if(location.fullname!=null){
    location.fullname=req.body.fullname;
  }
  if(location.address!=null){
    location.address=req.body.address;
  }
  if(location.city!=null){
    location.city=req.body.city;
  }
  if(location.state!=null){
    location.state=req.body.state;
  }
  if(location.zipcode!=null){
    location.zipcode=req.body.zipcode;
  }

  const updatedLocation=await location.save();
  res.status(200).json(updatedLocation);

        }catch(err){
            res.status(400).json({message: err.message})
    } 
        }
   
}

const removeAddress=async(req,res)=>{
if(req.params.id!=null){
    try{
        const location=await Delivery.findById(req.params.id);
        const deletedLocation=await location.remove({});
        res.status(200).json(deletedLocation);
    }catch(err){
        res.status(400).json({message: err.message}) 
    }
}
}

module.exports={
    addDelivery,
    getPermanetAddresses,
    removeAddress,
    updateDelivery

}