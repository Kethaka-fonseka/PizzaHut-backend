const  express=require("express");
var router = express.Router();
const EmployeeManagement=require("../../models/EmployeeManagement");
const AuthenticationModel = require("../../models/AuthenticationModel");

//add employee controller
const addEmployee = async (req, res) => {

   var FirstName =req.body.FirstName;
   var LastName =req.body.LastName;
   var Email =req.body.Email;
   var Contact = req.body.Contact;
   var Role =req.body.Role;
   var Branch = req.body.Branch;




    const UserManage= new  EmployeeManagement({
        FirstName,
        LastName,
        Email,
        Contact,
        Role,
        Branch,
 
    });

    await UserManage.save().then(()=>{
          res.json({status:"Add a new user to the system"});
    }).catch((err) =>{
        console.log("User adding error");
        console.log(err);
    });
};

const displayEmployee = async (req, res) => {
    const Branch =  req.params.Branch;
    await EmployeeManagement.find({Branch: Branch}).then((UserManagement) => {
        if (UserManagement) {
            res.json(UserManagement); 
        } else {
            res.json({UserManagement:null}); 
       }
    }).catch((err)=>{
        console.log(err);
    });
};

const displayEmployeeByID = async (req, res) => {

   const _id =  req.params.id;
console.log("Working" , _id);

   await EmployeeManagement.findById(_id,(err, UserManagement)=>{
        return res.status(200).json({
            success:true,
            UserManagement
        });
    }).catch((err)=>{
        console.log(err);
    });
};

const getChefsByBranch=async(req,res)=>{
if(req.params.branch!=null){
    try{
const chefs=await EmployeeManagement.find({Branch:req.params.branch});
res.status(200).json(chefs);
    }catch(err){
       res.status(400).json({err:err.message}); 
    }
}
}


const getDeliveryGuyByBranch=async(req,res)=>{
    if(req.params.branch!=null){
        try{
    const chefs=await EmployeeManagement.find({Branch:req.params.branch,Role:'Delivery-Guy'});
    res.status(200).json(chefs);
        }catch(err){
           res.status(400).json({err:err.message}); 
        }
    }
    }


const updateEmployee = async (req, res) => {
   const _id = req.params.id;
   var FirstName =req.body.FirstName;
   var LastName =req.body.LastName;
   var Email =req.body.Email;
   var Contact = req.body.Contact;
   var Role =req.body.Role;
   var Branch = req.body.Branch;

    const data = {
        FirstName,
        LastName,
        Email,
        Contact,
        Role,
        Branch
    }
    const update  = EmployeeManagement.findByIdAndUpdate(_id,data)
        .then(() => {
            console.log("Updated");
    res.status(200).send({status:"updated", user:update});
   }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Update Error"});
   });
};

const deleteEmployee = async (req, res) => {
    const _id = req.params.id;
    EmployeeManagement.findByIdAndDelete(_id).then((sellers) => {
            res.json({
                status:"Success"
            })
    }).catch((err)=>{
        console.log(err);
    });

};

module.exports = {
    addEmployee,
    displayEmployee,
    displayEmployeeByID,
    updateEmployee,
    deleteEmployee,
    getChefsByBranch,
    getDeliveryGuyByBranch
}
