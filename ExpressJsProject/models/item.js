// const mongoose = require('mongoose');
const { mongoose } = require('../config/db');

const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true }
});

module.exports = mongoose.model('Item', itemSchema);