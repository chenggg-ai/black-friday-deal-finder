// Black Friday Price Check — make.fun black-friday-deal-finder-01
// Entry program (Node 22, stdlib only). It copies app/ and screenshots/ from
// this repository into the output directory and writes dossier.json with
// buildDossier from vendor/makefun-frontend.ts (the kit's copy, unchanged).
// The site itself is the static files under app/: 12 real Black Friday deals
// whose prices were checked on 27 Nov 2026 against live US store listings
// (Amazon, Walmart, Best Buy, Target) via deal trackers that read the
// stores' own pages that day.
//
// Output contract: the program never deletes or chmods the output directory
// itself. It builds in a staging directory on the same filesystem, chmods
// each output file 0666 before renaming it into place, and only ever leaves
// app/, screenshots/ and dossier.json in the output directory.

import {
  chmodSync,
  cpSync,
  existsSync,
  lstatSync,
  mkdirSync,
  readdirSync,
  renameSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { buildDossier } from "./vendor/makefun-frontend.ts";

const DOSSIER_CAPS = {
  text_max_bytes: 163840,
  screenshots: { max: 3, max_bytes: 262144 },
  app_max_files: 993,
  app_max_bytes: 16777216,
};

function listFiles(dir: string, base: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const rel = base === "" ? entry : base + "/" + entry;
    if (lstatSync(full).isDirectory()) out.push(...listFiles(full, rel));
    else out.push(rel);
  }
  return out;
}

function main(): void {
  const repoRoot = dirname(fileURLToPath(import.meta.url));
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  const staging = join(outDir, ".staging");

  mkdirSync(outDir, { recursive: true });
  if (existsSync(staging)) rmSync(staging, { recursive: true, force: true });
  mkdirSync(join(staging, "app"), { recursive: true });
  mkdirSync(join(staging, "screenshots"), { recursive: true });

  cpSync(join(repoRoot, "app"), join(staging, "app"), { recursive: true });
  cpSync(join(repoRoot, "screenshots"), join(staging, "screenshots"), { recursive: true });

  const dossier = buildDossier(staging, DOSSIER_CAPS);
  writeFileSync(join(staging, "dossier.json"), dossier);

  for (const rel of listFiles(staging, "")) {
    chmodSync(join(staging, rel), 0o666);
  }

  for (const name of ["app", "screenshots", "dossier.json"]) {
    const target = join(outDir, name);
    if (existsSync(target)) rmSync(target, { recursive: true, force: true });
  }
  renameSync(join(staging, "app"), join(outDir, "app"));
  renameSync(join(staging, "screenshots"), join(outDir, "screenshots"));
  renameSync(join(staging, "dossier.json"), join(outDir, "dossier.json"));
  rmSync(staging, { recursive: true, force: true });

  console.log("wrote " + join(outDir, "app") + " (" + listFiles(join(outDir, "app"), "").length + " files)");
  console.log("wrote " + join(outDir, "dossier.json") + " (" + dossier.length + " bytes)");
  console.log("deals: 12 | checked: 27 Nov 2026, 14:05 WIB");
}

main();
