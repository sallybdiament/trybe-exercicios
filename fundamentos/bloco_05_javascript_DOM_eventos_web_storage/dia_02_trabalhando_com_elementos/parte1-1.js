const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

let pai = elementoOndeVoceEsta.parentNode;
pai.style.color = 'red';

let primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = "primeiro filho do filho";

let primeiroFilho = document.getElementById('pai').firstElementChild;
primeiroFilho.innerText = "primeiro filho";

let primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;
primeiroFilho2.innerText = "mudando";

let atencao = elementoOndeVoceEsta.nextSibling;

let terceiroFilho =  elementoOndeVoceEsta.nextElementSibling;

let terceiroFilho2 = pai.lastElementChild.previousElementSibling;

let irmao = document.createElement('section');
irmao.id = 'irmao';
pai.appendChild(irmao);

let filhoDeOndeEsta = document.createElement('p');
filhoDeOndeEsta.id = 'filhoDeOndeEsta';
elementoOndeVoceEsta.appendChild(filhoDeOndeEsta);

let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
let filhoDoPrimeiroFilhoDoFilho = document.createElement('section');
filhoDoPrimeiroFilhoDoFilho.id = 'filhoDoPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilhoDoFilho);

const terceiroFilho3 = filhoDoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;
console.log(terceiroFilho3);

for (let i = pai.childNodes.length - 1; i >= 0; i -=1) {
let currentChildren = pai.childNodes[i];
if (currentChildren.id !== 'elementoOndeVoceEsta') {
    currentChildren.remove();
}
}

let segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoEUltimoFilhoDoFilho.remove();

