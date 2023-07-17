const express = require('express');
require ('dotenv').config()
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express()

const port = process.env.PORT || 3011
require ('./db')

app.get('/', (req, res) => {
    try {
        res.status(201).send("Welcome to the final project")
    } catch (error) {
        res.status(500).send("Error while trying to get", error)
    }
});
const authRouter = require("./routes/auth");
const { errorHandler } = require("./middelwares/errorHandler");
const userRouter=require("./routes/user")


app.use(cors());
app.use(cookieParser());
app.use(express.json())
app.use("/users",userRouter)
app.use("/auth", authRouter);


const postRouter=require("./routes/Post")
app.use("/post",postRouter)

const commentRouter=require("./routes/Comments")
app.use("/comment",commentRouter)

app.use(errorHandler);



app.listen (port, ()=>console.log(`Server is successfully running on http://localhost:${port}`))