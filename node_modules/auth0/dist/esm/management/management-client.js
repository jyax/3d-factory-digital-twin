import { ManagementClientBase } from './__generated/index.js';
import { TokenProviderMiddleware } from './token-provider-middleware.js';
import { ResponseError } from '../lib/index.js';
import { TelemetryMiddleware } from '../lib/middleware/telemetry-middleware.js';
export class ManagementApiError extends Error {
    constructor(errorCode, error, statusCode, body, headers, msg) {
        super(msg);
        this.errorCode = errorCode;
        this.error = error;
        this.statusCode = statusCode;
        this.body = body;
        this.headers = headers;
        this.msg = msg;
        this.name = 'ManagementApiError';
    }
}
async function parseError(response) {
    // Errors typically have a specific format:
    // {
    //    errorCode: 'invalid_body',
    //    error: 'Bad Request',
    //    message: 'Payload validation failed ...',
    //    statusCode: 400
    // }
    const body = await response.text();
    let data;
    try {
        data = JSON.parse(body);
        return new ManagementApiError(data.errorCode, data.error, data.statusCode || response.status, body, response.headers, data.message);
    }
    catch (_) {
        return new ResponseError(response.status, body, response.headers, 'Response returned an error code');
    }
}
export class ManagementClient extends ManagementClientBase {
    constructor(options) {
        super({
            ...options,
            baseUrl: `https://${options.domain}/api/v2`,
            middleware: [
                new TokenProviderMiddleware(options),
                ...(options.telemetry !== false ? [new TelemetryMiddleware(options)] : []),
            ],
            parseError,
        });
    }
}
//# sourceMappingURL=management-client.js.map