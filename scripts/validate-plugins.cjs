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

console.log(`Validated marketplace and ${marketplace.plugins.length} plugins.`);
