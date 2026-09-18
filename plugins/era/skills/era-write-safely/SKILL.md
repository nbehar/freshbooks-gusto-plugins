---
name: era-write-safely
description: Use this when any Era Context action would write data, move money, change billing, forget memory, disconnect banks, or run a destructive tool. CRITICAL safety skill.
---

# Write safely (CRITICAL)

Era Context can move money between the user’s own accounts, edit financial data, change billing, and forget memory. Treat every write as high risk.

## Mandatory rules

1. **Always require explicit user confirmation** before any write or money move, including:
   - Transfers between own accounts (every transfer needs a fresh yes)
   - Transaction create/update/delete, tags, categories, transfer links, automation rules
   - Account visibility, manage account, balance backfill, disconnect institution
   - Memory: remember, forget, confirm/reject inference, defer/reset questions
   - Billing: cancel, upgrade, manage, confirm subscription change (also needs `mcp:billing-write`)
   - Referral join / campaign switch
2. Show a clear preview first: tool name, what changes, amounts/dates/ids, and whether the action is labeled **Destructive** or **Extra consent**.
3. Wait for an unambiguous yes for **this** action. Stale or partial confirmation does not count.
4. Prefer **isolated sessions** for transfers and billing so other chat context cannot bleed in.
5. **Verify LLM-paraphrased numbers** against tool payloads or the Era UI before the user confirms.
6. If a tool needs a scope the connection does not have (especially `mcp:billing-write`), stop and explain — do not pretend it succeeded.
7. Start with read-only tools (`knowledge__get_financial_context_and_overview`, list/search/analyze) before proposing writes.

## Hard stops

- Never pay bills, place trades, or file taxes via Era Context — those are out of scope.
- Never pass or ask for bank credentials.
- Never batch-confirm multiple destructive actions in one vague “yes.”
- Never apply automation rules or category changes without previewing impact when tools allow.

## After a write

- Report exactly what succeeded or failed (ids, amounts, tools).
- For transfers and billing, suggest the user verify in Era.
