import React from 'react';

/** OQ placeholder: spaces 1–12+; prestige on release (open-questions). */
const PROJECT_TRACK_PRESTIGE = [0, 0, 1, 1, 2, 2, 3, 4, 5, 6, 7, 8];

/** Outer ring of a 4×4 grid; inner 2×2 is notes. */
const SPIRAL_CELLS: { row: number; col: number; step: number }[] = [
  { row: 0, col: 0, step: 1 },
  { row: 0, col: 1, step: 2 },
  { row: 0, col: 2, step: 3 },
  { row: 0, col: 3, step: 4 },
  { row: 1, col: 3, step: 5 },
  { row: 2, col: 3, step: 6 },
  { row: 3, col: 3, step: 7 },
  { row: 3, col: 2, step: 8 },
  { row: 3, col: 1, step: 9 },
  { row: 3, col: 0, step: 10 },
  { row: 2, col: 0, step: 11 },
  { row: 1, col: 0, step: 12 },
];

const slotPortrait = {
  width: 'var(--spacing-std-card-w)',
  height: 'var(--spacing-std-card-h)',
};

/** Mat placeholders — match rendered assignment cards (`--spacing-card-*`). */
const slotAssignmentBoard = {
  width: 'var(--spacing-card-w)',
  height: 'var(--spacing-card-h)',
};

/** Compact project ring (mm) — not a full column. */
const TRACK_CELL_MM = 11;
const TRACK_GAP_MM = 0.8;

const SHEET_W_MM = 594;
const SHEET_H_MM = 420;

type HireRow = {
  label: string;
  /** Face-up market slots (DESIGN / OQ). */
  displayed: number;
  /** If false: single slot = market + deck face-up (no hidden supply). */
  separateSupply: boolean;
};

const HIRE_ROWS: HireRow[] = [
  { label: 'Junior production', displayed: 4, separateSupply: true },
  { label: 'Senior production', displayed: 3, separateSupply: true },
  { label: 'Junior admin', displayed: 4, separateSupply: true },
  { label: 'Senior admin', displayed: 3, separateSupply: true },
  {
    label: 'Prestige employee',
    displayed: 1,
    separateSupply: false,
  },
];

function SlotBox({
  style,
  variant,
  title,
}: {
  style: React.CSSProperties;
  variant: 'market' | 'supply';
  title?: string;
}) {
  return (
    <div
      title={title}
      className={`shrink-0 rounded border bg-white ${
        variant === 'supply'
          ? 'border-dashed border-amber-700/80'
          : 'border-slate-400'
      }`}
      style={style}
    />
  );
}

function PortraitRow({ row }: { row: HireRow }) {
  const n = row.separateSupply ? row.displayed + 1 : row.displayed;
  return (
    <div className="flex flex-wrap items-end gap-[1mm]">
      <span className="w-[28mm] shrink-0 text-[7px] font-semibold leading-tight text-slate-700">
        {row.label}
        <span className="block font-normal text-slate-500">
          {row.separateSupply
            ? `${row.displayed} face-up + 1 supply`
            : '1 slot — market + deck face-up'}
        </span>
      </span>
      <div className="flex flex-wrap gap-[1mm]">
        {Array.from({ length: n }, (_, i) => {
          const isSupply = row.separateSupply && i === n - 1;
          return (
            <SlotBox
              key={i}
              style={slotPortrait}
              variant={isSupply ? 'supply' : 'market'}
              title={isSupply ? 'Supply (face-down deck)' : 'Market'}
            />
          );
        })}
      </div>
    </div>
  );
}

function AssignmentRow({
  label,
  displayed,
}: {
  label: string;
  displayed: number;
}) {
  const n = displayed + 1;
  return (
    <div className="rounded border border-dashed border-slate-500 p-1">
      <div className="mb-1 text-[8px] font-bold text-slate-700">
        {label}{' '}
        <span className="font-normal text-slate-500">
          ({displayed} market + 1 supply)
        </span>
      </div>
      <div className="flex flex-wrap gap-[1mm]">
        {Array.from({ length: n }, (_, i) => {
          const isSupply = i === n - 1;
          return (
            <SlotBox
              key={i}
              style={slotAssignmentBoard}
              variant={isSupply ? 'supply' : 'market'}
              title={isSupply ? 'Supply (face-down deck)' : 'Market'}
            />
          );
        })}
      </div>
    </div>
  );
}

