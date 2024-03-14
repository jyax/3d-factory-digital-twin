import { AuthenticationClientOptions } from './base-auth-api.js';
export declare class IdTokenValidatorError extends Error {
}
export interface IDTokenValidateOptions {
    nonce?: string;
    maxAge?: number;
    organization?: string;
}
export declare class IDTokenValidator {
    private jwks;
    private alg;
    private audience;
    private issuer;
    private clockTolerance;
    private secret;
    constructor({ domain, clientId, clientSecret, agent, headers, timeoutDuration, idTokenSigningAlg, clockTolerance, }: AuthenticationClientOptions);
    validate(idToken: string, { nonce, maxAge, organization }?: IDTokenValidateOptions): Promise<void>;
}
