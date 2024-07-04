const itemDao = require('../dao/itemDao');
const ResponseMessageEnum = require('../enums/responseMessageEnum');

class ItemService {
    async createItem(data) {
        return await itemDao.create(data);
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
