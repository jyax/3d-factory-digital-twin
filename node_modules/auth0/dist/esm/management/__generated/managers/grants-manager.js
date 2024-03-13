import * as runtime from '../../../lib/runtime.js';
const { BaseAPI } = runtime;
/**
 *
 */
export class GrantsManager extends BaseAPI {
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
//# sourceMappingURL=grants-manager.js.map