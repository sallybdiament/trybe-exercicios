//exercicio 1./
const a = 10;
const b = 5;

console.log('soma:' + (a + b));
console.log('subtração:' + (a - b));
console.log('multiplicação:' + (a * b));
console.log('divisão:' + (a / b));
console.log('módulo:' + (a % b));

//exercicio 2./
if (a > b) {
    console.log('o maior é', a);
}
else {
    console.log('o maior é', b);
}

//exercicio 3./
const c = 20;
if (a > b && a > c) {
    console.log('o maior é', a);
}
else if (b > a && b > c) {
    console.log('o maior é', b);
}
else {
    console.log('o maior é', c);
}
//exercicio 4./
const exer4 = 10;
if (exer4 > 0) {
    console.log('o valor é positivo');
}
else if (exer4 < 0) {
    console.log('o valor é negativo');
}
else {
    console.log('o valor é zero');
}

//exercicio 5./
const lado1 = 100;
const lado2 = 50;
const lado3 = 30;
let somaLados = lado1 + lado2 + lado3;
let angulosPositivos = lado1 > 0 && lado2 > 0 && lado3 > 0;

if (angulosPositivos) {
    if (somaLados === 180) {
        console.log("true");
    }
    else {
        console.log("false");
    }
}
else { console.log("erro: angulo invalido"); }

//exercicio 6./
let nomeDaPeça
const bispo = "diagonal"
const cavalo = "em L"
const torre = "vertical e horizontal"
nomeDaPeça = "Bispo"

switch (nomeDaPeça.toLowerCase()) {
    case "bispo":
        console.log(bispo);
        break;
    case "torre":
        console.log(torre);
        break;
    case "cavalo":
        console.log(cavalo);
        break;
    default:
        console.log("não conheço essa peça");
}