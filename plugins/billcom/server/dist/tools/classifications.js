/**
 * Classification management tools (GL tracking categories)
 */
import { buildListParams } from "./list-params.js";
/**
 * List departments
 */
export const listDepartments = {
    name: "list_departments",
    description: "List departments for GL classification and tracking.",
    inputSchema: {
        type: "object",
        properties: {
            limit: {
                type: "number",
                description: "Maximum number of departments to return per page (default: 50, max: 100)",
                default: 50,
            },
            page: {
                type: "string",
                description: "Cursor token for the next page of results.",
            },
        },
        required: [],
    },
    handler: async (args, client) => {
        const { limit, page } = args;
        try {
            const params = buildListParams({ max: limit, page });
            const departments = await client.get("/classifications/departments", params);
            return {
                success: true,
                data: departments,
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
/**
 * List locations
 */
export const listLocations = {
    name: "list_locations",
    description: "List locations for GL classification and tracking.",
    inputSchema: {
        type: "object",
        properties: {
            limit: {
                type: "number",
                description: "Maximum number of locations to return per page (default: 50, max: 100)",
                default: 50,
            },
            page: {
                type: "string",
                description: "Cursor token for the next page of results.",
            },
        },
        required: [],
    },
    handler: async (args, client) => {
        const { limit, page } = args;
        try {
            const params = buildListParams({ max: limit, page });
            const locations = await client.get("/classifications/locations", params);
            return {
                success: true,
                data: locations,
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
/**
 * List jobs
 */
export const listJobs = {
    name: "list_jobs",
    description: "List jobs/projects for GL classification and tracking.",
    inputSchema: {
        type: "object",
        properties: {
            limit: {
                type: "number",
                description: "Maximum number of jobs to return per page (default: 50, max: 100)",
                default: 50,
            },
            page: {
                type: "string",
                description: "Cursor token for the next page of results.",
            },
        },
        required: [],
    },
    handler: async (args, client) => {
        const { limit, page } = args;
        try {
            const params = buildListParams({ max: limit, page });
            const jobs = await client.get("/classifications/jobs", params);
            return {
                success: true,
                data: jobs,
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
/**
 * List employees
 */
export const listEmployees = {
    name: "list_employees",
    description: "List employees for GL classification and tracking.",
    inputSchema: {
        type: "object",
        properties: {
            limit: {
                type: "number",
                description: "Maximum number of employees to return per page (default: 50, max: 100)",
                default: 50,
            },
            page: {
                type: "string",
                description: "Cursor token for the next page of results.",
            },
        },
        required: [],
    },
    handler: async (args, client) => {
        const { limit, page } = args;
        try {
            const params = buildListParams({ max: limit, page });
            const employees = await client.get("/classifications/employees", params);
            return {
                success: true,
                data: employees,
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
/**
 * List items
 */
export const listItems = {
    name: "list_items",
    description: "List items (products/services) for GL classification and tracking.",
    inputSchema: {
        type: "object",
        properties: {
            limit: {
                type: "number",
                description: "Maximum number of items to return per page (default: 50, max: 100)",
                default: 50,
            },
            page: {
                type: "string",
                description: "Cursor token for the next page of results.",
            },
        },
        required: [],
    },
    handler: async (args, client) => {
        const { limit, page } = args;
        try {
            const params = buildListParams({ max: limit, page });
            const items = await client.get("/classifications/items", params);
            return {
                success: true,
                data: items,
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
/**
 * List accounting classes
 */
export const listAccountingClasses = {
    name: "list_accounting_classes",
    description: "List accounting classes for GL classification and tracking.",
    inputSchema: {
        type: "object",
        properties: {
            limit: {
                type: "number",
                description: "Maximum number of accounting classes to return per page (default: 50, max: 100)",
                default: 50,
            },
            page: {
                type: "string",
                description: "Cursor token for the next page of results.",
            },
        },
        required: [],
    },
    handler: async (args, client) => {
        const { limit, page } = args;
        try {
            const params = buildListParams({ max: limit, page });
            const classes = await client.get("/classifications/accounting-classes", params);
            return {
                success: true,
                data: classes,
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
//# sourceMappingURL=classifications.js.map