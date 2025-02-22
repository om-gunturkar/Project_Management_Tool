// const express= require("express")
// const mongoose = require('mongoose')
// const cors=require("cors")
// const customerModel=require('./models/customer')

// const app=express()
// app.use(express.json())
// app.use(cors());

// mongoose.connect("mongodb+srv://omgunturkar:om%40gunturkar1092@om.8klyy.mongodb.net/customer");


// app.post("/login",(req,res)=>{
//     const {email,password}=req.body;
//     customerModel.findOne({email:email})
//     .then(user=>{
//         if(user){
//             if(user.password==password){
//                 res.json("Success")
//             }else{
//                 res.json("The password is incorrect")
//             }
//         }else{
//             res.json("No record existed")
//         }
//     })
// })
// app.post('/registration',(req,res)=>{
//     customerModel.create(req.body)
//     .then(customers=>res.json(customers))
//     .catch(err=>res.json(err))
// })

// app.listen(3001,()=>{
//     console.log("Server is running");
    
// })