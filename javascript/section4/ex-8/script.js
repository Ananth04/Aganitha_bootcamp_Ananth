//Introduce different types of books, such as FictionBook and NonFictionBook, that inherit from the Book class.
//Add specialized properties or methods for each type.

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
  
class FictionBook extends Book {
    constructor(title, authors, pages = 0, genre) {
      super(title, authors, pages);
      this.genre = genre;
    }
  
    // Specialized method for FictionBook
    displayGenre() {
      console.log(`Genre: ${this.genre}`);
    }
}
  
class NonFictionBook extends Book {
    constructor(title, authors, pages = 0, topic) {
      super(title, authors, pages);
      this.topic = topic;
    }

    displayTopic() {
      console.log(`Topic: ${this.topic}`);
    }
}
const fictionBook = new FictionBook('The Hobbit', ['J.R.R. Tolkien'], 300, 'Fantasy');
fictionBook.displayGenre();
  
const nonFictionBook = new NonFictionBook('Sapiens', ['Yuval Noah Harari'], 400, 'History');
nonFictionBook.displayTopic();