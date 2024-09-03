document.addEventListener("DOMContentLoaded", () => {
  displayLibrary();
  addBookToLibrary();
});

const myLibrary = [];

function Book(author, title, numberOfPages, hasRead) {
  this.author = author;
  this.title = title;
  this.numberOfPages = numberOfPages;
  this.hasRead = hasRead;
}

Book.prototype.toggleReadStatus = function () {
  this.hasRead = !this.hasRead;
};

function displayLibrary() {
  const output = document.getElementById("books");
  let text = "<h2>Books</h2>";

  myLibrary.forEach((book, index) => {
    text += `
          <div class="book-card" data-index="${index}">
            <button class="deleteButton fa fa-trash-o" style="font-size:24px;color:red"></button>
            <button class="toggleReadButton">${
              book.hasRead ? "Mark as Unread" : "Mark as Read"
            }</button>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Title:</strong> ${book.title}</p>
            <p><strong>Number of Pages:</strong> ${book.numberOfPages}</p>
            <p><strong>Has Read:</strong> ${book.hasRead ? "Yes" : "No"}</p>
          </div>
        `;
  });

  output.innerHTML = text;
  attachEventListeners();
}

function addBookToLibrary() {
  const addBookButton = document.getElementById("add-book");
  const bookDialog = document.getElementById("book-dialog");
  const confirmBtn = bookDialog.querySelector("#confirmBtn");
  const form = bookDialog.querySelector("form");

  addBookButton.addEventListener("click", () => {
    bookDialog.showModal();
  });

  confirmBtn.addEventListener("click", (event) => {
    event.preventDefault();

    if (form.checkValidity()) {
      const formData = new FormData(form);

      const newBook = new Book(
        formData.get("author"),
        formData.get("title"),
        parseInt(formData.get("numberOfPages")),
        formData.get("hasRead") === "on"
      );

      myLibrary.push(newBook);

      form.reset();

      bookDialog.close();

      displayLibrary();
    } else {
      form.reportValidity();
    }
  });

  cancelBtn.addEventListener("click", (event) => {
    bookDialog.close();
  });

  bookDialog.addEventListener("close", () => {
    form.reset();
  });
}

function attachEventListeners() {
  const deleteButtons = document.querySelectorAll(".deleteButton");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const bookCard = button.closest(".book-card");
      const index = parseInt(bookCard.getAttribute("data-index"));

      myLibrary.splice(index, 1);

      displayLibrary();
    });
  });

  const toggleReadButtons = document.querySelectorAll(".toggleReadButton");
  toggleReadButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const bookCard = button.closest(".book-card");
      const index = parseInt(bookCard.getAttribute("data-index"));

      myLibrary[index].toggleReadStatus();

      displayLibrary();
    });
  });
}
