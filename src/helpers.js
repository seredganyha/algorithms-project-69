const tokenToTerm = (token) => token.replace(/[^a-zа-яё]/ig, '');

const getMapWordOfDocText = (id, text) => {
  const wordMap = new Map();

  text.split(' ').forEach((word) => {
    const term = tokenToTerm(word);
    if (wordMap.has(term)) {
      wordMap.set(term, wordMap.get(term) + 1);
    } else wordMap.set(term, 1);
  });
  return { id, textMap: wordMap };
};

const getRankingDocs = (mapDoc, setStringTerm) => {
  const rankingDocs = mapDoc.map((doc) => {
    let countUniqueTermInDocText = 0;
    let totalCountTermInDocText = 0;
    setStringTerm.forEach((term) => {
      if (doc.textMap.has(term)) {
        countUniqueTermInDocText += 1;
        totalCountTermInDocText += doc.textMap.get(term);
      }
    });
    return {
      id: doc.id,
      isAllTermInText: countUniqueTermInDocText === setStringTerm.size,
      countTermInText: totalCountTermInDocText,
    };
  });
  return rankingDocs;
};

const compareFnSortRankingDocs = ((a, b) => {
  if (a.isAllTermInText > b.isAllTermInText) {
    return -1;
  }
  if (a.isAllTermInText === b.isAllTermInText && a.countTermInText > b.countTermInText) {
    return -1;
  }
  if (a.isAllTermInText < b.isAllTermInText) {
    return 1;
  }
  if (a.isAllTermInText === b.isAllTermInText && a.countTermInText < b.countTermInText) {
    return 1;
  }
  return 0;
});

export {
  tokenToTerm, getMapWordOfDocText, getRankingDocs, compareFnSortRankingDocs,
};
