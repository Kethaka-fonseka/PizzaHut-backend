const mongoose=require("mongoose");

const MONGODB_URL='mongodb://localhost/pizzhut';

const connectDB =async () =>{
    await mongoose.connect(MONGODB_URL,{
        useCreateIndex:true,
        useUnifiedTopology:true,
        useNewUrlParser:true,
        useFindAndModify:false
    });
    console.log('Database Connected !!');
}
module.exports=connectDB;

