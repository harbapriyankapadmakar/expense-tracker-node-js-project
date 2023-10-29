const express=require('express');
const app = express();
const bodyParser=require('body-parser')
const cors=require('cors')
const rootDir=require('./util/path');

const sequelize=require('./util/database');
const loginsignupRoutes=require('./routes/loginsignupRoutes')

const User =require('./models/user')
const fs=require('fs');
const path=require('path')


app.use(cors());
app.use(bodyParser.json({ extended: false }));
app.use(bodyParser.json());
app.use('/user',loginsignupRoutes);
app.use(express.static('views'));
app.use((req,res,next)=>{
    console.log('urlll',req.url);
    res.sendFile(path.join(__dirname,`views/${req.url}`))
});

 
sequelize.sync()
.then( result =>{
    var port=3000;
    app.listen(port, () => console.log('Server starts....'))
})
.catch(err=>console.log(err));