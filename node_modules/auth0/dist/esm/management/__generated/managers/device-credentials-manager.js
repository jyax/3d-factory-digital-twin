import * as runtime from '../../../lib/runtime.js';
const { BaseAPI } = runtime;
/**
 *
 */
export class DeviceCredentialsManager extends BaseAPI {
    /**
     * Delete a device credential.
     * Delete a device credential
     *
     * @throws {RequiredError}
     */
    async delete(requestParameters, initOverrides) {
        runtime.validateRequiredRequestParams(requestParameters, ['id']);
        const response = await this.request({
            path: `/device-credentials/{id}`.replace('{id}', encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
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
                key: 'fields',
                config: {},
            },
            {
                key: 'include_fields',
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
                key: 'type',
                config: {},
            },
        ]);
        const response = await this.request({
            path: `/device-credentials`,
            method: 'GET',
            query: queryParameters,
        }, initOverrides);
        return runtime.JSONApiResponse.fromResponse(response);
    }
    /**
     * Device Credentials relate to refresh tokens and rotating refresh tokens for a given user_id.
     *
     * Note: Device Credentials APIs are designed for ad-hoc administrative use only, and paging is by default enabled for GET requests.
     * Note: When Refresh Token Rotation is enabled, the endpoint becomes eventual consistent.
     *
     * Create a device public key credential
     *
     * @throws {RequiredError}
     */
    async createPublicKey(bodyParameters, initOverrides) {
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/device-credentials`,
            method: 'POST',
            headers: headerParameters,
            body: bodyParameters,
        }, initOverrides);
        return runtime.JSONApiResponse.fromResponse(response);
    }
}
//# sourceMappingURL=device-credentials-manager.js.map