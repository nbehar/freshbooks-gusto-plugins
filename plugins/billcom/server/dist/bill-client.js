/**
 * Bill.com API Client
 *
 * Provides a wrapper around the Bill.com AP/AR API with session-based authentication
 * and error handling.
 */
import axios from "axios";
export class BillApiError extends Error {
    errorType;
    status;
    constructor(message, status, errorType) {
        super(message);
        this.name = "BillApiError";
        this.errorType = errorType;
        this.status = status;
    }
}
/**
 * Bill.com API Client with session management
 */
export class BillClient {
    client;
    baseUrl;
    devKey;
    username;
    password;
    organizationId;
    authType;
    sessionId = null;
    sessionExpiresAt = 0;
    constructor(config) {
        this.devKey = config.devKey;
        this.authType = config.authType;
        if (config.authType === "session_token") {
            // For session_token auth, use the provided token directly
            if (!config.sessionToken) {
                throw new Error("sessionToken is required for session_token auth type");
            }
            this.sessionId = config.sessionToken;
            // External session - no expiration tracking (managed externally)
            this.sessionExpiresAt = Number.MAX_SAFE_INTEGER;
        }
        else {
            // For sync_token and full_access, require login credentials
            if (!config.username || !config.password || !config.organizationId) {
                throw new Error("username, password, and organizationId are required for sync_token and full_access auth types");
            }
            this.username = config.username;
            this.password = config.password;
            this.organizationId = config.organizationId;
        }
        // Set base URL based on environment - AP/AR API uses /v3
        this.baseUrl =
            config.environment === "production"
                ? "https://gateway.prod.bill.com/connect/v3"
                : "https://gateway.stage.bill.com/connect/v3";
        // Create axios instance with default configuration
        this.client = axios.create({
            baseURL: this.baseUrl,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            timeout: 30000, // 30 second timeout
        });
        // Add response interceptor for error handling
        this.client.interceptors.response.use((response) => response, (error) => {
            return Promise.reject(this.handleError(error));
        });
    }
    /**
     * Login and get session ID
     */
    async login() {
        // For session_token auth, we don't login - session is managed externally
        if (this.authType === "session_token") {
            if (!this.sessionId) {
                throw new Error("Session token was not provided or has been cleared");
            }
            return;
        }
        console.error(`[Bill.com API] Logging in (${this.authType})...`);
        try {
            const response = await this.client.post("/login", {
                username: this.username,
                password: this.password,
                organizationId: this.organizationId,
                devKey: this.devKey,
            });
            this.sessionId = response.data.sessionId;
            if (!this.sessionId) {
                throw new Error("No sessionId in login response");
            }
            // Session expiration depends on auth type:
            // - sync_token: 48 hours (when idle)
            // - full_access: 35 minutes (when idle)
            const sessionDurationMs = this.authType === "sync_token"
                ? 48 * 60 * 60 * 1000 // 48 hours
                : 35 * 60 * 1000; // 35 minutes
            this.sessionExpiresAt = Date.now() + sessionDurationMs;
            console.error(`[Bill.com API] Login successful (${this.authType}), session expires in ${this.authType === "sync_token" ? "48 hours" : "35 minutes"}`);
        }
        catch (error) {
            console.error("[Bill.com API] Login failed");
            const detail = error instanceof Error ? error.message : String(error);
            throw new Error(`Failed to login to Bill.com API: ${detail}`);
        }
    }
    /**
     * Ensure we have a valid session
     */
    async ensureSession() {
        // Check if session exists and is not expired (with 5 min buffer)
        const bufferMs = 5 * 60 * 1000;
        if (this.sessionId && Date.now() < this.sessionExpiresAt - bufferMs) {
            return;
        }
        // Login to get new session
        await this.login();
    }
    /**
     * Get headers including session ID
     */
    async getHeaders() {
        await this.ensureSession();
        return {
            sessionId: this.sessionId,
            devKey: this.devKey,
        };
    }
    /**
     * Handle API errors and convert to a standard format
     */
    handleError(error) {
        console.error("[Bill.com API] Error details:", {
            status: error.response?.status,
            code: error.code,
        });
        if (error.response) {
            return new BillApiError(`Bill.com API error (${error.response.status})`, error.response.status, "api_error");
        }
        else if (error.request) {
            return new BillApiError("No response received from Bill.com API", 0, "network_error");
        }
        else {
            return new BillApiError("Bill.com API client error", 0, "client_error");
        }
    }
    /**
     * Make a GET request to the Bill.com API
     */
    async get(endpoint, params) {
        const headers = await this.getHeaders();
        console.error(`[Bill.com API] GET ${endpoint}`);
        const response = await this.client.get(endpoint, { params, headers });
        return response.data;
    }
    /**
     * Make a POST request to the Bill.com API
     */
    async post(endpoint, data) {
        const headers = await this.getHeaders();
        const response = await this.client.post(endpoint, data, { headers });
        return response.data;
    }
    /**
     * Make a PUT request to the Bill.com API
     */
    async put(endpoint, data) {
        const headers = await this.getHeaders();
        const response = await this.client.put(endpoint, data, { headers });
        return response.data;
    }
    /**
     * Make a PATCH request to the Bill.com API
     */
    async patch(endpoint, data) {
        const headers = await this.getHeaders();
        const response = await this.client.patch(endpoint, data, { headers });
        return response.data;
    }
    /**
     * Make a DELETE request to the Bill.com API
     */
    async delete(endpoint) {
        const headers = await this.getHeaders();
        const response = await this.client.delete(endpoint, { headers });
        return response.data;
    }
}
//# sourceMappingURL=bill-client.js.map