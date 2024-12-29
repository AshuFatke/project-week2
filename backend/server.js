import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodroute.js';
import userRouter from './routes/userRoute.js';

import 'dotenv/config'




//app config

const app= express()
const port = 4000

//middlewarre

app.use(express.json())

app.use(cors())

//db connection
connectDB();

// api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)


app.get("/",(req,res)=>{
    res.send("API working")

})

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})





//mongodb+srv://ashufatke03:9545ashu9923@cluster0.7mh47.mongodb.net/?