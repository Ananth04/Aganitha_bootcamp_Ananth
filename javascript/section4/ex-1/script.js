//Define a class called Book with properties title, author, and pages.
//Implement a constructor that initializes these properties.
//Ensure that the title and author are mandatory, but pages is optional, defaulting to 0 if not provided.

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

const book1 = new Book('Your name', 'ak', 200);
console.log(book1);

const book2 = new Book('', 'Jane Smith');
console.log(book2);
  