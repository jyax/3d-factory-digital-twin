/**
 * Configure the retry logic for http calls.
 * By default, this retries any request that returns a 429 3 times.
 */
export interface RetryConfiguration {
    /**
     * Configure the usage of retries.
     * Defaults to true on the Management Client and false on the Authentication Client.
     */
    enabled?: boolean;
    /**
     * Configure the max amount of retries the SDK should do.
     * Defaults to 5.
     */
    maxRetries?: number;
    /**
     * Status Codes on which the SDK should trigger retries.
     * Defaults to [429].
     */
    retryWhen?: number[];
}
/**
 * @private
 * Function that retries the provided action callback for a configurable amount of time, defaults to 3.
 */
export declare function retry(action: () => Promise<Response>, { maxRetries, retryWhen }: RetryConfiguration): Promise<Response>;
