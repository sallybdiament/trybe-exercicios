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

