const itemService = require('../service/itemService');
const HttpEnum = require('../enums/httpEnum');
const ResponseMessageEnum = require('../enums/responseMessageEnum');
const AppResponse = require('../utils/appResponse');

class ItemController {
    async createItem(req, res, next) {
        try {
            const newItem = await itemService.createItem(req.body);
            res.status(HttpEnum.CREATED).json(AppResponse.success(HttpEnum.CREATED, ResponseMessageEnum.ITEM_INSERTED, newItem));
        } catch (err) {
            next(err);
        }
    }

    async getItems(req, res, next) {
        try {
            const items = await itemService.getItems();
            res.status(HttpEnum.OK).json(AppResponse.success(HttpEnum.OK, 'Items retrieved successfully', items));
        } catch (err) {
            next(err);
        }
    }

    async getItemById(req, res, next) {
        const itemId = req.query.id;

        if (!itemId) {
            return res.status(HttpEnum.BAD_REQUEST).json(AppResponse.error(HttpEnum.BAD_REQUEST, ResponseMessageEnum.ITEM_ID_REQUIRED));
        }

        try {
            const item = await itemService.getItemById(itemId);
            res.status(HttpEnum.OK).json(AppResponse.success(HttpEnum.OK, 'Item retrieved successfully', item));
        } catch (err) {
            next(err);
        }
    }

    async updateItem(req, res, next) {
        const itemId = req.query.id;

        if (!itemId) {
            return res.status(HttpEnum.BAD_REQUEST).json(AppResponse.error(HttpEnum.BAD_REQUEST, ResponseMessageEnum.ITEM_ID_REQUIRED));
        }

        try {
            const updatedItem = await itemService.updateItem(itemId, req.body);
            res.status(HttpEnum.OK).json(AppResponse.success(HttpEnum.OK, 'Item updated successfully', updatedItem));
        } catch (err) {
            next(err);
        }
    }

    async deleteItem(req, res, next) {
        const itemId = req.query.id;

        if (!itemId) {
            return res.status(HttpEnum.BAD_REQUEST).json(AppResponse.error(HttpEnum.BAD_REQUEST, ResponseMessageEnum.ITEM_ID_REQUIRED));
        }

        try {
            await itemService.deleteItem(itemId);
            res.status(HttpEnum.OK).json(AppResponse.success(HttpEnum.OK, ResponseMessageEnum.ITEM_DELETED));
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new ItemController();
