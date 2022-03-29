const express=require("express");
const User=require("../db/models/User")
const router=express.Router();
const bcyrpt=require("bcryptjs");
const jwt=require("jsonwebtoken")
const getRandomString=require("../helpers/getRandomString")
const nodemailer=require("nodemailer");
require("dotenv").config();
const fetchUser=require("../middlewares/fetchUser")

// let transporter=nodemailer.createTransport({
//     service:'Gmail',
//     auth:{
//         user:`${process.env.MY__MAIL__ID}`,
//         pass:`${process.env.MY__MAIL__PASSWORD}`,
        
      
//     },
   
  
// })


router.post('/auth/createUser',async(req,res)=>{
    try {
  console.log("running")
  console.log(req.body);
   const {name,email,password}=req.body;
        const salt=await bcyrpt.genSalt(10);
        const securedPassword=await bcyrpt.hash(password,salt);
        const uniqueString=getRandomString(47);

        const user=new User({
            name:name,
            email:email,
            password:securedPassword,
            verified:false,
            uniqueString:uniqueString,
            uniqueStringExpiryDate:new Date(Date.now()+12223343),
            followers:0,
            following:0,
            articles:0
        })
    const result=await user.save();

        // let mailOptions={
        //     from:process.env.MY__MAIL__ID,
        //     to:email,
        //     subject:"Account Activation",
        //     html:`Hello, to kindly activate your <strong>Gainer account  </strong> , please click on the link below <a href=http://localhost:3000/verify?uniqueString=${uniqueString}> http://localhost:3000/verify?uniqueString=${uniqueString} </a>. Thanks !`,
        //     text:`Hello, to kindly activate your <strong>Gainer account  </strong> , please click on the link below <a href=http://localhost:3000/verify?uniqueString=${uniqueString}> http://localhost:3000/verify?uniqueString=${uniqueString} </a>. Thanks !`
        // }
  
        // const mailSend= await transporter.sendMail(mailOptions);

        const data={
            user:{
                id:result._id
            }
        }

        const token=jwt.sign(data,process.env.JWT__SECRET__KEY);
        console.log('successful')
        res.status(200).send({success:true,token:token})
        
    } catch (error) {
        console.log(error)
        res.status(500).send({success:false, error:error})
    }



})

router.post("/auth/login",async(req,res)=>{
    try {
        const {email,password}=req.body;

        const user=await User.findOne({email:email}).select({email:1,password:1,verified:1})

        if(!user){
            res.status(401).send({success:false, error:"Please try to login using correct credentials"})
        }
        const salt=await bcyrpt.genSalt(10);
        const passwordCompare=await bcyrpt.compare(password,user.password)

        if(!passwordCompare){
            res.status(401).send({success:false, error:"Please try to login using correct credentials"})
        }
        // if(user.verified==false){
        //     res.status(401).send({success:false, error:"Please verify your account first"})
        // }
      const data={
          user:{
              id:user._id
          }
      }

      const token=jwt.sign(data,process.env.JWT__SECRET__KEY );

        res.status(200).send({success:true,token:token})

    }catch (error) {
        res.status(500).send({success:false, error:error})
    }
})

// router.patch('/auth/logout',(req,res)=>{
//     try {
//         res.clearCookie("token")
//         res.status(200).send({success:true})
//     } catch (error) {
//         res.status(500).send({success:false})
//     }
// })

router.get('/auth/getUser',fetchUser,async(req,res)=>{
    try {
        const userId=req.user.id;
        const result=await User.findById(userId).select({name:1,email:1,bio:1,followers:1,following:1,articles:1})

        res.status(200).send({success:true,user:result})
    } catch (error) {
        console.log(error)
        res.status(500).send({success:false, error:error})
    }
})
module.exports=router;