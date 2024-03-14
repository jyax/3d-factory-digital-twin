import * as runtime from '../../../lib/runtime.js';
import type { InitOverride, ApiResponse } from '../../../lib/runtime.js';
import type { Rule, RuleCreate, RuleUpdate, GetRules200ResponseOneOf, DeleteRulesByIdRequest, GetRulesRequest, GetRulesByIdRequest, PatchRulesByIdRequest } from '../models/index.js';
declare const BaseAPI: typeof runtime.BaseAPI;
/**
 *
 */
export declare class RulesManager extends BaseAPI {
    /**
     * Delete a rule.
     *
     * Delete a rule
     *
     * @throws {RequiredError}
     */
    delete(requestParameters: DeleteRulesByIdRequest, initOverrides?: InitOverride): Promise<ApiResponse<void>>;
    /**
     * Retrieve a filtered list of <a href="https://auth0.com/docs/rules">rules</a>. Accepts a list of fields to include or exclude.
     *
     * Get rules
     *
     * @throws {RequiredError}
     */
    getAll(requestParameters: GetRulesRequest & {
        include_totals: true;
    }, initOverrides?: InitOverride): Promise<ApiResponse<GetRules200ResponseOneOf>>;
    getAll(requestParameters?: GetRulesRequest, initOverrides?: InitOverride): Promise<ApiResponse<Array<Rule>>>;
    /**
     * Retrieve <a href="https://auth0.com/docs/rules">rule</a> details. Accepts a list of fields to include or exclude in the result.
     *
     * Get a rule
     *
     * @throws {RequiredError}
     */
    get(requestParameters: GetRulesByIdRequest, initOverrides?: InitOverride): Promise<ApiResponse<Rule>>;
    /**
     * Update an existing rule.
     *
     * Update a rule
     *
     * @throws {RequiredError}
     */
    update(requestParameters: PatchRulesByIdRequest, bodyParameters: RuleUpdate, initOverrides?: InitOverride): Promise<ApiResponse<Rule>>;
    /**
     * Create a <a href="https://auth0.com/docs/rules#create-a-new-rule-using-the-management-api">new rule</a>.
     *
     * Note: Changing a rule's stage of execution from the default <code>login_success</code> can change the rule's function signature to have user omitted.
     *
     * Create a rule
     *
     * @throws {RequiredError}
     */
    create(bodyParameters: RuleCreate, initOverrides?: InitOverride): Promise<ApiResponse<Rule>>;
}
export {};
