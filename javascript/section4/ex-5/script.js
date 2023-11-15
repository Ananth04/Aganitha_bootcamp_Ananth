//Modify the SpecializedBook class constructor to initialize the topic property.
//If the topic is not provided, set it to "General."

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
    constructor(title, author, pages, topic = 'General') {
      super(title, author, pages);
      this.topic = topic;
    }
}

const specializedBook = new SpecializedBook('Advanced JavaScript', 'Jane Smith', 300, 'Programming');
const specializedBook1 = new SpecializedBook('Advanced JavaScript', 'Jane Smith', 300);
console.log(specializedBook);
console.log(specializedBook1);