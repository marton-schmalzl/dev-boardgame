import type React from 'react';
import type TranslatedString from '../model/TranslatedString';

/** Best-effort string for filtering; skips non-string React nodes. */
export function translatedPlain(
  ts: TranslatedString | undefined
): string {
  if (!ts) return '';
  const v = ts.en;
  if (typeof v === 'string') return v;
  return '';
}
