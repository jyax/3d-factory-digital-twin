import * as runtime from '../../../lib/runtime.js';
const { BaseAPI } = runtime;
/**
 *
 */
export class LogsManager extends BaseAPI {
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
                key: 'sort',
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
            {
                key: 'q',
                config: {},
            },
        ]);
        const response = await this.request({
            path: `/logs`,
            method: 'GET',
            query: queryParameters,
        }, initOverrides);
        return runtime.JSONApiResponse.fromResponse(response);
    }
    /**
     * Retrieve an individual log event.
     * Get a log event by id
     *
     * @throws {RequiredError}
     */
    async get(requestParameters, initOverrides) {
        runtime.validateRequiredRequestParams(requestParameters, ['id']);
        const response = await this.request({
            path: `/logs/{id}`.replace('{id}', encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
        }, initOverrides);
        return runtime.JSONApiResponse.fromResponse(response);
    }
}
//# sourceMappingURL=logs-manager.js.map