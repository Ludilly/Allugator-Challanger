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
  const employeesDate = allEmployees.filter(
    (employee) => employee.DataCad === date.replace(/-/g, '/'),
  );
  return employeesDate;
};

const getEmployeeByUf = async (uf) => {
  const allEmployees = await data();
  if (!uf) throw new Error('Estado não encontrado');
  const employeesUf = allEmployees.filter((employee) => employee.UfNasc === uf);
  return employeesUf;
};

const getEmployeeBySalary = async (range) => {
  const allEmployees = await data();
  const [min, max] = range.split(' ');
  if (Number.isNaN(parseFloat(min)) || Number.isNaN(parseFloat(max))) { 
    throw new Error('Valor inválido'); 
}
  const employeesSalary = allEmployees.filter(
    (employee) => (employee.Salario >= parseFloat(min) && employee.Salario <= parseFloat(max)),
  );
  return employeesSalary;
};

const getEmployeeByStatus = async (status) => {
  console.log(status);
  const allEmployees = await data();
  if (!status) throw new Error('Status não encontrado');
  const employeesStats = allEmployees.filter((employee) => employee.Status === status);
  return employeesStats;
};

const newUser = (user) => ({
  DataCad: user.DataCad,
  Cargo: user.Cargo,
  Cpf: user.Cpf,
  Nome: user.Nome,
  UfNasc: user.UfNasc,
  Salario: user.Salario,
  Status: user.Status,
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
