// Exercícios 4.4, Parte II, 1./

let stringAoContrario = '';
let string = '';

function palindromo(string) {
    for (index = string.length - 1; index >= 0; index -= 1) {
        stringAoContrario += string[index];
    }
    if (stringAoContrario === string) {
        return true;
    }
    else { return false };
}

console.log(palindromo('arara'));
console.log(palindromo('desenvolvimento'));

// Exercícios 4.4, Parte II, 2./


function biggestIndexPosition(arrayTeste) {
    let indiceMaior = 0;
    for (let indice in arrayTeste) {
        if (arrayTeste[indiceMaior] < arrayTeste[indice]) {
            indiceMaior = indice;
        }
    }
    return indiceMaior;
}
console.log(biggestIndexPosition([2, 3, 6, 7, 10, 1]));

// Exercícios 4.4, Parte II, 3./
function smallestIndexPosition(numeros) {
    let indiceMenor = 0;
    for (let indice in numeros) {
        if (numeros[indiceMenor] > numeros[indice]) {
            indiceMenor = indice;
        }
    }
    return indiceMenor;
}
console.log(smallestIndexPosition([2, 3, 6, 7, 10, 1]));

// Exercícios 4.4, Parte II, 4./

function biggestCharacters(nomes) {
    let maiorCaracteres = nomes[0];
    for (let index in nomes) {
        if (maiorCaracteres.length < nomes[index].length) {
            maiorCaracteres = nomes[index];
        }
    }
    return maiorCaracteres;
}

console.log(biggestCharacters(['Jose', 'Lucas', 'Nadia', 'Fernanda', 'Cairo', 'Joana']));

// Exercícios 4.4, Parte II, 5./
function repetition(numeros) {
    let contRepetidos = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;
    for (let index in numeros) {
        let verificaNumero = numeros[index];
        for (let index2 in numeros) {
            if (verificaNumero === numeros[index2]) {
                contNumero += 1;
            }
        }
        if (contNumero > contRepetidos) {
            contRepetidos = contNumero;
            indexNumeroRepetido = index;
        }
        contNumero = 0;
    }
    return numeros[indexNumeroRepetido];

}

console.log(repetition([2, 3, 2, 5, 8, 2, 3]));

 // Exercícios 4.4, Parte II, 6./
 function somatorio (n){
    let somaNumero = 0; 
    for (numero=n ; numero > 0 ; numero -=1){
         somaNumero = somaNumero + numero;
     }
     return somaNumero;
 }

 console.log(somatorio(3));

 // Exercícios 4.4, Parte II, 7./
let word = 'trybe';
let ending = 'be';

for (index=0; index<ending.length; index+=1){
console.log(ending[ending.length - index]);
}