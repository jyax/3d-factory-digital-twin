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
exports.StatsManager = void 0;
const runtime = __importStar(require("../../../lib/runtime.js"));
const { BaseAPI } = runtime;
/**
 *
 */
class StatsManager extends BaseAPI {
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
exports.StatsManager = StatsManager;
//# sourceMappingURL=stats-manager.js.map