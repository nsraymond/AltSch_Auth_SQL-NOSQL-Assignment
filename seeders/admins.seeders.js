const AdminModel = require('../models/admins.model'); // Import admin model
const db = require('../db'); // Import database connection module

const seedAdmin = async () => {
    try {
        await db.connectToMongoDB();

        // user_id
        const userId = '65271f1eedd788f0418560fc';

        // Create an admin
        const admin = new AdminModel({
            full_name: 'nsray dozz',
            email: 'kab@gmail.com',
            home_address: 'Ilasan Lekki',
            permissions: 'admin roll',
            user_id: userId, // Reference to the user
        });

        // Save the admin to the database
        await admin.save();

        console.log('admin seeded successfully');
    } catch (error) {
        console.log('Error seeding admin:', error);
    }
};

seedAdmin();
