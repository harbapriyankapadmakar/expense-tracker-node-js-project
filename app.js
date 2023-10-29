const express=require('express');
const bodyParser=require('body-parser')

const app = express();
const cors=require('cors')
const rootDir=require('./util/path');


const loginsignupRoutes=require('./routes/loginsignupRoutes')
const sequelize=require('./util/database');

const errorController=require('./controller/error');
const db =require('./models/user')


app.use(cors());
app.use(bodyParser.json());
app.use('/user',loginsignupRoutes);
app.use((req,res,next)=>{
    console.log('urlll',req.url);
    res.sendFile(path.join(__dirname,`views/${req.url}`))
});

 
sequelize.sync()
.then( res =>{
    var port=3000;
    app.listen(port, () => console.log('Server starts....'))
})
.catch(err=>console.log(err));