"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenProvider = void 0;
const index_js_1 = require("../auth/index.js");
const LEEWAY = 10 * 1000;
class TokenProvider {
    constructor(options) {
        this.options = options;
        this.expiresAt = 0;
        this.accessToken = '';
        this.authenticationClient = new index_js_1.AuthenticationClient(options);
    }
    async getAccessToken() {
        if (!this.accessToken || Date.now() > this.expiresAt - LEEWAY) {
            this.pending =
                this.pending ||
                    this.authenticationClient.oauth.clientCredentialsGrant({
                        audience: this.options.audience,
                    });
            const { data: { access_token: accessToken, expires_in: expiresIn }, } = await this.pending.finally(() => {
                delete this.pending;
            });
            this.expiresAt = Date.now() + expiresIn * 1000;
            this.accessToken = accessToken;
        }
        return this.accessToken;
    }
}
exports.TokenProvider = TokenProvider;
//# sourceMappingURL=token-provider.js.map