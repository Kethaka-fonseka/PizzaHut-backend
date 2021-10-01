const mongoose=require("mongoose");

const MONGODB_URL='mongodb+srv://admin:admin@pizzahut.0uekv.mongodb.net/PizzaHut?retryWrites=true&w=majority';

const connectDB =async () =>{
    await mongoose.connect(MONGODB_URL,{
        useCreateIndex:true,
        useUnifiedTopology:true,
        useNewUrlParser:true,
        useFindAndModify:false
    });
    console.log('Mongo Connection Successfully Run !!');
}
module.exports=connectDB;

