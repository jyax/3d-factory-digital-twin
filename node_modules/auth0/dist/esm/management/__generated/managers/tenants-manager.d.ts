import * as runtime from '../../../lib/runtime.js';
import type { InitOverride, ApiResponse } from '../../../lib/runtime.js';
import type { TenantSettings, TenantSettingsUpdate, TenantSettingsRouteRequest } from '../models/index.js';
declare const BaseAPI: typeof runtime.BaseAPI;
/**
 *
 */
export declare class TenantsManager extends BaseAPI {
    /**
     * Update settings for a tenant.
     * Update tenant settings
     *
     * @throws {RequiredError}
     */
    updateSettings(bodyParameters: TenantSettingsUpdate, initOverrides?: InitOverride): Promise<ApiResponse<TenantSettings>>;
    /**
     * Retrieve tenant settings. A list of fields to include or exclude may also be specified.
     * Get tenant settings
     *
     * @throws {RequiredError}
     */
    getSettings(requestParameters?: TenantSettingsRouteRequest, initOverrides?: InitOverride): Promise<ApiResponse<TenantSettings>>;
}
export {};
