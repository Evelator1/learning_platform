const mongoose=require('mongoose')

mongoose.connect(process.env.DB_CONNECTION_STRING)
.then(()=> {
    console.log('Connected to GradBookDB')
   
}).catch((error)=>{
    console.log('Error connecting to GradBookDB',error)
});
