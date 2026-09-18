# Era Context Plugin

Cursor / Grok Bot plugin for financial context, transactions, and cash-flow
analysis through Era's remote MCP server.

## Configuration

No secrets or plugin variables are required. The plugin connects over
Streamable HTTP to `https://context.era.app`; Era handles authentication with
OAuth 2.1. Clients that require an explicit MCP path can use
`https://context.era.app/mcp`.

Review the requested scopes during OAuth and begin with a read-only overview.
The server card is available at
`https://era.app/.well-known/mcp/server-card.json`.

## Skills

- **era-setup** — connect with OAuth 2.1 and verify access read-only first
- **era-write-safely** — confirmations and consent for sensitive actions
- **era-overview** — financial context, balances, and pending questions
- **era-transaction-cleanup** — find and safely fix transaction data
- **era-cash-flow** — cash flow and forecasts with correct transfer handling

## Security

Era never gives the assistant bank credentials. Use least-privilege scopes,
preview every write, and explicitly confirm transfers, destructive actions, and
billing changes. Skill instructions are safeguards, not access controls; OAuth
scopes and Era's consent checks remain the enforcement layer.

See the [Era Context MCP documentation](https://era.app/help/mcp-server-era-context/).

## License

MIT © 2026 Nikolas Behar
