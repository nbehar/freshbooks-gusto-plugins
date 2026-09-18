---
name: freshbooks-setup
description: Use this when the user needs to connect FreshBooks, create or configure an OAuth app, set plugin variables, or complete authentication for the FreshBooks MCP plugin.
---

# FreshBooks setup

Guide the user through first-time FreshBooks MCP setup.

## Steps

1. **Create an OAuth app** at [freshbooks.com/pages/developer-signup](https://www.freshbooks.com/pages/developer-signup) if they do not already have one.
2. **Register the redirect URI.** Default for this plugin: `https://localhost:8555/callback`. Match whatever is set in `FRESHBOOKS_REDIRECT_URI`.
3. **Set plugin variables:**
   - `FRESHBOOKS_CLIENT_ID`
   - `FRESHBOOKS_CLIENT_SECRET`
   - `FRESHBOOKS_REDIRECT_URI` (optional if using the default)
4. **Authenticate** by calling `freshbooks_authenticate` so the user can complete the OAuth browser flow.
5. Confirm tools respond (for example a lightweight client or account lookup) before proceeding to invoice or expense work.

## Notes

- Requires `uvx` and `mcp-freshbooks==0.2.0`.
- Do not ask the user to paste secrets into chat if the plugin UI can store them securely.
