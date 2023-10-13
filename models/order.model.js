const mongoose = require('mongoose')

// order model
const Schema = mongoose.Schema;

const orderSchema = new Schema ({

    order_date: {
        type: String,
        required: true
    },
    
    order_number: {
        type: String,
        required: true
    },

    delivery_fee: {
        type: String,
        required: true
    },

    payment_status: {
        type: String,
        required: true
    },

    shipping_city: {
        type: String,
        required: true
    },

    postal_code: {
        type: String,
        required: true
    },

    product_id: {
        type: String,
        required: true
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


module.exports = mongoose.model('orders', orderSchema)