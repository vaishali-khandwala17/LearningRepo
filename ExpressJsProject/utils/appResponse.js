class AppResponse {
    constructor(success, statusCode, message, data = null) {
        this.success = success;
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
    }

    static success(statusCode, message, data) {
        return new AppResponse(true, statusCode, message, data);
    }

    static error(statusCode, message) {
        return new AppResponse(false, statusCode, message);
    }
}

module.exports = AppResponse;
