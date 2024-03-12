import * as runtime from '../../../lib/runtime.js';
import type { InitOverride, ApiResponse } from '../../../lib/runtime.js';
import type { Token, GetTokensRequest } from '../models/index.js';
declare const BaseAPI: typeof runtime.BaseAPI;
/**
 *
 */
export declare class BlacklistsManager extends BaseAPI {
    /**
     * Retrieve the `jti` and `aud` of all tokens that are blacklisted.
     *
     * Note: The <a href="https://auth0.com/docs/jwt">JWT specification</a> states that the `jti` field can be used to prevent replay attacks. Though Auth0 tokens do not include a `jti`, you can nevertheless blacklist a `jti` to prevent a token being used more than a predetermined number of times. This behavior is similar to implementing a nonce (where the token's signature can be thought of as the nonce). If a token gets stolen, it (or the tokens issued after it) should be blacklisted and let expire.
     *
     * Get blacklisted tokens
     *
     * @throws {RequiredError}
     */
    getAll(requestParameters?: GetTokensRequest, initOverrides?: InitOverride): Promise<ApiResponse<Array<Token>>>;
    /**
     * Add the token identified by the `jti` to a blacklist for the tenant.
     *
     * Blacklist a token
     *
     * @throws {RequiredError}
     */
    add(bodyParameters: Token, initOverrides?: InitOverride): Promise<ApiResponse<void>>;
}
export {};
