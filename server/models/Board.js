const mongoose = require('mongoose');

const { Schema } = mongoose;

const boardSchema = new Schema(
    {
        category: {
            type: String,
            required: false,
        },
        title: {
            type: String,
            required: true,
        },
        post: {
            type: String,
            required: true,
        },
        image: [
            {
                type: String,
                required: true,
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Board = mongoose.model('Board', boardSchema);

module.exports = Board;
