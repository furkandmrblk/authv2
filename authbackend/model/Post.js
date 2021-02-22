const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 255,
    },
    title: {
        type: String,
        required: true,
        min: 3,
        max: 255,
    },
    text: {
        type: String,
        required: true,
        min: 6,
        max: 1024,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('Post', postSchema);