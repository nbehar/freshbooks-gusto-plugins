---
name: era-cash-flow
description: Use this when the user asks about Era cash flow, spending analysis, forecasts, period comparisons, daily summaries, or “can I afford X?”
---

# Cash flow and insights

Answer spending questions from Era’s insight tools; keep transfers honest first.

## Workflow

1. If internal transfers may duplicate cash flow, check/link with `transactions__manage_transfer_links` (confirm before write) or note the risk.
2. Pull the right read tools:
   - `insights__get_cash_flow`
   - `insights__analyze_spending`
   - `insights__compare_spending_periods`
   - `insights__forecast_spending`
   - `insights__get_daily_financial_summary` / `insights__get_daily_category_spending`
3. Tie answers to concrete numbers from tool payloads (dates, categories, totals). Flag uncertainty.
4. For “can I afford X?” combine balances (`accounts__*`) with forecast/recurring charges — do not invent buffers.
5. Offer optional memory (`knowledge__remember`) only for facts the user explicitly wants saved.

## Rules

- Default read-only. Writes (rules, tags, visibility, transfers) require **era-write-safely**.
- Billing or plan changes are a different job and need `mcp:billing-write` plus extra consent — do not sneak them into a cash-flow ask.
