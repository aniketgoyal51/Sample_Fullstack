const express=require("express")
const app=express()

app.get("/",(req,res)=>{
    res.header({"Access-Control-Allow-Origin":"*"})
    res.json({"Name":"Aniket Goyal"})
}).listen(7000,()=>{
    console.log("Server is running on port 7000")
})