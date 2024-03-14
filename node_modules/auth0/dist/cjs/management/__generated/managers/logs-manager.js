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
exports.LogsManager = void 0;
const runtime = __importStar(require("../../../lib/runtime.js"));
const { BaseAPI } = runtime;
/**
 *
 */
class LogsManager extends BaseAPI {
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
exports.LogsManager = LogsManager;
//# sourceMappingURL=logs-manager.js.map