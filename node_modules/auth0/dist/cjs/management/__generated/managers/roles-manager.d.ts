import * as runtime from '../../../lib/runtime.js';
import type { InitOverride, ApiResponse } from '../../../lib/runtime.js';
import type { GetOrganizationMemberRoles200ResponseOneOfInner, PostRolePermissionAssignmentRequest, PostRoleUsersRequest, RoleCreate, RoleUpdate, GetRolePermission200ResponseOneOf, Permission, GetRoleUser200ResponseOneOf, GetRoleUser200ResponseOneOfInner, GetOrganizationMemberRoles200ResponseOneOf, DeleteRolePermissionAssignmentRequest, DeleteRolesByIdRequest, GetRolePermissionRequest, GetRoleUserRequest, GetRolesRequest, GetRolesByIdRequest, PatchRolesByIdRequest, PostRolePermissionAssignmentOperationRequest, PostRoleUsersOperationRequest } from '../models/index.js';
declare const BaseAPI: typeof runtime.BaseAPI;
/**
 *
 */
export declare class RolesManager extends BaseAPI {
    /**
     * Remove permissions associated with a role.
     *
     * Remove permissions from a role
     *
     * @throws {RequiredError}
     */
    deletePermissions(requestParameters: DeleteRolePermissionAssignmentRequest, bodyParameters: PostRolePermissionAssignmentRequest, initOverrides?: InitOverride): Promise<ApiResponse<void>>;
    /**
     * Delete a role.
     *
     * Delete a role
     *
     * @throws {RequiredError}
     */
    delete(requestParameters: DeleteRolesByIdRequest, initOverrides?: InitOverride): Promise<ApiResponse<void>>;
    /**
     * Retrieve list of permissions granted by a role.
     *
     * Get permissions granted by role
     *
     * @throws {RequiredError}
     */
    getPermissions(requestParameters: GetRolePermissionRequest & {
        include_totals: true;
    }, initOverrides?: InitOverride): Promise<ApiResponse<GetRolePermission200ResponseOneOf>>;
    getPermissions(requestParameters?: GetRolePermissionRequest, initOverrides?: InitOverride): Promise<ApiResponse<Array<Permission>>>;
    /**
     * Retrieve users associated with a role. This endpoint supports two types of pagination:
     * - Offset pagination
     * - Checkpoint pagination
     *
     * Checkpoint pagination must be used if you need to retrieve more than 1000 users for a given role.
     *
     * <h2>Checkpoint Pagination</h2>
     *
     * To search by checkpoint, use the following parameters:
     * - from: Optional id from which to start selection.
     * - take: The total amount of entries to retrieve when using the from parameter. Defaults to 50.
     *
     * Note: The first time you call this endpoint using Checkpoint Pagination, you should omit the <code>from</code> parameter. If there are more results, a <code>next</code> value will be included in the response. You can use this for subsequent API calls. When <code>next</code> is no longer included in the response, this indicates there are no more pages remaining.
     *
     * Get a role's users
     *
     * @throws {RequiredError}
     */
    getUsers(requestParameters: GetRoleUserRequest & {
        include_totals: true;
    }, initOverrides?: InitOverride): Promise<ApiResponse<GetRoleUser200ResponseOneOf>>;
    getUsers(requestParameters?: GetRoleUserRequest, initOverrides?: InitOverride): Promise<ApiResponse<Array<GetRoleUser200ResponseOneOfInner>>>;
    /**
     * Retrieve filtered list of roles that can be assigned to users.
     *
     * Get roles
     *
     * @throws {RequiredError}
     */
    getAll(requestParameters: GetRolesRequest & {
        include_totals: true;
    }, initOverrides?: InitOverride): Promise<ApiResponse<GetOrganizationMemberRoles200ResponseOneOf>>;
    getAll(requestParameters?: GetRolesRequest, initOverrides?: InitOverride): Promise<ApiResponse<Array<GetOrganizationMemberRoles200ResponseOneOfInner>>>;
    /**
     * Retrieve a role.
     *
     * Get a role
     *
     * @throws {RequiredError}
     */
    get(requestParameters: GetRolesByIdRequest, initOverrides?: InitOverride): Promise<ApiResponse<GetOrganizationMemberRoles200ResponseOneOfInner>>;
    /**
     * Update a role.
     *
     * Update a role
     *
     * @throws {RequiredError}
     */
    update(requestParameters: PatchRolesByIdRequest, bodyParameters: RoleUpdate, initOverrides?: InitOverride): Promise<ApiResponse<GetOrganizationMemberRoles200ResponseOneOfInner>>;
    /**
     * Associate permissions with a role.
     *
     * Associate permissions with a role
     *
     * @throws {RequiredError}
     */
    addPermissions(requestParameters: PostRolePermissionAssignmentOperationRequest, bodyParameters: PostRolePermissionAssignmentRequest, initOverrides?: InitOverride): Promise<ApiResponse<void>>;
    /**
     * Assign users to a role.
     * Assign users to a role
     *
     * @throws {RequiredError}
     */
    assignUsers(requestParameters: PostRoleUsersOperationRequest, bodyParameters: PostRoleUsersRequest, initOverrides?: InitOverride): Promise<ApiResponse<void>>;
    /**
     * Create a new role.
     *
     * Create a role
     *
     * @throws {RequiredError}
     */
    create(bodyParameters: RoleCreate, initOverrides?: InitOverride): Promise<ApiResponse<GetOrganizationMemberRoles200ResponseOneOfInner>>;
}
export {};
