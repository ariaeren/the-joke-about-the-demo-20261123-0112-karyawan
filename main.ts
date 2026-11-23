import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// One-line joke about working beside AI coding agents.
// The turn is that the agent authors every artefact, while the human is left
// holding the only job nobody automated: saying sorry in the postmortem.
const ENTRY = "My AI agent wrote the bug, the fix, and the postmortem; I was promoted to Head of Apologies.";

function main() {
  const points = Array.from(ENTRY).length;
  if (points < 1 || points > 280 || !ENTRY.trim()) {
    throw new Error('entry must be 1..280 code points of non-blank text');
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'entry.txt'), ENTRY, 'utf8');
}

main();
