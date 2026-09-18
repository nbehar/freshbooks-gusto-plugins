---
name: billcom-setup
description: Use this when the user needs to connect Bill.com AP/AR MCP, map portal credentials to plugin variables, choose sandbox vs production, or pick sync_token vs full_access.
---

# Bill.com setup

Configure the vendored Civic Bill.com AP/AR MCP before any AP/AR work.

## Credential mapping

| Bill.com portal | Variable |
|-----------------|----------|
| Developer Key (Settings → Sync & Integrations → Manage Developer Keys) | `BILL_DEV_KEY` |
| Sync Token **Name** | `BILL_USERNAME` |
| Sync Token **Value** | `BILL_PASSWORD` |
| Organization ID (starts with `008`) | `BILL_ORGANIZATION_ID` |

Optional:

- `BILL_ENVIRONMENT` — default `production`; use `sandbox` for app-sandbox.bill.com testing
- `BILL_AUTH_TYPE` — default `sync_token`; use `full_access` only when payments / send invoice / charge are required

## Steps

1. Confirm plugin variables are set (no secrets in chat or git).
2. Prefer **sync_token** for listing vendors, bills, invoices, and reporting.
3. Use **full_access** only when the user needs pay/void/send/charge (and they accept shorter sessions).
4. Verify with a read-only tool first (e.g. list vendors or list bills) before any writes.
5. If auth fails, re-check org id (`008…`), token name vs value swap, and environment (production vs sandbox).

## Notes

- Node.js ≥ 20.19 required. First launch may run `npm ci` if `node_modules` is missing.
- Never paste live tokens into commits, issues, or shared logs.
