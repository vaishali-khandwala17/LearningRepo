const itemService = require('../service/itemService');
const HttpEnum = require('../enums/httpEnum');
const ResponseMessageEnum = require('../enums/responseMessageEnum');
const AppResponse = require('../utils/appResponse');
const upload = require('../utils/multer');

class ItemController {
    // async createItem(req, res, next) {
    //     try {
    //         const newItem = await itemService.createItem(req.body);
    //         res.status(HttpEnum.CREATED).json(AppResponse.success(HttpEnum.CREATED, ResponseMessageEnum.ITEM_INSERTED, newItem));
    //     } catch (err) {
    //         next(err);
    //     }
    // }
    async createItem(req, res, next) {
        try {
            console.log(next);
            // Extract fields and file from request
            const { name, quantity } = req.body;
            const image = req.file; // Access uploaded file

            console.log("Form Data:", req.body); // Text fields
            console.log("Uploaded File:", req.file); // File info

            if (!image || !name) {
                return res.status(400).json({ error: 'Name and image are required' });
            }

            // Convert image buffer to Base64 or save as is
            const imageBase64 = image.buffer.toString();

            // Call the service layer
            const newItem = await itemService.createItem({ name, quantity, image: imageBase64 });

            res.status(201).json(AppResponse.success(HttpEnum.CREATED, ResponseMessageEnum.ITEM_INSERTED, newItem));
        } catch (err) {
            console.error(err);
            // next(err);
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
