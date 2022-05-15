// Para fixar forEach:
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);

const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);
console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]

const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  };
  
emailListInData.forEach(showEmailList);

//Para fixar array.find:

const numbers2 = [19, 21, 30, 3, 45, 22, 15];

const isEven2 = numbers2.find((number) => number % 2 === 0);

console.log(isEven2); // 30

//Para fixar 1 array.find://

const findDivisibleBy3And5 = numbers2.find((number) => number % 3 === 0 && number % 5 === 0); 

console.log(findDivisibleBy3And5);

//Para fixar 2 array.find://

const names2 = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = names2.find((nome) => nome.length === 5);

console.log(findNameWithFiveLetters);

//Para fixar 3 array.find://

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
  function findMusic(id) {
      return musicas.find((objeto) => objeto.id === id);
    }

  console.log(findMusic('31031685'))

  // Para fixar array.some://
  const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false

const grades = {
    portugues: 'Aprovado',
    matematica: 'Reprovado',
    ingles: 'Aprovado',
  };
  
  const verifyGrades = (studentGrades) => (
    Object.values(studentGrades).every((grade) => grade === 'Aprovado')
  );
  
  console.log(verifyGrades(grades));

  // Para fixar array.some 1://
  const names3 = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
 return arr.some((nome) => nome === name);
}

console.log(hasName(names3, 'Ana'));

 // Para fixar array.some 2://
 const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const verifyAges = (arr, minimumAge) => {
    return arr.every((pessoa) => pessoa.age >= minimumAge);
  }
  
  console.log(verifyAges(people, 15));

  // Para fixar array.sort 1://
  const people2 = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  people2.sort((personA, personB) => personA.age - personB.age);
  
  console.log(people2);

  //Para fixar array.sort 2://
  people2.sort((personA, personB) => personB.age - personA.age);
  
  console.log(people2);

