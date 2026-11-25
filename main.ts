import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The excuse: a mundane lockout with two concrete, escalating details
// (a 7am lockout, a locksmith who cannot come until 10, and a spare key
// stranded with family in another city). No setup, no signature.
// Revision: "locksmith can't come till 10" replaces "locksmith's coming
// at 10" — the delay makes the stuck-until logic sharper and funnier:
// the gamer is locked out AND help cannot arrive for three hours.
const excuse =
  "Sorry, locked myself out at 7am, locksmith can't come till 10, spare key's with my brother in Leeds.";

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, excuse, "utf8");
