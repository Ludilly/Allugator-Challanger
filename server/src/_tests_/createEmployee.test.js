const frisby = require('frisby');
const fs = require('fs');
const path = require('path');

const baseUrl = 'http://localhost:3001';

const createEmployee = {
  DataCad: '18/02/2015',
  Cargo: 'Dev Jr',
  Cpf: 11122233344,
  Nome: 'Jane Doe',
  UfNasc: 'AC',
  Salario: 4000,
  Status: 'ATIVO',
};

const SEED_FILE_PATH = path.join(__dirname, 'seed.json');
const EMPLOYEES_FILE_PATH = path.join(__dirname, '..', 'data', 'employees.json');

describe('Crie o endpoint POST /create', () => {
  beforeEach(() => {
    const employeesSeed = fs.readFileSync(SEED_FILE_PATH, 'utf8');
    fs.writeFileSync(EMPLOYEES_FILE_PATH, employeesSeed, 'utf8');
  });

  it('Será validado que é possível cadastrar um funcionário com sucesso', 
  async () => {
    await frisby
      .post(`${baseUrl}/employees`, createEmployee)
      .expect('status', 200)
      .then(({ json }) => {
        expect(json).toEqual({ id: 506, ...createEmployee });
      });
  });
});
