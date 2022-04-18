const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// A primeira caixa está um pouco acima porque ela tem uma classe chamada "tech", que está sendo usada no css para colocar o eixo Y em -20px (ou seja, levar mais para cima em -20px). 

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
//Usei a "classList.remove('tech');"".
firstLi.classList.remove('tech');
let botaoFirstLi = firstLi;
let botaoSecondLi = secondLi;
let botaoThirdLi = thirdLi;

window.onload = function () {
  botaoFirstLi.addEventListener('click', function(){
    firstLi.classList.add('tech');
    secondLi.classList.remove('tech');
    thirdLi.classList.remove('tech');
} );
botaoSecondLi.addEventListener('click', function(){
  secondLi.classList.add('tech');
  firstLi.classList.remove('tech');
  thirdLi.classList.remove('tech');
} );
botaoThirdLi.addEventListener('click', function(){
  thirdLi.classList.add('tech');
  secondLi.classList.remove('tech');
  firstLi.classList.remove('tech');
} );
}

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener('input', function(){
let ondeEstaTech = document.querySelector('.tech');
ondeEstaTech.innerText = event.target.value;

})

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

let botaoMeutop3 = document.getElementById("my-spotrybefy");
botaoMeutop3.addEventListener('dblclick', function () {
  window.location.assign('https://sallybdiament.github.io');
})

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

botaoMeutop3.addEventListener('mouseover', function(){
document.getElementById('my-spotrybefy').style.color = 'red';
})

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.