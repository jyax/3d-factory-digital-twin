import * as runtime from '../../../lib/runtime.js';
const { BaseAPI } = runtime;
/**
 *
 */
export class TicketsManager extends BaseAPI {
    /**
     * Create a <a href="https://auth0.com/docs/email/custom#verification-email">ticket to verify a user's email address</a>.
     * Create an email verification ticket
     *
     * @throws {RequiredError}
     */
    async verifyEmail(bodyParameters, initOverrides) {
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/tickets/email-verification`,
            method: 'POST',
            headers: headerParameters,
            body: bodyParameters,
        }, initOverrides);
        return runtime.JSONApiResponse.fromResponse(response);
    }
    /**
     * Create a <a href="https://auth0.com/docs/connections/database/password-change">password change ticket</a> for a user.
     * Create a password change ticket
     *
     * @throws {RequiredError}
     */
    async changePassword(bodyParameters, initOverrides) {
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/tickets/password-change`,
            method: 'POST',
            headers: headerParameters,
            body: bodyParameters,
        }, initOverrides);
        return runtime.JSONApiResponse.fromResponse(response);
    }
}
//# sourceMappingURL=tickets-manager.js.map