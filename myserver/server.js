const { response } = require("express");
const express=require("express");
var app=express();

app.get("/",(req,res)=>{
    res.send(`
    <h1>This is home page</h1>
    `);
})

app.get("/about",(req,res)=>{
    res.send("In about us page");
})
app.listen(4000);
console.log("server run at port 4000");