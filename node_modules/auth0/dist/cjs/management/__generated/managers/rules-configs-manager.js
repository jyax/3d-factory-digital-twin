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
exports.RulesConfigsManager = void 0;
const runtime = __importStar(require("../../../lib/runtime.js"));
const { BaseAPI } = runtime;
/**
 *
 */
class RulesConfigsManager extends BaseAPI {
    /**
     * Delete a rules config variable identified by its key.
     * Delete rules config for a given key
     *
     * @throws {RequiredError}
     */
    async delete(requestParameters, initOverrides) {
        runtime.validateRequiredRequestParams(requestParameters, ['key']);
        const response = await this.request({
            path: `/rules-configs/{key}`.replace('{key}', encodeURIComponent(String(requestParameters.key))),
            method: 'DELETE',
        }, initOverrides);
        return runtime.VoidApiResponse.fromResponse(response);
    }
    /**
     * Retrieve rules config variable keys.
     *
     *     Note: For security, config variable values cannot be retrieved outside rule execution.
     * Retrieve config variable keys for rules (get_rules-configs)
     *
     * @throws {RequiredError}
     */
    async getAll(initOverrides) {
        const response = await this.request({
            path: `/rules-configs`,
            method: 'GET',
        }, initOverrides);
        return runtime.JSONApiResponse.fromResponse(response);
    }
    /**
     * Sets a rules config variable.
     * Set rules config for a given key
     *
     * @throws {RequiredError}
     */
    async set(requestParameters, bodyParameters, initOverrides) {
        runtime.validateRequiredRequestParams(requestParameters, ['key']);
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/rules-configs/{key}`.replace('{key}', encodeURIComponent(String(requestParameters.key))),
            method: 'PUT',
            headers: headerParameters,
            body: bodyParameters,
        }, initOverrides);
        return runtime.JSONApiResponse.fromResponse(response);
    }
}
exports.RulesConfigsManager = RulesConfigsManager;
//# sourceMappingURL=rules-configs-manager.js.map