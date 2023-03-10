// importation express
const express= require("express");
//Router
const router= express.Router();
// importation contact
const Contact= require("../models/Contacts")


//post
router.post("/add",async(req, res)=>{
    const {name, email, phone}= req.body
    try{
        const newContact= new Contact({name, email, phone})
        const contact= await newContact.save()
        res.send({msg:"contact added",contact})

    }
    catch(error){
        console.log(error)

    }
} )
module.exports=router