import { ResponseError } from '../lib/errors.js';
import { TelemetryMiddleware } from '../lib/middleware/telemetry-middleware.js';
import { JSONApiResponse } from '../lib/models.js';
import { BaseAPI } from '../lib/runtime.js';
export class UserInfoError extends Error {
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
export async function parseError(response) {
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
        return new ResponseError(response.status, body, response.headers, 'Response returned an error code');
    }
}
export class UserInfoClient extends BaseAPI {
    constructor(options) {
        super({
            ...options,
            baseUrl: `https://${options.domain}`,
            middleware: options.telemetry !== false ? [new TelemetryMiddleware(options)] : [],
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
        return JSONApiResponse.fromResponse(response);
    }
}
//# sourceMappingURL=index.js.map