require('dotenv').config();
const express = require('express');
const {userRoute , taskRoute} = require('./routs')
const { logger } = require('./middlewares')
const {validationErorr} = require('./error')
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(logger);

app.get("/",(req,res)=> {
    res.send('home page!')
})

app.use('/users',userRoute)
app.use('/users',taskRoute)

app.use((err , req , res , next)=> {
    const massage = "server Error";
    const statusCode = 500;

    if (err instanceof validationErorr){
        massage = err.massage;
        statusCode = err.statusCode;
    }

    return res.status(statusCode).json({
        err : true,
        massage
    })
})



app.listen(PORT,()=> {
    console.log('server is runing');
})