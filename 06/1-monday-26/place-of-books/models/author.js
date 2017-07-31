let authors = [
  {
    id: 1,
    name: "Charles Dickens",
    bio:
      "British novelist Charles Dickens was born on February 7, 1812, in Portsmouth, England. Over the course of his writing career, he wrote the beloved classic novels Oliver Twist, A Christmas Carol, Nicholas Nickleby, David Copperfield, A Tale of Two Cities and Great Expectations. On June 9, 1870, Dickens died of a stroke in Kent, England, leaving his final novel, The Mystery of Edwin Drood, unfinished."
  },
  {
    id: 2,
    name: "Max Brooks",
    bio:
      "Maximillian Michael Brooks (born May 22, 1972) is an American author. He is the son of comedy filmmaker Mel Brooks and actress Anne Bancroft. Much of Brooks's writing focuses on zombie stories"
  },
  {
    id: 3,
    name: "Agatha Christie",
    bio:
      "Born on September 15, 1890, in Torquay, England, Agatha Christie published her first novel, The Mysterious Affair at Styles, in 1920, and went on to become one of the most famous writers in history, with mysteries like Murder at the Vicarage, Partners in Crime and Sad Cypress. She sold billions of copies of her work, and was also a noted playwright and romance author. She died on January 12, 1976."
  }
];

function findById(id) {
  return authors.find(function(el){
    return el.id == id;
  });
}

module.exports = {
  "all": authors,
  "findById": findById
}
