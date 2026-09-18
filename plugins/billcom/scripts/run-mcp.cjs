#!/usr/bin/env node

const { readdirSync, statSync } = require("node:fs");
const { join, resolve } = require("node:path");
const { spawn, spawnSync } = require("node:child_process");

const serverDir = resolve(__dirname, "../server");
const sourceDir = join(serverDir, "src");
const distEntry = join(serverDir, "dist", "index.js");
const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";

function isConfigured(name) {
  const value = process.env[name]?.trim();
  return Boolean(value && value !== `\${${name}}`);
}

function validateCredentials() {
  const authType = process.env.BILL_AUTH_TYPE?.trim() || "sync_token";
  const required =
    authType === "session_token"
      ? ["BILL_DEV_KEY", "BILL_SESSION_TOKEN"]
      : ["BILL_DEV_KEY", "BILL_USERNAME", "BILL_PASSWORD", "BILL_ORGANIZATION_ID"];
  const missing = required.filter((name) => !isConfigured(name));

  if (missing.length > 0) {
    throw new Error(
      `Missing required Bill.com configuration for ${authType} auth: ${missing.join(", ")}`
    );
  }
}

function newestMtime(path) {
  const stat = statSync(path);
  if (!stat.isDirectory()) {
    return stat.mtimeMs;
  }

  return readdirSync(path).reduce(
    (newest, entry) => Math.max(newest, newestMtime(join(path, entry))),
    stat.mtimeMs
  );
}

function runNpm(args) {
  const result = spawnSync(npmCommand, args, {
    cwd: serverDir,
    env: process.env,
    stdio: "inherit",
  });

  if (result.error) {
    throw result.error;
  }
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

try {
  validateCredentials();

  let dependenciesInstalled = true;
  try {
    statSync(join(serverDir, "node_modules"));
  } catch {
    dependenciesInstalled = false;
  }

  if (!dependenciesInstalled) {
    console.error("[billcom] Installing MCP server dependencies...");
    runNpm(["ci"]);
  }

  let buildRequired = false;
  try {
    buildRequired = newestMtime(sourceDir) > statSync(distEntry).mtimeMs;
  } catch {
    buildRequired = true;
  }

  if (buildRequired) {
    console.error("[billcom] Building MCP server because source is newer than dist...");
    runNpm(["run", "build"]);
  }

  statSync(distEntry);
} catch (error) {
  console.error(`[billcom] Failed to prepare MCP server: ${error.message}`);
  process.exit(1);
}

const server = spawn(process.execPath, [distEntry], {
  cwd: serverDir,
  env: process.env,
  stdio: "inherit",
});

server.on("error", (error) => {
  console.error(`[billcom] Failed to launch MCP server: ${error.message}`);
  process.exit(1);
});

server.on("exit", (code) => {
  process.exit(code ?? 1);
});

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => server.kill(signal));
}
