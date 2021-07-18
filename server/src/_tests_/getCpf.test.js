const frisby = require('frisby');
const fs = require('fs');
const path = require('path');

const url = 'http://localhost:3001/employees';

describe('Teste método GET na rota "cpf"', () => {
  beforeEach(() => {
    const EMPLOYEES_FILE_PATH = path.join(__dirname, '..', 'data', 'employees.json');
    fs.readFileSync(EMPLOYEES_FILE_PATH);
  });
  it('deve checar se o endpoint retorna as informações corretamente', async () => {
    await frisby
      .get(`${url}/cpf/53615650085`)
      .expect('status', 200)
      .then((responseGet) => {
        const { json } = responseGet;
        expect(Array.isArray(json)).toBeTruthy();
        json.forEach(({ Cpf }) => {
          expect(Cpf).toEqual(53615650085);
        });
      });
  });
});
