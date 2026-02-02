import express from 'express';
import router from './router/router.js';
import mongoose  from 'mongoose';
const app = express();

const port = 3000;
 mongoose.connect("mongodb://localhost:27017")
 .then(()=>console.log("mongodb is connected"))
 .catch((err)=>console.log(err))
 
 app.use(express.json());
 app.get('/', (req, res)=>{
    res.send("welcome to my app");
 });

 app.use("/names", router);
app.listen(port, ()=>{
    console.log(`server is running on port${port}`)
})