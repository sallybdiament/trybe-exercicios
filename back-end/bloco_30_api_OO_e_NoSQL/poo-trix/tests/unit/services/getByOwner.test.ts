import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import Key from '../../../src/Domain/Key/Key';
import KeyService from '../../../src/Services/KeyService';

describe('deveria buscar uma chave por meio do seu valor', function () {
  it('Deveria buscar uma chave por valor com sucesso', async function () {
    const keyOutput : Key[] = [new Key(
      '+55 (18) 99765-1187',
      'Jo',
      'phonenumber',
      '63319d80feb9f483ee823ac5',
    ), new Key(
      'jo@gmail.com',
      'Jo',
      'mail',
      '63319d80feb9f483ee823ac5',
    ),
    ];
    const mongoResponse = [{
      value: '+55 (18) 99765-1187',
      owner: 'Jo',
      type: 'phonenumber',
      id: '63319d80feb9f483ee823ac5',
    
    }, { value: 'jo@gmail.com',
      owner: 'Jo',
      type: 'mail',
      id: '63319d80feb9f483ee823ac5',
    }];

    sinon.stub(Model, 'find').resolves(keyOutput);

    const service = new KeyService();
    const result = await service.getByOwner('Jo');

    expect(result).to.be.deep.equal(mongoResponse);

    sinon.restore();
  });
});