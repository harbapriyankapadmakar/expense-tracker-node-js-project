const Sequelize = require('sequelize');


const sequelize = require('../util/database');


const User = sequelize.define('user',{

id:{

    type:Sequelize.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
},

emailid:
{
    type:Sequelize.STRING,
    
    unique:true
},

password:
{
    type:Sequelize.STRING,
    unique:true
}


});
module.exports=User;
