const mongoose = require('mongoose');
require('dotenv').config();

class Database {
    constructor() {
        this._connect();
    }

    _connect() {
        mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
            .then(() => {
                console.log('Connected to MongoDB');
            })
            .catch(err => {
                console.error('Could not connect to MongoDB', err);
                process.exit(1);
            });
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new Database();
        }
        return this.instance;
    }
}

Database.getInstance(); // Ensure the database connection is established
module.exports = mongoose;
