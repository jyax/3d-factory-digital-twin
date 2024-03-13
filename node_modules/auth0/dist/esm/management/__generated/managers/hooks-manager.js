import * as runtime from '../../../lib/runtime.js';
const { BaseAPI } = runtime;
/**
 *
 */
export class HooksManager extends BaseAPI {
    /**
     * Delete a hook.
     *
     * Delete a hook
     *
     * @throws {RequiredError}
     */
    async delete(requestParameters, initOverrides) {
        runtime.validateRequiredRequestParams(requestParameters, ['id']);
        const response = await this.request({
            path: `/hooks/{id}`.replace('{id}', encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
        }, initOverrides);
        return runtime.VoidApiResponse.fromResponse(response);
    }
    /**
     * Delete one or more existing secrets for a given hook. Accepts an array of secret names to delete.
     * Delete hook secrets
     *
     * @throws {RequiredError}
     */
    async deleteSecrets(requestParameters, bodyParameters, initOverrides) {
        runtime.validateRequiredRequestParams(requestParameters, ['id']);
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/hooks/{id}/secrets`.replace('{id}', encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            body: bodyParameters,
        }, initOverrides);
        return runtime.VoidApiResponse.fromResponse(response);
    }
    async getAll(requestParameters = {}, initOverrides) {
        const queryParameters = runtime.applyQueryParams(requestParameters, [
            {
                key: 'page',
                config: {},
            },
            {
                key: 'per_page',
                config: {},
            },
            {
                key: 'include_totals',
                config: {},
            },
            {
                key: 'enabled',
                config: {},
            },
            {
                key: 'fields',
                config: {},
            },
            {
                key: 'triggerId',
                config: {},
            },
        ]);
        const response = await this.request({
            path: `/hooks`,
            method: 'GET',
            query: queryParameters,
        }, initOverrides);
        return runtime.JSONApiResponse.fromResponse(response);
    }
    /**
     * Retrieve <a href="https://auth0.com/docs/hooks">a hook</a> by its ID. Accepts a list of fields to include in the result.
     *
     * Get a hook
     *
     * @throws {RequiredError}
     */
    async get(requestParameters, initOverrides) {
        runtime.validateRequiredRequestParams(requestParameters, ['id']);
        const queryParameters = runtime.applyQueryParams(requestParameters, [
            {
                key: 'fields',
                config: {},
            },
        ]);
        const response = await this.request({
            path: `/hooks/{id}`.replace('{id}', encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            query: queryParameters,
        }, initOverrides);
        return runtime.JSONApiResponse.fromResponse(response);
    }
    /**
     * Retrieve a hook's secrets by the ID of the hook.
     *
     * Get hook secrets
     *
     * @throws {RequiredError}
     */
    async getSecrets(requestParameters, initOverrides) {
        runtime.validateRequiredRequestParams(requestParameters, ['id']);
        const response = await this.request({
            path: `/hooks/{id}/secrets`.replace('{id}', encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
        }, initOverrides);
        return runtime.JSONApiResponse.fromResponse(response);
    }
    /**
     * Update an existing hook.
     *
     * Update a hook
     *
     * @throws {RequiredError}
     */
    async update(requestParameters, bodyParameters, initOverrides) {
        runtime.validateRequiredRequestParams(requestParameters, ['id']);
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/hooks/{id}`.replace('{id}', encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            body: bodyParameters,
        }, initOverrides);
        return runtime.JSONApiResponse.fromResponse(response);
    }
    /**
     * Update one or more existing secrets for an existing hook. Accepts an object of key-value pairs, where the key is the name of the existing secret.
     *
     * Update hook secrets
     *
     * @throws {RequiredError}
     */
    async updateSecrets(requestParameters, bodyParameters, initOverrides) {
        runtime.validateRequiredRequestParams(requestParameters, ['id']);
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/hooks/{id}/secrets`.replace('{id}', encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            body: bodyParameters,
        }, initOverrides);
        return runtime.VoidApiResponse.fromResponse(response);
    }
    /**
     * Create a new hook.
     *
     * Create a hook
     *
     * @throws {RequiredError}
     */
    async create(bodyParameters, initOverrides) {
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/hooks`,
            method: 'POST',
            headers: headerParameters,
            body: bodyParameters,
        }, initOverrides);
        return runtime.JSONApiResponse.fromResponse(response);
    }
    /**
     * Add one or more secrets to an existing hook. Accepts an object of key-value pairs, where the key is the name of the secret. A hook can have a maximum of 20 secrets.
     *
     * Add hook secrets
     *
     * @throws {RequiredError}
     */
    async addSecrets(requestParameters, bodyParameters, initOverrides) {
        runtime.validateRequiredRequestParams(requestParameters, ['id']);
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/hooks/{id}/secrets`.replace('{id}', encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            body: bodyParameters,
        }, initOverrides);
        return runtime.VoidApiResponse.fromResponse(response);
    }
}
//# sourceMappingURL=hooks-manager.js.map