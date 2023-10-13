// importing packages and modules
const express = require('express');
const app = express();
require('dotenv').config()
const errorHandler = require('./middleware/errorHandler');

// PORT
const PORT = process.env.PORT;
const sequelize = require('./config/sequelize');

// importing routes
const userRoute = require('./routes/user.route')
const adminRoute = require('./routes/admin.route')
const clientRoute = require('./routes/client.route')
const categoryRoute = require('./routes/category.route')
const productRoute = require('./routes/product.route')
const orderRoute = require('./routes/order.route')
const authRoute = require('./routes/auth.route')

// middlewares
app.use(express.json());
app.use(errorHandler); //errorHandler

// using routes
app.use('/users', userRoute)
app.use('/admins', adminRoute)
app.use('/clients', clientRoute)
app.use('/categories', categoryRoute)
app.use('/products', productRoute)
app.use('/orders', orderRoute)
app.use('/auth', authRoute)


// connecting to db
const ConnectingDb = async()=>{
    try {
        await sequelize.authenticate();
        console.log('msql DB has successfully connected');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
ConnectingDb()

// server
app.listen(PORT, () => {        
    console.log(`Server is currently running on port ${PORT}`);
});