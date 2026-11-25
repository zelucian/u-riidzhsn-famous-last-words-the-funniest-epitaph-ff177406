// Famous Last Words: The Funniest Epitaph
// One line of dying speech, carved in stone: the light at the end
// of the tunnel turns out to be something far more mundane.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const EPITAPH_LINE =
  "I see the light. It's a loading screen. Somebody press skip.";

const OUTPUT_PATH = "/output/entry.txt";

function checkEpitaph(text: string): void {
  if (typeof text !== "string" || text.trim().length === 0) {
    throw new Error("Epitaph must not be empty or whitespace only.");
  }
  if (text.length < 1 || text.length > 150) {
    throw new Error(`Epitaph must be 1-150 characters, got ${text.length}.`);
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("Epitaph must be a single line with no newline.");
  }
}

function publishEpitaph(): void {
  checkEpitaph(EPITAPH_LINE);
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, EPITAPH_LINE, { encoding: "utf8" });
}

publishEpitaph();
