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


