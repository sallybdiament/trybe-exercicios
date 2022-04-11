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

// exercicio 3./
let array = ['java', 'javascript', 'python', 'html', 'css'];
let palavraMaior = array[0];
let palavraMenor = array[0];

for (indexArray=0 ; indexArray<array.length ; indexArray+=1){
    if (palavraMaior.length<array[indexArray].length){palavraMaior=array[indexArray]}
    }
console.log(palavraMaior);

for (indexArray=0 ; indexArray<array.length ; indexArray+=1){
    if (array[indexArray].length<palavraMenor.length){palavraMenor=array[indexArray]}
    }
console.log(palavraMenor);


//exercício 4./
let maiorNumPrimo = 0;

for (let numAtual =0 ; numAtual<=50; numAtual+=1){
    let ehPrimo =true;
    for (let numDivisor = 2; numDivisor<numAtual; numDivisor+=1){
        if (numAtual%numDivisor===0){
            ehPrimo =false;
        }
    }
    if (ehPrimo===true){
        maiorNumPrimo = numAtual;
    }
}
console.log(maiorNumPrimo);