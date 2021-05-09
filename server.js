
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const app=require('./app');
dotenv.config({path:'./config.env'});



mongoose.connect(process.env.DATABASE_REMOTE,{
    useNewUrlParser:true,
    useFindAndModify:false,
    useCreateIndex:true,
    useUnifiedTopology:true}).then((con)=>{
        console.log('connected')
    }).catch((err)=>{
        console.log(err)
    })







app.listen(6024,(err)=>{
    if(err) throw err;
    console.log("server is running on 6024")
})

