```javascript
// filename: sophisticatedCode.js

// Complex code example demonstrating a digital library management system

class Book {
  constructor(title, author, publicationYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
    this.available = true;
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  getBooksByAuthor(author) {
    return this.books.filter(book => book.author === author);
  }

  borrowBook(title) {
    const book = this.books.find(book => book.title === title);
    if (book && book.available) {
      book.available = false;
      return book;
    }
    return null;
  }

  returnBook(title) {
    const book = this.books.find(book => book.title === title);
    if (book && !book.available) {
      book.available = true;
      return book;
    }
    return null;
  }
}

// Create library and add books
const myLibrary = new Library("My Library");

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
const book3 = new Book("Pride and Prejudice", "Jane Austen", 1813);

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

// Demonstrate library functionality
console.log(`Books written by Harper Lee:`, myLibrary.getBooksByAuthor("Harper Lee"));

const borrowedBook = myLibrary.borrowBook("The Great Gatsby");
console.log(`Borrowed book:`, borrowedBook);

const returnedBook = myLibrary.returnBook("The Great Gatsby");
console.log(`Returned book:`, returnedBook);
```

This code demonstrates a digital library management system. It includes classes for books and libraries, with methods to add books, retrieve books by author, borrow books, and return books. The code creates a library, adds books to it, and showcases the library's functionality by retrieving books by author, borrowing a book, and returning the book.