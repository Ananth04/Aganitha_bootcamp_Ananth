//Introduce an Author class with properties name, birthYear, and nationality.
//Add an author property to the Book class, representing the author of the book.
//Ensure that a book can have one or more authors.

class Author {
    constructor(name, birthYear, nationality) {
      this.name = name;
      this.birthYear = birthYear;
      this.nationality = nationality;
    }
}
  
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
 
const author1 = new Author('ak', 1998, 'Indian');
const author2 = new Author('vin', 2002, 'Single');
  
const book = new Book('Sample Book', [author1, author2], 250);

console.log(book); 