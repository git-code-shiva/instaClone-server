const express = require('express');
const app = express();
const postSchema = require('./postSchema');
const connection = require('./connection');
const cors = require('cors'); 
const path = require('path');
const { default: mongoose } = require('mongoose');
connection();
app.use(cors());
mongoose.connection.on("connected",()=>console.log("connected to mongoDB"))
mongoose.connection.on("error",()=>console.log("failed to connect mongoDB"))

require("./postSchema")
app.use(express.json());
app.use(require("./router"));
const port = 8085||process.env.port;  //process.env.port use to take the random port in case of 8085 port failed


// app.post("/user",async(req,res)=>{
//   try{
//     const {username,password}= req.body;
//     // const userObject = new User({
//     //   username,
//     //   password
//     // })
//     const response = await userObject.save();
//     res.status(200).json({
//         status:"Success",
//         message: response
//     })
//   }catch(e){
//     res.status(404).json({
//         status:"Failed",
//         message:e.message
//     })
//   }
// });


app.listen(port,()=>(console.log(`server is up at port ${port}`)));