const mongoose = require('mongoose')

const Schema = mongoose.Schema;

// client schema
const clientSchema = new Schema ({
    first_name: {
        type: String,
        required: true
    },
    
    last_name: {
        type: String,
        required: true
    },

    email_address: {
        type: String,
        required: true
    },
    
    home_address: {
        type: String,
        required: true
    },
    
    postal_code: {
        type: String,
        required: true
    },

    phone_no: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users', // Reference to the User model
      },

    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    },
    lastUpdatedAt: {
        type: Date,
        required: true,
        default: Date.now()
    },

})

module.exports = mongoose.model('clients', clientSchema)