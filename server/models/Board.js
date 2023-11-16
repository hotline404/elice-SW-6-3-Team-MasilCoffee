const mongoose = require('mongoose');

const { Schema } = mongoose;

const boardSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        post: {
            type: String,
            required: true,
        },
        images: [
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
