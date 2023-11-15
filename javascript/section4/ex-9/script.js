//Implement a method in the Library class called borrowBook that takes a book title and returns the book if available.
//Update the book's status to "borrowed."

class Book {
    constructor(title, authors, pages = 0) {
      if (!title || !authors || authors.length === 0) {
        throw new Error('Title and at least one author are mandatory.');
      }
  
      this.title = title;
      this.authors = authors;
      this.pages = pages;
      this.status = 'available';
    }
}
  
class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      if (!(book instanceof Book)) {
        throw new Error('Invalid book object.');
      }
  
      this.books.push(book);
    }
  
    borrowBook(title) {
      for (const book of this.books) {
        if (book.title === title && book.status === 'available') {
          book.status = 'borrowed';
          return book;
        }
      }
      return 'not available';
    }
}

const myLibrary = new Library();

const book1 = new Book('Your name', ['ak']);
const book2 = new Book('My world', ['vin']);
  
myLibrary.addBook(book1);
myLibrary.addBook(book2);

const result1 = myLibrary.borrowBook('Your name');
const result2 = myLibrary.borrowBook('Non-existent Book');
const result3 = book1.status;
  
console.log(result1);
console.log(result2);
console.log(result3);