export const getMangaList = async () => {
  const res = await fetch('/api/manga');
  return res.json();
};
