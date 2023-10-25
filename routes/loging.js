const express=require('express')

const route=express.Router();


const path=require('path');

const rootDir=require('../util/path');

const loginUser=require('../controller/login')


route.get('/get-user',loginUser.getUser);
route.post('/add-user',loginUser.postUser);
route.delete('/delete-user/:id',loginUser.deleteUser);

 
module.exports=route;


 
