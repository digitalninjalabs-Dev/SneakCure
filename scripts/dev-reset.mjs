/**
 * Kills stale dev servers on 3000–3002, clears .next, starts a single fresh dev server.
 * Use: npm run dev:reset
 */
import { spawn, execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ports = [3000, 3001, 3002];
const isWin = process.platform === "win32";

function killPorts() {
  for (const port of ports) {
    try {
      if (isWin) {
        execSync(
          `powershell -NoProfile -Command "` +
            `$c = Get-NetTCPConnection -LocalPort ${port} -ErrorAction SilentlyContinue; ` +
            `foreach ($x in $c) { Stop-Process -Id $x.OwningProcess -Force -ErrorAction SilentlyContinue }"`,
          { stdio: "ignore" }
        );
      } else {
        execSync(`lsof -ti:${port} | xargs kill -9 2>/dev/null || true`, {
          stdio: "ignore",
          shell: true,
        });
      }
    } catch {
      /* port already free */
    }
  }
}

function cleanNext() {
  const nextDir = path.join(root, ".next");
  if (fs.existsSync(nextDir)) {
    fs.rmSync(nextDir, { recursive: true, force: true });
    console.log("Removed .next cache");
  }

  const webpackCache = path.join(root, "node_modules", ".cache");
  if (fs.existsSync(webpackCache)) {
    fs.rmSync(webpackCache, { recursive: true, force: true });
    console.log("Removed node_modules/.cache");
  }
}

function startDev() {
  console.log("Starting dev server on http://localhost:3000 …");
  const child = spawn(isWin ? "npx.cmd" : "npx", ["next", "dev"], {
    cwd: root,
    stdio: "inherit",
    shell: isWin,
  });

  child.on("exit", (code) => process.exit(code ?? 0));
}

killPorts();
cleanNext();
startDev();
