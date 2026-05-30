// Day 037 - Specs & Project Release
// Day 37: Practice: Objects and Prototypes constructor functions
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

Book.prototype.displayInfo = function() {
  return this.title + " by " + this.author + " (" + this.pages + " pages)";
};

const book1 = new Book("JS Mastery", "Developer", 300);
console.log("Book info:", book1.displayInfo());