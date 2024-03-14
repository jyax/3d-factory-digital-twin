/**
 * Error thrown when the API returns an error response that can't be parsed to a more specific Error instance.
 */
export declare class ResponseError extends Error {
    statusCode: number;
    body: string;
    headers: Headers;
    name: "ResponseError";
    constructor(statusCode: number, body: string, headers: Headers, msg?: string);
}
/**
 * Error thrown when the request is aborted due to a timeout.
 */
export declare class TimeoutError extends Error {
    name: "TimeoutError";
    constructor();
}
/**
 * Error thrown when there is a network error.
 */
export declare class FetchError extends Error {
    cause: Error;
    name: "FetchError";
    constructor(cause: Error, msg?: string);
}
/**
 * Error thrown when a required argument was not provided.
 */
export declare class RequiredError extends Error {
    field: string;
    name: "RequiredError";
    constructor(field: string, msg?: string);
}
