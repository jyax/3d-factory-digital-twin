import { generateClientInfo } from '../../utils.js';
import { base64url } from 'jose';
/**
 * @private
 */
export class TelemetryMiddleware {
    constructor(options) {
        this.clientInfo = options.clientInfo || generateClientInfo();
    }
    async pre(context) {
        if ('string' === typeof this.clientInfo.name && this.clientInfo.name.length > 0) {
            context.init.headers = {
                ...context.init.headers,
                'Auth0-Client': base64url.encode(JSON.stringify(this.clientInfo)),
            };
        }
        return {
            url: context.url,
            init: context.init,
        };
    }
}
//# sourceMappingURL=telemetry-middleware.js.map