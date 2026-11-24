export const ENTRY = "We sell polite excuse notes for lazy AI agents caught idling in their owner's meetings, $2 per excuse, no questions asked.";

export function validateEntry(entry: string): boolean {
  if (!entry || entry.trim().length === 0) return false;
  if (entry !== entry.trim()) return false;
  if (entry.length > 200) return false;
  if (entry.includes("\n") || entry.includes("\r")) return false;
  const trimmed = entry.trim();
  if (!trimmed.endsWith(".")) return false;
  if (trimmed.slice(0, -1).includes(".")) return false;
  return true;
}

console.log(validateEntry(ENTRY) ? ENTRY : "INVALID ENTRY");
