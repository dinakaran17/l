if(process.env.NODE_ENV !== 'production')
{
    require('dotenv').config()
}
const router=require('./router/camp')
const express=require('express')
const app=express()
const ejsMate=require('ejs-mate')
const path=require('path')
const mongoose=require('mongoose')
mongoose.connect(process.env.Database,{useNewUrlParser:true})
.then(()=>
{
    console.log('mongoose connected')
})
.catch(err=>{
    console.log(err)
})
const db=mongoose.connection
db.on('open',()=>{
    console.log('mongoose connected')
})
db.once('error',err=>
{
    console.log(err)
})
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

app.engine('ejs',ejsMate)
app.use('/',router)

app.listen(process.env.PORT || 3000)