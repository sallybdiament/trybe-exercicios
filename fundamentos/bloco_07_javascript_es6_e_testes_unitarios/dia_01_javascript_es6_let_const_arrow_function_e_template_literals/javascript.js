// Parte I - Exercício 1://
const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope}: ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    // console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
  }

  testingScope(true);
  testingScope(false);

  // Parte I - Exercício 2://
  const oddsAndEvens = [13, 3, 4, 10, 7, 2];
oddsAndEvens.sort( (a, b) => a - b);
 
  const retorneOrdenado = (oddsAndEvens) => {

  console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);
}

  retorneOrdenado(oddsAndEvens);

  // Parte II - Exercício 1://
const fatorial = (n) => {
let resultFatorial = 1;
for (let index = 2; index <= n; index += 1) {
    resultFatorial *= index;
}
return resultFatorial;
}

console.log(fatorial(6));

//Bonus: fatorial com ternary operator://
const fatorialBonus = (num) => num > 0 ? num * fatorialBonus(num-1) : 1;
console.log(fatorialBonus(6));

// Parte II - Exercício 2://
const longestWord = (frase) => {
let arrayPalavras = frase.split(' ');
let maiorPalavra = 0;
let resultado = '';
for (let palavra of arrayPalavras) {
    if (palavra.lenght > maiorPalavra) {
        maiorPalavra = palavra.lenght;
resultado = palavra;
    }
}
return resultado;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

// Parte II - Exercício 3://

const botao = document.getElementById('botao');
const pContagemCliques = document.getElementById('contagemCliques');
let contClique = 0;

botao.addEventListener('click', () => pContagemCliques.innerHTML = contClique +=1);

// Parte II - Exercício 4://
let stringDeterminada = 'Tryber x aqui';
let parametro = '';
console.log(stringDeterminada.length);

function trocaX (parametro) {
  for (let i = 0; i < stringDeterminada.length; i += 1) {
    if (stringDeterminada[i] === 'x') {
      // stringDeterminada[i] = 'sally';
      console.log(`Tryber ${parametro} aqui!
Minhas cinco principais habilidades:`);
    }
  }
}
parametro = 'sally';
trocaX (parametro);

const arraySkills = ['Js', 'HTML', 'CSS', 'Python', 'bootstrap'];
const arraySkillsOrdemAlf = (arraySkills.sort());


for (let index = 0; index < arraySkillsOrdemAlf.length; index += 1) {
console.log(arraySkillsOrdemAlf[index]);
}