import type { Technology, Feature } from '../model/contracts/Contract';
import type { Person } from '../model/cards/Person';

/** Run once in dev: duplicate card numbers and missing photos. */
export function runCardDataDevChecks(opts: {
  technologies: Technology[];
  features: Feature[];
  programmers: Person[];
}): void {
  if (!import.meta.env.DEV) return;

  const { technologies, features, programmers } = opts;
  const byNumber = new Map<string, string[]>();

  const note = (id: string | undefined, label: string) => {
    if (!id?.trim()) return;
    const list = byNumber.get(id) ?? [];
    list.push(label);
    byNumber.set(id, list);
  };

  for (const t of technologies) {
    note(t.cardNumber, `Technology "${t.name.en}"`);
  }
  for (const f of features) {
    note(f.cardNumber, `Feature "${f.name.en}"`);
  }

  for (const [num, labels] of Array.from(byNumber.entries())) {
    if (labels.length > 1) {
      console.warn(
        `[card data] Duplicate cardNumber "${num}":\n`,
        labels.join('\n')
      );
    }
  }

  const photoPeople = programmers.filter(
    (p) => !p.photoSrc || !String(p.photoSrc).trim()
  );
  if (photoPeople.length > 0) {
    console.warn(
      `[card data] Empty photoSrc on ${photoPeople.length} playable person card(s) (images may 404).`,
      photoPeople.map((p) => p.title?.en ?? p.name?.en ?? '(untitled)')
    );
  }

  const photoAssignments = [...technologies, ...features].filter(
    (c) => !c.photoSrc || !String(c.photoSrc).trim()
  );
  if (photoAssignments.length > 0) {
    console.warn(
      `[card data] Empty photoSrc on ${photoAssignments.length} assignment card(s).`,
      photoAssignments.map((c) => c.name.en)
    );
  }
}
