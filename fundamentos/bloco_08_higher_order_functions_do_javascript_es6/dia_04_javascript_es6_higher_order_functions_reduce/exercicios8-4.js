// Ex 1://
const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  let novoArray = [];
  function flatten(array) {
  return array.reduce((acc, value) => `${acc} ${value}`);
  }
  novoArray.push(flatten(arrays));
  console.log(novoArray);

  //Resultado correto://
  function flatten2() {
    return arrays.reduce((acc, curr) => acc.concat(curr), []);
  }
  console.log(flatten2());

  //Exercicio 2://
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
  
  function reduceNames(array) {
   return array.reduce((acc, current) => `${acc} ${current.author.name},`, '');
  }

  console.log(reduceNames(books).trim());

  //Exercicio 3://
function age(array) {
    return array.map((element) => element.releaseYear - element.author.birthYear);
}
console.log(age(books));

  function averageAge(array) {
    const soma = array.reduce((acc, current) => acc + current);
return soma / array.length;  
}

  console.log(averageAge(age(books)));

  const expectedResult = 43;
//ou://
function averageAge2() {
  const numberOfBooks = books.length;
  const sumOfAges = books.reduce((sum, book) => (
    sum + (book.releaseYear - book.author.birthYear)
  ), 0);
  return sumOfAges / numberOfBooks;
}

console.log(averageAge2());

//Exercício 4://
function longestNamedBook() {
    return books.reduce((acc, book) => {
        if (book.name.length > acc.name.length) {
          return  book
        } else {return acc}
    }, 0)
  }

//   console.log(longestNamedBook());

  function longestNamedBook2() {
    return books.reduce((biggestBook, currentBook) => {
      if (currentBook.name.length > biggestBook.name.length) {
        return currentBook;
      }
      return biggestBook;
    });
  }

  console.log(longestNamedBook2());

  //Exercicio 5://
  const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  let soma = 0;
  function containsA() {
   return names.map((palavra) => {
 for (let letra of palavra) {
    if (letra === 'a' || letra === 'A') {
      return  soma = soma+1;
    } return soma;
 }
    })
  }
console.log(containsA());
;
function containsA2() {
    return names.reduce((acc, curr) =>
       acc + curr.split('').reduce((acumulator, current) => {
          if (current === 'a' || current === 'A') return acumulator + 1;
          return acumulator;
       }, 0), 0);
  }