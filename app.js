const express=require('express');
const bodyParser=require('body-parser')

const app = express();
const cors=require('cors')
const rootDir=require('./util/path');

const bookRoutes=require('./routes/booking')

const sequelize=require('./util/database');

const errorController=require('./controller/error');
const db =require('./models/book')

app.use(cors());
app.use(bodyParser.json());
app.use('/user',bookRoutes);

app.use(errorController.Error404);

sequelize.sync()
.then( res =>{
    console.log(res);
    app.listen(3000);
   
})
.catch(err=>console.log(err));