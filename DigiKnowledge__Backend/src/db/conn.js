const mongoose=require("mongoose");
require("dotenv").config();



mongoose.connect(`${process.env.Mongo__url}`,{useUnifiedTopology:true,useNewUrlParser:true}).then(()=>{
    console.log("connection established")
   
}).catch((err)=>{
    console.log(err);
})
