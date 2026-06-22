import React, { useMemo, useState } from 'react';
import { tecnical_contracts } from '../data/tecnical_contracts';
import { functional_contracts } from '../data/functional_contracts';
import TechnologyCard from '../components/TechnologyCard/TechnologyCard';
import FeatureCard from '../components/FeatureCard/FeatureCard';
import { translatedPlain } from '../lib/cardText';
import type { Feature } from '../model/contracts/Contract';
import { usePrintMode } from '../context/PrintModeContext';
import { copiesForPrint } from '../lib/printCopies';

type AssignmentKind = 'all' | 'features' | 'technologies';

function haystackTech(
  t: (typeof tecnical_contracts)[number]
): string {
  return [
    translatedPlain(t.name),
    translatedPlain(t.topDescription),
    translatedPlain(t.bottomDescription),
    translatedPlain(t.text),
    t.cardNumber ?? '',
  ]
    .join(' ')
    .toLowerCase();
}

function haystackFeature(f: Feature): string {
  return [
    translatedPlain(f.name),
    translatedPlain(f.effectDescription),
    translatedPlain(f.text),
    f.cardNumber ?? '',
  ]
    .join(' ')
    .toLowerCase();
}

/** Sum of knowledge + creativity + organization (preview sort order). */
function totalRequiredSkills(f: Feature): number {
  const s = f.requiredSkills;
  return s.knowledge + s.creativity + s.organization;
}

const AssignmentCardsPage: React.FC = () => {
  const { printMode } = usePrintMode();
  const [kind, setKind] = useState<AssignmentKind>('all');
  const [query, setQuery] = useState('');
  const q = query.trim().toLowerCase();

  const techs = useMemo(
    () => tecnical_contracts.filter((t) => !q || haystackTech(t).includes(q)),
    [q]
  );

  const feats = useMemo(() => {
    const filtered = functional_contracts.filter(
      (f) => !q || haystackFeature(f).includes(q)
    );
    return [...filtered].sort((a, b) => {
      const ta = totalRequiredSkills(a);
      const tb = totalRequiredSkills(b);
      if (ta !== tb) return ta - tb;
      return (a.cardNumber ?? '').localeCompare(b.cardNumber ?? '');
    });
  }, [q]);

  const showTech = kind === 'all' || kind === 'technologies';
  const showFeat = kind === 'all' || kind === 'features';

  return (
    <div>
      <div className="no-print mb-4 space-y-3 rounded border border-slate-200 bg-white p-3">
        <h1 className="text-lg font-semibold">Assignment cards</h1>
        <p className="text-sm text-slate-600">
          Feature contracts and Technology contracts (landscape cards). In{' '}
          <strong>Print view</strong>, each card repeats per optional{' '}
          <code className="text-xs">printCount</code> (default 1).
        </p>
        <div className="flex flex-wrap gap-3">
          <label className="flex flex-col gap-1 text-xs font-medium text-slate-600">
            Type
            <select
              className="rounded border border-slate-300 bg-white px-2 py-1 text-sm"
              value={kind}
              onChange={(e) => setKind(e.target.value as AssignmentKind)}
            >
              <option value="all">All</option>
              <option value="features">Features only</option>
              <option value="technologies">Technologies only</option>
            </select>
          </label>
          <label className="flex min-w-[200px] flex-1 flex-col gap-1 text-xs font-medium text-slate-600">
            Search
            <input
              className="rounded border border-slate-300 px-2 py-1 text-sm"
              placeholder="Name, effect text, card number…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
        </div>
      </div>

      <div className="print-target flex flex-col gap-8">
        {showFeat ? (
          <section>
            <h2 className="no-print mb-2 text-sm font-semibold text-slate-700">
              Features ({feats.length})
            </h2>
            <div className="flex flex-wrap gap-2">
              {feats.flatMap((e, index) =>
                Array.from(
                  { length: copiesForPrint(printMode, e.printCount) },
                  (_, copy) => (
                    <FeatureCard
                      key={`feat-${e.cardNumber ?? index}-${copy}`}
                      feature={e}
                    />
                  )
                )
              )}
            </div>
          </section>
        ) : null}

        {showTech ? (
          <section>
            <h2 className="no-print mb-2 text-sm font-semibold text-slate-700">
              Technologies ({techs.length})
            </h2>
            <div className="flex flex-wrap gap-2">
              {techs.flatMap((e, index) =>
                Array.from(
                  { length: copiesForPrint(printMode, e.printCount) },
                  (_, copy) => (
                    <TechnologyCard
                      key={`tech-${e.cardNumber ?? index}-${copy}`}
                      technology={e}
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

export default AssignmentCardsPage;
