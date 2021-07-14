const data = require('../model/fsFile');
const setData = require('../model/fsWrite');

const getEmployeeByName = async (name) => {
  const allEmployees = await data();
  if (!name) throw new Error('precisa passar um nome');
  const employeesName = allEmployees.filter((employee) => employee.Nome.includes(name));
 
  return employeesName;
};

const getEmployeeByCpf = async (cpf) => {
  const allEmployees = await data();
  if (!cpf) throw new Error('CPF não encontrado');
  const employeesCpf = allEmployees.filter((employee) => employee.Cpf === cpf);
  return employeesCpf;
};

const getEmployeeByRole = async (role) => {
  const allEmployees = await data();
  if (!role) throw new Error('Cargo não encontrado');
  const employeesRole = allEmployees.filter((employee) => employee.Cargo.includes(role));
  return employeesRole;
};

const getEmployeeByDate = async (date) => {
  const allEmployees = await data();
  if (!date) throw new Error('Data não encontrada');
  const employeesDate = allEmployees.filter((employee) => employee.DataCad === date);
  return employeesDate;
};

const getEmployeeByUf = async (uf) => {
  const allEmployees = await data();
  if (!uf) throw new Error('Estado não encontrado');
  const employeesUf = allEmployees.filter((employee) => employee.UfNasc === uf);
  return employeesUf;
};

const getEmployeeBySalary = async (min, max) => {
  const allEmployees = await data();
  if (typeof min !== 'number' || typeof max !== 'number') throw new Error('Valor inválido');
  const employeesSalary = allEmployees.filter(
    (employee) => (employee.Salario >= min && employee.Salario <= max),
  );
  return employeesSalary;
};

const getEmployeeByStatus = async (status) => {
  const allEmployees = await data();
  if (!status) throw new Error('Status não encontrado');
  const employeesStats = allEmployees.filter((employee) => employee.UfNasc === status);
  return employeesStats;
};

const newUser = (e) => ({
  DataCad: e.DataCad,
  Cargo: e.Cargo,
  Cpf: e.Cpf,
  Nome: e.Nome,
  UfNasc: e.UfNasc,
  Salario: e.Salario,
  Status: e.Status,
});

const deleteEmployee = async (cpf) => {
  const allEmployees = await data();
  if (!cpf) throw new Error('CPF não encontrado');
  const deletedEmployee = allEmployees.filter((employee) => employee.Cpf !== cpf);
 const newData = await setData(JSON.stringify(deletedEmployee));
 return newData;
};

module.exports = {
  getEmployeeByName,
  getEmployeeByCpf,
  getEmployeeByRole,
  getEmployeeByDate,
  getEmployeeByUf,
  getEmployeeBySalary,
  getEmployeeByStatus,
  newUser,
  deleteEmployee,
};
