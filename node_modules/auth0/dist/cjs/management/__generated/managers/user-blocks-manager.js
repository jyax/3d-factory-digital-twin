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
exports.UserBlocksManager = void 0;
const runtime = __importStar(require("../../../lib/runtime.js"));
const { BaseAPI } = runtime;
/**
 *
 */
class UserBlocksManager extends BaseAPI {
    /**
     * Unblock a user blocked due to an excessive amount of incorrectly-provided credentials.
     *
     * Unblock by identifier
     *
     * @throws {RequiredError}
     */
    async deleteAll(requestParameters, initOverrides) {
        runtime.validateRequiredRequestParams(requestParameters, ['identifier']);
        const queryParameters = runtime.applyQueryParams(requestParameters, [
            {
                key: 'identifier',
                config: {},
            },
        ]);
        const response = await this.request({
            path: `/user-blocks`,
            method: 'DELETE',
            query: queryParameters,
        }, initOverrides);
        return runtime.VoidApiResponse.fromResponse(response);
    }
    /**
     * Unblock a user that was blocked due to an excessive amount of incorrectly provided credentials.
     *
     * Note: This endpoint does not unblock users that were <a href="https://auth0.com/docs/user-profile#block-and-unblock-a-user">blocked by admins</a>.
     *
     * Unblock a user
     *
     * @throws {RequiredError}
     */
    async delete(requestParameters, initOverrides) {
        runtime.validateRequiredRequestParams(requestParameters, ['id']);
        const response = await this.request({
            path: `/user-blocks/{id}`.replace('{id}', encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
        }, initOverrides);
        return runtime.VoidApiResponse.fromResponse(response);
    }
    /**
     * Retrieve a list of blocked IP addresses for a given identifier (e.g., username, phone number or email).
     *
     * Get blocks by identifier
     *
     * @throws {RequiredError}
     */
    async getAll(requestParameters, initOverrides) {
        runtime.validateRequiredRequestParams(requestParameters, ['identifier']);
        const queryParameters = runtime.applyQueryParams(requestParameters, [
            {
                key: 'identifier',
                config: {},
            },
            {
                key: 'consider_brute_force_enablement',
                config: {},
            },
        ]);
        const response = await this.request({
            path: `/user-blocks`,
            method: 'GET',
            query: queryParameters,
        }, initOverrides);
        return runtime.JSONApiResponse.fromResponse(response);
    }
    /**
     * Retrieve a list of blocked IP addresses for the login identifiers (email, username, phone number, etc) associated with the specified user.
     *
     *
     * Get a user's blocks
     *
     * @throws {RequiredError}
     */
    async get(requestParameters, initOverrides) {
        runtime.validateRequiredRequestParams(requestParameters, ['id']);
        const queryParameters = runtime.applyQueryParams(requestParameters, [
            {
                key: 'consider_brute_force_enablement',
                config: {},
            },
        ]);
        const response = await this.request({
            path: `/user-blocks/{id}`.replace('{id}', encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            query: queryParameters,
        }, initOverrides);
        return runtime.JSONApiResponse.fromResponse(response);
    }
}
exports.UserBlocksManager = UserBlocksManager;
//# sourceMappingURL=user-blocks-manager.js.map