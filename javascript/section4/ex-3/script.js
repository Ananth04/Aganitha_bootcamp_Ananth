//Add a method to the Library class called addBook that takes a Book object as an argument 
//and adds it to the library's collection of books.

class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
}

class Book {
    constructor(title, author, pages = 0) {
      if (!title || !author) {
        throw new Error('Title and author are mandatory.');
      }
  
      this.title = title;
      this.author = author;
      this.pages = pages;
    }
}
  
const myLibrary = new Library();
  
const book1 = new Book('Your name', 'ak', 200);
const book2 = new Book('My world', 'vin', 150);
  
myLibrary.addBook(book1);
myLibrary.addBook(book2);

console.log(myLibrary.books);