const sum = require('./exercicios');

describe ('Testes do ex 1 de soma', () => {

    test ('Soma de 4 e 5 igual 9', () => {
        expect(sum(4, 5)).toBe(9);
    })

    test ('Soma de 0 e 0 igual 0', () => {
        expect(sum(0, 0)).toBe(0);
    })

    test ('Soma de 4 e string "5" igual 9', () => {
        expect( () => {sum(4, '5')}).toThrow('parameters must be numbers');
    })
})