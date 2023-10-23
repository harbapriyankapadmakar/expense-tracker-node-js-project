const express=require('express')

const route=express.Router();


const path=require('path');

const rootDir=require('../util/path');

const signupUser=require('../controller/signup')


route.get('/get-user',signupUser.getUser);
route.post('/add-user',signupUser.postUser);
route.delete('/delete-user/:id',signupUser.deleteUser);

 
module.exports=route;


 
