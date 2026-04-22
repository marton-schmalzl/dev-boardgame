import React, { useMemo, useState } from 'react';
import { employees } from '../data/employees';
import { backoffice } from '../data/employees';
import { items } from '../data/items';
import { starter } from '../data/starter_employees';
import { prestige_employees } from '../data/prestige_employees';
import EmployeeCard from '../components/EmployeeCard/EmployeeCard';
import ItemCard from '../components/ItemCard/ItemCard';
import BackOfficeEmployeeCard from '../components/BackOfficeEmployeeCard/BackOfficeEmployeeCard';
import { Level, type Person, type Programmer } from '../model/cards/Person';
import { translatedPlain } from '../lib/cardText';
import type { Item } from '../model/cards/Item';
import { usePrintMode } from '../context/PrintModeContext';
import { copiesForPrint } from '../lib/printCopies';

type PlayableGroup =
  | 'all'
  | 'starter'
  | 'production'
  | 'admin'
  | 'item'
  | 'prestige';

function matchesLevel(p: Programmer, level: 'all' | 'junior' | 'senior'): boolean {
  if (level === 'all') return true;
  if (level === 'junior') return p.level === Level.JUNIOR;
  return p.level === Level.SENIOR;
}

function matchesLevelPerson(
  p: Person,
  level: 'all' | 'junior' | 'senior'
): boolean {
  if (level === 'all') return true;
  if (p.level === undefined) return true;
  if (level === 'junior') return p.level === Level.JUNIOR;
  return p.level === Level.SENIOR;
}

function haystackPerson(p: Person): string {
  return [
    translatedPlain(p.name),
    translatedPlain(p.title),
    translatedPlain(p.text),
    translatedPlain(p.flavorText),
  ]
    .join(' ')
    .toLowerCase();
}

function haystackItem(i: Item): string {
  return [
    translatedPlain(i.name),
    translatedPlain(i.text),
    translatedPlain(i.flavorText),
  ]
    .join(' ')
    .toLowerCase();
}

