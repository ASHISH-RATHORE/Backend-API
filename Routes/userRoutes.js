const express=require('express');
const { route } = require('../app');
const {AllUserData,getUserById}=require('../Controllers/userController')


const router=express.Router();

router.get('/',AllUserData);
router.get('/:id',getUserById);

module.exports=router;