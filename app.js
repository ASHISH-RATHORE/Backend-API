const express=require('express');
const userRouter=require('./Routes/userRoutes');

const app=express();


app.use(express.json());

// Route for users
app.use('/api/v1/user',userRouter);
app.use('*',(req,res)=>{
    res.send('No Routes Found');
})

module.exports=app;