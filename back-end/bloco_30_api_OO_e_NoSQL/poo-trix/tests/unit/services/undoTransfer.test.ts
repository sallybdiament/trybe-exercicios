import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IPayment from '../../../src/Interfaces/IPayment';
import TransferService from '../../../src/Services/TransferService';

describe('Lançando exceção quando se tentar estornar o Trix', function () {
  it('Deveria lançar uma exceção quando a key é inválida', async function () {
    // Arrange
    const paymentInput: IPayment = {
      payByPerson: 'Jobs',
      payToPerson: 'Wozniak',
      amount: 50000,
      key: '858.898.670-16XX',
    };
    sinon.stub(Model, 'update').resolves();
    // Act
    try { 
      const service = new TransferService();
      await service.undoTransfer('63320b77aa12f0db4f210b00', paymentInput);
    } catch (error) {
      // Assert
      expect((error as Error).message).to.be.equal('Invalid Key!');
    }
  });
  it('Deveria lançar uma exceção quando o id é inválido', async function () {
    // Arrange
    const paymentInput: IPayment = {
      payByPerson: 'Jobs',
      payToPerson: 'Wozniak',
      amount: 50000,
      key: '858.898.670-16XX',
    };
    sinon.stub(Model, 'update').resolves();
    // Act
    try { 
      const service = new TransferService();
      await service.undoTransfer('wrong id', paymentInput);
    } catch (error) {
      // Assert
      expect((error as Error).message).to.be.equal('Invalid Key!');
    }
  });
  afterEach(function () {
    sinon.restore();
  });
});
