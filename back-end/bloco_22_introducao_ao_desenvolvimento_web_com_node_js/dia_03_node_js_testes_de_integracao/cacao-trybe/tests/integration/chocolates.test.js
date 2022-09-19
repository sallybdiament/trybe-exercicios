const chai = require('chai');
const { expect } = chai;
const chaiHttp = require('chai-http');
const app = require('../../src/app');

chai.use(chaiHttp);

describe('Usando o método GET em /chocolates', function () {
    it('Retorna a lista completa de chocolates!', async function () {
        response = await chai.request(app).get('/chocolates');
        expect(response.status).to.be.equal(200);

        const output = [
            { id: 1, name: 'Mint Intense', brandId: 1 },
            { id: 2, name: 'White Coconut', brandId: 1 },
            { id: 3, name: 'Mon Chéri', brandId: 2 },
            { id: 4, name: 'Mounds', brandId: 3 },
          ];
          expect(response.body.chocolates).to.deep.equal(output);
    });
});
