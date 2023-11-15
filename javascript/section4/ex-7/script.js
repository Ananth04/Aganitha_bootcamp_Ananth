//Modify the Library class to have a catalog that maps topics to arrays of books.
//Use composition to include a Catalog class within the Library.

class Book {
    constructor(title, authors, pages = 0) {
      if (!title || !authors || authors.length === 0) {
        throw new Error('Title and at least one author are mandatory.');
      }
  
      this.title = title;
      this.authors = authors;
      this.pages = pages;
    }
}
  
class Author {
    constructor(name, birthYear, nationality) {
      this.name = name;
      this.birthYear = birthYear;
      this.nationality = nationality;
    }
}
  
class Catalog {
    constructor() {
      this.catalog = new Map();
    }
  
    addBookToTopic(book, topic) {
      if (!this.catalog.has(topic)) {
        this.catalog.set(topic, []);
      }
      this.catalog.get(topic).push(book);
    }
}
  
class Library {
    constructor() {
      this.books = [];
      this.map = new Catalog();
    }
  
    addBook(book) {
        if (!(book instanceof Book)) {
          throw new Error('Invalid book object.');
        }
    
        this.books.push(book);
    
        if (book.authors && book.authors.length > 0) {
          for (const author of book.authors) {
            if (!(author instanceof Author)) {
              throw new Error('Invalid author object.');
            }
            this.map.addBookToTopic(book, author.name);
          }
        }
      }
}
 
const author1 = new Author('ak', 1998, 'Indian');
const author2 = new Author('vin', 2002, 'Single');
  
const book1 = new Book('Your name', [author1], 250);
const book2 = new Book('My world', [author2], 300);
const book3 = new Book('Another Book', [author1, author2], 200);
  
const myLibrary = new Library();
  
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
  
console.log(myLibrary.map.catalog);