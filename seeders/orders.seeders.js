const OrderModel = require('../models/order.model'); // Import order model
const db = require('../db'); // Import your database connection module

const seedOrders = async () => {
    try {
        await db.connectToMongoDB();

        // product_id
        const productId = '65277141c4152a2de64eeb46';

        // Create an order
        const order = new OrderModel({
            order_date: '11-10-2023',
            order_number: '22245',
            delivery_fee: '$250',
            payment_status: 'paid',
            shipping_city: 'Lagos',
            postal_code: '66655544',
            product_id: productId
        });

        // Save the order to the database
        await order.save();

        console.log('order seeded successfully');
    } catch (error) {
        console.log('Error seeding order:', error);
    }
};

seedOrders();
