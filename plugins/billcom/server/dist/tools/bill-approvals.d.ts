/**
 * Bill Approval management tools
 *
 * Note: With AP/AR sync token authentication, users can manage approval policies
 * and view pending approvals, but CANNOT approve/deny bills. The approve/deny
 * endpoint is included for completeness but will return an error with sync tokens.
 */
import { Tool } from "./index.js";
/**
 * List bill approval policies
 */
export declare const listBillApprovalPolicies: Tool;
/**
 * Create bill approval policy
 */
export declare const createBillApprovalPolicy: Tool;
/**
 * Update bill approval policy
 */
export declare const updateBillApprovalPolicy: Tool;
/**
 * Delete bill approval policy
 */
export declare const deleteBillApprovalPolicy: Tool;
/**
 * List bills pending approval
 */
export declare const listPendingBillApprovals: Tool;
/**
 * Approve a bill (Full API Access only)
 */
export declare const approveBill: Tool;
/**
 * Deny a bill (Full API Access only)
 */
export declare const denyBill: Tool;
//# sourceMappingURL=bill-approvals.d.ts.map