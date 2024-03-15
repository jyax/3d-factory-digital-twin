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
exports.GrantsManager = void 0;
const runtime = __importStar(require("../../../lib/runtime.js"));
const { BaseAPI } = runtime;
/**
 *
 */
class GrantsManager extends BaseAPI {
    /**
     * Delete a grant associated with your account.
     * Delete a grant by id
     *
     * @throws {RequiredError}
     */
    async delete(requestParameters, initOverrides) {
        runtime.validateRequiredRequestParams(requestParameters, ['id']);
        const response = await this.request({
            path: `/grants/{id}`.replace('{id}', encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
        }, initOverrides);
        return runtime.VoidApiResponse.fromResponse(response);
    }
    /**
     * Delete a grant associated with your account.
     * Delete a grant by user_id
     *
     * @throws {RequiredError}
     */
    async deleteByUserId(requestParameters, initOverrides) {
        runtime.validateRequiredRequestParams(requestParameters, ['user_id']);
        const queryParameters = runtime.applyQueryParams(requestParameters, [
            {
                key: 'user_id',
                config: {},
            },
        ]);
        const response = await this.request({
            path: `/grants`,
            method: 'DELETE',
            query: queryParameters,
        }, initOverrides);
        return runtime.VoidApiResponse.fromResponse(response);
    }
    async getAll(requestParameters = {}, initOverrides) {
        const queryParameters = runtime.applyQueryParams(requestParameters, [
            {
                key: 'per_page',
                config: {},
            },
            {
                key: 'page',
                config: {},
            },
            {
                key: 'include_totals',
                config: {},
            },
            {
                key: 'user_id',
                config: {},
            },
            {
                key: 'client_id',
                config: {},
            },
            {
                key: 'audience',
                config: {},
            },
        ]);
        const response = await this.request({
            path: `/grants`,
            method: 'GET',
            query: queryParameters,
        }, initOverrides);
        return runtime.JSONApiResponse.fromResponse(response);
    }
}
exports.GrantsManager = GrantsManager;
//# sourceMappingURL=grants-manager.js.map