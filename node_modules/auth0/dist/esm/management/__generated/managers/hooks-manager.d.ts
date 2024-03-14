import * as runtime from '../../../lib/runtime.js';
import type { InitOverride, ApiResponse } from '../../../lib/runtime.js';
import type { Hook, HookCreate, HookUpdate, GetHooks200ResponseOneOf, DeleteHooksByIdRequest, DeleteSecretsRequest, GetHooksRequest, GetHooksByIdRequest, GetSecretsRequest, PatchHooksByIdRequest, PatchSecretsRequest, PostSecretsRequest } from '../models/index.js';
declare const BaseAPI: typeof runtime.BaseAPI;
/**
 *
 */
export declare class HooksManager extends BaseAPI {
    /**
     * Delete a hook.
     *
     * Delete a hook
     *
     * @throws {RequiredError}
     */
    delete(requestParameters: DeleteHooksByIdRequest, initOverrides?: InitOverride): Promise<ApiResponse<void>>;
    /**
     * Delete one or more existing secrets for a given hook. Accepts an array of secret names to delete.
     * Delete hook secrets
     *
     * @throws {RequiredError}
     */
    deleteSecrets(requestParameters: DeleteSecretsRequest, bodyParameters: Array<string>, initOverrides?: InitOverride): Promise<ApiResponse<void>>;
    /**
     * Retrieve all <a href="https://auth0.com/docs/hooks">hooks</a>. Accepts a list of fields to include or exclude in the result.
     *
     * Get hooks
     *
     * @throws {RequiredError}
     */
    getAll(requestParameters: GetHooksRequest & {
        include_totals: true;
    }, initOverrides?: InitOverride): Promise<ApiResponse<GetHooks200ResponseOneOf>>;
    getAll(requestParameters?: GetHooksRequest, initOverrides?: InitOverride): Promise<ApiResponse<Array<Hook>>>;
    /**
     * Retrieve <a href="https://auth0.com/docs/hooks">a hook</a> by its ID. Accepts a list of fields to include in the result.
     *
     * Get a hook
     *
     * @throws {RequiredError}
     */
    get(requestParameters: GetHooksByIdRequest, initOverrides?: InitOverride): Promise<ApiResponse<Hook>>;
    /**
     * Retrieve a hook's secrets by the ID of the hook.
     *
     * Get hook secrets
     *
     * @throws {RequiredError}
     */
    getSecrets(requestParameters: GetSecretsRequest, initOverrides?: InitOverride): Promise<ApiResponse<{
        [key: string]: any;
    }>>;
    /**
     * Update an existing hook.
     *
     * Update a hook
     *
     * @throws {RequiredError}
     */
    update(requestParameters: PatchHooksByIdRequest, bodyParameters: HookUpdate, initOverrides?: InitOverride): Promise<ApiResponse<Hook>>;
    /**
     * Update one or more existing secrets for an existing hook. Accepts an object of key-value pairs, where the key is the name of the existing secret.
     *
     * Update hook secrets
     *
     * @throws {RequiredError}
     */
    updateSecrets(requestParameters: PatchSecretsRequest, bodyParameters: {
        [key: string]: any;
    }, initOverrides?: InitOverride): Promise<ApiResponse<void>>;
    /**
     * Create a new hook.
     *
     * Create a hook
     *
     * @throws {RequiredError}
     */
    create(bodyParameters: HookCreate, initOverrides?: InitOverride): Promise<ApiResponse<Hook>>;
    /**
     * Add one or more secrets to an existing hook. Accepts an object of key-value pairs, where the key is the name of the secret. A hook can have a maximum of 20 secrets.
     *
     * Add hook secrets
     *
     * @throws {RequiredError}
     */
    addSecrets(requestParameters: PostSecretsRequest, bodyParameters: {
        [key: string]: any;
    }, initOverrides?: InitOverride): Promise<ApiResponse<void>>;
}
export {};
