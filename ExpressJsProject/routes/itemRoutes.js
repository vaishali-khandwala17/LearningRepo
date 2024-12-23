const express = require('express');
const router = express.Router();
const itemController = require('../controller/itemController');
const upload = require('../utils/multer');

router.post('/insert-item', upload.single('image'),(req, res) => itemController.createItem(req, res));
router.get('/get-items', (req, res) => itemController.getItems(req, res));
router.get('/get-item', (req, res) => itemController.getItemById(req, res));
router.put('/update-item', (req, res) => itemController.updateItem(req, res));
router.delete('/delete-item', (req, res) => itemController.deleteItem(req, res));

module.exports = router;
