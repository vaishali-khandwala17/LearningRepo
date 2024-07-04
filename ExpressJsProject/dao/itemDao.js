const Item = require('../models/item');
const mongoQuery = require('../common/mongoQuery');

class ItemDao {
    async create(data) {
        return await mongoQuery.create(Item, data);
    }

    async findAll() {
        return await mongoQuery.findAll(Item);
    }

    async findById(id) {
        return await mongoQuery.findById(Item, id);
    }

    async updateById(id, updateData) {
        return await mongoQuery.updateById(Item, id, updateData);
    }

    async deleteById(id) {
        return await mongoQuery.deleteById(Item, id);
    }
}

module.exports = new ItemDao();
