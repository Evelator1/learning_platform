const express = require('express');
const app = express()
require ('dotenv').config()
const port = process.env.PORT || 3011
require ('./db')
const cors = require('cors');

app.use(cors());
app.use(express.json())

const userRouter=require("./routes/User")
app.use("/users",userRouter)

const postRouter=require("./routes/Post")
app.use("/post",postRouter)

const commentRouter=require("./routes/Comments")
app.use("/comment",commentRouter)



app.listen (port, ()=>console.log(`you are running on http://localhost:${port}`))