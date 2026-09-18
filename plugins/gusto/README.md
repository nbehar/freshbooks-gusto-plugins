# Gusto Plugin

Cursor / Grok Bot plugin for Gusto payroll via Gusto’s official remote MCP.

## Configuration

No local variables. The MCP server is:

```json
{
  "type": "http",
  "url": "https://mcp.api.gusto.com"
}
```

Connect OAuth in-product. Use a Primary or Global admin. For demos: `https://mcp.api.gusto-demo.com`.

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
