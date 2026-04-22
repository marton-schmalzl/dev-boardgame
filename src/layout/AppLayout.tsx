import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { usePrintMode } from '../context/PrintModeContext';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded px-2 py-1 text-sm no-underline ${
    isActive
      ? 'bg-slate-800 text-white'
      : 'text-slate-700 hover:bg-slate-200'
  }`;

export const AppLayout: React.FC = () => {
  const { printMode, togglePrintMode } = usePrintMode();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="no-print sticky top-0 z-10 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center gap-3 px-3 py-2">
          <span className="text-sm font-semibold text-slate-600">
            DEV_GAME preview
          </span>
          <nav className="flex flex-wrap gap-1">
            <NavLink to="/playable" className={navLinkClass} end>
              Playable cards
            </NavLink>
            <NavLink to="/assignments" className={navLinkClass}>
              Assignments
            </NavLink>
            <NavLink to="/board" className={navLinkClass}>
              Game board
            </NavLink>
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <button
              type="button"
              className="rounded border border-slate-300 bg-white px-2 py-1 text-sm hover:bg-slate-100"
              onClick={togglePrintMode}
              aria-pressed={printMode}
            >
              {printMode ? 'Exit print view' : 'Print view'}
            </button>
          </div>
        </div>
        {printMode ? (
          <p className="mx-auto max-w-[1600px] px-3 pb-2 text-xs text-slate-500 no-print">
            Chrome hides navigation and filters. Use{' '}
            <kbd className="rounded bg-slate-100 px-1">Print</kbd> → Save as
            PDF. For the board, choose A2 landscape in the print dialog if
            available.
          </p>
        ) : null}
      </header>
      <main className="mx-auto max-w-[1600px] px-3 py-4 print:max-w-none print:px-0 print:py-0">
        <Outlet />
      </main>
    </div>
  );
};
