/**
 * Bill.com API Client
 *
 * Provides a wrapper around the Bill.com AP/AR API with session-based authentication
 * and error handling.
 */
/**
 * Authentication type for Bill.com API
 *
 * - sync_token: Uses AP/AR sync token (limited access, 48-hour session)
 *   Username = sync token name, Password = sync token value
 *   Cannot: pay bills, void payments, charge customers, manage users, send invoices
 *
 * - full_access: Uses real user credentials (full access, 35-minute session)
 *   Username = user email, Password = user password
 *   Can: all operations including payments, user management, and invoicing
 *
 * - session_token: Uses an externally-provided session token (no login required)
 *   Useful when auth is handled by an external system
 *   Session management is external - token is used as-is
 */
export type AuthType = "sync_token" | "full_access" | "session_token";
export interface BillConfig {
    devKey: string;
    environment: "sandbox" | "production";
    authType: AuthType;
    username?: string;
    password?: string;
    organizationId?: string;
    sessionToken?: string;
}
export declare class BillApiError extends Error {
    readonly errorType: string;
    readonly status: number;
    constructor(message: string, status: number, errorType: string);
}
/**
 * Bill.com API Client with session management
 */
export declare class BillClient {
    private client;
    private readonly baseUrl;
    private readonly devKey;
    private readonly username;
    private readonly password;
    private readonly organizationId;
    private readonly authType;
    private sessionId;
    private sessionExpiresAt;
    constructor(config: BillConfig);
    /**
     * Login and get session ID
     */
    private login;
    /**
     * Ensure we have a valid session
     */
    private ensureSession;
    /**
     * Get headers including session ID
     */
    private getHeaders;
    /**
     * Handle API errors and convert to a standard format
     */
    private handleError;
    /**
     * Make a GET request to the Bill.com API
     */
    get<T = any>(endpoint: string, params?: Record<string, any>): Promise<T>;
    /**
     * Make a POST request to the Bill.com API
     */
    post<T = any>(endpoint: string, data?: Record<string, any>): Promise<T>;
    /**
     * Make a PUT request to the Bill.com API
     */
    put<T = any>(endpoint: string, data?: Record<string, any>): Promise<T>;
    /**
     * Make a PATCH request to the Bill.com API
     */
    patch<T = any>(endpoint: string, data?: Record<string, any>): Promise<T>;
    /**
     * Make a DELETE request to the Bill.com API
     */
    delete<T = any>(endpoint: string): Promise<T>;
}
//# sourceMappingURL=bill-client.d.ts.map