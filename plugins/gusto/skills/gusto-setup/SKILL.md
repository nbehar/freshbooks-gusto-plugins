---
name: gusto-setup
description: Use this when the user needs to connect Gusto MCP, choose production vs demo, or verify admin access for payroll tools.
---

# Gusto setup

Connect Gusto’s official remote MCP.

## Steps

1. Set `GUSTO_MCP_URL` only if needed. It defaults to the production endpoint, `https://mcp.api.gusto.com`.
2. Start the OAuth / connect flow in Cursor or Grok Bot.
3. Sign in with a **Primary** or **Global** admin account (required for full payroll access).
4. For demos or sandboxes, set `GUSTO_MCP_URL` to `https://mcp.api.gusto-demo.com`.
5. Verify read tools work (company or employee list) before any payroll writes.

## Notes

- `GUSTO_MCP_URL` is optional; leave its production default unless demo data is intended.
- Prefer demo for exploration; use production only when the user intends real company data.
