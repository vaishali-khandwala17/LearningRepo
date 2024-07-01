const express = require('express');
const router = express.Router();
const Item = require('../models/item');

router.post('/insert-item', async (req, res) => {
    const item = new Item({
        name: req.body.name,
        quantity: req.body.quantity
    });

    try {
        const savedItem = await item.save();
        res.json(savedItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


module.exports = router;
