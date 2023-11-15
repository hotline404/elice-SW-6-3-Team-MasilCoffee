const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
            enum: ['에스프레소', '논커피', '스무디', '티', '에이드'],
        },
        size: {
            type: String,
            required: true,
            enum: ['Tall', 'Large'],
        },
        temp: {
            type: String,
            required: true,
            enum: ['Ice', 'Hot'],
        },
        info: {
            type: String,
            required: false,
        },
        kcal: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