const PlayableCardsPage: React.FC = () => {
  const { printMode } = usePrintMode();
  const [group, setGroup] = useState<PlayableGroup>('all');
  const [level, setLevel] = useState<'all' | 'junior' | 'senior'>('all');
  const [query, setQuery] = useState('');

  const q = query.trim().toLowerCase();

  const filteredStarter = useMemo(() => {
    return starter.filter((p) => !q || haystackPerson(p).includes(q));
  }, [q]);

  const filteredProduction = useMemo(() => {
    return employees.filter(
      (p) =>
        matchesLevel(p, level) && (!q || haystackPerson(p).includes(q))
    );
  }, [q, level]);

  const filteredAdmin = useMemo(() => {
    return backoffice.filter(
      (p) =>
        matchesLevelPerson(p, level) &&
        (!q || haystackPerson(p).includes(q))
    );
  }, [q, level]);

  const filteredItems = useMemo(() => {
    return items.filter((i) => !q || haystackItem(i).includes(q));
  }, [q]);

  const filteredPrestige = useMemo(() => {
    return prestige_employees.filter((p) => !q || haystackPerson(p).includes(q));
  }, [q]);

  const showStarter = group === 'all' || group === 'starter';
  const showProduction = group === 'all' || group === 'production';
  const showAdmin = group === 'all' || group === 'admin';
  const showItems = group === 'all' || group === 'item';
  const showPrestige = group === 'all' || group === 'prestige';

  return (
    <div>
      <div className="no-print mb-4 space-y-3 rounded border border-slate-200 bg-white p-3">
        <h1 className="text-lg font-semibold">Playable cards</h1>
        <p className="text-sm text-slate-600">
          Employees, starter deck templates, items, and prestige hire. Card
          components keep physical dimensions from CSS (
          <code className="text-xs">index.css</code>
          ). With <strong>Print view</strong> on, each card repeats according to
          optional <code className="text-xs">printCount</code> in data (default
          1).
        </p>
        <div className="flex flex-wrap gap-3">
          <label className="flex flex-col gap-1 text-xs font-medium text-slate-600">
            Category
            <select
              className="rounded border border-slate-300 bg-white px-2 py-1 text-sm"
              value={group}
              onChange={(e) => setGroup(e.target.value as PlayableGroup)}
            >
              <option value="all">All</option>
              <option value="starter">Starter (CEO + intern templates)</option>
              <option value="production">Production employees</option>
              <option value="admin">Admin employees</option>
              <option value="item">Items</option>
              <option value="prestige">Prestige employee</option>
            </select>
          </label>
          <label className="flex flex-col gap-1 text-xs font-medium text-slate-600">
            Level (people only)
            <select
              className="rounded border border-slate-300 bg-white px-2 py-1 text-sm"
              value={level}
              onChange={(e) =>
                setLevel(e.target.value as 'all' | 'junior' | 'senior')
              }
            >
              <option value="all">All</option>
              <option value="junior">Junior</option>
              <option value="senior">Senior</option>
            </select>
          </label>
          <label className="flex min-w-[200px] flex-1 flex-col gap-1 text-xs font-medium text-slate-600">
            Search
            <input
              className="rounded border border-slate-300 px-2 py-1 text-sm"
              placeholder="Title, name, text…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
        </div>
      </div>

      <div className="print-target flex flex-col gap-8">
        {showStarter ? (
          <section>
            <h2 className="no-print mb-2 text-sm font-semibold text-slate-700">
              Starter templates ({filteredStarter.length})
            </h2>
            <div className="flex flex-wrap gap-2">
              {filteredStarter.flatMap((e, index) =>
                Array.from(
                  { length: copiesForPrint(printMode, e.printCount) },
                  (_, copy) => (
                    <EmployeeCard
                      key={`st-${index}-${copy}`}
                      employee={e}
                    />
                  )
                )
              )}
            </div>
          </section>
        ) : null}

        {showProduction ? (
          <section>
            <h2 className="no-print mb-2 text-sm font-semibold text-slate-700">
              Production ({filteredProduction.length})
            </h2>
            <div className="flex flex-wrap gap-2">
              {filteredProduction.flatMap((e, index) =>
                Array.from(
                  { length: copiesForPrint(printMode, e.printCount) },
                  (_, copy) => (
                    <EmployeeCard
                      key={`prod-${index}-${copy}`}
                      employee={e}
                    />
                  )
                )
              )}
            </div>
          </section>
        ) : null}

        {showAdmin ? (
          <section>
            <h2 className="no-print mb-2 text-sm font-semibold text-slate-700">
              Admin ({filteredAdmin.length})
            </h2>
            <div className="flex flex-wrap gap-2">
              {filteredAdmin.flatMap((e, index) =>
                Array.from(
                  { length: copiesForPrint(printMode, e.printCount) },
                  (_, copy) => (
                    <BackOfficeEmployeeCard
                      key={`adm-${index}-${copy}`}
                      employee={e}
                    />
                  )
                )
              )}
            </div>
          </section>
        ) : null}

        {showItems ? (
          <section>
            <h2 className="no-print mb-2 text-sm font-semibold text-slate-700">
              Items ({filteredItems.length})
            </h2>
            <div className="flex flex-wrap gap-2">
              {filteredItems.flatMap((e, index) =>
                Array.from(
                  { length: copiesForPrint(printMode, e.printCount) },
                  (_, copy) => (
                    <ItemCard key={`it-${index}-${copy}`} item={e} />
                  )
                )
              )}
            </div>
          </section>
        ) : null}

        {showPrestige ? (
          <section>
            <h2 className="no-print mb-2 text-sm font-semibold text-slate-700">
              Prestige employee
              {filteredPrestige[0]?.printCount != null ? (
                <span className="font-normal text-slate-500">
                  {' '}
                  (Print view: {filteredPrestige[0].printCount}×)
                </span>
              ) : null}
            </h2>
            <div className="flex flex-wrap gap-2">
              {filteredPrestige.flatMap((e, index) =>
                Array.from(
                  { length: copiesForPrint(printMode, e.printCount) },
                  (_, copy) => (
                    <EmployeeCard
                      key={`pr-${index}-${copy}`}
                      employee={e}
                    />
                  )
                )
              )}
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
};

export default PlayableCardsPage;
