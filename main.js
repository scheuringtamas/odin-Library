const myLibrary = [
  {
    author: "F. Scott Fitzgerald",
    title: "The Great Gatsby",
    numberOfPages: 180,
    hasRead: true,
  },
  {
    author: "J.R.R. Tolkien",
    title: "The Hobbit",
    numberOfPages: 310,
    hasRead: false,
  },
];

function Book(author, title, numberOfPages, hasRead) {
  this.author = author;
  this.title = title;
  this.numberOfPages = numberOfPages;
  this.hasRead = hasRead;
}

function displayLibrary() {
  let text = "";

  // Iterálás a könyvek tömbjén
  myLibrary.forEach((book) => {
    text += `
        <div class="book-card">
          <p><strong>Author:</strong> ${book.author}</p>
          <p><strong>Title:</strong> ${book.title}</p>
          <p><strong>Number of Pages:</strong> ${book.numberOfPages}</p>
          <p><strong>Has Read:</strong> ${book.hasRead ? "Yes" : "No"}</p>
        </div>
      `;
  });

  // Az összes könyv megjelenítése egy HTML elemben
  document.getElementById("books").innerHTML += text;
}

function addBookToLibrary() {
  // do stuff here
}

displayLibrary();
