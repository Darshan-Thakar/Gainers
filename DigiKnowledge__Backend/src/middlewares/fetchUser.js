const jwt=require("jsonwebtoken")
require("dotenv").config()

const fetchUser=(req,res,next)=>{
    try {
        const token=req.header("Auth-Token");

        if(!token){
            res.status(401).send({success:false,error:"Unauthorized token"})
        }
        
        const data=jwt.verify(token,process.env.JWT__SECRET__KEY);

     if(!data){

res.status(401).send({success:false,error:"Unauthorized token"})     

}
        req.user=data.user;
     next();

    } catch (err) {
        res.status(500).send({success:false, error:error})
    }



}

module.exports=fetchUser;