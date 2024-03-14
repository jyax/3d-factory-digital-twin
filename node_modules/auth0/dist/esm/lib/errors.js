/**
 * Error thrown when the API returns an error response that can't be parsed to a more specific Error instance.
 */
export class ResponseError extends Error {
    constructor(statusCode, body, headers, msg) {
        super(msg);
        this.statusCode = statusCode;
        this.body = body;
        this.headers = headers;
        this.name = 'ResponseError';
    }
}
/**
 * Error thrown when the request is aborted due to a timeout.
 */
export class TimeoutError extends Error {
    constructor() {
        super('The request was timed out.');
        this.name = 'TimeoutError';
    }
}
/**
 * Error thrown when there is a network error.
 */
export class FetchError extends Error {
    constructor(cause, msg) {
        super(msg);
        this.cause = cause;
        this.name = 'FetchError';
    }
}
/**
 * Error thrown when a required argument was not provided.
 */
export class RequiredError extends Error {
    constructor(field, msg) {
        super(msg);
        this.field = field;
        this.name = 'RequiredError';
    }
}
//# sourceMappingURL=errors.js.map