"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelemetryMiddleware = void 0;
const utils_js_1 = require("../../utils.js");
const jose_1 = require("jose");
/**
 * @private
 */
class TelemetryMiddleware {
    constructor(options) {
        this.clientInfo = options.clientInfo || (0, utils_js_1.generateClientInfo)();
    }
    async pre(context) {
        if ('string' === typeof this.clientInfo.name && this.clientInfo.name.length > 0) {
            context.init.headers = {
                ...context.init.headers,
                'Auth0-Client': jose_1.base64url.encode(JSON.stringify(this.clientInfo)),
            };
        }
        return {
            url: context.url,
            init: context.init,
        };
    }
}
exports.TelemetryMiddleware = TelemetryMiddleware;
//# sourceMappingURL=telemetry-middleware.js.map