const express= require("express");
const app=express();
const jwt=require("jsonwebtoken");
const createToken=async()=>{
    const token=await jwt.sign({_id:"12334c55678f890a1233"},"mynameisaayushisharma",{  //jwt create 
    //userrule=await jwt.verify(token,"mynameisaayushisharma")
    })
    console.log(token)
    userrule=await jwt.verify(token,"mynameisaayushisharma");       //login verify
    console.log(userrule)
}
createToken();
app.listen(4000);