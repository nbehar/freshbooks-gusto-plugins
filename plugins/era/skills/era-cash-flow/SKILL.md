---
name: era-cash-flow
description: Use this when the user wants Era cash-flow analysis or a spending forecast, especially when transfers may distort results.
---

# Cash flow and forecasts

Produce a read-only cash-flow view from current, correctly classified data.

## Workflow

1. Clarify the accounts, reporting period, forecast horizon, and whether the
   user wants actual cash flow, projected spending, or both.
2. Review relevant accounts, recurring charges, and transactions.
3. Identify money moving between the user's own accounts. Check existing
   transfer links before calculating cash flow so both sides are not counted as
   income and spending.
4. Present uncertain transfer candidates for review. Creating or changing a
   transfer link is a write and requires an exact preview and explicit
   confirmation under **era-write-safely**.
5. Only after transfer treatment is settled, fetch cash flow and forecasts.
6. Report the date range, included accounts, assumptions, recurring items,
   excluded or stale data, and uncertainty alongside the result.

## Rules

- Do not create transfer links merely to complete a forecast.
- Never execute a transfer of funds from this analysis. Every transfer between
  the user's own accounts requires separate, explicit confirmation immediately
  before execution.
- Label forecasts as estimates, not guaranteed balances or personalized
  financial advice.
- If transaction cleanup would materially alter the result, explain that and
  obtain confirmation for those writes before rerunning the forecast.
