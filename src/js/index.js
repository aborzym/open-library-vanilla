import { searchForm, results } from './utils/dom';
import { searchBooks } from './services/axios/books.service';

// searchForm.addEventListener('submit', async (ev) => {
//   ev.preventDefault();
//   const author = ev.currentTarget.elements.author.value;
//   const title = ev.currentTarget.elements.title.value;
//   const books = await searchBooks(author, title);
//   console.log(books);
//   const list = books.docs;
//   results.innerHTML = list.map((book) => {
//     return `<div class="result-book"><img src="https://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg" /><p>${book.title} (${book.author_name})</p></div>`;
//   }).join("");
// });

searchForm.addEventListener('submit', (ev) => {
  ev.preventDefault();
  const author = ev.currentTarget.elements.author.value;
  const title = ev.currentTarget.elements.title.value;
  searchBooks(author, title).then((books) => {
    console.log(books);
    const list = books.docs;
    results.innerHTML = list.map((book) => {
      return `<div class="result-book"><img src="https://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg" /><p>${book.title} (${book.author_name})</p></div>`;
    }).join("");
  });
});
