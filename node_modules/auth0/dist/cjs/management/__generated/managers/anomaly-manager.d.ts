import * as runtime from '../../../lib/runtime.js';
import type { InitOverride, ApiResponse } from '../../../lib/runtime.js';
import type { DeleteIpsByIdRequest, GetIpsByIdRequest } from '../models/index.js';
declare const BaseAPI: typeof runtime.BaseAPI;
/**
 *
 */
export declare class AnomalyManager extends BaseAPI {
    /**
     * Unblock an IP address currently blocked by the <a href="https://auth0.com/docs/configure/attack-protection/suspicious-ip-throttling">Suspicious IP Throttling</a> due to multiple suspicious attempts.
     * Remove the blocked IP address
     *
     * @throws {RequiredError}
     */
    deleteBlockedIp(requestParameters: DeleteIpsByIdRequest, initOverrides?: InitOverride): Promise<ApiResponse<void>>;
    /**
     * Check if a given IP address is blocked via the <a href="https://auth0.com/docs/configure/attack-protection/suspicious-ip-throttling">Suspicious IP Throttling</a> due to multiple suspicious attempts.
     * Check if an IP address is blocked
     *
     * @throws {RequiredError}
     */
    checkIfIpIsBlocked(requestParameters: GetIpsByIdRequest, initOverrides?: InitOverride): Promise<ApiResponse<void>>;
}
export {};
