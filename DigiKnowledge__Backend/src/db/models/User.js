const mongoose=require("mongoose");
const validator=require("validator")

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
   
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(validator.isEmail(value)==false){
                throw new Error("Invalid email ")
            }
        }

        
    },
    uniqueString:{
        type:String,
         unique:true,
         required:true
    },
    password:{
        type:String,
        required:true,
        minLength:9,

    },
    bio:{
        type:String,

    },
    uniqueStringExpiryDate:{
        type:  Date,
       required:true
    },
    verified:{
        type:Boolean,
        required:true
    },
    followers:{
        type:Number,
        
    }
    ,following:{
        type:Number
    },
    articles:{
    type:Number,
    }
    
    
    
})

const User=mongoose.model("User",userSchema)

module.exports=User;