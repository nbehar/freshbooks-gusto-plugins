/**
 * Shared utilities for building Bill.com v3 API list query parameters.
 *
 * The v3 API uses:
 *   - `filters=field:op:value,field2:op:value2` for filtering
 *   - `sort=field:direction` for sorting
 *   - `max` for page size and `page` for cursor-based pagination
 */
export type FilterOp = "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "in" | "nin" | "sw";
export interface FilterClause {
    field: string;
    op: FilterOp;
    value: string | number | boolean;
}
/**
 * Build the `filters` query string from an array of filter clauses.
 *
 * String/date values are wrapped in double quotes per the API spec.
 * Numbers and booleans are left unquoted.
 *
 * Example output: `vendorId:eq:"v123",createdTime:gte:"2025-01-01"`
 */
export declare function buildFilterString(clauses: FilterClause[]): string;
/**
 * Build the complete query params object for a Bill.com v3 list endpoint.
 *
 * Always includes `max` (default 50).
 * Only includes `sort`, `filters`, and `page` when they have values.
 *
 * Note: Not all endpoints support the same sort fields. For example,
 * recurring bills only support sorting by `archived`. The caller should
 * only pass `sort` when the endpoint supports the desired sort field.
 */
export declare function buildListParams(options: {
    max?: number;
    page?: string;
    sort?: string;
    filters?: FilterClause[];
}): Record<string, string | number>;
//# sourceMappingURL=list-params.d.ts.map