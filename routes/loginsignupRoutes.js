const express=require('express')

const route=express.Router();

const User = require("../models/user");
const path=require('path');

const rootDir=require('../util/path');

const loginsignupcontroller =require('../controller/loginsignupcontroller');


route.post('/signup',loginsignupcontroller.postSignup);
route.post('/login',loginsignupcontroller.postLogin);

//route.delete('/delete-user/:id',loginUser.deleteUser);

 
module.exports=route;


 
