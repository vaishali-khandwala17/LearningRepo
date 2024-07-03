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

router.get('/get-items', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/get-item', async (req, res) => {
    const itemId = req.query.id;

    if (!itemId) {
        return res.status(400).json({ message: 'Item ID is required' });
    }

    try {
        const item = await Item.findById(itemId);
        if (item == null) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.json(item);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.put('/update-item', async (req, res) => {
    const itemId = req.query.id;

    if (!itemId) {
        return res.status(400).json({ message: 'Item ID is required' });
    }

    try {
        const item = await Item.findById(itemId);
        if (item == null) {
            return res.status(404).json({ message: 'Item not found' });
        }

        if (req.body.name != null) {
            item.name = req.body.name;
        }
        if (req.body.quantity != null) {
            item.quantity = req.body.quantity;
        }

        const updatedItem = await item.save();
        res.json(updatedItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/delete-item', async (req, res) => {
    const itemId = req.query.id;

    if (!itemId) {
        return res.status(400).json({ message: 'Item ID is required' });
    }

    try {
        const item = await Item.findById(itemId);
        if (item == null) {
            return res.status(404).json({ message: 'Item not found' });
        }

        await item.deleteOne();
        res.json({ message: 'Item deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
