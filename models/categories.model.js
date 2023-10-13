const mongoose = require('mongoose')

// category schema
const Schema = mongoose.Schema;

const categorySchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    
    description: {
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


module.exports = mongoose.model('categories', categorySchema)   