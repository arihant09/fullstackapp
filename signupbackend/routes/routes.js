const express=require('express')
const SignUpModel = require('../models/SignUpModels')
const router=express.Router()
const signUpTemplateCopy=require('../models/SignUpModels')



router.post('/signup',(req,res)=>{
    const signedUpUser=new signUpTemplateCopy({
        fullName:req.body.fullName,
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    })
    signedUpUser.save().then(data=>{
        res.json(data)
    })
    .catch(err=>{
        res.json(err)
    })
})

router.get('/signup',async(req,res)=>{
    try{
        const signedUpUser=await SignUpModel.find();
        res.send(signedUpUser);
    }catch(e){
        res.send(e);
    }
})

module.exports=router
