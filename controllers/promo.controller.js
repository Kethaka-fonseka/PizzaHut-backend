const  express=require("express");
var router = express.Router();

const Promotion=require("../models/Promotion");



const addPromo = async (req, res) => {
    
    
    var promoName = req.body.promoName;
    var promoTitle =req.body.promoTitle;
    var products =req.body.products;
    var totalCost =req.body.totalCost;
    var timePeriod = req.body.timePeriod;

    console.log(
        promoName,
        promoTitle,
        products,
        totalCost,
        timePeriod
   );

const newPromo= new  Promotion({
        promoName,
        promoTitle,
        products,
        totalCost,
        timePeriod
     });
 
     await newPromo.save().then((promo)=>{
         console.log("SUCCESS",promo)
        res.status(200).json(promo);
     }).catch((err) =>{
         console.log("ERR", err)
        res.status(201).json({Err:err});
     });
 }
 

 const UpdatePromo = async  (req, res) => {
    
    const _id = req.params.id;
    var promoName = req.body.promoName;
    var promoTitle =req.body.promoTitle;
    var products =req.body.products;
    var totalCost =req.body.totalCost;
    var timePeriod = req.body.timePeriod;


    const data = {
        promoName,
        promoTitle,
        products,
        totalCost,
        timePeriod
    }

    console.log(
        data
   );

    const update  = await Promotion.findByIdAndUpdate(_id,{
        promoName:promoName,
        promoTitle:promoTitle,
        products:products,
        totalCost:totalCost,
        timePeriod:timePeriod

    })
        .then((prom) => {
            console.log("Updated");
            res.status(200).json(update);
   }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Update Error"});
   });
};



const PromoDisplay = async (req, res) => {
    console.log('fdefdef')
    await Promotion.find({}).then((Promo) => {
        if (Promo) {
            res.json(Promo); 
        } else {
            res.json({Promo:null}); 
       }
    }).catch((err)=>{
        console.log(err);
    });
};


const getPromoById = async (req, res) => {
    const _id = req.params.id;
    await Promotion.findById(_id).then((Promo) => {
        if (Promo) {
            res.json(Promo); 
        } else {
            res.json({Promo:null}); 
       }
    }).catch((err)=>{
        console.log(err);
    });
};


const DeletePromo =  async (req, res) => {
    const _id = req.params.id;

    await Promotion.findByIdAndDelete(_id).then((promo) => {
            res.json({
                status:"Success"
            })
    }).catch((err)=>{
        console.log(err);
    });

};




module.exports = {
    addPromo,
    UpdatePromo,
    PromoDisplay,
    getPromoById,
    DeletePromo
}
