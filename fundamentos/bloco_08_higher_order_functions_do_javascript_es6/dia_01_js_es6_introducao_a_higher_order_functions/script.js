// Para fixar do conteúdo course://

const acordando = () => 'Acordando!';
const cafe = () => 'Bora tomar café!';
const dormir = () => 'Partiu dormir!';

const doingThings = (callback) => {
    return callback();
}

console.log(doingThings(acordando));
console.log(doingThings(cafe));
console.log(doingThings(dormir));

// Exercício 1://
const novaPessoa = (nome) => {
    const nomeParaEmail = nome.replace(/ /g, '_');
    const email = `${nomeParaEmail}@trybe.com`;
    const objeto = {
        name: nome,
        email: email.toLowerCase(),
    };
    return objeto;
}

const newEmployees = (callback) => {
    const employees = {
        id1: novaPessoa('Pedro Guerra'),
        id2: novaPessoa('Luiza Drumond'),
        id3: novaPessoa('Carla Paiva'),
    }
    return employees;
};

console.log(newEmployees(novaPessoa));

// Exercicio 2://
const checaResultado = (numApostado, numSorteado) => numApostado === numSorteado;

const resultadoLoteria = (numApostado, callback) => {
    const numSorteado = Math.floor((Math.random()*5)+1);
    return callback(numApostado, numSorteado) ? 'Lucky day, you won' : 'Try Again';
};

console.log(resultadoLoteria(2, checaResultado));