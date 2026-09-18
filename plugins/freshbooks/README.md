# FreshBooks Plugin

Cursor / Grok Bot plugin for FreshBooks accounting via MCP: invoices, clients, expenses, estimates, time tracking, and reports.

## Requirements

- [uv](https://docs.astral.sh/uv/) so `uvx` can run `mcp-freshbooks==0.2.0`
- FreshBooks OAuth app credentials

## Configuration

Set these plugin variables:

| Variable | Required | Default |
|----------|----------|---------|
| `FRESHBOOKS_CLIENT_ID` | yes | — |
| `FRESHBOOKS_CLIENT_SECRET` | yes | — |
| `FRESHBOOKS_REDIRECT_URI` | yes | `https://localhost:8555/callback` |

Create an app at [freshbooks.com/pages/developer-signup](https://www.freshbooks.com/pages/developer-signup), register the redirect URI, then authenticate with `freshbooks_authenticate`.

## Skills

- **freshbooks-setup** — OAuth app, redirect URI, variables, authenticate
- **freshbooks-overdue-invoices** — find overdue invoices; confirm before reminders
- **freshbooks-invoice-from-estimate** — convert estimate → invoice; confirm before send
- **freshbooks-expense-log** — categories then create expense
- **freshbooks-financial-reports** — P&L, tax, aging, balance sheet, payments

## Attribution

This plugin wraps [mcp-freshbooks](https://github.com/AlexlaGuardia/mcp-freshbooks) by Alex LaGuardia (MIT).

## License

MIT © 2026 Nikolas Behar
