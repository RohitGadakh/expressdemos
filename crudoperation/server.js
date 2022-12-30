const express=require('express')

const bodyparser=require('body-parser')
const app=express();

//router
const routecategory=require('./route/category')
const routeproduct=require('./route/product')

app.use(bodyparser.json())

//middleware
app.use(routecategory)
app.use(routeproduct)


app.listen(6000,'0.0.0.0',()=>{
    console.log('server started at 6k')
})