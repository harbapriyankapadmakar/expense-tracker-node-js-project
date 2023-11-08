const path=require('path');
const jwt=require('jsonwebtoken');
const rootDir=require('../util/path');
const bcrypt = require("bcrypt");
const User=require('../models/user');
const secretKey = process.env.SECRET_KEY;

const generateAccessToken=(id,name)=>
{
   const token= jwt.sign({userId:id},generateAccessToken)//,process.env.JSW_WEB_TOKEN_SECRETKEY)
    console.log('Generated Token',token);
}

function isstringinvalid(string)
{
   if(string=== undefined ||string.length===0) 
   {
      return true;
   }
   else 
   {
      return false;
   }

}
 

//post signup
const postSignup=async (req,res,next)=>{
   const {name,email,password}=req.body;
   try {
    

    if(isstringinvalid(name)||isstringinvalid(email)||isstringinvalid(password))
    {
         return res.status(400).json({error:'Something is missing'})
    }
    const saltrounds=10;
    bcrypt.hash(password,saltrounds,async (err,hash)=>{
    //  console.log('reach bycrypt');
      if(err) console.log(err);
    const newUser=await User.create({name,email,password:hash});
    console.log('user created');
    res.status(201).json({message:'successfullly created new user'});
})
const user = await Userservices.getUserbyemail(userName);
        if (!user) {
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await Userservices.createUser(Name,userName,hashedPassword);
            const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });
            response.status(200).send({ token: token, user: user });
        } else {
            response.status(401).send(user);
        }
  } catch (error) {
      res.status(500).json({error});
      console.log(JSON.stringify(error));
  }

}
const postLogin=async(req,res)=>{
  try {
     const {email,password}=req.body;
    console.log(email,password);
  
     if(isstringinvalid(email)||isstringinvalid(password))
  
     {
        return res.status(400).json({message:"Email or Password something missing",success:false})
     }
     const loginUser= await User.findOne({where:{email:email}})
    console.log('password');
    console.log(loginUser);
     
    if(loginUser){
      bcrypt.compare(password,loginUser.password,async(err,result)=>{
      if(err){
         console.log(err);
         return res.status(500).json({success:false,message:"Something Went wrong"})
      }
       if(result===true){
          res.status(202).json({success:true,message:"Successfullyloginuser",token:generateAccessToken})
      }

      else{
           res.status(400).json({success:false,message:"Check password incorrect"})
      }

      });
      
          }
if(loginUser==null){
     res.status(404).json({success:false,message:"Users Not Found"})
     }
} catch (error) {

     res.status(500).json({error,success:false})
     console.log(JSON.stringify(error));
}

}

module.exports={postSignup,postLogin,isstringinvalid}



