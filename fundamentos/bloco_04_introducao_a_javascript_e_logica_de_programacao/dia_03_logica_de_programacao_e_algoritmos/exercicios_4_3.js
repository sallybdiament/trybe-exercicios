//Exercício 4.3 - 1./
let numero = [];
let fatorial = 1;

for (let indexNumero = 1; indexNumero <= 10; indexNumero += 1) {
    numero.push(indexNumero);
}

for (let indexNumero = 1; indexNumero <= 10; indexNumero += 1) {
    fatorial *= indexNumero;
}

console.log(numero);
console.log(fatorial);

// exercicio 2./
let word = 'trybe';
let backwardWord = '';

for (let indexWord = word.length-1 ; indexWord>=0; indexWord -=1){
backwardWord += word[indexWord]
}
console.log(backwardWord);

