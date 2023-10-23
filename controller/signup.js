const path=require('path');

const rootDir=require('../util/path');

const User=require('../models/book');




exports.getUser= async (req,res,next)=>{

   try {
     const users= await User.findAll()
     console.log("users");
     console.log(users); 
     res.status(200).json({allUsers:users})
   } catch (error) {
    console.log('Get user is failing',JSON.stringify(error));
    res.status(500).json({error:err})
}
}

exports.postUser= async (req,res,next)=>{


    try 
    {
   if(!req.body.email)
   {
    throw new Error('email is unique')
   }
 
    const name = req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    const data = await User.create({
        username:name,
        emailid:email,
        password:password
    })
     console.log('updated success');
    res.status(201).json({newUserDetail:data})
    }
catch(err)

{
    res.status(500).json({error:err})
}


}




exports.deleteUser=async (req,res,next)=> {
    try {
     if(req.params.id == 'undefined')
     {
 
         console.log('ID is Missing');
         return res.status(400).json({err:'Id is missing'})
     }
      const userId=req.params.id;
      await User.destroy({where:{id:userId}});
      res.sendStatus(200);
    } catch (err) {
     console.log(err);
     res.status(500).json(err)
    }
 }



//  exports.postEdit = async (req,res,next)=>{
//     const userId=req.params.id;
//     const updatedName=req.body.name;
//     const updatedEmail=req.body.email;ber;
  
//   try { 
//     const UpdatedPhone=req.body.phonenum
//    if(!userId || userId=='undefined')
//    {
//        console.log('Id is missing or undefined')
//       return res.Status(420).json(err)
//    }
//     await Users.update({
//          username:updatedName,
//          emailid:updatedEmail,
//          phonenumber:UpdatedPhone
//     },
//     {where:{id:userId}})
//   } catch (error) {
//           console.log(error,JSON.stringify(error))
//        res.status(520).json({error})
//   }
// }
