import * as runtime from '../../../lib/runtime.js';
const { BaseAPI } = runtime;
/**
 *
 */
export class StatsManager extends BaseAPI {
    /**
     * Retrieve the number of active users that logged in during the last 30 days.
     * Get active users count
     *
     * @throws {RequiredError}
     */
    async getActiveUsersCount(initOverrides) {
        const response = await this.request({
            path: `/stats/active-users`,
            method: 'GET',
        }, initOverrides);
        return runtime.TextApiResponse.fromResponse(response);
    }
    /**
     * Retrieve the number of logins, signups and breached-password detections (subscription required) that occurred each day within a specified date range.
     * Get daily stats
     *
     * @throws {RequiredError}
     */
    async getDaily(requestParameters = {}, initOverrides) {
        const queryParameters = runtime.applyQueryParams(requestParameters, [
            {
                key: 'from',
                config: {},
            },
            {
                key: 'to',
                config: {},
            },
        ]);
        const response = await this.request({
            path: `/stats/daily`,
            method: 'GET',
            query: queryParameters,
        }, initOverrides);
        return runtime.JSONApiResponse.fromResponse(response);
    }
}
//# sourceMappingURL=stats-manager.js.map