export default function search(docs, string) {
  if (!docs.length || !string) return [];

  return docs
    .map((doc) => {
      const textSet = new Set(doc.text.split(' '));
      if (textSet.has(string)) return doc.id;
      return null;
    })
    .filter((doc) => !!doc);
}
