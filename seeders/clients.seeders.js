const ClientModel = require('../models/clients.model'); // Import client model
const db = require('../db'); // Import your database connection module

const seedClient = async () => {
    try {
        await db.connectToMongoDB();

        // user_id
        const userId = '65271f1eedd788f0418560fc';

        // Create a client
        const client = new ClientModel({
            first_name: 'kene',
            last_name: 'Chris',
            email_address: 'kene@gmail.com',
            home_address: 'lekki lagos',
            postal_code: '5466',
            phone_no: '0810670',
            city: 'Lagos',
            user_id: userId
        });

        // Save the client to the database
        await client.save();

        console.log('client seeded successfully');
    } catch (error) {
        console.log('Error seeding client:', error);
    }
};

seedClient();
