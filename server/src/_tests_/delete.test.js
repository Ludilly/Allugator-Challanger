/* eslint-disable global-require */
/* eslint-disable max-lines-per-function */
const frisby = require('frisby');
const fs = require('fs');
const path = require('path');

const baseUrl = 'http://localhost:3001/employees';

const employee = {
  id: 505,
  DataCad: '19/03/2013',
  Cargo: 'Dev Jr',
  Cpf: 11111111111,
  Nome: 'Luiza',
  UfNasc: 'MG',
  Salario: 3000,
  Status: 'ATIVO',
};

const SEED_FILE_PATH = path.join(__dirname, 'seed.json');
const EMPLOYEES_FILE_PATH = path.join(__dirname, '..', 'data', 'employees.json');

describe('Cria um endpoint DELETE', () => {
  beforeEach(() => {
    const employeesSeed = fs.readFileSync(SEED_FILE_PATH, 'utf8');
    fs.writeFileSync(EMPLOYEES_FILE_PATH, employeesSeed, 'utf8');
  });
  it('Deleta um funcionário pelo CPF', async () => {
    await frisby
    .delete(`${baseUrl}/55555555555`, employee)
    .expect('status', 200)
    .then(({ json }) => {
      expect(json).not.toEqual(
        expect.arrayContaining(
        [expect.objectContaining({ Cpf: 55555555555, ...employee })],
        ),
);
    });
});
});
