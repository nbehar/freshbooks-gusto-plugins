/**
 * Tool Registry
 *
 * Central registry of all available Bill.com MCP tools
 */
import { BillClient } from "../bill-client.js";
export interface Tool {
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        properties: Record<string, any>;
        required?: string[];
    };
    handler: (args: any, client: BillClient) => Promise<any>;
}
/**
 * All available tools for Bill.com AP/AR API integration
 *
 * Tools marked with "(Full API Access)" require full API access with real
 * username/password credentials and are not available with sync tokens.
 */
export declare const tools: Tool[];
//# sourceMappingURL=index.d.ts.map