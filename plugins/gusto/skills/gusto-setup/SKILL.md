---
name: gusto-setup
description: Use this when the user needs to connect Gusto MCP, choose production vs demo, or verify admin access for payroll tools.
---

# Gusto setup

Connect Gusto’s official remote MCP.

## Steps

1. Ensure the plugin points at `https://mcp.api.gusto.com`.
2. Start the OAuth / connect flow in Cursor or Grok Bot.
3. Sign in with a **Primary** or **Global** admin account (required for full payroll access).
4. For demos or sandboxes, optionally use `https://mcp.api.gusto-demo.com` instead of production.
5. Verify read tools work (company or employee list) before any payroll writes.

## Notes

- No local env vars are required for this plugin.
- Prefer demo for exploration; use production only when the user intends real company data.
