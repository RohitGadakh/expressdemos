const express=require('express')

const catdb=require('../db')

const route=express.Router()

route.get('/product',(req,resp)=>{
    const statement=`select id,title,price from product`
    console.log('inside get')
    catdb.execute(statement,(err,data)=>{

        resp.send(data)
    })
})

route.post('/product',(req,resp)=>{
    console.log('inside post')

//destructuring req.body object
const{title,price}=req.body
//make a statement
const statement =`insert into product (title,price) values('${title}','${price}')`

//fire query
catdb.execute(statement,(err,result)=>{
    if(err){
        console.log(`err=${err}`)
    }else{
        console.log(`result =${JSON.stringify(result)}`)
    }

    resp.send(result)
}) 
})

route.put('/product/:id',(req,resp)=>{
    const{id}=req.params
    const{title,price}=req.body
    const statement=`update product set title='${title}' where id='${id}'`
    catdb.execute(statement,(err,data)=>{
        resp.send(data)
    })

    
})

route.delete('/product/:id',(req,resp)=>{
    const{id}=req.params
    // const{title,price}=req.body
    const statement=`delete from product where id='${id}'`
    catdb.execute(statement,(err,data)=>{
        resp.send(data)
    })

    
})

module.exports = route