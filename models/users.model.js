const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema ({
    
    username: {
        type: String,
        required: true
    },
    
    password: {
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


module.exports = mongoose.model('users', userSchema)