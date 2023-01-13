import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IKey from '../../../src/Interfaces/IKey';
import KeyService from '../../../src/Services/KeyService';
import Key from '../../../src/Domain/Key/Key';

describe('Testa a criação de uma chave nova', function () {
  it('Deveria criar uma chave do tipo CPF com SUCESSO', async function () {
  // Arrange
    const keyRegisterInput: IKey = {
      value: '365.729.058-65',
      owner: 'Sally',
      type: 'cpf',
    };
    const keyRegisterOutput: Key = new Key(
      '365.729.058-65',
      'Sally',
      'cpf',
      '63319d80feb9f483ee823ac5',
    );
    sinon.stub(Model, 'create').resolves(keyRegisterOutput);

    // Act
    const service = new KeyService();
    const result = await service.register(keyRegisterInput);

    // Assert
    expect(result).to.be.deep.equal(keyRegisterOutput);
  });
  it(
    'Deveria lançar uma exceção quando a key do tipo CPF é inválida', 
    async function () {
      const keyRegisterInput: IKey = {
        value: 'XXXX', // 👀 observe que estamos passando um CPF inválido para capturar a exceção!
        owner: 'Sally',
        type: 'cpf',
      };

      sinon.stub(Model, 'create').resolves({});

      // Act
      try {
        const service = new KeyService();
        await service.register(keyRegisterInput);
      } catch (error) {
        // Assert
        // eslint-disable-next-line sonarjs/no-duplicate-string
        expect((error as Error).message).to.be.equal('Invalid Key');
      }
    },
  );
  it('Deveria criar uma chave do tipo telefone com SUCESSO', async function () {
    // Arrange
    const keyRegisterInput: IKey = {
      value: '+55 (18) 99999-8888',
      owner: 'Sally',
      type: 'phonenumber',
    };
    const keyRegisterOutput: Key = new Key(
      '+55 (18) 99999-8888',
      'Sally',
      'phonenumber',
      '63319d80feb9f483ee823ac5',
    );
    sinon.stub(Model, 'create').resolves(keyRegisterOutput);
  
    // Act
    const service = new KeyService();
    const result = await service.register(keyRegisterInput);
  
    // Assert
    expect(result).to.be.deep.equal(keyRegisterOutput);
  });
  it(
    'Deveria lançar uma exceção quando a key do tipo telefone é inválida', 
    async function () {
      const keyRegisterInput: IKey = {
        value: 'XXXX', // 👀 observe que estamos passando um CPF inválido para capturar a exceção!
        owner: 'Sally',
        type: 'phonenumber',
      };
  
      sinon.stub(Model, 'create').resolves({});
  
      // Act
      try {
        const service = new KeyService();
        await service.register(keyRegisterInput);
      } catch (error) {
      // Assert
        expect((error as Error).message).to.be.equal('Invalid Key');
      }
    },
  );

  it('Deveria criar uma chave do tipo random com SUCESSO', async function () {
    // Arrange
    const keyRegisterInput: IKey = {
      value: '123e4567-e12b-12d1-a456-426655440000',
      owner: 'Sally',
      type: 'random',
    };
    const keyRegisterOutput: Key = new Key(
      '123e4567-e12b-12d1-a456-426655440000',
      'Sally',
      'random',
      '63319d80feb9f483ee823ac5',
    );
    sinon.stub(Model, 'create').resolves(keyRegisterOutput);
  
    // Act
    const service = new KeyService();
    const result = await service.register(keyRegisterInput);
  
    // Assert
    expect(result).to.be.deep.equal(keyRegisterOutput);
  });
  it(
    'Deveria lançar uma exceção quando a key do tipo random é inválida', 
    async function () {
      const keyRegisterInput: IKey = {
        value: 'XXXX', // 👀 observe que estamos passando um CPF inválido para capturar a exceção!
        owner: 'Sally',
        type: 'random',
      };
  
      sinon.stub(Model, 'create').resolves({});
  
      // Act
      try {
        const service = new KeyService();
        await service.register(keyRegisterInput);
      } catch (error) {
      // Assert
        expect((error as Error).message).to.be.equal('Invalid Key');
      }
    },
  );
    
  afterEach(function () {
    sinon.restore();
  });
});