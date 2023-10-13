const mongoose = require("mongoose")
const Schema = mongoose.Schema

// products model
const productSchema = new Schema({
    name : {
        type : String
    },
    price : {
        type : String
    },
    size : { 
        type : String, enum : ["large", "small", "medium"]
    },
    unit : {
        type : String
    },
    description : {
        type : String
    },
    category_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "categories"
    },
    clients_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "clients"
    },
    created_at : {type: Date, default : new Date()}
})


const productModel = mongoose.model("products", productSchema)

module.exports = productModel;