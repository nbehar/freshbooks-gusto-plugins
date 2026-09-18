/**
 * Shared utilities for building Bill.com v3 API list query parameters.
 *
 * The v3 API uses:
 *   - `filters=field:op:value,field2:op:value2` for filtering
 *   - `sort=field:direction` for sorting
 *   - `max` for page size and `page` for cursor-based pagination
 */
/**
 * Build the `filters` query string from an array of filter clauses.
 *
 * String/date values are wrapped in double quotes per the API spec.
 * Numbers and booleans are left unquoted.
 *
 * Example output: `vendorId:eq:"v123",createdTime:gte:"2025-01-01"`
 */
export function buildFilterString(clauses) {
    return clauses
        .map((c) => {
        const formattedValue = typeof c.value === "string" ? `"${c.value}"` : String(c.value);
        return `${c.field}:${c.op}:${formattedValue}`;
    })
        .join(",");
}
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
export function buildListParams(options) {
    const params = {};
    params.max = options.max ?? 50;
    // Only include sort if explicitly provided - not all endpoints support the same sort fields
    if (options.sort) {
        params.sort = options.sort;
    }
    if (options.page) {
        params.page = options.page;
    }
    if (options.filters && options.filters.length > 0) {
        params.filters = buildFilterString(options.filters);
    }
    return params;
}
//# sourceMappingURL=list-params.js.map