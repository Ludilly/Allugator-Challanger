const frisby = require('frisby');
const fs = require('fs');
const path = require('path');
const data = require('../data/employees.json');

const url = 'http://localhost:3001/employees';

// eslint-disable-next-line max-lines-per-function
describe('Teste método GET na rota "name"', () => {
  beforeEach(() => {
    const EMPLOYEES_FILE_PATH = path.join(__dirname, '..', 'data', 'employees.json');
    fs.readFileSync(EMPLOYEES_FILE_PATH);
  });
  it('deve checar se o endpoint retorna as informações corretamente', async () => {
    await frisby
      .get(`${url}/name/Bell%20Ady`)
      .expect('status', 200)
      .then((responseGet) => {
        const { json } = responseGet;
        expect(...json).toEqual(data.Name);
      });
  });
  it('será validado que o endpoint retorna um array vazio caso não haja funcionário cadastrado',
   async () => {
   await frisby
    .get(`${url}/name/Patty`)
      .expect('status', 200)
      .then((responseGet) => {
        const { json } = responseGet;
        expect(json).toEqual([]);
      });
  });
});
