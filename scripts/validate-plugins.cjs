#!/usr/bin/env node

const { readFileSync } = require("node:fs");
const { resolve } = require("node:path");

function readJson(path) {
  return JSON.parse(readFileSync(resolve(path), "utf8"));
}

const marketplace = readJson(".cursor-plugin/marketplace.json");

for (const entry of marketplace.plugins) {
  const root = resolve("plugins", entry.source);
  const plugin = readJson(`${root}/.cursor-plugin/plugin.json`);
  const mcp = readJson(`${root}/${plugin.mcpServers}`);

  if (plugin.name !== entry.name) {
    throw new Error(`${entry.source}: plugin name does not match marketplace entry`);
  }
  if (plugin.version !== entry.version) {
    throw new Error(
      `${entry.name}: plugin version ${plugin.version} does not match marketplace version ${entry.version}`
    );
  }
  if (!mcp.mcpServers || Object.keys(mcp.mcpServers).length === 0) {
    throw new Error(`${entry.name}: mcp.json has no server definitions`);
  }
}

const billcom = readJson("plugins/billcom/.cursor-plugin/plugin.json");
for (const name of [
  "BILL_DEV_KEY",
  "BILL_USERNAME",
  "BILL_PASSWORD",
  "BILL_ORGANIZATION_ID",
]) {
  if (billcom.variables[name]?.required !== true) {
    throw new Error(`billcom: ${name} must be required for default sync_token auth`);
  }
}
if (billcom.variables.BILL_SESSION_TOKEN?.required !== false) {
  throw new Error("billcom: BILL_SESSION_TOKEN must remain optional for conditional auth");
}

const gusto = readJson("plugins/gusto/.cursor-plugin/plugin.json");
const gustoMcp = readJson("plugins/gusto/mcp.json");
const gustoUrl = gustoMcp.mcpServers.gusto.url.replace(
  /\$\{([^}]+)\}/g,
  (_, name) => gusto.variables[name]?.default ?? ""
);
if (gustoUrl !== "https://mcp.api.gusto.com") {
  throw new Error("gusto: GUSTO_MCP_URL does not substitute to the production default");
}

console.log(`Validated marketplace and ${marketplace.plugins.length} plugins.`);
