const employeeModel = require('../model/employeeModel');

const getEmployeeByName = async (name) => {
  const allEmployees = await employeeModel.findAll();
  if (!name) throw new Error('precisa passar um nome');
  const employeesName = allEmployees.filter((employee) => employee.Nome.includes(name));
 
  return employeesName;
};

const getEmployeeByCpf = async (cpf) => {
  const allEmployees = await employeeModel.findAll();
  if (!cpf) throw new Error('CPF não encontrado');
  const employeesCpf = allEmployees.filter((employee) => employee.Cpf === cpf);
  return employeesCpf;
};

const getEmployeeByRole = async (role) => {
  const allEmployees = await employeeModel.findAll();
  if (!role) throw new Error('Cargo não encontrado');
  const employeesRole = allEmployees.filter((employee) => employee.Cargo.includes(role));
  return employeesRole;
};

const getEmployeeByDate = async (date) => {
  const allEmployees = await employeeModel.findAll();
  if (!date) throw new Error('Data não encontrada');
  const employeesDate = allEmployees.filter(
    (employee) => employee.DataCad === date.replace(/-/g, '/'),
  );
  return employeesDate;
};

const getEmployeeByUf = async (uf) => {
  const allEmployees = await employeeModel.findAll();
  if (!uf) throw new Error('Estado não encontrado');
  const employeesUf = allEmployees.filter((employee) => employee.UfNasc === uf);
  return employeesUf;
};

const getEmployeeBySalary = async (range) => {
  const allEmployees = await employeeModel.findAll();
  const [min, max] = range.split(' ');
  console.log(min, max);
  if (Number.isNaN(parseFloat(min)) || Number.isNaN(parseFloat(max))) { 
    throw new Error('Valor inválido'); 
  }
  const employeesSalary = allEmployees.filter(
    (employee) => (employee.Salario >= parseFloat(min) && employee.Salario <= parseFloat(max)),
  );
  return employeesSalary;
};

const getEmployeeByStatus = async (status) => {
  const allEmployees = await employeeModel.findAll();
  if (!status) throw new Error('Status não encontrado');
  const employeesStats = allEmployees.filter((employee) => employee.Status === status);
  return employeesStats;
};

const createEmployee = async (newUser) => employeeModel.create(newUser);

const deleteEmployee = async (cpf) => employeeModel.deleteByCpf(cpf);

module.exports = {
  getEmployeeByName,
  getEmployeeByCpf,
  getEmployeeByRole,
  getEmployeeByDate,
  getEmployeeByUf,
  getEmployeeBySalary,
  getEmployeeByStatus,
  createEmployee,
  deleteEmployee,
};
