import { ManagementClientOptionsWithClientAssertion, ManagementClientOptionsWithClientSecret } from './management-client-options.js';
export declare class TokenProvider {
    private options;
    private authenticationClient;
    private expiresAt;
    private accessToken;
    private pending;
    constructor(options: ManagementClientOptionsWithClientSecret & {
        audience: string;
    });
    constructor(options: ManagementClientOptionsWithClientAssertion & {
        audience: string;
    });
    getAccessToken(): Promise<string>;
}
