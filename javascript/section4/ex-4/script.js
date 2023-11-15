//Extend the Book class to create a subclass called SpecializedBook.
//Add a property topic to represent the specialized topic of the book.

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
  
class SpecializedBook extends Book {
    constructor(title, author, pages, topic) {
      super(title, author, pages);
      this.topic = topic;
    }
}

const specializedBook = new SpecializedBook('Advanced JavaScript', 'Jane Smith', 300, 'Programming');
console.log(specializedBook);  