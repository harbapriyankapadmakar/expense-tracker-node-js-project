const path=require('path');

const rootDir=require('../util/path');

const User=require('../models/user');

function isstringinvalid(string)
{
   if(string== undefined ||string.length===0) 
   {
      return true;
   }
   else 
   {
      return false;
   }

}
 

//post signup
const postSignup=async (req,res)=>{
   try {
   // console.log('reaches try block');

    const {name,email,phonenumber,password}=req.body;

    if(isstringinvalid(name)||isstringinvalid(email)||isstringinvalid(phonenumber)||isstringinvalid(password))
    {
         return res.status(400).json({error:'Something is missing'})
    }

    await User.create({name,email,password})
    res.status(201).json({message:'successfullly created new user'});

  } catch (error) {

    res.status(500).json({error});
  }

}
const postlogin=async(req,res)=>{
  try {
     const {email,password}=req.body;
    // console.log(email,password);
  
     if(isstringinvalid(email)||isstringinvalid(password))
  
     {
        return res.status(400).json({message:"Email or Password something missing",success:false})
     }
  
     //const loginUser=await User.findOne({where:{email:email}})

     console.log('password');
     const User= await User.findAll({where:{email}})
    if(user.length>0){
      if(user[0].password===password){
        res.status(202).json({success:true,message:"Successfully login user"})
      }else{
       return res.status(400).json({success:false,message:"Check password incorrect"})
      }
    }else{
      return res.status(404).json({success:false,message:"Users Not Found"})
    }
  }catch (error) {
    res.status(500).json({error,success:false})
    console.log(JSON.stringify(error));
       
  }

  }

module.exports={isstringinvalid,postSignup,postlogin}



