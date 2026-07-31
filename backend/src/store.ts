import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { randomUUID } from "node:crypto";

const here = dirname(fileURLToPath(import.meta.url));
// data files live one level above src/ (backend/data/...)
const dataDir = join(here, "..", "data");

function readJson<T>(file: string, fallback: T): T {
  try {
    if (!existsSync(file)) return fallback;
    return JSON.parse(readFileSync(file, "utf8")) as T;
  } catch {
    return fallback;
  }
}

function appendJson(file: string, entry: Record<string, unknown>) {
  mkdirSync(dirname(file), { recursive: true });
  const rows = readJson<Record<string, unknown>[]>(file, []);
  rows.push(entry);
  writeFileSync(file, JSON.stringify(rows, null, 2));
}

export function recordBooking(input: { sport: string; date: string; slot: string; name: string; source: string }) {
  const entry = {
    id: randomUUID().slice(0, 8),
    ...input,
    receivedAt: new Date().toISOString(),
  };
  appendJson(join(dataDir, "bookings.json"), entry);
  return entry;
}

export function recordContact(input: { name: string; phone: string; message: string }) {
  const entry = {
    id: randomUUID().slice(0, 8),
    ...input,
    receivedAt: new Date().toISOString(),
  };
  appendJson(join(dataDir, "contacts.json"), entry);
  return entry;
}
