const express=require('express')
const User=require('../model/camp')
const router=express.Router()

router.get('/',(req,res)=>
{
    res.send('hi')
})
router.get('/camp',async(req,res)=>
{
    const camp=await User.find({})
    res.render('home',{camp})
})
router.get('/new',(req,res)=>
{
    res.render('new')
})
router.post('/camp',async(req,res)=>
{
    const camp=await new User(req.body);
    await camp.save()
    res.redirect('home')
})

module.exports=router;
