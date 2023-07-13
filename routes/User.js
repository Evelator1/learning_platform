const express = require('express');
const User = require("../controllers/User")


const userRouter=express.Router()

userRouter.get("/",User.GetUsers)
userRouter.get("/:id",User.GetUserById)
userRouter.put("/:id",User.UpdateUser)

userRouter.post("/",User.CreatUser)


module.exports=userRouter

