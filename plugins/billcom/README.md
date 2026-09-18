# Bill.com Plugin

Cursor / Grok Bot plugin for Bill.com **Accounts Payable** and **Accounts Receivable** via Civic’s AP/AR MCP server (vendored; not published on npm).

## Requirements

- **Node.js ≥ 20.19** (see `server/package.json` `engines`)
- Network access on first run if `node_modules` is missing (`npm ci`)

## Configuration

Set plugin variables (Plugins → Configure). Mapping from the Bill.com portal ([Civic docs](https://github.com/civicteam/bill-mcp-server/tree/main/ap-ar)):

| Bill.com portal | Plugin variable | Notes |
|-----------------|-----------------|-------|
| Developer Key | `BILL_DEV_KEY` | Settings → Sync & Integrations → Manage Developer Keys |
| Sync Token Name | `BILL_USERNAME` | Create AP/AR Sync Token; use the **name** |
| Sync Token Value | `BILL_PASSWORD` | Token **value** (shown once) |
| Organization ID | `BILL_ORGANIZATION_ID` | Starts with `008` |
| — | `BILL_ENVIRONMENT` | `production` (default) or `sandbox` |
| — | `BILL_AUTH_TYPE` | `sync_token` (default), `full_access`, or `session_token` |
| — | `BILL_SESSION_TOKEN` | Required only when `BILL_AUTH_TYPE=session_token`; stored as a secret |

### Auth types (summary)

| Feature | `sync_token` | `full_access` |
|---------|--------------|---------------|
| Read/create vendors, bills, invoices, customers | Yes | Yes |
| Pay bills, void payments, send invoices, charge customers | No | Yes |
| Session duration | ~48 hours | ~35 minutes |

For `full_access`, `BILL_USERNAME` / `BILL_PASSWORD` are the Bill.com user email and password. For `session_token`, set `BILL_SESSION_TOKEN`; the server does not use username, password, or organization ID. Prefer sync tokens for read/sync workflows.

The plugin schema requires the default `sync_token` credentials so incomplete installs fail early; `BILL_SESSION_TOKEN` stays optional in the schema and the launcher requires it when `BILL_AUTH_TYPE=session_token`.

## How the MCP server launches

`mcp.json` uses the cross-platform Node launcher:

```text
node ${CURSOR_PLUGIN_ROOT}/scripts/run-mcp.cjs
```

The launcher installs dependencies when `server/node_modules` is absent and rebuilds when
`server/dist/index.js` is absent or older than `server/src/`. The shell launcher remains
available as a POSIX fallback. Credentials are passed via env placeholders from plugin variables.

### Rebuild locally

```bash
cd plugins/billcom/server
npm ci
npm run build
```

Prebuilt `dist/` and `package-lock.json` are committed so a cold start only needs `npm ci` when `node_modules` is absent. **Do not** commit secrets or `.env`.

## Skills

- **billcom-setup** — credentials, env, auth type, first read check
- **billcom-vendors** — vendor list/get/create/update
- **billcom-bills-and-payments** — bills, recurring bills, AP payments, vendor credits
- **billcom-ar-invoices** — customers, invoices, credit memos, receivable payments
- **billcom-write-safely** — mandatory confirmation before money or irreversible writes

## Attribution

- MCP server source: [civicteam/bill-mcp-server](https://github.com/civicteam/bill-mcp-server) `ap-ar/` (MIT, Civic)
- Plugin packaging and skills: Nikolas Behar (MIT, 2026)

## License

MIT — see [LICENSE](./LICENSE). Upstream AP/AR server is also MIT (Civic).
