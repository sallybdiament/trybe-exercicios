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
  
  // Exercicio 1://
  
  function formatedBookNames() {
    return books.map((elemento) => `${elemento.name} - ${elemento.genre} - ${elemento.author.name}`);
  };
 
  console.log(formatedBookNames());

  // Exercicio 2://
  function nameAndAge() {
      return books.map((livro) => ({
       author: livro.author.name,
       age: livro.releaseYear - livro.author.birthYear,
   })).sort((n1, n2) => n1.age - n2.age);
  }

  console.log(nameAndAge());

  //Exercicio 3://
  function fantasyOrScienceFiction() {
   return books.filter((elemento) => elemento.genre === 'Fantasia' || elemento.genre === 'Ficção Científica')
  }

  console.log(fantasyOrScienceFiction());

  //Exercicio 4://
  function oldBooksOrdered() {
    return books.filter((elemento) => (2022 - elemento.releaseYear > 60)).sort((num1, num2) => num1.releaseYear - num2.releaseYear);
  }
console.log(`Exercício 4:`);
  console.log(oldBooksOrdered());

  // Exercício 5://
  function fantasyOrScienceFictionAuthors() {
      return books.filter((elemento) => elemento.genre === 'Fantasia' || elemento.genre === 'Ficção Científica').map((elemento) => elemento.author.name).sort();
  }

  console.log(`Exercício 5:`);
  console.log(fantasyOrScienceFictionAuthors());

  //Exercício 6://
  function oldBooks() {
    return books.filter((elemento) => (2022 - elemento.releaseYear > 60)).map((elemento) => elemento.name);
  }

  console.log(`Exercício 6`);
  console.log(oldBooks());

  //Exercício 7://
  function authorWith3DotsOnName() {
    return books.find((elemento) => (elemento.author.name.split(' ').filter((word) => word.endsWith('.')).length === 3)).name;
  }
console.log(`Exercício 7`);
  console.log(authorWith3DotsOnName());