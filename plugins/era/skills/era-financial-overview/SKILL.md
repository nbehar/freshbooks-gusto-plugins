---
name: era-financial-overview
description: Use this when the user wants an Era money overview — balances, accounts, pending questions, or “how am I doing?” before deeper spending work.
---

# Financial overview

Give a grounded snapshot from Era Context before editing data.

## Workflow

1. Call `knowledge__get_financial_context_and_overview` (and `knowledge__get_pending_questions` if useful).
2. Call `accounts__list_financial_accounts`; note visibility and which accounts count in analysis.
3. Optionally `accounts__check_account_balance` for accounts the user names.
4. Summarize: balances, what’s connected, open questions/memory the user already approved, and obvious gaps (missing institutions, hidden accounts).
5. Propose next jobs (cleanup, cash flow, rules) — do not write until they pick one and **era-write-safely** applies.

## Rules

- Read-only unless the user asks to change visibility, connect a bank, or answer memory questions.
- Connecting a bank uses `connections__connect_bank_account` (opens Era’s flow); confirm before disconnect (`connections__disconnect_institution` is destructive).
