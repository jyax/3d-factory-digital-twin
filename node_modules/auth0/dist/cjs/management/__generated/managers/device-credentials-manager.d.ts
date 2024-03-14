import * as runtime from '../../../lib/runtime.js';
import type { InitOverride, ApiResponse } from '../../../lib/runtime.js';
import type { DeviceCredentialCreate, PostDeviceCredentials201Response, GetDeviceCredentials200ResponseOneOf, DeviceCredential, DeleteDeviceCredentialsByIdRequest, GetDeviceCredentialsRequest } from '../models/index.js';
declare const BaseAPI: typeof runtime.BaseAPI;
/**
 *
 */
export declare class DeviceCredentialsManager extends BaseAPI {
    /**
     * Delete a device credential.
     * Delete a device credential
     *
     * @throws {RequiredError}
     */
    delete(requestParameters: DeleteDeviceCredentialsByIdRequest, initOverrides?: InitOverride): Promise<ApiResponse<void>>;
    /**
     * Device Credentials relate to refresh tokens and rotating refresh tokens for a given user_id.
     *
     * Note: Device Credentials APIs are designed for ad-hoc administrative use only, and paging is by default enabled for GET requests.
     * Note: When Refresh Token Rotation is enabled, the endpoint becomes eventual consistent.
     *
     * Retrieve device credentials
     *
     * @throws {RequiredError}
     */
    getAll(requestParameters: GetDeviceCredentialsRequest & {
        include_totals: true;
    }, initOverrides?: InitOverride): Promise<ApiResponse<GetDeviceCredentials200ResponseOneOf>>;
    getAll(requestParameters?: GetDeviceCredentialsRequest, initOverrides?: InitOverride): Promise<ApiResponse<Array<DeviceCredential>>>;
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
    createPublicKey(bodyParameters: DeviceCredentialCreate, initOverrides?: InitOverride): Promise<ApiResponse<PostDeviceCredentials201Response>>;
}
export {};
