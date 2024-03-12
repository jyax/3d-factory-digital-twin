"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagementClient = exports.ManagementApiError = void 0;
const index_js_1 = require("./__generated/index.js");
const token_provider_middleware_js_1 = require("./token-provider-middleware.js");
const index_js_2 = require("../lib/index.js");
const telemetry_middleware_js_1 = require("../lib/middleware/telemetry-middleware.js");
class ManagementApiError extends Error {
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
exports.ManagementApiError = ManagementApiError;
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
        return new index_js_2.ResponseError(response.status, body, response.headers, 'Response returned an error code');
    }
}
class ManagementClient extends index_js_1.ManagementClientBase {
    constructor(options) {
        super({
            ...options,
            baseUrl: `https://${options.domain}/api/v2`,
            middleware: [
                new token_provider_middleware_js_1.TokenProviderMiddleware(options),
                ...(options.telemetry !== false ? [new telemetry_middleware_js_1.TelemetryMiddleware(options)] : []),
            ],
            parseError,
        });
    }
}
exports.ManagementClient = ManagementClient;
//# sourceMappingURL=management-client.js.map