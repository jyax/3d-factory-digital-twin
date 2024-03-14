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
exports.TenantsManager = void 0;
const runtime = __importStar(require("../../../lib/runtime.js"));
const { BaseAPI } = runtime;
/**
 *
 */
class TenantsManager extends BaseAPI {
    /**
     * Update settings for a tenant.
     * Update tenant settings
     *
     * @throws {RequiredError}
     */
    async updateSettings(bodyParameters, initOverrides) {
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/tenants/settings`,
            method: 'PATCH',
            headers: headerParameters,
            body: bodyParameters,
        }, initOverrides);
        return runtime.JSONApiResponse.fromResponse(response);
    }
    /**
     * Retrieve tenant settings. A list of fields to include or exclude may also be specified.
     * Get tenant settings
     *
     * @throws {RequiredError}
     */
    async getSettings(requestParameters = {}, initOverrides) {
        const queryParameters = runtime.applyQueryParams(requestParameters, [
            {
                key: 'fields',
                config: {},
            },
            {
                key: 'include_fields',
                config: {},
            },
        ]);
        const response = await this.request({
            path: `/tenants/settings`,
            method: 'GET',
            query: queryParameters,
        }, initOverrides);
        return runtime.JSONApiResponse.fromResponse(response);
    }
}
exports.TenantsManager = TenantsManager;
//# sourceMappingURL=tenants-manager.js.map