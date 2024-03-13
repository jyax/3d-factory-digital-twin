import * as runtime from '../../../lib/runtime.js';
import type { InitOverride, ApiResponse } from '../../../lib/runtime.js';
import type { Enrollment, EnrollmentCreate, Factor, GetApns200Response, GetMessageTypes200Response, GetPhoneProviders200Response, GetPnProviders200Response, PostTicket200Response, PutApns200Response, PutApnsRequest, PutFactorsByName200Response, PutFactorsByNameRequest, PutFcmRequest, PutSns200Response, PutSnsRequest, PutTwilioRequest, SmsTwilioFactorProvider, SnsFactorProvider, TemplateMessages, TwilioFactorProvider, DeleteEnrollmentsByIdRequest, GetEnrollmentsByIdRequest, PutFactorsByNameOperationRequest } from '../models/index.js';
declare const BaseAPI: typeof runtime.BaseAPI;
/**
 *
 */
export declare class GuardianManager extends BaseAPI {
    /**
     * Delete an enrollment to allow the user to enroll with multi-factor authentication again.
     * Delete a multi-factor authentication enrollment
     *
     * @throws {RequiredError}
     */
    deleteGuardianEnrollment(requestParameters: DeleteEnrollmentsByIdRequest, initOverrides?: InitOverride): Promise<ApiResponse<void>>;
    /**
     * Retrieve APNS push notification configuration
     *
     * @throws {RequiredError}
     */
    getPushNotificationProviderAPNS(initOverrides?: InitOverride): Promise<ApiResponse<GetApns200Response>>;
    /**
     * Retrieve an enrollment (including its status and type).
     *
     * Note: Phone numbers are partially obfuscated.
     * Retrieve a multi-factor authentication enrollment
     *
     * @throws {RequiredError}
     */
    getGuardianEnrollment(requestParameters: GetEnrollmentsByIdRequest, initOverrides?: InitOverride): Promise<ApiResponse<Enrollment>>;
    /**
     * Retrieve phone enrollment and verification templates (subscription required).
     * Retrieve Enrollment and Verification Phone Templates
     *
     * @throws {RequiredError}
     */
    getPhoneFactorTemplates(initOverrides?: InitOverride): Promise<ApiResponse<TemplateMessages>>;
    /**
     * Retrieve SMS enrollment and verification templates (subscription required).
     *
     *     A new endpoint is available to retrieve enrollment and verification templates related to phone factors (<a href='https://manage.local.dev.auth0.com/docs/api/management/v2/#!/Guardian/get_templates'>phone templates</a>). It has the same payload as this one. Please use it instead.
     * Retrieve SMS Enrollment and Verification Templates
     *
     * @throws {RequiredError}
     */
    getSmsFactorTemplates(initOverrides?: InitOverride): Promise<ApiResponse<TemplateMessages | void>>;
    /**
     * Retrieve all <a href="https://auth0.com/docs/multifactor-authentication">multi-factor authentication</a> configurations.
     * Retrieve Factors and their Status
     *
     * @throws {RequiredError}
     */
    getFactors(initOverrides?: InitOverride): Promise<ApiResponse<Array<Factor>>>;
    /**
     * Retrieve the Enabled Phone Factors
     *
     * @throws {RequiredError}
     */
    getPhoneFactorMessageTypes(initOverrides?: InitOverride): Promise<ApiResponse<GetMessageTypes200Response>>;
    /**
     * Retrieve phone configuration (one of auth0|twilio|phone-message-hook)
     *
     * @throws {RequiredError}
     */
    getPhoneFactorSelectedProvider(initOverrides?: InitOverride): Promise<ApiResponse<GetPhoneProviders200Response>>;
    /**
     * Retrieve the <a href="https://auth0.com/docs/multifactor-authentication/twilio-configuration">Twilio phone provider configuration</a> (subscription required).
     * Retrieve Twilio phone configuration
     *
     * @throws {RequiredError}
     */
    getPhoneFactorProviderTwilio(initOverrides?: InitOverride): Promise<ApiResponse<TwilioFactorProvider>>;
    /**
     * Retrieve push notification provider
     *
     * @throws {RequiredError}
     */
    getPushNotificationSelectedProvider(initOverrides?: InitOverride): Promise<ApiResponse<GetPnProviders200Response>>;
    /**
     * Gets the MFA policies for the tenant.
     *
     * The following policies are supported: <ul><li><code>all-applications</code> policy - will prompt with MFA for all logins.</li><li><code>confidence-score</code> policy - will prompt with MFA only for low confidence logins.</li></ul>
     * Use of the Adaptive MFA feature requires an add-on for the Enterprise plan. Please contact sales with any questions. For more information about Adaptive MFA, read our <a href="https://auth0.com/docs/mfa/adaptive-mfa">full documentation</a>.
     *
     * Get the Multi-factor Authentication policies
     *
     * @throws {RequiredError}
     */
    getPolicies(initOverrides?: InitOverride): Promise<ApiResponse<Array<string>>>;
    /**
     * A new endpoint is available to retrieve the configuration related to phone factors (<a href='https://manage.local.dev.auth0.com/docs/api/management/v2/#!/Guardian/get_selected_provider'>phone configuration</a>). It has the same payload as this one. Please use it instead.
     * Retrieve SMS configuration (one of auth0|twilio|phone-message-hook)
     *
     * @throws {RequiredError}
     */
    getSmsSelectedProvider(initOverrides?: InitOverride): Promise<ApiResponse<GetPhoneProviders200Response>>;
    /**
     * Retrieve the <a href="https://auth0.com/docs/multifactor-authentication/twilio-configuration">Twilio SMS provider configuration</a> (subscription required).
     *
     *     A new endpoint is available to retrieve the Twilio configuration related to phone factors (<a href='https://manage.local.dev.auth0.com/docs/api/management/v2/#!/Guardian/get_twilio'>phone Twilio configuration</a>). It has the same payload as this one. Please use it instead.
     * Retrieve Twilio SMS configuration
     *
     * @throws {RequiredError}
     */
    getSmsFactorProviderTwilio(initOverrides?: InitOverride): Promise<ApiResponse<SmsTwilioFactorProvider>>;
    /**
     * Retrieve the <a href="https://auth0.com/docs/multifactor-authentication/developer/sns-configuration">AWS SNS push notification provider configuration</a> (subscription required).
     * Retrieve AWS SNS push notification configuration
     *
     * @throws {RequiredError}
     */
    getPushNotificationProviderSNS(initOverrides?: InitOverride): Promise<ApiResponse<SnsFactorProvider>>;
    /**
     * Updates APNs provider configuration
     *
     * @throws {RequiredError}
     */
    updatePushNotificationProviderAPNS(bodyParameters: PutApnsRequest, initOverrides?: InitOverride): Promise<ApiResponse<PutApns200Response>>;
    /**
     * Updates FCM provider configuration
     *
     * @throws {RequiredError}
     */
    updatePushNotificationProviderFCM(bodyParameters: PutFcmRequest, initOverrides?: InitOverride): Promise<ApiResponse<{
        [key: string]: any;
    }>>;
    /**
     * Configure the <a href="https://auth0.com/docs/multifactor-authentication/developer/sns-configuration">AWS SNS push notification provider configuration</a> (subscription required).
     * Update SNS configuration for push notifications
     *
     * @throws {RequiredError}
     */
    updatePushNotificationProviderSNS(bodyParameters: PutSnsRequest, initOverrides?: InitOverride): Promise<ApiResponse<PutSns200Response>>;
    /**
     * Generate an email with a link to start the multi-factor authentication enrollment process (subscription required).
     * Create a multi-factor authentication enrollment ticket
     *
     * @throws {RequiredError}
     */
    createEnrollmentTicket(bodyParameters: EnrollmentCreate, initOverrides?: InitOverride): Promise<ApiResponse<PostTicket200Response>>;
    /**
     * Updates APNs provider configuration
     *
     * @throws {RequiredError}
     */
    setPushNotificationProviderAPNS(bodyParameters: PutApnsRequest, initOverrides?: InitOverride): Promise<ApiResponse<PutApns200Response>>;
    /**
     * Customize the messages sent to complete phone enrollment and verification (subscription required).
     * Update Enrollment and Verification Phone Templates
     *
     * @throws {RequiredError}
     */
    setPhoneFactorTemplates(bodyParameters: TemplateMessages, initOverrides?: InitOverride): Promise<ApiResponse<TemplateMessages>>;
    /**
     * Customize the messages sent to complete SMS enrollment and verification (subscription required).
     *
     *     A new endpoint is available to update enrollment and verification templates related to phone factors (<a href='https://manage.local.dev.auth0.com/docs/api/management/v2/#!/Guardian/put_templates'>phone templates</a>). It has the same payload as this one. Please use it instead.
     * Update SMS Enrollment and Verification Templates
     *
     * @throws {RequiredError}
     */
    setSmsFactorTemplates(bodyParameters: TemplateMessages, initOverrides?: InitOverride): Promise<ApiResponse<TemplateMessages>>;
    /**
     * Update a multi-factor authentication factor (subscription required).
     * Update a Multi-factor Authentication Factor
     *
     * @throws {RequiredError}
     */
    updateFactor(requestParameters: PutFactorsByNameOperationRequest, bodyParameters: PutFactorsByNameRequest, initOverrides?: InitOverride): Promise<ApiResponse<PutFactorsByName200Response>>;
    /**
     * Updates FCM provider configuration
     *
     * @throws {RequiredError}
     */
    setPushNotificationProviderFCM(bodyParameters: PutFcmRequest, initOverrides?: InitOverride): Promise<ApiResponse<{
        [key: string]: any;
    }>>;
    /**
     * Update enabled phone factors for multi-factor authentication
     * Update the Enabled Phone Factors
     *
     * @throws {RequiredError}
     */
    updatePhoneFactorMessageTypes(bodyParameters: GetMessageTypes200Response, initOverrides?: InitOverride): Promise<ApiResponse<GetMessageTypes200Response>>;
    /**
     * Update phone configuration (one of auth0|twilio|phone-message-hook)
     *
     * @throws {RequiredError}
     */
    updatePhoneFactorSelectedProvider(bodyParameters: GetPhoneProviders200Response, initOverrides?: InitOverride): Promise<ApiResponse<GetPhoneProviders200Response>>;
    /**
     * Update Push Notification configuration (one of direct|sns|guardian)
     *
     * @throws {RequiredError}
     */
    setPushNotificationSelectedProvider(bodyParameters: GetPnProviders200Response, initOverrides?: InitOverride): Promise<ApiResponse<GetPnProviders200Response>>;
    /**
     * Sets the MFA policies for the tenant.
     *
     * The following policies are supported: <ul><li><code>all-applications</code> policy - will prompt with MFA for all logins.</li><li><code>confidence-score</code> policy - will prompt with MFA only for low confidence logins.</li></ul> Pass an empty array to remove all MFA policies.
     * Use of the Adaptive MFA feature requires an add-on for the Enterprise plan. Please contact sales with any questions. For more information about Adaptive MFA, read our <a href="https://auth0.com/docs/mfa/adaptive-mfa">full documentation</a>.
     *
     *
     * Set the Multi-factor Authentication policies
     *
     * @throws {RequiredError}
     */
    updatePolicies(bodyParameters: Array<string>, initOverrides?: InitOverride): Promise<ApiResponse<Array<string>>>;
    /**
     * A new endpoint is available to update the configuration related to phone factors (<a href='https://manage.local.dev.auth0.com/docs/api/management/v2/#!/Guardian/put_selected_provider'>phone configuration</a>). It has the same payload as this one. Please use it instead.
     * Update SMS configuration (one of auth0|twilio|phone-message-hook)
     *
     * @throws {RequiredError}
     */
    setSmsSelectedProvider(bodyParameters: GetPhoneProviders200Response, initOverrides?: InitOverride): Promise<ApiResponse<GetPhoneProviders200Response>>;
    /**
     * Configure the <a href="https://auth0.com/docs/multifactor-authentication/twilio-configuration">Twilio SMS provider configuration</a> (subscription required).
     *
     *     A new endpoint is available to update the Twilio configuration related to phone factors (<a href='https://manage.local.dev.auth0.com/docs/api/management/v2/#!/Guardian/put_twilio'>phone Twilio configuration</a>). It has the same payload as this one. Please use it instead.
     * Update Twilio SMS configuration
     *
     * @throws {RequiredError}
     */
    setSmsFactorProviderTwilio(bodyParameters: PutTwilioRequest, initOverrides?: InitOverride): Promise<ApiResponse<SmsTwilioFactorProvider>>;
    /**
     * Configure the <a href="https://auth0.com/docs/multifactor-authentication/developer/sns-configuration">AWS SNS push notification provider configuration</a> (subscription required).
     * Update AWS SNS push notification configuration
     *
     * @throws {RequiredError}
     */
    setPushNotificationProviderSNS(bodyParameters: PutSnsRequest, initOverrides?: InitOverride): Promise<ApiResponse<PutSns200Response>>;
    /**
     * Configure the <a href="https://auth0.com/docs/multifactor-authentication/twilio-configuration">Twilio phone provider configuration</a> (subscription required).
     * Update Twilio phone configuration
     *
     * @throws {RequiredError}
     */
    updatePhoneFactorProviderTwilio(bodyParameters: PutTwilioRequest, initOverrides?: InitOverride): Promise<ApiResponse<TwilioFactorProvider>>;
}
export {};
