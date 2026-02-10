import express from 'express';
import router from './router/router.js';
import mongoose  from 'mongoose';
import register from './router/register.js'
import  sign from './router/signin.js';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
dotenv.config();
const app = express();


const PORT = process.env.PORT;
 mongoose.connect(process.env.MONGODB)
 .then(()=>console.log("mongodb is connected"))
 .catch((err)=>console.log(err))
 
 app.use(express.json());
app.use(cookieParser());
 app.get('/', (req, res)=>{
    res.send("welcome to my app");
 });

 app.use("/names", router);
  app.use("/register", register);
 app.use("/signin", sign);
 
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})