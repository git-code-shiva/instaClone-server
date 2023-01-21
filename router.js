const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const POSTMODEL = mongoose.model("POSTMODEL")

router.get("/all",(req,res)=>{
  POSTMODEL.find().sort({ createdAt: -1 }).then(posts=>res.json(posts)).catch(err=>console.log(err))

})

router.post("/createPost", (req,res)=>{
    const {name,location,description,postImage} = req.body;
    if(!name || !location || !description || !postImage){
      return req.json({
        message:"Please fill all the fields"
      })
    }
  
    const post = new POSTMODEL({
      name,location,description,postImage
    })
    post.save().then((result)=>{
      return res.json({
        post:result
      })
    }).catch((err)=>{
      console.log(err);
    })
    res.json("Ok")
  })
  

module.exports= router;