const GameBoardPage: React.FC = () => {
  return (
    <div>
      <div className="no-print mb-4 rounded border border-slate-200 bg-white p-3 text-sm text-slate-600">
        <h1 className="text-lg font-semibold text-slate-900">Game board</h1>
        <p>
          Simplified A2 landscape mat ({SHEET_W_MM}×{SHEET_H_MM}
          mm): hire and assignment rows use <strong>displayed + 1</strong> slots
          (last = supply deck) except prestige — one face-up pile. Assignment
          cards and mat slots use standard landscape poker (
          <code className="text-xs">--spacing-card-w/h</code> in{' '}
          <code className="text-xs">index.css</code>). Project track
          is compact (not a full column). No prestige scoring track on this
          sketch.
        </p>
        <p className="rounded border border-amber-200 bg-amber-50/80 p-2 text-xs text-amber-950">
          <strong>Incomplete prototype</strong> — not table-tested. Plan is to
          print cards / quick refs and sketch the real layout with a sharpie
          before another digital pass; this page is a rough placeholder only.
        </p>
      </div>

      <div className="print-target flex justify-center overflow-auto print:overflow-visible">
        <div
          className="game-board-a2 relative box-border bg-white shadow-md print:shadow-none"
          style={{
            width: `${SHEET_W_MM}mm`,
            height: `${SHEET_H_MM}mm`,
            padding: '5mm',
            display: 'flex',
            flexDirection: 'column',
            gap: '2mm',
            boxSizing: 'border-box',
          }}
        >
          <header className="shrink-0 text-center text-[10px] font-bold uppercase tracking-wide text-slate-700">
            Shared zones — hire · assignments · items (MVP placeholders)
          </header>

          <div
            className="grid min-h-0 min-w-0 flex-1 gap-2"
            style={{
              gridTemplateColumns: 'minmax(0, 1.05fr) minmax(0, 1fr)',
              alignItems: 'start',
            }}
          >
            <section className="flex min-w-0 flex-col gap-1 rounded border border-dashed border-slate-500 p-1.5">
              <h2 className="text-[8px] font-bold text-slate-800">Hire market</h2>
              {HIRE_ROWS.map((row) => (
                <PortraitRow key={row.label} row={row} />
              ))}
            </section>

            <section className="flex min-w-0 flex-col gap-1">
              <AssignmentRow label="Features" displayed={3} />
              <AssignmentRow label="Technologies" displayed={3} />
              <div className="rounded border border-dashed border-violet-600 p-1">
                <div className="text-[8px] font-bold text-violet-900">
                  Open-source technology (DDR-0010)
                </div>
                <div className="mt-1 flex min-h-[20mm] items-center justify-center rounded bg-violet-50/90 text-[7px] text-violet-950">
                  Published techs overlap here →
                </div>
              </div>
              <div className="rounded border border-dashed border-slate-500 p-1">
                <div className="text-[8px] font-bold text-slate-700">
                  Items{' '}
                  <span className="font-normal text-slate-500">
                    (2 market + 1 supply)
                  </span>
                </div>
                <div className="mt-1 flex flex-wrap gap-[1mm]">
                  {Array.from({ length: 3 }, (_, i) => (
                    <SlotBox
                      key={i}
                      style={slotPortrait}
                      variant={i === 2 ? 'supply' : 'market'}
                      title={i === 2 ? 'Item supply' : 'Item market'}
                    />
                  ))}
                </div>
              </div>
              <p className="text-[6.5px] leading-snug text-slate-500">
                Discards: off-mat or small piles beside each supply as you prefer.
              </p>
            </section>
          </div>

          <section className="shrink-0 rounded border border-dashed border-emerald-800 bg-emerald-50/40 px-1 py-0.5">
            <div className="text-center text-[7px] font-bold text-emerald-950">
              Project track (12 spaces, OQ scale) — prestige on release
            </div>
            <div
              className="mx-auto mt-0.5 grid w-fit p-0.5"
              style={{
                gridTemplateRows: `repeat(4, ${TRACK_CELL_MM}mm)`,
                gridTemplateColumns: `repeat(4, ${TRACK_CELL_MM}mm)`,
                gap: `${TRACK_GAP_MM}mm`,
              }}
            >
              {SPIRAL_CELLS.map(({ row, col, step }) => {
                const prestige = PROJECT_TRACK_PRESTIGE[step - 1];
                return (
                  <div
                    key={step}
                    className="flex flex-col items-center justify-center rounded border border-emerald-800 bg-white text-center leading-none"
                    style={{
                      gridRow: row + 1,
                      gridColumn: col + 1,
                    }}
                  >
                    <span className="text-[7px] font-bold">{step}</span>
                    <span className="text-[5px] text-slate-600">→{prestige}</span>
                  </div>
                );
              })}
              <div
                className="flex items-center justify-center border border-dotted border-emerald-600/70 bg-white/80 p-0.5 text-[4.5px] leading-tight text-emerald-950"
                style={{
                  gridRow: '2 / 4',
                  gridColumn: '2 / 4',
                }}
              >
                Notes
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GameBoardPage;
