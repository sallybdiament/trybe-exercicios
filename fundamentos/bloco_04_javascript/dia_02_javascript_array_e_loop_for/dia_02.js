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