import * as runtime from '../../../lib/runtime.js';
import type { InitOverride, ApiResponse } from '../../../lib/runtime.js';
import type { GetRulesConfigs200ResponseInner, PutRulesConfigsByKey200Response, PutRulesConfigsByKeyRequest, DeleteRulesConfigsByKeyRequest, PutRulesConfigsByKeyOperationRequest } from '../models/index.js';
declare const BaseAPI: typeof runtime.BaseAPI;
/**
 *
 */
export declare class RulesConfigsManager extends BaseAPI {
    /**
     * Delete a rules config variable identified by its key.
     * Delete rules config for a given key
     *
     * @throws {RequiredError}
     */
    delete(requestParameters: DeleteRulesConfigsByKeyRequest, initOverrides?: InitOverride): Promise<ApiResponse<void>>;
    /**
     * Retrieve rules config variable keys.
     *
     *     Note: For security, config variable values cannot be retrieved outside rule execution.
     * Retrieve config variable keys for rules (get_rules-configs)
     *
     * @throws {RequiredError}
     */
    getAll(initOverrides?: InitOverride): Promise<ApiResponse<Array<GetRulesConfigs200ResponseInner>>>;
    /**
     * Sets a rules config variable.
     * Set rules config for a given key
     *
     * @throws {RequiredError}
     */
    set(requestParameters: PutRulesConfigsByKeyOperationRequest, bodyParameters: PutRulesConfigsByKeyRequest, initOverrides?: InitOverride): Promise<ApiResponse<PutRulesConfigsByKey200Response>>;
}
export {};
