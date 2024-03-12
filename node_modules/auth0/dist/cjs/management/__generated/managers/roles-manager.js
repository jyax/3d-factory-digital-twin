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
exports.RolesManager = void 0;
const runtime = __importStar(require("../../../lib/runtime.js"));
const { BaseAPI } = runtime;
/**
 *
 */
class RolesManager extends BaseAPI {
    /**
     * Remove permissions associated with a role.
     *
     * Remove permissions from a role
     *
     * @throws {RequiredError}
     */
    async deletePermissions(requestParameters, bodyParameters, initOverrides) {
        runtime.validateRequiredRequestParams(requestParameters, ['id']);
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/roles/{id}/permissions`.replace('{id}', encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            body: bodyParameters,
        }, initOverrides);
        return runtime.VoidApiResponse.fromResponse(response);
    }
    /**
     * Delete a role.
     *
     * Delete a role
     *
     * @throws {RequiredError}
     */
    async delete(requestParameters, initOverrides) {
        runtime.validateRequiredRequestParams(requestParameters, ['id']);
        const response = await this.request({
            path: `/roles/{id}`.replace('{id}', encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
        }, initOverrides);
        return runtime.VoidApiResponse.fromResponse(response);
    }
    async getPermissions(requestParameters, initOverrides) {
        runtime.validateRequiredRequestParams(requestParameters, ['id']);
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
        ]);
        const response = await this.request({
            path: `/roles/{id}/permissions`.replace('{id}', encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            query: queryParameters,
        }, initOverrides);
        return runtime.JSONApiResponse.fromResponse(response);
    }
    async getUsers(requestParameters, initOverrides) {
        runtime.validateRequiredRequestParams(requestParameters, ['id']);
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
                key: 'from',
                config: {},
            },
            {
                key: 'take',
                config: {},
            },
        ]);
        const response = await this.request({
            path: `/roles/{id}/users`.replace('{id}', encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            query: queryParameters,
        }, initOverrides);
        return runtime.JSONApiResponse.fromResponse(response);
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
                key: 'name_filter',
                config: {},
            },
        ]);
        const response = await this.request({
            path: `/roles`,
            method: 'GET',
            query: queryParameters,
        }, initOverrides);
        return runtime.JSONApiResponse.fromResponse(response);
    }
    /**
     * Retrieve a role.
     *
     * Get a role
     *
     * @throws {RequiredError}
     */
    async get(requestParameters, initOverrides) {
        runtime.validateRequiredRequestParams(requestParameters, ['id']);
        const response = await this.request({
            path: `/roles/{id}`.replace('{id}', encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
        }, initOverrides);
        return runtime.JSONApiResponse.fromResponse(response);
    }
    /**
     * Update a role.
     *
     * Update a role
     *
     * @throws {RequiredError}
     */
    async update(requestParameters, bodyParameters, initOverrides) {
        runtime.validateRequiredRequestParams(requestParameters, ['id']);
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/roles/{id}`.replace('{id}', encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            body: bodyParameters,
        }, initOverrides);
        return runtime.JSONApiResponse.fromResponse(response);
    }
    /**
     * Associate permissions with a role.
     *
     * Associate permissions with a role
     *
     * @throws {RequiredError}
     */
    async addPermissions(requestParameters, bodyParameters, initOverrides) {
        runtime.validateRequiredRequestParams(requestParameters, ['id']);
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/roles/{id}/permissions`.replace('{id}', encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            body: bodyParameters,
        }, initOverrides);
        return runtime.VoidApiResponse.fromResponse(response);
    }
    /**
     * Assign users to a role.
     * Assign users to a role
     *
     * @throws {RequiredError}
     */
    async assignUsers(requestParameters, bodyParameters, initOverrides) {
        runtime.validateRequiredRequestParams(requestParameters, ['id']);
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/roles/{id}/users`.replace('{id}', encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            body: bodyParameters,
        }, initOverrides);
        return runtime.VoidApiResponse.fromResponse(response);
    }
    /**
     * Create a new role.
     *
     * Create a role
     *
     * @throws {RequiredError}
     */
    async create(bodyParameters, initOverrides) {
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/roles`,
            method: 'POST',
            headers: headerParameters,
            body: bodyParameters,
        }, initOverrides);
        return runtime.JSONApiResponse.fromResponse(response);
    }
}
exports.RolesManager = RolesManager;
//# sourceMappingURL=roles-manager.js.map