const User =require("../models/User")
const { param } = require('../routes/User');

const GetUsers=async(req,res)=>{
    try{
        const user = await User.find()
        res.status(201).json(user)
    }catch(error){
        res.status(500).send(error.message)
    }
}

const GetUserById=async(req,res)=>{
    try{
        const ID=req.params.id
        const user = await User.findById(ID)
        res.status(201).json(user)
    }catch(error){
        res.status(500).send(error.message)
    }
}

const CreatUser=async(req,res)=>{
    try{
        const {
            body:{name, username,password,profilePicture}
        }=req
        const user = await User.create({name, username,password,profilePicture})
        res.status(201).json(user)
    }catch(error){
        res.status(500).send(error.message)
    }
}

const UpdateUser=async(req,res)=>{
    try{
        const id =req.params.id
        const body=req.body

        const user = await User.findByIdAndUpdate(id,body,{new:true})
        res.status(201).json(user)
    }catch(error){
        res.status(500).send(error.message)
    }
}

module.exports={CreatUser,GetUsers,GetUserById,UpdateUser}