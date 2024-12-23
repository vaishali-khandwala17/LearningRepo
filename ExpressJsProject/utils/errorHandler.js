const AppResponse = require('../utils/appResponse');
const HttpEnum = require('../enums/httpEnum');

const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || HttpEnum.INTERNAL_SERVER_ERROR;
    const message = err.message || 'Internal Server Error';

    const response = AppResponse.error(statusCode, message);
    res.status(statusCode).json(response);
};

module.exports = errorHandler;
