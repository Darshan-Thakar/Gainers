const express=require("express");
const app=express();
const port=process.env.PORT || 8000;
const cors=require("cors");
require("./db/conn")
const Authentication__Router=require("./routes/auth");

app.use(cors())
app.use(express.json());
app.use(Authentication__Router)

app.listen(port,()=>{
    console.log(`Listening on port no ${port}`);
})