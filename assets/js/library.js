function getBooks() {
    const books = localStorage.getItem('books');
    return books ? JSON.parse(books) : [];
}

function saveBooks(books) {
    localStorage.setItem('books', JSON.stringify(books));
}

function displayBooks() {
    const libraryDiv = document.getElementById('library');
    libraryDiv.innerHTML = '';

    const books = getBooks();
    books.forEach((book, index) => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML = `<strong>${book.title}</strong> ${book.author} <button onclick="deleteBook(${index})">Удалить</button>`;
        libraryDiv.appendChild(bookDiv);
    });
}

document.getElementById('bookForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;

    const books = getBooks();
    books.push({ title, author });
    saveBooks(books);
    displayBooks();

    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
});

function deleteBook(index) {
    const books = getBooks();
    books.splice(index, 1);
    saveBooks(books);
    displayBooks();
}

displayBooks();