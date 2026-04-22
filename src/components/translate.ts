import TranslatedString from "../model/TranslatedString";

function tr(text?: TranslatedString): string {
  const v = text?.en;
  if (typeof v === 'string') return v;
  return '';
}
export default tr;
