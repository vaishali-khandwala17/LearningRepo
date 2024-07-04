const itemService = require('../service/itemService');
const HttpEnum = require('../enums/httpEnum');
const ResponseMessageEnum = require('../enums/responseMessageEnum');

class ItemController {
    async createItem(req, res) {
        try {
            const newItem = await itemService.createItem(req.body);
            res.status(HttpEnum.CREATED).json(newItem);
        } catch (err) {
            res.status(HttpEnum.BAD_REQUEST).json({ message: err.message });
        }
    }

    async getItems(req, res) {
        try {
            const items = await itemService.getItems();
            res.status(HttpEnum.OK).json(items);
        } catch (err) {
            res.status(HttpEnum.INTERNAL_SERVER_ERROR).json({ message: err.message });
        }
    }

    async getItemById(req, res) {
        const itemId = req.query.id;

        if (!itemId) {
            return res.status(HttpEnum.BAD_REQUEST).json({ message: ResponseMessageEnum.ITEM_ID_REQUIRED });
        }

        try {
            const item = await itemService.getItemById(itemId);
            res.status(HttpEnum.OK).json(item);
        } catch (err) {
            res.status(HttpEnum.INTERNAL_SERVER_ERROR).json({ message: err.message });
        }
    }

    async updateItem(req, res) {
        const itemId = req.query.id;

        if (!itemId) {
            return res.status(HttpEnum.BAD_REQUEST).json({ message: ResponseMessageEnum.ITEM_ID_REQUIRED });
        }

        try {
            const updatedItem = await itemService.updateItem(itemId, req.body);
            res.status(HttpEnum.OK).json(updatedItem);
        } catch (err) {
            res.status(HttpEnum.BAD_REQUEST).json({ message: err.message });
        }
    }

    async deleteItem(req, res) {
        const itemId = req.query.id;

        if (!itemId) {
            return res.status(HttpEnum.BAD_REQUEST).json({ message: ResponseMessageEnum.ITEM_ID_REQUIRED });
        }

        try {
            await itemService.deleteItem(itemId);
            res.status(HttpEnum.OK).json({ message: ResponseMessageEnum.ITEM_DELETED });
        } catch (err) {
            res.status(HttpEnum.INTERNAL_SERVER_ERROR).json({ message: err.message });
        }
    }
}

module.exports = new ItemController();
