const express = require('express');
const app = express()
require ('dotenv').config()
const port = process.env.PORT || 3011
require ('./db')

app.get('/', (req, res) => {
    try {
        res.status(201).send("Welcome to the final project")
    } catch (error) {
        res.status(500).send("Error while trying to get", error)
    }
});

const userRouter=require("./routes/User")
app.use(express.json())
app.use("/users",userRouter)




app.listen (port, ()=>console.log(`you are running on http://localhost:${port}`))