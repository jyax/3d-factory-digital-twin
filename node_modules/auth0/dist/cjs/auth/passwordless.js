"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Passwordless = void 0;
const runtime_js_1 = require("../lib/runtime.js");
const base_auth_api_js_1 = require("./base-auth-api.js");
const id_token_validator_js_1 = require("./id-token-validator.js");
/**
 * Handles passwordless flows using Email and SMS.
 */
class Passwordless extends base_auth_api_js_1.BaseAuthAPI {
    constructor(configuration) {
        super(configuration);
        this.idTokenValidator = new id_token_validator_js_1.IDTokenValidator(configuration);
    }
    /**
     * Start passwordless flow sending an email.
     *
     * Given the user `email` address, it will send an email with:
     *
     * <ul>
     *   <li>A link (default, `send:"link"`). You can then authenticate with this
     *     user opening the link and he will be automatically logged in to the
     *     application. Optionally, you can append/override parameters to the link
     *     (like `scope`, `redirect_uri`, `protocol`, `response_type`, etc.) using
     *     `authParams` object.
     *   </li>
     *   <li>
     *     A verification code (`send:"code"`). You can then authenticate with
     *     this user using the `/oauth/token` endpoint specifying `email` as
     *     `username` and `code` as `password`.
     *   </li>
     * </ul>
     *
     * See: https://auth0.com/docs/api/authentication#get-code-or-link
     *
     * @example
     * ```js
     * const auth0 = new AuthenticationApi({
     *    domain: 'my-domain.auth0.com',
     *    clientId: 'myClientId',
     *    clientSecret: 'myClientSecret'
     * });
     *
     * await auth0.passwordless.sendEmail({
     *   email: '{EMAIL}',
     *   send: 'link',
     *   authParams: {} // Optional auth params.
     * });
     * ```
     */
    async sendEmail(bodyParameters, initOverrides) {
        (0, runtime_js_1.validateRequiredRequestParams)(bodyParameters, ['email']);
        const response = await this.request({
            path: '/passwordless/start',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: await this.addClientAuthentication({
                client_id: this.clientId,
                connection: 'email',
                ...bodyParameters,
            }),
        }, initOverrides);
        return runtime_js_1.VoidApiResponse.fromResponse(response);
    }
    /**
     * Start passwordless flow sending an SMS.
     *
     * Given the user `phone_number`, it will send a SMS message with a
     * verification code. You can then authenticate with this user using the
     * `/oauth/token` endpoint specifying `phone_number` as `username` and `code` as
     * `password`:
     *
     * See: https://auth0.com/docs/api/authentication#get-code-or-link
     *
     * @example
     * ```js
     * const auth0 = new AuthenticationApi({
     *    domain: 'my-domain.auth0.com',
     *    clientId: 'myClientId',
     *    clientSecret: 'myClientSecret'
     * });
     *
     * await auth0.passwordless.sendSMS({
     *   phone_number: '{PHONE}'
     * });
     * ```
     */
    async sendSMS(bodyParameters, initOverrides) {
        (0, runtime_js_1.validateRequiredRequestParams)(bodyParameters, ['phone_number']);
        const response = await this.request({
            path: '/passwordless/start',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: await this.addClientAuthentication({
                client_id: this.clientId,
                connection: 'sms',
                ...bodyParameters,
            }),
        }, initOverrides);
        return runtime_js_1.VoidApiResponse.fromResponse(response);
    }
    /**
     * Once you have a verification code, use this endpoint to login the user with their email and verification code.
     *
     * @example
     * ```js
     * const auth0 = new AuthenticationApi({
     *    domain: 'my-domain.auth0.com',
     *    clientId: 'myClientId',
     *    clientSecret: 'myClientSecret'
     * });
     *
     * await auth0.passwordless.loginWithEmail({
     *   email: 'foo@example.com',
     *   code: 'ABC123'
     * });
     * ```
     */
    async loginWithEmail(bodyParameters, options = {}) {
        (0, runtime_js_1.validateRequiredRequestParams)(bodyParameters, ['email', 'code']);
        const { email: username, code: otp, ...otherParams } = bodyParameters;
        return (0, base_auth_api_js_1.grant)('http://auth0.com/oauth/grant-type/passwordless/otp', await this.addClientAuthentication({
            username,
            otp,
            realm: 'email',
            ...otherParams,
        }), options, this.clientId, this.idTokenValidator, this.request.bind(this));
    }
    /**
     * Once you have a verification code, use this endpoint to login the user with their phone number and verification code.
     *
     * @example
     * ```js
     * const auth0 = new AuthenticationApi({
     *    domain: 'my-domain.auth0.com',
     *    clientId: 'myClientId',
     *    clientSecret: 'myClientSecret'
     * });
     *
     * await auth0.passwordless.loginWithSMS({
     *   phone_number: '0777777777',
     *   code: 'ABC123'
     * });
     * ```
     */
    async loginWithSMS(bodyParameters, options = {}) {
        (0, runtime_js_1.validateRequiredRequestParams)(bodyParameters, ['phone_number', 'code']);
        const { phone_number: username, code: otp, ...otherParams } = bodyParameters;
        return (0, base_auth_api_js_1.grant)('http://auth0.com/oauth/grant-type/passwordless/otp', await this.addClientAuthentication({
            username,
            otp,
            realm: 'sms',
            ...otherParams,
        }), options, this.clientId, this.idTokenValidator, this.request.bind(this));
    }
}
exports.Passwordless = Passwordless;
//# sourceMappingURL=passwordless.js.map