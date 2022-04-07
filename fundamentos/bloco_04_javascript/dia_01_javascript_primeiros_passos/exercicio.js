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

//exercicio 7./
let notaEmPorcetagem;
notaEmPorcetagem = 95
if (notaEmPorcetagem>100){
    console.log('Erro');
}
else if (notaEmPorcetagem<0){
    console.log('Erro');
}
else if (notaEmPorcetagem<50){
    console.log('F');
}
else if (notaEmPorcetagem<60){
    console.log('E');
}
else if (notaEmPorcetagem<70){
    console.log('D');
}
else if (notaEmPorcetagem<80){
    console.log('C');
}
else if (notaEmPorcetagem<90){
    console.log('B');
}
else {console.log('A');}

//exericio 8./
const num1 = 9;
const num2 = 7;
const num3 = 5;

if (num1/2!==0 && num2/2!==0 && num3/2!==0){
    console.log('false');}
    else {console.log('true');}

//exercicio 9./
const num4 = 9;
const num5 = 7;
const num6 = 5;

if (num4/2===0 && num5/2===0 && num6/2===0){
    console.log('false');}
    else {console.log('true');}

//Exercicio 10./
const custoProduto = 100;
const valorDeVenda = 150;
const unidadesVendidas = 1000;
let custoComImposto = custoProduto*1.20;
let lucroUnitario = valorDeVenda - custoComImposto;
let lucroTotal = unidadesVendidas*lucroUnitario;

if (custoProduto <0 || valorDeVenda<0 || unidadesVendidas<0){
    console.log('erro');
} else {
console.log('Lucro Unitário: '+ lucroUnitario);
console.log('Lucro Total: '+ lucroTotal);
}

//exercicio 11./
const salarioBruto = 3000;
let salarioLiquido;
let salarioDescInss;

if (salarioBruto<1556.94){
    salarioDescInss = salarioBruto * 0.92;
    console.log('salario desc inss é de: ' + salarioDescInss);
}
else if (salarioBruto<2594.92){
    salarioDescInss = salarioBruto * 0.91;
    console.log('salario desc inss é de: ' + salarioDescInss);
}
else if (salarioBruto<5189.82){
    salarioDescInss = salarioBruto * 0.89;
    console.log('salario desc inss é de: ' + salarioDescInss);
}
else { salarioDescInss = salarioBruto - 570.88;
    console.log('salario desc inss é de: ' + salarioDescInss);}

if (salarioDescInss < 1903.98) {
    salarioLiquido = salarioDescInss 
    console.log('O salário líquido é de: ' + salarioLiquido);
}
else if (salarioDescInss < 2826.65) {
    salarioLiquido = salarioDescInss  - (salarioDescInss*0.075-142.8);
    console.log('O salário líquido é de: ' + salarioLiquido);
}
else if (salarioDescInss < 3751.05) {
    salarioLiquido = salarioDescInss  - (salarioDescInss*0.15-354.8);
    console.log('O salário líquido é de: ' + salarioLiquido);
}

else if (salarioDescInss < 4664.68) {
    salarioLiquido = salarioDescInss - (salarioDescInss*0.225-636.13);
    console.log('O salário líquido é de: ' + salarioLiquido);
}
else {
    salarioLiquido = salarioDescInss - (salarioDescInss*0.275-869.36);
    console.log('O salário líquido é de: ' + salarioLiquido);
}