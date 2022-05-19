const numbers = [32, 15, 3, 2, -5, 56, 10];
let sumNumbers1 = 0;
// A variável 'acumula', a cada iteração do for, o resultado da operação feita lá!
//Com for://
for (let index = 0; index < numbers.length; index += 1) {
  sumNumbers1 += numbers[index];
}
console.log(sumNumbers1); // 113
//Com reduce://
const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers); // 113

// Ou seja:
//Com reduce de outra forma://
const getSum = (result, number) => result + number;
const sumNumbers2 = numbers.reduce(getSum);
console.log(sumNumbers2); // 113

const collection = [1, 2, 3, 4, 5];

const getSum3 = (accumulator, number) => {
  console.log(accumulator); // 1 3 6 10
  return accumulator + number;
};

const sumNumbers3 = collection.reduce(getSum3);
console.log(sumNumbers3); // 15

const numbers5 = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers5.reduce(getBigger, 0);
console.log(`O maior valor é: ${bigger}`); // 85

// Somar números pares://
const numeros = [18, 19, 23, 53, 4, 5, 76, 23, 54];
const arrayPares = [];
const numerosPares = numeros.filter((numero) => {
    if (numero % 2 === 0){
      return arrayPares.push(numero);
    }
})

const somaPares = arrayPares.reduce((acc, numero) => acc + numero, 0);
console.log(somaPares);

const somaPares2 = numeros.reduce ((acc, numero) => (numero % 2 === 0 )? acc + numero: acc, 0);
console.log(somaPares2);

//Outra forma://const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getEven = (number) => number % 2 === 0;
const sumPair = (currentValue, number) => currentValue + number;

const sumNumbersEven = (array) => array.filter(getEven).reduce(sumPair); // Olhe que código pequeno e conciso!

console.log(sumNumbersEven(numeros)); // 152

//ou://
const sumPair2 = (currentValue, number) => (
    (number % 2 === 0) ? currentValue + number : currentValue
  );
  
  const sumNumbersOutro = (array) => array.reduce(sumPair2, 0);
  
  console.log(sumNumbersOutro(numeros)); // 152

  //Estudantes e melhor matéria://
  const estudantes = [
    {
      nome: 'Jorge',
      sobrenome: 'Silva',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 67 },
        { name: 'Português', nota: 79 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 65 },
      ],
    },
    {
      nome: 'Mario',
      sobrenome: 'Ferreira',
      idade: 15,
      turno: 'Tarde',
      materias: [
        { name: 'Matemática', nota: 59 },
        { name: 'Português', nota: 80 },
        { name: 'Química', nota: 78 },
        { name: 'Biologia', nota: 92 },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 76 },
        { name: 'Português', nota: 90 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 80 },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 91 },
        { name: 'Português', nota: 85 },
        { name: 'Química', nota: 92 },
        { name: 'Biologia', nota: 90 },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 70 },
        { name: 'Português', nota: 70 },
        { name: 'Química', nota: 60 },
        { name: 'Biologia', nota: 50 },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 80 },
        { name: 'Português', nota: 82 },
        { name: 'Química', nota: 79 },
        { name: 'Biologia', nota: 75 },
      ],
    },
  ];

const getBestClass = (acc, value) => {
    if (acc.nota > value.nota){
        return acc;
    } return value;
      };

  const resultado = estudantes.map((estudante) => ({nome: estudante.nome, materia: estudante.materias.reduce(getBestClass).name}));
 
  console.log(resultado);