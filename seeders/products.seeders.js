const ProductModel = require('../models/products.model'); // Import your product model
const db = require('../db'); // Import your database connection module

const seedProducts = async () => {
    try {
        await db.connectToMongoDB();

        // foreign ids
        const categoryId = '65272379bea85d46cea8089e';
        const clientId = '652736ed18a910de53cb5571';

        // Define an array of product objects
        const productsToInsert = [
            {
                name: 'Apple',
                price: '45',
                size: 'medium',
                unit: '2',
                category_id: categoryId, // Reference to the category
                client_id: clientId, // Reference to the client
            },
            {
                name: 'Banana',
                price: '30',
                size: 'small',
                unit: '1',
                category_id: categoryId,
                client_id: clientId,
            },
            {
                name: 'mango',
                price: '25',
                size: 'medium',
                unit: '2',
                category_id: categoryId,
                client_id: clientId,
            },
            {
                name: 'watch',
                price: '25',
                size: 'medium',
                unit: '2',
                category_id: categoryId,
                client_id: clientId,
            },
            {
                name: 'TV',
                price: '25',
                size: 'medium',
                unit: '2',
                category_id: categoryId,
                client_id: clientId,
            },
            {
                name: 'airpods',
                price: '25',
                size: 'medium',
                unit: '2',
                category_id: categoryId,
                client_id: clientId,
            },
            {
                name: 'telephone',
                price: '25',
                size: 'medium',
                unit: '2',
                category_id: categoryId,
                client_id: clientId,
            },
            {
                name: 'mentos',
                price: '14',
                size: 'small',
                unit: '8',
                category_id: categoryId,
                client_id: clientId,
            },
            {
                name: 'rice',
                price: '25',
                size: 'medium',
                unit: '2',
                category_id: categoryId,
                client_id: clientId,
            },
            {
                name: 'beans',
                price: '25',
                size: 'large',
                unit: '2',
                category_id: categoryId,
                client_id: clientId,
            },
        ];

        // Use insertMany to insert the products
        await ProductModel.insertMany(productsToInsert);

        console.log('Products seeded successfully');
    } catch (error) {
        console.log('Error seeding products:', error);
    }
};

seedProducts();
