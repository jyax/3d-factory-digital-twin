import * as runtime from '../../../lib/runtime.js';
import type { InitOverride, ApiResponse } from '../../../lib/runtime.js';
import type { PostEmailVerification201Response, PostEmailVerificationRequest, PostPasswordChange201Response, PostPasswordChangeRequest } from '../models/index.js';
declare const BaseAPI: typeof runtime.BaseAPI;
/**
 *
 */
export declare class TicketsManager extends BaseAPI {
    /**
     * Create a <a href="https://auth0.com/docs/email/custom#verification-email">ticket to verify a user's email address</a>.
     * Create an email verification ticket
     *
     * @throws {RequiredError}
     */
    verifyEmail(bodyParameters: PostEmailVerificationRequest, initOverrides?: InitOverride): Promise<ApiResponse<PostEmailVerification201Response>>;
    /**
     * Create a <a href="https://auth0.com/docs/connections/database/password-change">password change ticket</a> for a user.
     * Create a password change ticket
     *
     * @throws {RequiredError}
     */
    changePassword(bodyParameters: PostPasswordChangeRequest, initOverrides?: InitOverride): Promise<ApiResponse<PostPasswordChange201Response>>;
}
export {};
