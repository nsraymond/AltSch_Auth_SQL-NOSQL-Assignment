// importing packages
const express = require('express')
const app = express()
require('dotenv').config()

// importing functions
const { connectToMongoDB } = require('./db')

// importing routes
const userRoute = require('./routes/user.route')
const adminRoute = require('./routes/admin.route')
const clientRoute = require('./routes/client.route')
const categoryRoute = require('./routes/category.route')
const productRoute = require('./routes/products.route')
const orderRoute = require('./routes/order.route')
const authRoute = require('./routes/auth.route')

// port
const PORT = process.env.PORT || 5000;


// connecting to db
connectToMongoDB()

// middlewares
app.use(express.json())

// using routes
app.use('/users', userRoute)
app.use('/admins', adminRoute)
app.use('/clients', clientRoute)
app.use('/categories', categoryRoute)
app.use('/products', productRoute)
app.use('/orders', orderRoute)
app.use('/auth', authRoute)


// server
app.listen(PORT, ()=> {
    console.log(`server is currently running on port: ${PORT}`)
})