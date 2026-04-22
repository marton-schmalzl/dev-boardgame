/**
 * How many physical copies to lay out in print view.
 * Screen preview always shows one; `printCount` defaults to 1 when omitted.
 */
export function copiesForPrint(
  printMode: boolean,
  printCount?: number
): number {
  if (!printMode) return 1;
  if (printCount === undefined || printCount === null) return 1;
  const n = Math.floor(Number(printCount));
  return Number.isFinite(n) && n >= 1 ? n : 1;
}
