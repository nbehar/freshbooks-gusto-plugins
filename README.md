# FreshBooks, Gusto, Bill.com & Era Context Plugins

Multi-plugin marketplace for **Cursor** and **Grok Bot**: FreshBooks accounting,
Gusto payroll, Bill.com AP/AR, and Era financial context via MCP.

## Layout

```
freshbooks-gusto-plugins/
├── .cursor-plugin/marketplace.json
├── plugins/
│   ├── freshbooks/
│   ├── gusto/
│   ├── billcom/
│   └── era/
├── README.md
└── LICENSE
```

## Local install / use

1. Open Cursor (or Grok Bot) and add this folder as a local plugin marketplace, or point the plugin root at `plugins/`.
2. Enable the **freshbooks**, **gusto**, **billcom**, and/or **era** plugins from the marketplace.
3. Configure credentials as described below (and in each plugin README).
4. Restart MCP / reload the window if tools do not appear.

Requires [uv](https://docs.astral.sh/uv/) (`uvx`) for the FreshBooks server.
Gusto and Era use remote HTTP MCP servers and need no local package. Bill.com
uses a **vendored** Node MCP server (Node.js ≥ 20.19); first launch may run
`npm ci` if `node_modules` is missing.

## Submit to Cursor Marketplace

When ready to publish:

1. Ensure `marketplace.json` and each `plugin.json` are valid.
2. Push this repo to a public Git host once SCM is connected.
3. Submit at [cursor.com/marketplace/publish](https://cursor.com/marketplace/publish).

## FreshBooks OAuth setup

1. Create an OAuth app at [freshbooks.com/pages/developer-signup](https://www.freshbooks.com/pages/developer-signup).
2. Set the redirect URI (default for this plugin: `https://localhost:8555/callback`).
3. Copy the client ID and client secret into plugin variables:
   - `FRESHBOOKS_CLIENT_ID`
   - `FRESHBOOKS_CLIENT_SECRET`
   - `FRESHBOOKS_REDIRECT_URI` (optional; defaults as above)
4. Use the **freshbooks-setup** skill, then call `freshbooks_authenticate` to complete the OAuth flow.

The FreshBooks MCP server is launched via:

```text
uvx mcp-freshbooks==0.2.0
```

## Gusto security notes

- Gusto’s official MCP defaults to `https://mcp.api.gusto.com`; set `GUSTO_MCP_URL=https://mcp.api.gusto-demo.com` for demos.
- Connect with a **Primary** or **Global** admin account.
- **Always** require explicit user confirmation before any write (run payroll, onboard, log time, move money).
- Prefer isolated sessions for payroll work and verify LLM output against the Gusto UI before acting on money or people data.
- See the **gusto-write-safely** skill for the hard rules.

## Bill.com AP/AR setup

Vendored from [civicteam/bill-mcp-server](https://github.com/civicteam/bill-mcp-server) `ap-ar/` (not on npm). Launcher: `plugins/billcom/scripts/run-mcp.sh` → `node server/dist/index.js`.

| Bill.com portal | Variable |
|-----------------|----------|
| Developer Key | `BILL_DEV_KEY` |
| Sync Token Name | `BILL_USERNAME` |
| Sync Token Value | `BILL_PASSWORD` |
| Organization ID (`008…`) | `BILL_ORGANIZATION_ID` |
| Environment (default production) | `BILL_ENVIRONMENT` |
| Auth type (default sync_token) | `BILL_AUTH_TYPE` |

See **plugins/billcom/README.md** and skills **billcom-setup** / **billcom-write-safely**. Prefer `sync_token` for reads; use `full_access` only for pay/send/charge. Never commit secrets.

## Era Context setup and safety

- Era Context is a remote Streamable HTTP MCP at `https://context.era.app`
  (`https://context.era.app/mcp` is the explicit-path equivalent).
- No plugin secrets or variables are required; connect with OAuth 2.1 and begin
  with a read-only overview.
- Review least-privilege scopes. Billing writes require the separate
  `mcp:billing-write` scope and extra consent.
- Every transfer between the user's own accounts requires explicit
  confirmation. Forget, disconnect, destructive, and other write tools also
  require a preview and confirmation.
- Never pass bank credentials to the assistant. Use Era's hosted bank
  connection flow.
- See **plugins/era/README.md** and skills **era-setup** /
  **era-write-safely** for details.

Write guards in this marketplace are skill-level instructions, not programmatic access
controls. Use provider permissions and least-privilege credentials as the enforcement layer.

## Attribution

- FreshBooks MCP: [mcp-freshbooks](https://github.com/AlexlaGuardia/mcp-freshbooks) by Alex LaGuardia (MIT).
- Gusto MCP: official remote endpoint at `https://mcp.api.gusto.com`.
- Bill.com AP/AR MCP: [civicteam/bill-mcp-server](https://github.com/civicteam/bill-mcp-server) `ap-ar/` (MIT, Civic).
- Era Context MCP: official remote endpoint at `https://context.era.app`.
- Plugin packaging and skills: Nikolas Behar (MIT, 2026).

## License

MIT — see [LICENSE](./LICENSE).
