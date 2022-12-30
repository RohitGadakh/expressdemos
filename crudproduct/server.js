const express=require('express')
const app=express()
// import mysql

const mysql=require('mysql2')
const bodyparse=require('body-parser')


const jsonparse=bodyparse.json()
app.use(jsonparse)
//route
app.get('/product',(req,resp)=>{
    console.log('inside get')
    // resp.send('msg from express')
  
    //connect to mysql
const connect=mysql.createConnection({
    host:'0.0.0.0',
    user:'root',
    password:'root123',
    database:'expressdemo',
    port:3306
})

//make a statement
const statement =`select id,title,price from product`

//fire query
connect.query(statement,(err,result)=>{
    if(err){
        console.log(err)
    }else{
        console.log(result)
    }

    resp.send(result)
})


})

app.post('/product',(req,resp)=>{
    console.log('inside get')
    // resp.send('msg from express')
  
    //connect to mysql
const connect=mysql.createConnection({
    host:'0.0.0.0',
    user:'root',
    password:'root123',
    database:'expressdemo',
    port:3306
})
//destructuring req.body object
const{title,price}=req.body
//make a statement
const statement =`insert into product (title,price) values('${title}','${price}')`

//fire query
connect.query(statement,(err,result)=>{
    if(err){
        console.log(`err=${err}`)
    }else{
        console.log(`result =${JSON.stringify(result)}`)
    }

    resp.send(result)
   
})


})







app.listen(4000,'0.0.0.0',()=>{
    console.log('server started in port 4k')
})