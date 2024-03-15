import * as runtime from '../../../lib/runtime.js';
import type { InitOverride, ApiResponse } from '../../../lib/runtime.js';
import type { GetActionVersions200Response, GetActionVersions200ResponseVersionsInner, GetActions200Response, GetActions200ResponseActionsInner, GetBindings200Response, GetExecution200Response, GetTriggers200Response, PatchActionRequest, PatchBindings200Response, PatchBindingsRequest, PostActionRequest, PostDeployDraftVersionRequest, PostTestAction200Response, PostTestActionRequest, DeleteActionRequest, GetActionRequest, GetActionVersionRequest, GetActionVersionsRequest, GetActionsRequest, GetBindingsRequest, GetExecutionRequest, PatchActionOperationRequest, PatchBindingsOperationRequest, PostDeployActionRequest, PostDeployDraftVersionOperationRequest, PostTestActionOperationRequest } from '../models/index.js';
declare const BaseAPI: typeof runtime.BaseAPI;
/**
 *
 */
export declare class ActionsManager extends BaseAPI {
    /**
     * Deletes an action and all of its associated versions. An action must be unbound from all triggers
     * before it can be deleted.
     *
     * Delete an action
     *
     * @throws {RequiredError}
     */
    delete(requestParameters: DeleteActionRequest, initOverrides?: InitOverride): Promise<ApiResponse<void>>;
    /**
     * Retrieve an action by its ID.
     *
     * Get an action
     *
     * @throws {RequiredError}
     */
    get(requestParameters: GetActionRequest, initOverrides?: InitOverride): Promise<ApiResponse<GetActions200ResponseActionsInner>>;
    /**
     * Retrieve a specific version of an action. An action version is created whenever
     * an action is deployed. An action version is immutable, once created.
     *
     * Get a specific version of an action
     *
     * @throws {RequiredError}
     */
    getVersion(requestParameters: GetActionVersionRequest, initOverrides?: InitOverride): Promise<ApiResponse<GetActionVersions200ResponseVersionsInner>>;
    /**
     * Retrieve all of an action's versions. An action version is created whenever
     * an action is deployed. An action version is immutable, once created.
     *
     * Get an action's versions
     *
     * @throws {RequiredError}
     */
    getVersions(requestParameters: GetActionVersionsRequest, initOverrides?: InitOverride): Promise<ApiResponse<GetActionVersions200Response>>;
    /**
     * Retrieve all actions.
     *
     * Get actions
     *
     * @throws {RequiredError}
     */
    getAll(requestParameters?: GetActionsRequest, initOverrides?: InitOverride): Promise<ApiResponse<GetActions200Response>>;
    /**
     * Retrieve the actions that are bound to a trigger. Once an action is created and deployed, it must be
     * attached (i.e. bound) to a trigger so that it will be executed as part of a flow. The list of actions returned
     * reflects the order in which they will be executed during the appropriate flow.
     *
     * Get trigger bindings
     *
     * @throws {RequiredError}
     */
    getTriggerBindings(requestParameters: GetBindingsRequest, initOverrides?: InitOverride): Promise<ApiResponse<GetBindings200Response>>;
    /**
     * Retrieve information about a specific execution of a trigger. Relevant execution IDs will be included in tenant logs
     * generated as part of that authentication flow. Executions will only be stored for 10 days after their creation.
     *
     * Get an execution
     *
     * @throws {RequiredError}
     */
    getExecution(requestParameters: GetExecutionRequest, initOverrides?: InitOverride): Promise<ApiResponse<GetExecution200Response>>;
    /**
     * Retrieve the set of triggers currently available within actions. A trigger is an extensibility point to which actions
     * can be bound.
     *
     * Get triggers
     *
     * @throws {RequiredError}
     */
    getAllTriggers(initOverrides?: InitOverride): Promise<ApiResponse<GetTriggers200Response>>;
    /**
     * Update an existing action. If this action is currently bound to a trigger, updating it will <strong>not</strong> affect
     * any user flows until the action is deployed.
     *
     * Update an action
     *
     * @throws {RequiredError}
     */
    update(requestParameters: PatchActionOperationRequest, bodyParameters: PatchActionRequest, initOverrides?: InitOverride): Promise<ApiResponse<GetActions200ResponseActionsInner>>;
    /**
     * Update the actions that are bound (i.e. attached) to a trigger. Once an action is created and deployed, it must be
     * attached (i.e. bound) to a trigger so that it will be executed as part of a flow. The order in which the actions are
     * provided will determine the order in which they are executed.
     *
     * Update trigger bindings
     *
     * @throws {RequiredError}
     */
    updateTriggerBindings(requestParameters: PatchBindingsOperationRequest, bodyParameters: PatchBindingsRequest, initOverrides?: InitOverride): Promise<ApiResponse<PatchBindings200Response>>;
    /**
     * Create an action. Once an action is created, it must be deployed, and then
     * bound to a trigger before it will be executed as part of a flow.
     *
     * Create an action
     *
     * @throws {RequiredError}
     */
    create(bodyParameters: PostActionRequest, initOverrides?: InitOverride): Promise<ApiResponse<GetActions200ResponseActionsInner>>;
    /**
     * Deploy an action. Deploying an action will create a new immutable version of the action. If the action is
     * currently bound to a trigger, then the system will begin executing the newly deployed version of the action immediately. Otherwise, the action will only be executed as a part of a flow once it is bound to that flow.
     *
     * Deploy an action
     *
     * @throws {RequiredError}
     */
    deploy(requestParameters: PostDeployActionRequest, initOverrides?: InitOverride): Promise<ApiResponse<GetActionVersions200ResponseVersionsInner>>;
    /**
     * Performs the equivalent of a roll-back of an action to an earlier, specified version. Creates a new, deployed
     * action version that is identical to the specified version. If this action is currently bound to a trigger, the
     * system will begin executing the newly-created version immediately.
     *
     * Roll back to a previous action version
     *
     * @throws {RequiredError}
     */
    deployVersion(requestParameters: PostDeployDraftVersionOperationRequest, bodyParameters: PostDeployDraftVersionRequest | null, initOverrides?: InitOverride): Promise<ApiResponse<GetActionVersions200ResponseVersionsInner>>;
    /**
     * Test an action. After updating an action, it can be tested prior to being deployed to ensure it behaves as expected.
     *
     * Test an Action
     *
     * @throws {RequiredError}
     */
    test(requestParameters: PostTestActionOperationRequest, bodyParameters: PostTestActionRequest, initOverrides?: InitOverride): Promise<ApiResponse<PostTestAction200Response>>;
}
export {};
