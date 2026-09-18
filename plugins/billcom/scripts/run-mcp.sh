#!/usr/bin/env bash
# POSIX fallback for the cross-platform Node launcher.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
exec node "${SCRIPT_DIR}/run-mcp.cjs"
