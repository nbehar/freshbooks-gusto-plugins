/**
 * Account-related tools for AP/AR API
 */
/**
 * Get organization information
 */
export const getOrganizationInfo = {
    name: "get_organization_info",
    description: "Get information about the current Bill.com organization, including organization details and settings",
    inputSchema: {
        type: "object",
        properties: {},
        required: [],
    },
    handler: async (args, client) => {
        try {
            // Using AP/AR API endpoint: GET /v3/organizations
            const orgInfo = await client.get("/organizations");
            return {
                success: true,
                data: orgInfo,
            };
        }
        catch (error) {
            return {
                success: false,
                error: error instanceof Error ? error.message : "Unknown error",
            };
        }
    },
};
//# sourceMappingURL=account.js.map