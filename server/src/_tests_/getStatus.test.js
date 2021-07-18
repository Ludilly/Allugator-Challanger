const frisby = require('frisby');
const fs = require('fs');
const path = require('path');
const data = require('../data/employees.json');

const url = 'http://localhost:3001/employees';

describe('Teste método GET na rota "status"', () => {
  beforeEach(() => {
    const EMPLOYEES_FILE_PATH = path.join(__dirname, '..', 'data', 'employees.json');
    fs.readFileSync(EMPLOYEES_FILE_PATH);
  });
  it('deve checar se o endpoint retorna as informações corretamente', async () => {
    await frisby
      .get(`${url}/role/ATIVO`)
      .expect('status', 200)
      .then((responseGet) => {
        const { json } = responseGet;
        expect(...json).toEqual(data.Status);
      });
  });
});
