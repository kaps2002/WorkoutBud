require('dotenv').config()

const express=require('express')
const workoutRoutes =require('./routes/workout')
const mongoose=require('mongoose')
//express app
const app=express()

//middleware
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

//connect to db
mongoose.connect(process.env.MONG_URI)
.then(()=>{
    //listen for requests
    app.listen(process.env.PORT,()=>{
        console.log("Connect to db and Listening on port",process.env.PORT)
    })
})
.catch((error)=>{
    console.log(error)
})

//routes
app.use('/api/workouts',workoutRoutes)



process.env


