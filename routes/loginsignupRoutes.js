const express=require('express')

const routes=express.Router();

const User = require("../models/user");
const path=require('path');

const rootDir=require('../util/path');

const loginsignupController =require('../controller/loginsignupController');


routes.post('/signup',loginsignupController.postSignup);
routes.post('/login',loginsignupController.postLogin);

// route.delete('/delete-user/:id',loginsignupController.deleteUser);

 
module.exports=routes;


 
