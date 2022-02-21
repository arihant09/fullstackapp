const express=require('express')
const app=express()
const mongoose=require('mongoose')
const router = require('./routes/routes')
const routerUrls=require('./routes/routes')
const cors=require('cors')


mongoose.connect("mongodb://0.0.0.0:27017/signup",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
  
}).then(()=>{
    console.log("Database connected");
}).catch((e)=>{
    console.log(e);
})


app.use(express.json())
app.use(cors())
app.use('/app',routerUrls)



app.listen(4000,()=>console.log("server running"))
