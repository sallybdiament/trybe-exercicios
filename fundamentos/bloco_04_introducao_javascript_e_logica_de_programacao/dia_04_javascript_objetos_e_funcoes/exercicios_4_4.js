//Para fixar 4.4 objetos:/
let player = {
name: 'Marta',
lastName: 'Silva',
age: 34,
medals: {golden:2, silver: 3},
};

console.log('A jogadora '+ player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018]; 

console.log('A jogadora '+ player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por '+ player.bestInTheWorld.length + ' vezes.');

console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');

console.log(player['name']);

// para fixar de for/in e for/of/

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for (let key in names){
      console.log('Olá '+ names[key]);
  }

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let key2 in car){
      console.log(key2, car[key2]);
  }

  // para fixar do funções/
  // Refatorar os exercícios 1 a 5 do dia 4.1/
  //exercicio 1./

  function sum(a, b) {
    return a+b;
  }

  function sub(a, b){
    return a-b;
  }
  function mult(a, b){
    return a*b;
  }
  function div(a, b){
    return a/b;
  }
  function mod(a, b){
    return a%b;
  }
//exercicio 2./
function biggestNumber (a, b){
  if (a>b){return a+' é maior que ' +b;}
  return b + ' é maior que ' + a;
}

//exercicio 3./
function biggestNumberOfThree (a, b, c){
  if (a>b && a>c){ return a;}
  else if (b>a && b>c) {return b;}
  return c;
}

//exercicio 4./
function positiveOrNegative (a){
  if (a>0){ return 'o valor é positivo';}
  else if (a<0) {return 'o valor é negativo'};
  return 'o valor é zero';
}

//exercicio 5./
function triangle (lado1, lado2, lado3){
  let somaLados = lado1 + lado2 + lado3;
  let angulosPositivos = lado1 > 0 && lado2 > 0 && lado3 > 0;
  
  if (angulosPositivos) {
      if (somaLados === 180) {
          return true;
      }
      else {
        return false;
      }
  }
  else { return "erro: angulo invalido"; }
  
}

//exercicios Parte I/ 1./
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Bem vinda, '+ info.personagem);

//exercicios Parte I/ 2./
info['recorrente'] = 'sim';

console.log(info);

//exercicios Parte I/ 3./
for (let key in info){
  console.log(key);
}

//exercicios Parte I/ 4./
for (let key in info){
  console.log(info[key]);
}

//exercicios Parte I/ 5./
let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'sim',
};

for (let key in info){
  if (key === 'recorrente' && info[key] === 'sim' && info2[key] === 'sim'){
    console.log('Ambos recorrente');
  }
  else {
    console.log(info[key]+ ' e ' + info2[key]);
  }
}

//exercicios Parte I/ 6./
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log(leitor.livrosFavoritos[0].titulo);

console.log('O livro favorito de ' + leitor.nome + ' ' +leitor.sobrenome+ ' se chama '+ leitor['livrosFavoritos'][0]['titulo'] +'.');

//exercicios Parte I/ 7./
leitor['livrosFavoritos'].push ({
  titulo: 'Harry Potter',
  autor: 'JK Rowling',
  editor: 'Rocco',
},
);

console.log(leitor);

//exercicios Parte I/ 8./
console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + " livros favoritos.");