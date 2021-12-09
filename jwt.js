const express = require('express')
const app = express()
const jwt =require("jsonwebtoken");

const createToken=async()=>{
    const token=await jwt.sign({_id:"5fb86aaf569ea945f8bcd2e1"},"mynameisvinodbahadurthapa",{
    expiresIn:"2  seconds"
    })
    console.log(token);
    userVer=await jwt.verify(token,"mynameisvinodbahadurthapa");
    conconstsole.log(userVer);
}
createToken();
app.listen(4000,()=> {
    console.log(`server is runing at port no `);

}) 





