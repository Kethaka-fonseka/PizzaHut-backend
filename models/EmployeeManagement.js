const mongoose=require('mongoose');
const schema=mongoose.schema;

const EmployeeManagementSchema = new mongoose.Schema({

FirstName:{
    type:String,
    required: true
},
LastName:{
    type:String,
    required: true
},

Email:{
    type:String,
    required: true
},
Contact:{
    type:String,
    required: true
},
Role:{
    type:String,
    required: true
},
PasswordHash:{
    type:String,
    required: true
    },
Branch:{
    type:String,
     required: false
}
},{ timestamps: true });

const EmployeeManagement = mongoose.model("Employee Management",EmployeeManagementSchema);
module.exports=EmployeeManagement;