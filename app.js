require("dotenv").config()
const express=require("express")
const router = require("./routers");
const{logger} = require("./middleware")
const{validationError}=require("./errors")
const client=require("./db")

const app= express()
const PORT = process.env.PORT

app.use(express.json())
app.use(logger)
app.use("/api/v1",router)


app.get("/",(req,res)=>{
    return res.send("welcome")
})

app.use((err,req,res,next)=>{
    let message=err.message
    let statuscode=500
    let nameError = "Error"

    if(err instanceof validationError){
        message= err.message
        statuscode= err.statuscode
        nameError= err.name
    }
    return res.status(statuscode).json({
        error: true,
        nameError,
        message,
    })
})

client
 .connect()
 .then(async ()=>{
    console.log("connected to db");
    
   app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
  })
})
.catch((err)=>{
    console.log(err);
})

// app.listen(PORT,()=>{
//     console.log(`server is running on ${PORT}`);
// })