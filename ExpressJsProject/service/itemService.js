const itemDao = require('../dao/itemDao');
const ResponseMessageEnum = require('../enums/responseMessageEnum');

class ItemService {
    // async createItem(data) {
    //     return await itemDao.create(data);
    // }
    async createItem(data) {
        const { name, quantity, image } = data;

        // Example: Transform Base64 string into binary data if needed
        const imageBuffer = Buffer.from(image.split(',')[1], 'base64'); // Extract after `data:image/png;base64,`

        // Call the DAO with the transformed data
        return await itemDao.create({ name, quantity, image: imageBuffer });
    }

    async getItems() {
        return await itemDao.findAll();
    }

    async getItemById(itemId) {
        if (!itemId) {
            throw new Error(ResponseMessageEnum.ITEM_ID_REQUIRED);
        }
        return await itemDao.findById(itemId);
    }

    async updateItem(itemId, data) {
        return await itemDao.updateById(itemId, data);
    }

    async deleteItem(itemId) {
        return await itemDao.deleteById(itemId);
    }
}

module.exports = new ItemService();
