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
    // Adicione seu código aqui
  }
  
  console.log(findMusic('31031685'))