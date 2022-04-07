//Para fazer: array (listas)/
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro']
tasksList.push('Brincar com as crianças');
tasksList.unshift('Escovar os dentes')
tasksList.pop('Brincar com as crianças')
tasksList.shift('Escovar os dentes')
console.log(tasksList.length);
console.log(tasksList.indexOf('Reunião'));

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);

console.log(tasksList);

//Array: exercício 1./
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu.indexOf('Serviços');
console.log(menuServices);
console.log(menu.indexOf('Portfólio'));
menu.push('contato');
console.log(menu);

//para fixar: For/
let cars = ['Saab', 'Volvo', 'BMW'];
console.log(cars[0]); // Saab
console.log(cars[1]); // Volvo
console.log(cars[2]); // BMW

for (let index=0; index<cars.length; index +=1){
    console.log(cars[index]);
}

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (let index1=0; index1<groceryList.length; index1 +=1){
    console.log(groceryList[index1]);
}

//para fixar do for/of /
let numeros = [1, 2, 3, 4, 5]
for (let numero of numeros){
    numero += 1;
    console.log(numero);
}
 let word = 'Hello';
 for (let letter of word){
     console.log(letter);
 }

 let names = ['João', 'Maria', 'Antônio', 'Margarida'];
 for (let mostraNames of names) {
 console.log(mostraNames);
}
console.log('Exercicios:');

// Exercícios 4.2 - exercício 1./
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (index2=0; index2<numbers.length; index2 +=1){
    console.log( numbers[index2]);
}
// Exercício 2./
let somaNumbers = 0;
for (index3=0; index3<numbers.length; index3 +=1){
    somaNumbers=somaNumbers+numbers[index3];
} 
console.log('Esta é a soma dos valores do Array: '+ somaNumbers);

//Exercício 3./
let mediaNumbers = somaNumbers / numbers.length;
console.log('A média dos número é: ' + mediaNumbers);

//Exercício 4./ 
if (mediaNumbers>20){
    console.log('O valor final é maior que 20');
}
else {console.log('O valor final é menor ou igual a 20');}

//Exercício 5./
let maiorValor = 0;
for (index2=0; index2<numbers.length; index2 +=1){
    if (numbers[index2]>maiorValor){
        maiorValor=numbers[index2];
    }
}
console.log('O maior valor é: '+ maiorValor);

//Exercício 6./
let numeroDeImpares = 0;
for (index2=0; index2<numbers.length; index2 +=1){
    if ((numbers[index2]%2)!==0){
        numeroDeImpares+=1;
    }
}
if (numeroDeImpares ===0 ){
    console.log('nenhum valor é ímpar');
}
console.log('O número de ímpares é: '+ numeroDeImpares);

//Exercício 7./
let menorValor = numbers[0];
for (index2=1; index2<numbers.length; index2 +=1){
    if (menorValor>numbers[index2]){
        menorValor = numbers[index2] ;
    }
}
console.log('O menor valor é:'+ menorValor);

//Exercício 8./
let novoArray = [];
for (let index4=0; index4<=25; index4 +=1){
    novoArray.push(index4);
}
console.log('Mostrando o novo Array: '+ novoArray);

// Exercício 9./
for (let index5=0; index5<novoArray.length; index5 +=1){
    console.log('Resultado da divisão: '+ novoArray[index5]/2);
}

// Exercício Bônus 1./
let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] < array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    }
  }
  console.log(array);

  // Exercício Bônus 2./
  for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] > array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    }
  }
  console.log(array);