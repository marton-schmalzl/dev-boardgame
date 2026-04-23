import TranslatedString from "../model/TranslatedString";

function tr(text?: TranslatedString): string {
  return text?.en as string || ''; // hacky as fuck
}
export default tr;
