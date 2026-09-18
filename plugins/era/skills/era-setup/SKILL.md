---
name: era-setup
description: Use this when the user needs to connect Era Context MCP, authorize OAuth scopes, or verify the connection.
---

# Era Context setup

Connect Era Context as an OAuth 2.1-protected remote MCP server.

## Steps

1. Add `https://context.era.app` as a **Streamable HTTP** MCP server. If the
   client requires an explicit endpoint path, use `https://context.era.app/mcp`;
   both addresses reach the same server.
2. Start the connect flow and sign in to the Era account whose accounts,
   memory, and rules the user intends to expose.
3. Review the requested OAuth scopes before approval:
   - `mcp:discovery` for server and tool discovery
   - `mcp:tools-basic` for read-oriented tools
   - `mcp:tools-write` only when writes are needed
   - `mcp:resources-read` when MCP resources are needed
   - `offline_access` only when continued access is intended
   - `mcp:billing-write` separately, only for requested billing changes
4. Begin with the least privilege needed. Do not request write or billing
   access merely to test the connection.
5. Verify the connection with a read-only question, such as an account list,
   financial overview, or weekly summary. Do not test with a write.

## Verification and troubleshooting

- Server card: `https://era.app/.well-known/mcp/server-card.json`
- Documentation: `https://era.app/help/mcp-server-era-context/`
- If tools are missing, check the approved scopes, Era plan, connected
  accounts, and client support before reconnecting.
- Revoke access by disconnecting the MCP client. Disconnect an underlying bank
  institution only when the user explicitly asks and confirms that destructive
  action.
