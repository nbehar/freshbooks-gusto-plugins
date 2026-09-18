---
name: era-setup
description: Use this when the user needs to connect Era Context MCP, choose production vs alternate URL, complete OAuth, or verify read access before money or write tools.
---

# Era Context setup

Connect Era’s remote Streamable HTTP MCP (OAuth 2.1).

## Endpoint

- Default: `https://context.era.app` (explicit path `https://context.era.app/mcp` is equivalent)
- Optional plugin variable `ERA_MCP_URL` only if pointing at a non-default host; leave unset for production
- Server card: `https://era.app/.well-known/mcp/server-card.json`
- Docs: `https://era.app/help/mcp-server-era-context/`

## Steps

1. Confirm the plugin is enabled and `ERA_MCP_URL` is the intended endpoint (default production).
2. Start the in-product OAuth / connect flow. Sign in with the Era account that owns the bank connections, memory, and rules the user wants the assistant to use.
3. Review scopes. Typical set includes `mcp:discovery`, `mcp:tools-basic`, `mcp:tools-write`, `mcp:resources-read`, `offline_access`. **Do not** request `mcp:billing-write` unless the user explicitly wants billing changes.
4. After OAuth returns, run a **read-only** smoke check first, for example:
   - `knowledge__get_financial_context_and_overview`
   - `accounts__list_financial_accounts`
   - `billing__get_current_plan` (read only; no billing-write scope needed)
5. Only then offer write or transfer work. Point the user at **era-write-safely** for any write, destructive, transfer, or billing action.

## Notes

- No local secrets or env vars for the normal OAuth path.
- Tool visibility depends on plan, approved scopes, connected accounts, and client. Missing tools usually mean missing scope or plan — do not invent workarounds.
- Agents never receive bank login credentials; bank connect flows stay in Era’s UI.
