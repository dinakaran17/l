const mongoose=require('mongoose')

const ms=new mongoose.Schema({
    name:String,
    age:Number
})
const User=mongoose.model('User',ms)

module.exports=User;