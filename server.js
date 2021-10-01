const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");
const dotenv=require("dotenv");
const connectDB =require('./connection');
const app=express();
const cookieParser = require("cookie-parser");
dotenv.config()
var multer = require('multer');

const PORT = process.env.PORT || 8070;
connectDB();

app.use(express.json());
app.use(cookieParser());

app.use(cors(
    { 
       origin:["http://localhost:3000"],
       credentials: true,
    }
));

app.use(bodyParser.json());

//User Management
const UserManagement=require('./api/UserManagement/UserManagement.api');
app.use('/user-management',UserManagement);

//Employee Management
const EmployeeManagement=require('./api/EmployeeManagement/EmployeeManagement');
app.use('/employee-management',EmployeeManagement);

//Authentication
const Authentication=require('./api/Authentication/Auth.api');
app.use('/auth',Authentication);


//Place Order
const payment=require('./api/PaymentManagement/Payment.api.js');
app.use('/payment',payment);

//Reports
const Report=require('./api/Report/Report.api');
app.use('/report',Report);


const productAPI = require('./api/product.api');
app.use('/products', productAPI);
const cartAPI = require('./api/cart.api');
app.use('/carts', cartAPI);
const toppingAPI = require('./api/topping.api');
app.use('/toppings', toppingAPI);
const listAPI = require('./api/list.api');
app.use('/lists', listAPI);
const orderAPI = require('./api/order.api');
app.use('/orders', orderAPI);

const deliveryAPI=require("./api/delivery.api");
app.use('/deliveries',deliveryAPI);


app.listen(PORT,() =>{
    console.log('Service is running');
});
