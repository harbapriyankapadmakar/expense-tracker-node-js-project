const express=require('express');
const bodyParser=require('body-parser')

const app = express();
const cors=require('cors')
const rootDir=require('./util/path');

const bookRoutes1=require('./routes/signing')
const bookRoutes2=require('./routes/loging')
const sequelize=require('./util/database');

const errorController=require('./controller/error');
const db1 =require('./models/signupuser')
const db2 =require('./models/loginuser')

app.use(cors());
app.use(bodyParser.json());
app.use('/user',bookRoutes1);
app.use('/user',bookRoutes2);
app.use(errorController.Error404);

sequelize.sync()
.then( res =>{
    console.log(res);
    app.listen(3000);
   
})
.catch(err=>console.log(err));