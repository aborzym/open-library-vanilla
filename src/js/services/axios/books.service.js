import axios from 'axios';

export async function searchBooks(author, title) {
  // Krok 1. Stworzenie parametrów wyszukiwania z obiektu
  const params = new URLSearchParams({ author, title });

  // Krok 2. Upewnienie się, że zwracany jest ciąg znaków,
  //         który może zostać umieszczony w linku
  console.log(params.toString());

  // Krok 3. Wykorzystanie ciągu znaków w linku służącym do
  //         otrzymania danych z internetu
  return axios
    .get(`https://openlibrary.org/search.json?${params}`)
    .then((res) => {
      return res.data;
    });
}

export async function getBook(isbn) {
  return axios
    .get(`https://openlibrary.org/api/volumes/brief/isbn/${isbn}.json`)
    .then((res) => res.data);
}
