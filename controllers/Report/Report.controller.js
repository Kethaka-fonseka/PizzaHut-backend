const  express=require("express");
var router = express.Router();

const Transaction = require('../../models/Transaction.model');
const Product = require('../../models/product.model');
const Order = require('../../models/order.model');

const EmployeeManagement = require('../../models/EmployeeManagement');
const UserManagementModel = require('../../models/UserManagementModel');

const AllReports = async (req, res) => {

    
    await Transaction.count().then((transaction) => {
            Product.count().then((products) => {
                    Order.count().then((orders) => {
                        EmployeeManagement.count().then((Employee) => {
                            UserManagementModel.count().then((User) => {
             
                                res.json({
                                    transaction: transaction,
                                    products: products,
                                    orders:orders,
                                    Employee:Employee,
                                    User:User
                                }); 
       
                        }).catch((err)=>{
                            console.log(err);
                        });
   
                    }).catch((err)=>{
                        console.log(err);
                    });
   
                    }).catch((err)=>{
                        console.log(err);
                    });

            }).catch((err)=>{
                console.log(err);
            });

    }).catch((err)=>{
        console.log(err);
    });
};



module.exports = {
    AllReports,

}
