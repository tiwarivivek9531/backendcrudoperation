const express = require('express');
const {user}=require("../modals/user");
const router=express.Router();

router.post("/vivekPost", async (req,res)=>{
    try{
        
        console.log("hi");
        let details= new user(req.body);
        await details.save();
        console.log('post succesfull');
        return res.status(200).send(details);

    }
    catch(err){
        console.log(err.message);
        return res.status(500).send('server error');
    }
})

router.get("/getUser", async (req,res)=>{
    try{
    
        let name=await User.find();
        console.log('get succesfull');
        return res.status(200).send(name);
    }
    catch(err){
        console.log(err.message);
        return res.status(500).send('server error');
    }
})
module.exports=router;