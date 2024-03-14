import { Middleware, ClientOptions, FetchParams, RequestContext } from '../runtime.js';
/**
 * @private
 */
export declare class TelemetryMiddleware implements Middleware {
    clientInfo: {
        name: string;
        [key: string]: unknown;
    };
    constructor(options: ClientOptions);
    pre?(context: RequestContext): Promise<FetchParams | void>;
}
