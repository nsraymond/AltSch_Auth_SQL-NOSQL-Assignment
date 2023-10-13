const mongoose = require('mongoose')

// admin schema
const Schema = mongoose.Schema;

const adminSchema = new Schema ({

    full_name: {
        type: String,
        required: true
    },
    
    email: {
        type: String,
        required: true
    },

    home_address: {
        type: String,
        required: true
    },
    permissions: {
        type: String,
        required: true
    },
    
    user_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "users"
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


module.exports = mongoose.model('admins', adminSchema)