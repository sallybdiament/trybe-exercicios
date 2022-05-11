function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('parameters must be numbers');
    }
  
    return a + b;
  }

  function myRemove(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
      if (item !== arr[index]) {
        newArr.push(arr[index]);
      }
    }
    return newArr;
  }
  
  function myFizzBuzz(num) {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
  }

  function encode(frase) {
    let vogaisCode = {
      a: 1,
      e: 2,
      i: 3,
      o: 4,
      u: 5,
    };
    let encodeFrase = '';
    for (let i = 0; i < frase.length; i += 1) {
      let temVogal = vogaisCode[frase[i]];
      if (typeof (temVogal) === 'number') {
        encodeFrase += temVogal;
      } else { encodeFrase += frase[i]; }
    }
    return encodeFrase;
  }
  
  console.log(encode("hi there!"));
  
  function decode(fraseComNumeros) {
    let vogaisUncode = {
      1: 'a',
      2: 'e',
      3: 'i',
      4: 'o',
      5: 'u',
    };
    let decodeFraseComNumeros = '';
    for (let i = 0; i < fraseComNumeros.length; i += 1) {
      if (fraseComNumeros[i] <= 5 && fraseComNumeros[i] >= 1) {
        decodeFraseComNumeros += vogaisUncode[fraseComNumeros[i]];
      } else { decodeFraseComNumeros += fraseComNumeros[i]; }
    }
    return decodeFraseComNumeros;
  }
  
  console.log(decode('h3 th2r2!'));

  function techList (array, string) {
    if (array.length === 0) return 'Vazio!';
    const arrayOrdenado = array.sort();
    const listaTecs = [];
    for (let i = 0; i < arrayOrdenado.length; i += 1){
      listaTecs.push({tech: arrayOrdenado[i], name: string,
      });
    }
return listaTecs; 
        };

  module.exports = {sum, myRemove, myFizzBuzz, decode, encode, techList};
