"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersByEmailManager = void 0;
const runtime = __importStar(require("../../../lib/runtime.js"));
const { BaseAPI } = runtime;
/**
 *
 */
class UsersByEmailManager extends BaseAPI {
    /**
     * If Auth0 is the identify provider (idP), the email address associated with a user is saved in lower case, regardless of how you initially provided it. For example, if you register a user as <b>JohnSmith@example.com</b>, Auth0 saves the user's email as <b>johnsmith@example.com</b>.
     *
     * In cases where Auth0 is not the idP, the `email` is stored based on the rules of idP, so make sure the search is made using the correct capitalization.
     *
     * When using this endpoint, make sure that you are searching for users via email addresses using the correct case.
     *
     * Search Users by Email
     *
     * @throws {RequiredError}
     */
    async getByEmail(requestParameters, initOverrides) {
        runtime.validateRequiredRequestParams(requestParameters, ['email']);
        const queryParameters = runtime.applyQueryParams(requestParameters, [
            {
                key: 'fields',
                config: {},
            },
            {
                key: 'include_fields',
                config: {},
            },
            {
                key: 'email',
                config: {},
            },
        ]);
        const response = await this.request({
            path: `/users-by-email`,
            method: 'GET',
            query: queryParameters,
        }, initOverrides);
        return runtime.JSONApiResponse.fromResponse(response);
    }
}
exports.UsersByEmailManager = UsersByEmailManager;
//# sourceMappingURL=users-by-email-manager.js.map