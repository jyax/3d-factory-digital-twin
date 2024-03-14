"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfoClient = exports.parseError = exports.UserInfoError = void 0;
const errors_js_1 = require("../lib/errors.js");
const telemetry_middleware_js_1 = require("../lib/middleware/telemetry-middleware.js");
const models_js_1 = require("../lib/models.js");
const runtime_js_1 = require("../lib/runtime.js");
class UserInfoError extends Error {
    constructor(error, error_description, statusCode, body, headers) {
        super(error_description || error);
        this.error = error;
        this.error_description = error_description;
        this.statusCode = statusCode;
        this.body = body;
        this.headers = headers;
        this.name = 'UserInfoError';
    }
}
exports.UserInfoError = UserInfoError;
async function parseError(response) {
    // Errors typically have a specific format:
    // {
    //    error: 'invalid_body',
    //    error_description: 'Bad Request',
    // }
    const body = await response.text();
    let data;
    try {
        data = JSON.parse(body);
        return new UserInfoError(data.error, data.error_description, response.status, body, response.headers);
    }
    catch (_) {
        return new errors_js_1.ResponseError(response.status, body, response.headers, 'Response returned an error code');
    }
}
exports.parseError = parseError;
class UserInfoClient extends runtime_js_1.BaseAPI {
    constructor(options) {
        super({
            ...options,
            baseUrl: `https://${options.domain}`,
            middleware: options.telemetry !== false ? [new telemetry_middleware_js_1.TelemetryMiddleware(options)] : [],
            parseError,
        });
    }
    /**
     * Given an access token get the user profile linked to it.
     *
     * @example <caption>
     *   Get the user information based on the Auth0 access token (obtained during
     *   login). Find more information in the
     *   <a href="https://auth0.com/docs/auth-api#!#get--userinfo">API Docs</a>.
     * </caption>
     *
     * const userInfoClient = new UserInfoClient({
     *   domain: '...'
     * });
  
     * const userInfo = await userInfoClient.getUserInfo(accessToken);
     */
    async getUserInfo(accessToken, initOverrides) {
        const response = await this.request({
            path: `/userinfo`,
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }, initOverrides);
        return models_js_1.JSONApiResponse.fromResponse(response);
    }
}
exports.UserInfoClient = UserInfoClient;
//# sourceMappingURL=index.js.map