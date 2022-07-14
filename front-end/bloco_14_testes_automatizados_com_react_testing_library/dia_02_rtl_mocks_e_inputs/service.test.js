const service = require('./service');
//1.
describe ('Testes dp exercício', () => {
    it ('gera número aleatório', () => {
        service.numeroAleatorio = jest.fn().mockReturnValue(10);
        expect(service.numeroAleatorio()).toBe(10);
        expect(service.numeroAleatorio).toHaveBeenCalled();
        expect(service.numeroAleatorio).toHaveBeenCalledTimes(1);
    })
    // 2.
    it('se passando 2 parametros, retorna a divisão deles', () => {
        service.numeroAleatorio = jest.fn().mockImplementationOnce((a, b) => a / b);
        expect(service.numeroAleatorio(10, 2)).toBe(5);
        expect(service.numeroAleatorio).toHaveBeenCalled();
        expect(service.numeroAleatorio).toHaveBeenCalledTimes(1);
        expect(service.numeroAleatorio).toHaveBeenCalledWith(10, 2);
    })
    // 3.
    it('se passando 3 parametros retorna a multiplicação deles', () => {
        service.numeroAleatorio = jest.fn().mockImplementationOnce((a, b, c) => a * b * c );
        expect(service.numeroAleatorio(2, 1, 3)).toBe(6);
        expect(service.numeroAleatorio).toHaveBeenCalled();
        expect(service.numeroAleatorio).toHaveBeenCalledTimes(1);
        expect(service.numeroAleatorio).toHaveBeenCalledWith(2, 1, 3);
    })
})