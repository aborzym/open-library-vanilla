

export async function searchBooks(author, title) {
  // Krok 1. Stworzenie parametrów wyszukiwania z obiektu
  const params = new URLSearchParams({ author, title });

  // Krok 2. Upewnienie się, że zwracany jest ciąg znaków,
  //         który może zostać umieszczony w linku
  console.log(params.toString());

  // Krok 3. Wykorzystanie ciągu znaków w linku służącym do
  //         otrzymania danych z internetu
  return fetch(`https://openlibrary.org/search.json?${params}`)
    .then((res) => {
      return res.json();
    });
}

export async function getBook(isbn) {
  return fetch(
    `https://openlibrary.org/api/volumes/brief/isbn/${isbn}.json`
  ).then((res) => res.json());
}
