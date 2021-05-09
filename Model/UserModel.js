const mongoose=require('mongoose');



const userSchema= new mongoose.Schema({
    Uid:Number,
    id:String,
    name:String,
    items:Array,
    address:String,
    pincode:Number

});


const User=mongoose.model('Users',userSchema);
module.exports=User;






// "id": "123-s2-546",
// "name": "John Jacobs",
// "items": [
// "bucket",
// "bottle"
// ],
// "address": "1st Cross, 9th Main, abc Apartment",
// "pincode": "5xx012"
// },