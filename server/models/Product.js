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
            required: false,
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
            default: "없음"
        },
        temp: {
            type: String,
            required: true,
            enum: ['Ice', 'Hot'],
            default: "없음"
        },
        info: {
            type: String,
            required: false,
        },
        kcal: {
            type: Number,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        bestCombo: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
