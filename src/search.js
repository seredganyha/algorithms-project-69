import { tokenToTerm, getMapWordOfDocText } from './helpers.js';

export default function search(docs, string) {
  if (!docs.length || !string) return [];

  const term = tokenToTerm(string);
  const mapDoc = docs.map((doc) => getMapWordOfDocText(doc.id, doc.text));

  mapDoc.sort((a, b) => (b.textMap.get(term) ?? 0) - (a.textMap.get(term) ?? 0));

  return mapDoc
    .filter((doc) => doc.textMap.has(term))
    .map((doc) => doc.id);
}
