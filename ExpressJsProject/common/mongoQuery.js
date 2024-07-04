const mongoose = require('mongoose');

class MongoQuery {
    // Create a new document
    async create(Model, data) {
        try {
            const document = new Model(data);
            return await document.save();
        } catch (err) {
            throw new Error(`Error creating document: ${err.message}`);
        }
    }

    // Find all documents
    async findAll(Model) {
        try {
            return await Model.find();
        } catch (err) {
            throw new Error(`Error finding documents: ${err.message}`);
        }
    }

    // Find document by ID
    async findById(Model, id) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error('Invalid ID format');
        }

        try {
            const document = await Model.findById(id);
            if (!document) {
                throw new Error('Document not found');
            }
            return document;
        } catch (err) {
            throw new Error(`Error finding document: ${err.message}`);
        }
    }

    // Update a document by ID
    async updateById(Model, id, updateData) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error('Invalid ID format');
        }

        try {
            const document = await Model.findByIdAndUpdate(id, updateData, { new: true });
            if (!document) {
                throw new Error('Document not found');
            }
            return document;
        } catch (err) {
            throw new Error(`Error updating document: ${err.message}`);
        }
    }

    // Delete a document by ID
    async deleteById(Model, id) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error('Invalid ID format');
        }

        try {
            const document = await Model.findByIdAndDelete(id);
            if (!document) {
                throw new Error('Document not found');
            }
            return document;
        } catch (err) {
            throw new Error(`Error deleting document: ${err.message}`);
        }
    }
}

module.exports = new MongoQuery();
