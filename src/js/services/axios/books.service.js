import axios from 'axios';

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
  return axios
    .get(`https://openlibrary.org/search.json`, { params: searchData })
    .then((res) => res.data);
}

export async function getBook(isbn) {
  return axios
    .get(`https://openlibrary.org/api/volumes/brief/isbn/${isbn}.json`)
    .then((res) => res.data);
}
