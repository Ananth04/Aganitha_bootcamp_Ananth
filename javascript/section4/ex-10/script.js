//Implement a mixin called Logger with a method log that logs a message.
//The Book and Library classes should utilize this mixin to enhance their functionality.
//In the Book class, use the Logger mixin to log information such as the title, author, and publication date when a new book is created.
//In the Library class, apply the Logger mixin to log messages about book additions and borrowings, providing details like the book title and borrower's information.
//This demonstrates the use of mixins to incorporate reusable logging functionality into multiple classes, promoting modular and maintainable code.

const Logger = {
    log(message) {
      console.log(message);
    }
};
  
class Book {
    constructor(title, authors, publicationDate, pages = 0) {
      Object.assign(this,Logger);
      if (!title || !authors || authors.length === 0 || !publicationDate) {
        throw new Error('Title, at least one author, and publication date are mandatory.');
      }
  
      this.title = title;
      this.authors = authors;
      this.publicationDate = publicationDate;
      this.pages = pages;
      this.status = 'available';
  
      this.log(`New book created: ${this.title} by ${this.authors.join(', ')}, published on ${this.publicationDate}`);
    }
}
  
class Library {
    constructor() {
      this.books = [];
      Object.assign(this, Logger);
    }
  
    addBook(book) {
      if (!(book instanceof Book)) {
        throw new Error('Invalid book object.');
      }
  
      this.books.push(book);
      this.log(`Book added to library: ${book.title}`);
    }
  
    borrowBook(title, borrowerInfo) {
      const book = this.books.find(book => book.title === title && book.status === 'available');
      if (book) {
        book.status = 'borrowed';
        this.log(`Book borrowed: ${book.title} by ${borrowerInfo}`);
        return book;
      }
      this.log(`Book ${title} is not available for borrowing.`);
      return null;
    }
}
  
const myLibrary = new Library();
  
const book1 = new Book('Your name', ['ak'], '2023-01-01', 250);
const book2 = new Book('My world', ['vin'], '2023-02-01', 300);
  
myLibrary.addBook(book1);
myLibrary.addBook(book2);
  
myLibrary.borrowBook('Your name', 'vin');