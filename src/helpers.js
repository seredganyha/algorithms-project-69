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

export { tokenToTerm, getMapWordOfDocText };
