---
name: era-overview
description: Use this when the user wants an Era financial context overview, account balances, or pending questions.
---

# Financial context overview

Build a read-only snapshot before proposing actions.

## Workflow

1. Load the financial context and overview.
2. List relevant financial accounts and check current balances. Preserve the
   returned `as of` times and distinguish available, current, and pending
   amounts rather than combining them.
3. Fetch pending Era questions and surface only those needed to improve the
   requested analysis.
4. Summarize totals, notable changes, incomplete data, hidden accounts, and
   stale or disconnected sources in plain language.
5. Offer focused next steps without changing memory, accounts, visibility,
   connections, or answers.

## Rules

- Treat balances, transactions, inferred facts, and questions as sensitive.
- Do not present an aggregate as complete when accounts are hidden, stale, or
  unavailable.
- Ask the user before confirming or rejecting an inference, remembering a
  fact, deferring a question, or making any other write; follow
  **era-write-safely**.
