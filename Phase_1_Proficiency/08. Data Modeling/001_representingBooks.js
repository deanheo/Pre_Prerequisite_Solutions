function makeBook(title, author, price, genre, pages) {
  return {
    title: title,
    author: author,
    price: price || '',
    genre: genre || '',
    pages: pages || ''
  }
}

function displayBook(book) {
  return book.title + ', by ' + book.author;
}

function displayBooks(books) {
  var result = '';
  for (var i = 0; i < books.length; i++)
    result += (i + 1) + ". " + displayBook(books[i]) + "\n";
  return result
}

function searchBooks(query, books) {
  var result = [];
  for (var i = 0; i < books.length; i++) {
    if (books[i].title.indexOf(query) !== -1)
      result.push(books[i].title)
  }
  return result;
}
