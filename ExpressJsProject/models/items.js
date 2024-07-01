// const mongoose = require('mongoose');
import mongoose from 'app';

const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true }
});

module.exports = mongoose.model('Item', itemSchema);