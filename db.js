const mongoose = require("mongoose");
require("dotenv").config();

const MONGODB_URL = process.env.MONGODB_URL;

// function that connects to the db
const connectToMongoDB = async (url) => {
    mongoose.connect(url || MONGODB_URL ||'mongodb://127.0.0.1:27017/mongoose_assignment');

    mongoose.connection.on("connected", () => {
        console.log("Connected to MongoDB successfully");
    });

    mongoose.connection.on("error", (err) => {
        console.log("Error connecting to MongoDB");
        console.error(err);
    });
}

module.exports = {
    connectToMongoDB
}
