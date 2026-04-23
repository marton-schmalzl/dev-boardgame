import React from 'react';

interface CardMetaBadgesProps {
    candidate?: boolean;
    notes?: string;
}

/**
 * Preview-only overlay badges for designer book-keeping fields.
 *
 * - `?` — card is a candidate (placeholder / draft).
 * - `!` — card has an attached designer note (shown as a `title` tooltip
 *   on hover).
 *
 * Both badges are wrapped in `no-print` so they never appear in the
 * print view or browser print output.
 */
const CardMetaBadges: React.FC<CardMetaBadgesProps> = ({ candidate, notes }) => {
    if (!candidate && !notes) return null;

    return (
        <div className="no-print pointer-events-none absolute right-1 top-1 z-10 flex flex-col items-end gap-1">
            {candidate ? (
                <span
                    className="pointer-events-auto inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-[12px] font-bold text-white shadow ring-1 ring-amber-600"
                    title="Candidate card (placeholder / draft, not finalized)"
                    aria-label="Candidate card"
                >
                    ?
                </span>
            ) : null}
            {notes ? (
                <span
                    className="pointer-events-auto inline-flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[12px] font-bold text-white shadow ring-1 ring-rose-700"
                    title={notes}
                    aria-label={`Designer note: ${notes}`}
                >
                    !
                </span>
            ) : null}
        </div>
    );
};

export default CardMetaBadges;
