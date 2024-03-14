import * as runtime from '../../../lib/runtime.js';
import type { InitOverride, ApiResponse } from '../../../lib/runtime.js';
import type { UserBlock, DeleteUserBlocksRequest, DeleteUserBlocksByIdRequest, GetUserBlocksRequest, GetUserBlocksByIdRequest } from '../models/index.js';
declare const BaseAPI: typeof runtime.BaseAPI;
/**
 *
 */
export declare class UserBlocksManager extends BaseAPI {
    /**
     * Unblock a user blocked due to an excessive amount of incorrectly-provided credentials.
     *
     * Unblock by identifier
     *
     * @throws {RequiredError}
     */
    deleteAll(requestParameters: DeleteUserBlocksRequest, initOverrides?: InitOverride): Promise<ApiResponse<void>>;
    /**
     * Unblock a user that was blocked due to an excessive amount of incorrectly provided credentials.
     *
     * Note: This endpoint does not unblock users that were <a href="https://auth0.com/docs/user-profile#block-and-unblock-a-user">blocked by admins</a>.
     *
     * Unblock a user
     *
     * @throws {RequiredError}
     */
    delete(requestParameters: DeleteUserBlocksByIdRequest, initOverrides?: InitOverride): Promise<ApiResponse<void>>;
    /**
     * Retrieve a list of blocked IP addresses for a given identifier (e.g., username, phone number or email).
     *
     * Get blocks by identifier
     *
     * @throws {RequiredError}
     */
    getAll(requestParameters: GetUserBlocksRequest, initOverrides?: InitOverride): Promise<ApiResponse<UserBlock>>;
    /**
     * Retrieve a list of blocked IP addresses for the login identifiers (email, username, phone number, etc) associated with the specified user.
     *
     *
     * Get a user's blocks
     *
     * @throws {RequiredError}
     */
    get(requestParameters: GetUserBlocksByIdRequest, initOverrides?: InitOverride): Promise<ApiResponse<UserBlock>>;
}
export {};
