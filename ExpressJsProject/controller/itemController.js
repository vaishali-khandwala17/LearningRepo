const itemService = require('../service/itemService');
const HttpEnum = require('../enums/httpEnum');
const ResponseMessageEnum = require('../enums/responseMessageEnum');

class ItemController {
    async createItem(req, res) {
        try {
            const item = await itemService.createItem(req.body);
            res.status(HttpEnum.CREATED).json(item);
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
        try {
            const item = await itemService.getItemById(req.query.id);
            res.status(HttpEnum.OK).json(item);
        } catch (err) {
            const statusCode = err.message === ResponseMessageEnum.ITEM_NOT_FOUND ? HttpEnum.NOT_FOUND : HttpEnum.BAD_REQUEST;
            res.status(statusCode).json({ message: err.message });
        }
    }

    async updateItem(req, res) {
        try {
            const item = await itemService.updateItem(req.query.id, req.body);
            res.status(HttpEnum.OK).json(item);
        } catch (err) {
            res.status(HttpEnum.BAD_REQUEST).json({ message: err.message });
        }
    }

    async deleteItem(req, res) {
        try {
            const result = await itemService.deleteItem(req.query.id);
            res.status(HttpEnum.OK).json(result);
        } catch (err) {
            res.status(HttpEnum.INTERNAL_SERVER_ERROR).json({ message: err.message });
        }
    }
}

module.exports = new ItemController();
