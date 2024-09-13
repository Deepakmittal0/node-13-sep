const express = require('express');
const usercontroller = require('../controllers/usercontroller')
const router = express.Router();


router.get('/users',(req,res)=>{
    usercontroller.getAllUsers(req,res);


})

router.get('/user/:id',(req,res)=>{
    usercontroller.getuser(req,res);
})

module.exports = router