import {
  tokenToTerm, getMapWordOfDocText, getRankingDocs, compareFnSortRankingDocs,
} from './helpers.js';

export default function search(docs, string) {
  if (!docs.length || !string) return [];

  const findStringSetTerm = new Set(string.split(' ').map((token) => tokenToTerm(token)));
  const mapDoc = docs.map((doc) => getMapWordOfDocText(doc.id, doc.text));

  const rankingDocs = getRankingDocs(mapDoc, findStringSetTerm);
  rankingDocs.sort(compareFnSortRankingDocs);

  return rankingDocs
    .filter((doc) => doc.isAllTermInText || doc.countTermInText)
    .map((doc) => doc.id);
}
