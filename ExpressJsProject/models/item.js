const { mongoose } = require('../config/db');

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    quantity: {
        type: Number,
        required: true,
        min: 0,
    },
}, {
    timestamps: true, // Adds createdAt and updatedAt timestamps
});

module.exports = mongoose.model('Item', itemSchema);
