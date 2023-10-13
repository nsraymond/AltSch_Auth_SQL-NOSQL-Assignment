const CategoryModel = require('../models/categories.model'); // Import category model
const db = require('../db'); // Import your database connection module

const seedCategory = async () => {
    try {
        await db.connectToMongoDB();

        // Create a category
        const category = new CategoryModel({
            name: 'fruiiits',
            description: 'all afruits available'
        });

        // Save the category to the database
        await category.save();

        console.log('user seeded successfully');
    } catch (error) {
        console.log('Error seeding user:', error);
    }
};

seedCategory();
