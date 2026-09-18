# FreshBooks & Gusto Plugins

Multi-plugin marketplace for **Cursor** and **Grok Bot**: FreshBooks accounting and Gusto payroll via MCP.

## Layout

```
freshbooks-gusto-plugins/
├── .cursor-plugin/marketplace.json
├── plugins/
│   ├── freshbooks/
│   └── gusto/
├── README.md
└── LICENSE
```

## Local install / use

1. Open Cursor (or Grok Bot) and add this folder as a local plugin marketplace, or point the plugin root at `plugins/`.
2. Enable the **freshbooks** and/or **gusto** plugins from the marketplace.
3. Configure credentials as described below.
4. Restart MCP / reload the window if tools do not appear.

Requires [uv](https://docs.astral.sh/uv/) (`uvx`) for the FreshBooks server. Gusto uses a remote HTTP MCP and needs no local package.

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

- Gusto’s official MCP is remote: `https://mcp.api.gusto.com`.
- Connect with a **Primary** or **Global** admin account.
- For demos, Gusto may expose `https://mcp.api.gusto-demo.com`.
- **Always** require explicit user confirmation before any write (run payroll, onboard, log time, move money).
- Prefer isolated sessions for payroll work and verify LLM output against the Gusto UI before acting on money or people data.
- See the **gusto-write-safely** skill for the hard rules.

## Attribution

- FreshBooks MCP: [mcp-freshbooks](https://github.com/AlexlaGuardia/mcp-freshbooks) by Alex LaGuardia (MIT).
- Gusto MCP: official remote endpoint at `https://mcp.api.gusto.com`.
- Plugin packaging and skills: Nikolas Behar (MIT, 2026).

## License

MIT — see [LICENSE](./LICENSE).
