const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];

  // Ex1://
  function authorBornIn1947() {
   return books.find((elemento) => elemento.author.birthYear === 1947).author.name;
  }

  console.log(authorBornIn1947());

  //Ex2://
  function smallerName() {
    let nameBook = 'titutlo de livro muito muito muito grande';
   books.forEach((elemento) => {
    if (elemento.name.length < nameBook.length) {
      nameBook = elemento.name;
    }
  });
    return nameBook;
  }

  console.log(smallerName());

  //Ex3://
  function getNamedBook() {
   return books.find((elemento) => {
       return elemento.name.length === 26
   })
  }

  console.log(getNamedBook());

  //Ex4://
  function booksOrderedByReleaseYearDesc() {
    return books.sort((livraA, livroB) => livroB.releaseYear - livraA.releaseYear)
  }

  console.log(booksOrderedByReleaseYearDesc());

  //Ex5://
  function everyoneWasBornOnSecXX() {
    return books.every((elemento) => {
        return elemento.author.birthYear > 1900 && elemento.author.birthYear < 2001;
    })
  }

  console.log(everyoneWasBornOnSecXX());

  function someBookWasReleaseOnThe80s() {
  return books.some((elemento) => {
      return elemento.releaseYear > 1979 && elemento.releaseYear < 1991;
  })
  }

  console.log(someBookWasReleaseOnThe80s());

  function authorUnique() {
    return books.every((book) =>
    !books.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)));
}

console.log(authorUnique());