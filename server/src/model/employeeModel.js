const { getFsEmployees, setFsEmployees } = require('../utils/fsEmployee');

const findAll = async () => getFsEmployees();

const create = async (newUser) => {
  const employees = await getFsEmployees();
  const employeeId = Math.max(...employees.map(({ id }) => id)) + 1;
  const newEmployee = { id: employeeId, ...newUser };
  employees.push(newEmployee);
  setFsEmployees(employees);
  return newEmployee;
};

const deleteByCpf = async (cpf) => { 
  let employees = await getFsEmployees();
  employees = employees.filter((employee) => employee.Cpf !== Number(cpf));
  setFsEmployees(employees);
  return { message: 'Usuário deletado com sucesso' };
};

module.exports = {
  findAll,
  create,
  deleteByCpf,
};
