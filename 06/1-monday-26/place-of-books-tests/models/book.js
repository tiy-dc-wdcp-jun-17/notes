const books = [
  {
    id: 1,
    authorId: 2,
    title: "World War Z",
    description:
      "World War Z: An Oral History of the Zombie War is a 2006 apocalyptic horror novel by Max Brooks. The novel is a collection of individual accounts narrated by an agent of the United Nations Postwar ",
    coverUrl:
      "https://t1.gstatic.com/images?q=tbn:ANd9GcTQ02Snscqfb0tz2J9lcZz4REGvLHPQ_xYBfWa6BF6jYLsjhJsT"
  },
  {
    id: 2,
    authorId: 1,
    title: "A Tale of Two Cities",
    description:
      "A Tale of Two Cities was the twelfth novel of Charles Dickens.  The first chapters of the book appeared in print in April of 1859.  The last chapter was printed in November of that same year.",
    coverUrl: "http://www.charlesdickensinfo.com/images/Tale.jpg"
  },
  {
    id: 3,
    authorId: 1,
    title: "Oliver Twist",
    description:
      "Oliver Twist was the second novel of Charles Dickens.  It was initially published in monthly installments that began in February of 1837 and ended in April of 1839.  The publication of Oliver Twist began before the monthly publication of The Pickwick Papers ended. The two novels overlapped for nine months.  Additionally  Dickens started Nicholas Nickleby (also issued in monthly installments) before Twist finished publication.  Those two novels overlapped for nine months as well.",
    coverUrl: "http://www.charlesdickensinfo.com/images/Twist.jpg"
  }
];

function filterByAuthorId(id) {
  return books.filter(el => {
    return el.authorId == id;
  });
}

function findById(id) {
  return books.find(el => {
    return el.id == id;
  });
}

function create(bookAttributes) {
  bookAttributes.id = books.length + 1
  books.push(bookAttributes)

  return books;
}

module.exports = {
  create: create,
  all: books,
  filterByAuthorId: filterByAuthorId,
  findById: findById
};
