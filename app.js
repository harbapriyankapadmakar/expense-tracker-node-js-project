const express=require('express');
const app = express();
const bodyParser=require('body-parser')
const cors=require('cors')
const rootDir=require('./util/path');

const sequelize=require('./util/database');
const loginsignupRoutes=require('./routes/loginsignupRoutes')
const expenseroutes=require('./routes/expenseroutes');
const premiumFeatureRoutes=require('./routes/premiumFeature');
const productRoutes=require('./routes/product');
const User =require('./models/user')
const fs=require('fs');
const path=require('path')
const Expense = require('./models/expenses');
const Order=require('./models/orders');

app.use(cors());
app.use(bodyParser.json({ extended: false }));
app.use(bodyParser.json());
app.use('/user',loginsignupRoutes);
app.use('/expense',expenseroutes);
app.use('/premium',premiumFeatureRoutes);
app.use('/purchase',productRoutes);
app.use(express.static('views'));
app.use((req,res,next)=>{
    console.log('urlll',req.url);
    res.sendFile(path.join(__dirname,`views/${req.url}`))
});
User.hasMany(Expense);
Expense.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

 
sequelize.sync()
.then( result =>{
    var port=3000;
    app.listen(port, () => console.log('Server starts....'))
})
.catch(err=>console.log(err));


