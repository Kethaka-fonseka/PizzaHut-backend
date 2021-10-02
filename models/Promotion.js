const mongoose = require('mongoose');

const promotionSchema = new mongoose.Schema({

    promoName: {
        type: String,
        required: true
    },
    promoTitle: {
        type: String,
        required: true,
        trim: true
    },
    products: {
        type: Array,
        required: true
    },
    totalCost: {
        type: Number,
        required: true
    },
    timePeriod: {
        type: String,
        required: false
    }
});


module.exports = mongoose.model('Promotions', promotionSchema);
