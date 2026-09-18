# Gusto Plugin

Cursor / Grok Bot plugin for Gusto payroll via Gusto’s official remote MCP.

## Configuration

`GUSTO_MCP_URL` is optional and defaults to the production MCP:

```json
{
  "type": "http",
  "url": "${GUSTO_MCP_URL}"
}
```

Cursor substitutes `${GUSTO_MCP_URL}` in the HTTP `url` from the configured plugin variable (or its default).

Connect OAuth in-product. Use a Primary or Global admin. For demos, set
`GUSTO_MCP_URL=https://mcp.api.gusto-demo.com`.

## Skills

- **gusto-setup** — connect OAuth; admin roles; optional demo endpoint
- **gusto-payroll-overview** — deadlines, recent payroll, tax liability
- **gusto-people-lookup** — employees, contractors, managers, dates
- **gusto-time-and-pay** — timesheets and contractor payments
- **gusto-write-safely** — mandatory confirmation before any write

## Security

Treat payroll and people data as sensitive. Always confirm with the user before writes. Prefer isolated sessions and verify LLM output against Gusto.

## License

MIT © 2026 Nikolas Behar
