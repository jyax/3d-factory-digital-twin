"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlacklistsManager = void 0;
const runtime = __importStar(require("../../../lib/runtime.js"));
const { BaseAPI } = runtime;
/**
 *
 */
class BlacklistsManager extends BaseAPI {
    /**
     * Retrieve the `jti` and `aud` of all tokens that are blacklisted.
     *
     * Note: The <a href="https://auth0.com/docs/jwt">JWT specification</a> states that the `jti` field can be used to prevent replay attacks. Though Auth0 tokens do not include a `jti`, you can nevertheless blacklist a `jti` to prevent a token being used more than a predetermined number of times. This behavior is similar to implementing a nonce (where the token's signature can be thought of as the nonce). If a token gets stolen, it (or the tokens issued after it) should be blacklisted and let expire.
     *
     * Get blacklisted tokens
     *
     * @throws {RequiredError}
     */
    async getAll(requestParameters = {}, initOverrides) {
        const queryParameters = runtime.applyQueryParams(requestParameters, [
            {
                key: 'aud',
                config: {},
            },
        ]);
        const response = await this.request({
            path: `/blacklists/tokens`,
            method: 'GET',
            query: queryParameters,
        }, initOverrides);
        return runtime.JSONApiResponse.fromResponse(response);
    }
    /**
     * Add the token identified by the `jti` to a blacklist for the tenant.
     *
     * Blacklist a token
     *
     * @throws {RequiredError}
     */
    async add(bodyParameters, initOverrides) {
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/blacklists/tokens`,
            method: 'POST',
            headers: headerParameters,
            body: bodyParameters,
        }, initOverrides);
        return runtime.VoidApiResponse.fromResponse(response);
    }
}
exports.BlacklistsManager = BlacklistsManager;
//# sourceMappingURL=blacklists-manager.js.map