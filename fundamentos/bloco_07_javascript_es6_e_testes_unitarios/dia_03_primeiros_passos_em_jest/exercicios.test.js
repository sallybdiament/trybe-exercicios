// const sum = require('./exercicios');

// describe ('Testes do ex 1 de soma', () => {

//     test ('Soma de 4 e 5 igual 9', () => {
//         expect(sum(4, 5)).toBe(9);
//     })

//     test ('Soma de 0 e 0 igual 0', () => {
//         expect(sum(0, 0)).toBe(0);
//     })

//     test ('Soma de 4 e string "5" igual 9', () => {
//         expect( () => {sum(4, '5')}).toThrow('parameters must be numbers');
//     })
// })

// const myRemove = require('./exercicios');

// describe ('Testes exercício 2 sobre uma função que copia um array retirando um item do array', () => {
//     test ('Retira o 3 do array [1, 2, 3, 4] e retorna [1, 2, 4]', () => {
// expect(myRemove([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);
//     })
//     test ('Retira o 3 do array [1, 2, 3, 4] e não retorna [1, 2, 3, 4]', () => {
//         expect(myRemove([1, 2, 3, 4], 3)).not.toStrictEqual([1, 2, 3, 4]);
//    })
//    test ('Não retira nada do array [1, 2, 3, 4] quando o item é 5', () => {
//     expect(myRemove([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4]);
//         })

// })

// const myFizzBuzz = require('./exercicios');

// describe ('Testes para exercício 3 da função myFizzBuzz', () => {
// test ('Retorna fizzbuzz para 15', () => {
//     expect(myFizzBuzz(15)).toBe('fizzbuzz');
// })
// test ('Retorna fizz para 9', () => {
//     expect(myFizzBuzz(9)).toBe('fizz');
// })
// test ('Retorna buzz para 5', () => {
//     expect(myFizzBuzz(5)).toBe('buzz');
// })
// test ('Retorna 7 para 7', () => {
//     expect(myFizzBuzz(7)).toBe(7);
// })
// test ('Retorna false para "a"', () => {
//     expect(myFizzBuzz('a')).toBeFalsy();
// })
// })

const encode = require('./exercicios');

describe ('Teste função encode', () => {
    test ('Espera-se que encode exista com função', () => {
        expect(typeof encode).toBe('function');
        })
    test ('Espera-se que "aeiou" se torne "12345"', () => {
        expect(encode('aeiou')).toMatch('12345');
    })
    test ('Espera-se que bcd não mude', () => {
        expect(encode('bcd')).toMatch('bcd');
    })
    })

//     const decode = require('./exercicios');

// describe ('Teste função decode', () => {
//     test ('Espera-se que decode exista com função', () => {
//         expect(typeof decode).toBe('function');
//         })
//     test ('Espera-se que "12345" se torne "aeiou"', () => {
//         expect(decode('12345')).toMatch('aeiou');
//     })
//     test ('Espera-se que bcd não mude', () => {
//         expect(encode('bcd')).toMatch('bcd');
//     })
//     })