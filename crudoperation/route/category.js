const express=require('express')

const catdb=require('../db')

const route=express.Router()

route.get('/category',(req,resp)=>{
    const statement=`select id,title,description from category`
    console.log('inside get')
    catdb.execute(statement,(err,data)=>{

        resp.send(data)
    })
})

route.post('/category',(req,resp)=>{
    console.log('inside post')

//destructuring req.body object
const{title,description}=req.body
//make a statement
const statement =`insert into category (title,description) values('${title}','${description}')`

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

route.put('/category/:id',(req,resp)=>{
    const{id}=req.params
    const{title,description}=req.body
    const statement=`update category set title='${title}' where id='${id}'`
    catdb.execute(statement,(err,data)=>{
        resp.send(data)
    })

    
})

route.delete('/category/:id',(req,resp)=>{
    const{id}=req.params
    // const{title,description}=req.body
    const statement=`delete from category where id='${id}'`
    catdb.execute(statement,(err,data)=>{
        resp.send(data)
    })

    
})

module.exports = route