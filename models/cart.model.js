const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    size: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: false
    }
});


module.exports = mongoose.model('cart', cartSchema);
