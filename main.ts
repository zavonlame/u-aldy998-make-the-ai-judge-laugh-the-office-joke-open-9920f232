// Office joke entry: one line of office comedy, written to $MAKEFUN_OUTPUT_DIR/entry.txt.
// The grader runs this with Node 22, no network, no files read.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I put 'per my last email' in my will so my family knows exactly how passive-aggressive I was.";

function deliver(text) {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), text, "utf8");
}

function main() {
  deliver(JOKE);
}

main();
