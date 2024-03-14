import { ManagementClientBase } from './__generated/index.js';
import { ManagementClientOptionsWithClientCredentials, ManagementClientOptionsWithToken } from './management-client-options.js';
export declare class ManagementApiError extends Error {
    errorCode: string | undefined;
    error: string;
    statusCode: number;
    body: string;
    headers: Headers;
    msg: string;
    name: "ManagementApiError";
    constructor(errorCode: string | undefined, error: string, statusCode: number, body: string, headers: Headers, msg: string);
}
export declare class ManagementClient extends ManagementClientBase {
    constructor(options: ManagementClientOptionsWithToken);
    constructor(options: ManagementClientOptionsWithClientCredentials);
}
