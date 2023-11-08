const jwt =require('jsonwebtoken');

const User=require('../models/user');


exports.authenticate=async (req,res,next)=>{
    try {

        const token = req.header.authenticate;
         console.log(token);

         const decode=jwt.verify(token,secretKey);
         console.log('userId>>>>',user.userId);
         const User=await User.findByPk(user.userId);
         console.log(user);
         req.user=user;   ////very important line req.user used next line as wll 
         next();            ////if not bnext given it will not going into next 
    } catch (error) {
        console.log(error);
        return res.status(401).json({success:false})
    }
}