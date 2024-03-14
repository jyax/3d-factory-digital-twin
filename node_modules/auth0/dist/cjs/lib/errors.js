"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequiredError = exports.FetchError = exports.TimeoutError = exports.ResponseError = void 0;
/**
 * Error thrown when the API returns an error response that can't be parsed to a more specific Error instance.
 */
class ResponseError extends Error {
    constructor(statusCode, body, headers, msg) {
        super(msg);
        this.statusCode = statusCode;
        this.body = body;
        this.headers = headers;
        this.name = 'ResponseError';
    }
}
exports.ResponseError = ResponseError;
/**
 * Error thrown when the request is aborted due to a timeout.
 */
class TimeoutError extends Error {
    constructor() {
        super('The request was timed out.');
        this.name = 'TimeoutError';
    }
}
exports.TimeoutError = TimeoutError;
/**
 * Error thrown when there is a network error.
 */
class FetchError extends Error {
    constructor(cause, msg) {
        super(msg);
        this.cause = cause;
        this.name = 'FetchError';
    }
}
exports.FetchError = FetchError;
/**
 * Error thrown when a required argument was not provided.
 */
class RequiredError extends Error {
    constructor(field, msg) {
        super(msg);
        this.field = field;
        this.name = 'RequiredError';
    }
}
exports.RequiredError = RequiredError;
//# sourceMappingURL=errors.js.map