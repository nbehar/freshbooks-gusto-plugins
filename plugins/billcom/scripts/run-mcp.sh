#!/usr/bin/env bash
# Launch the vendored Bill.com AP/AR MCP server (Civic bill-mcp-server/ap-ar).
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SERVER_DIR="$(cd "${SCRIPT_DIR}/../server" && pwd)"

cd "${SERVER_DIR}"

if [[ ! -d node_modules ]] || [[ ! -f dist/index.js ]]; then
  echo "[billcom] Installing dependencies and building MCP server..." >&2
  if [[ ! -f package-lock.json ]]; then
    echo "[billcom] ERROR: package-lock.json missing in ${SERVER_DIR}" >&2
    exit 1
  fi
  npm ci
  npm run build
fi

if [[ ! -f dist/index.js ]]; then
  echo "[billcom] ERROR: dist/index.js not found after build in ${SERVER_DIR}" >&2
  exit 1
fi

exec node dist/index.js
