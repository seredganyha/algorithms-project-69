export default function search(docs, string) {
  if (!docs.length || !string) return [];

  return docs
    .map((doc) => {
      console.log(doc.text.split(' ').map((el) => el.replace(/[^a-zа-яё]/ig, '')));
      const textSet = new Set(doc.text.split(' ').map((el) => el.replace(/[^a-zа-яё]/ig, '')));
      if (textSet.has(string.replace(/[^a-zа-яё]/ig, ''))) return doc.id;
      return null;
    })
    .filter((doc) => !!doc);
}
