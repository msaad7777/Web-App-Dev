const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema
const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['Men', 'Women', 'Teens']
    }
});


const Product = mongoose.model('Product', productSchema);

module.exports = Product;
