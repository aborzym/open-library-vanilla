/**
 * @typedef {object} SearchData
 * @property {string} [author] Autor książki
 * @property {string} [title] Tytuł książki
 * @property {number} [page=1] Strona wyników
 */

/**
 * @param {SearchData} searchData
 */
export async function searchBooks(searchData) {
  const searchParamsFromConfig = new URLSearchParams(searchData);
  return fetch(
    `https://openlibrary.org/search.json?${searchParamsFromConfig}`
  ).then((res) => res.json());
}

export async function getBook(isbn) {
  return fetch(
    `https://openlibrary.org/api/volumes/brief/isbn/${isbn}.json`
  ).then((res) => res.json());
}
