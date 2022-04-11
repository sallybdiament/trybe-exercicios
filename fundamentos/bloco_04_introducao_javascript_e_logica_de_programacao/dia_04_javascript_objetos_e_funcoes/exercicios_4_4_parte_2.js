// Exercícios 4.4, Parte II, 1./

let stringAoContrario = '';
let string = '';

function palindromo (string) {
for (index=string.length-1; index >= 0; index-=1){
    stringAoContrario += string[index];
}
if (stringAoContrario === string){
    return true;
}
else { return false};
}

console.log(palindromo('arara'));
console.log(palindromo('desenvolvimento'));

// Exercícios 4.4, Parte II, 2./


function biggestIndexPosition (arrayTeste){
    let indiceMaior = 0;
    for (let indice in arrayTeste){
        if (arrayTeste[indiceMaior]<arrayTeste[indice]){
            indiceMaior=indice;
        }
    }
    return indiceMaior;
    }
    console.log(biggestIndexPosition([2, 3, 6, 7, 10, 1]));

// Exercícios 4.4, Parte II, 3./
function smallestIndexPosition (numeros){
    let indiceMenor = 0;
    for (let indice in numeros){
        if (numeros[indiceMenor]>numeros[indice]){
            indiceMenor=indice;
        }
    }
    return indiceMenor;
    }
    console.log(smallestIndexPosition([2, 3, 6, 7, 10, 1]));

    // Exercícios 4.4, Parte II, 4./
   
    function biggestCharacters (nomes){
        let maiorCaracteres = nomes[0];
        for (let index in nomes){
            if (maiorCaracteres.length<nomes[index].length){
                maiorCaracteres = nomes[index];
            }
        }
        return maiorCaracteres;
    }

    console.log(biggestCharacters(['Jose', 'Lucas', 'Nadia', 'Fernanda', 'Cairo', 'Joana']));

    // Exercícios 4.4, Parte II, 5./
function repetition (numeros){
    let numeroAtual = numeros[0];
    let n = 0 ;
    for (let index in numeros){
        if (numeroAtual === numeros[index+1]){
            n = n +1
        }
    }
    return n;
}

console.log(repetition([2, 3, 2, 5, 8, 2, 3]));

