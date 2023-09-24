import search from '../src/search.js';

test('search with processed words in documents', () => {
  const doc1 = { id: 'doc1', text: "I can't shoot straight unless I've had a pint!" };
  const doc2 = { id: 'doc2', text: "Don't shoot shoot shoot that thing at me." };
  const doc3 = { id: 'doc3', text: "I'm your shooter." };
  const docs = [doc1, doc2, doc3];
  expect(search(docs, 'shoot')).toEqual(['doc2', 'doc1']);
});

test('search multiple words', () => {
  const doc1 = { id: 'doc1', text: "Don't shoot shoot shoot that thing at me." };
  const doc2 = { id: 'doc2', text: "I can't shoot straight unless I've had a pint!" };
  const doc3 = { id: 'doc3', text: "I'm your shooter." };
  const doc4 = { id: 'doc4', text: "shoot shoot shoot shoot shoot shoot, shoot shoot! shoot 'shoot' " };
  const doc5 = { id: 'doc5', text: 'shoot at me' };
  const docs = [doc1, doc2, doc3, doc4, doc5];
  expect(search(docs, 'shoot at me')).toEqual(['doc1', 'doc5', 'doc4', 'doc2']);
});

test('search with raw words in documents', () => {
  const doc1 = { id: 'doc1', text: "I can't shoot straight unless I've had a pint!" };
  const doc2 = { id: 'doc2', text: "Don't shoot shoot shoot that thing at me." };
  const doc3 = { id: 'doc3', text: "I'm your shooter." };
  const docs = [doc1, doc2, doc3];
  expect(search(docs, 'pint')).toEqual(['doc1']);
  expect(search(docs, 'pint!')).toEqual(['doc1']);
});

test('unsuccessful search', () => {
  const doc1 = { id: 'doc1', text: '' };
  const doc2 = { id: 'doc2', text: 'me' };
  const doc3 = { id: 'doc3', text: "I'm your shooter." };
  const docs = [doc1, doc2, doc3];
  expect(search(docs, 'shoot')).toEqual([]);
});

test('empty documents', () => {
  const doc1 = { id: 'doc1', text: '' };
  const doc2 = { id: 'doc2', text: '' };
  const doc3 = { id: 'doc3', text: '' };
  const docs = [doc1, doc2, doc3];
  expect(search(docs, 'shoot')).toEqual([]);
});

test('empty string', () => {
  const doc1 = { id: 'doc1', text: '' };
  const doc2 = { id: 'doc2', text: "Don't shoot shoot shoot that thing at me." };
  const doc3 = { id: 'doc3', text: "I'm your shooter." };
  const docs = [doc1, doc2, doc3];
  expect(search(docs, '')).toEqual([]);
});

test('empty documents and empty string', () => {
  const doc1 = { id: 'doc1', text: '' };
  const doc2 = { id: 'doc2', text: '' };
  const doc3 = { id: 'doc3', text: '' };
  const docs = [doc1, doc2, doc3];
  expect(search(docs, '')).toEqual([]);
});
