import React from 'react';

interface CardMetaBadgesProps {
    candidate?: boolean;
    notes?: string;
}

/**
 * Preview-only overlay badges for designer book-keeping fields.
 *
 * - `?` — card is a candidate (placeholder / draft).
 * - `!` — card has an attached designer note (`title` tooltip on the
 *   whole badge control, not only the glyph).
 *
 * Badges use `<button type="button">` for a consistent hover / focus
 * target (`cursor-help`, min touch size). Wrapped in `no-print` so
 * they never appear in print.
 */
const CardMetaBadges: React.FC<CardMetaBadgesProps> = ({ candidate, notes }) => {
    if (!candidate && !notes) return null;

    const badgeClass =
        'pointer-events-auto inline-flex h-6 w-6 shrink-0 cursor-help items-center justify-center rounded-full text-[12px] font-bold text-white shadow ring-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1';

    return (
        <div className="no-print pointer-events-none absolute right-1 top-1 z-10 flex flex-col items-end gap-1">
            {candidate ? (
                <button
                    type="button"
                    tabIndex={0}
                    className={`${badgeClass} bg-amber-400 ring-amber-600 focus-visible:ring-amber-500`}
                    title="Candidate card (placeholder / draft, not finalized)"
                    aria-label="Candidate card (placeholder / draft, not finalized)"
                >
                    <span aria-hidden className="leading-none">
                        ?
                    </span>
                </button>
            ) : null}
            {notes ? (
                <button
                    type="button"
                    tabIndex={0}
                    className={`${badgeClass} bg-rose-500 ring-rose-700 focus-visible:ring-rose-400`}
                    title={notes}
                    aria-label={`Designer note: ${notes}`}
                >
                    <span aria-hidden className="leading-none">
                        !
                    </span>
                </button>
            ) : null}
        </div>
    );
};

export default CardMetaBadges;
