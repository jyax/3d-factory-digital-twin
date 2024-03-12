import * as runtime from '../../../lib/runtime.js';
import type { InitOverride, ApiResponse } from '../../../lib/runtime.js';
import type { GetErrors200Response, Job, PostUsersExportsRequest, PostVerificationEmailRequest, GetErrorsRequest, GetJobsByIdRequest, PostUsersImportsData } from '../models/index.js';
declare const BaseAPI: typeof runtime.BaseAPI;
/**
 *
 */
export declare class JobsManager extends BaseAPI {
    /**
     * Retrieve error details of a failed job.
     * Get job error details
     *
     * @throws {RequiredError}
     */
    getErrors(requestParameters: GetErrorsRequest, initOverrides?: InitOverride): Promise<ApiResponse<GetErrors200Response | void>>;
    /**
     * Retrieves a job. Useful to check its status.
     * Get a job
     *
     * @throws {RequiredError}
     */
    get(requestParameters: GetJobsByIdRequest, initOverrides?: InitOverride): Promise<ApiResponse<Job>>;
    /**
     * Export all users to a file via a long-running job.
     * Create export users job
     *
     * @throws {RequiredError}
     */
    exportUsers(bodyParameters: PostUsersExportsRequest, initOverrides?: InitOverride): Promise<ApiResponse<Job>>;
    /**
     * Import users from a <a href="https://manage.local.dev.auth0.com/docs/users/references/bulk-import-database-schema-examples">formatted file</a> into a connection via a long-running job.
     * Create import users job
     *
     * @throws {RequiredError}
     */
    importUsers(bodyParameters: PostUsersImportsData, initOverrides?: InitOverride): Promise<ApiResponse<Job>>;
    /**
     * Send an email to the specified user that asks them to click a link to <a href="https://auth0.com/docs/email/custom#verification-email">verify their email address</a>.
     *
     * Note: You must have the `Status` toggle enabled for the verification email template for the email to be sent.
     * Send an email address verification email
     *
     * @throws {RequiredError}
     */
    verifyEmail(bodyParameters: PostVerificationEmailRequest, initOverrides?: InitOverride): Promise<ApiResponse<Job>>;
}
export {};
