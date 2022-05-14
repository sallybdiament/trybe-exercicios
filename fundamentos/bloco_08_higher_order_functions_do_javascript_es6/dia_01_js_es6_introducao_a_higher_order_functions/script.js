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

//Exercicio 3://
const checaRespostas = (gabarito, respEstudantes) => {
    if (respEstudantes === 'N.A') {
        return 0;
    } if (gabarito === respEstudantes) {
       return 1;
    } return 0.5;
}

const contarPontos = (gabarito, respEstudantes, callback) => {
    let totalPontos = 0;
    for (let i = 0; i < gabarito.length; i +=1) {
        const callbackReturn = callback(gabarito[i], respEstudantes[i]);
        totalPontos += callbackReturn;
    }
    return `Resultado final é ${totalPontos} pontos.`
}

const gabarito = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const respEstudantes = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const result = contarPontos(gabarito, respEstudantes, checaRespostas);
console.log(result);

