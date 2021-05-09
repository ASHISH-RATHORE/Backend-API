const User=require('./../Model/UserModel');



exports.AllUserData=async(req,res,next)=>{
    
    try{
            
        const user=await User.find();
        const users=user.map((val)=>{ return { uid:val._id,id:val.id,name:val.name,items:val.items,
                                               address:val.address,pincode:val.pincode
                                             }});
        
        
        res.status(201).json({
            status:'Sucess',
            data:
                users
            });

    }catch(err){
              res.status(400).json({
                  status:'Fail',
                  data:err
              })
           }
        };


exports.getUserById=async(req,res,next)=>{
    
    const id= req.params.id
   
    try{
        const DbUser=await User.findById(id);
        console.log(req.params.id)
        
        res.status(200).json({
            status:'Success',
            data:DbUser
            
        })
    }catch(error){
res.status(400).json({
    status:'Fail',
    data:error
})
    }

}
