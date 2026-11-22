// World News — Sunday, 22 November 2026.
// make.fun bounty news-image-20261122: the entry is a newspaper front page
// (entry.png) that sums up the day's world news. This program copies that
// image to the output directory make.fun grades. Node 22, standard library
// only, no network, deterministic: the same bytes on every run.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

// The grader sets MAKEFUN_OUTPUT_DIR; locally it defaults to ./out.
const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "out");
const imagePath = new URL("./entry.png", import.meta.url);

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.png"), readFileSync(imagePath));
