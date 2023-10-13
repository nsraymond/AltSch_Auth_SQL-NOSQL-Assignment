const UserModel = require('../models/users.model'); // Import user model
const db = require('../db'); // Import your database connection module


// ENCRYPTION AND HASHING OF PASSWORD HAPPENS DURING SIGNUP AND AUTH
// SIGNUP AND LOGIN FROM POSTMAN FOR AUTHENTICATION REASONS
const seedUsers = async () => {
    try {
        await db.connectToMongoDB();

        // Create a user
        const user = new UserModel({
            username: 'kene',
            password: '22245'
        });

        // Save the user to the database
        await user.save();

        console.log('user seeded successfully');
    } catch (error) {
        console.log('Error seeding user:', error);
    }
};

seedUsers();
