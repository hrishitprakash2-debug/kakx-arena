#!/usr/bin/env node
/**
 * Syncs the website content from the frontend into the backend.
 *
 * The frontend (src/data/site.ts) is the single source of truth for all
 * KAKX Arena content (sports, pricing, gallery, reviews, FAQs, etc.).
 * Run `npm run sync-data` after editing content in the frontend so the
 * backend API serves the same data.
 */
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "..", "..", "frontend", "src", "data", "site.ts");
const dest = join(here, "..", "src", "data", "content.ts");

mkdirSync(dirname(dest), { recursive: true });
copyFileSync(src, dest);
console.log(`✅ Content synced → ${dest}`);
