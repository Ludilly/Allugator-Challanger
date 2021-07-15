const service = require('../service/service');
const data = require('../model/fsFile');
const setData = require('../model/fsWrite');

const getEmployeeByName = async (req, res) => {
  try {
    const { nome } = req.params;
    console.log(nome);
    const result = await service.getEmployeeByName(nome);
    res.status(200).json(result);
  } catch (e) {
    res.status(404).json({
      error: e.message,
    });
  }
};

const getEmployeeByCpf = async (req, res) => {
  try {
    const { cpf } = req.params;
    const result = await service.getEmployeeByCpf(cpf);
    res.status(200).json(result);
  } catch (e) {
    res.status(404).json({
      error: e.message,
    });
  }
};

const getEmployeeByRole = async (req, res) => {
  try {
    const { role } = req.params;
    const result = await service.getEmployeeByRole(role);
    res.status(200).json(result);
  } catch (e) {
    res.status(404).json({
      error: e.message,
    });
  }
};

const getEmployeeByDate = async (req, res) => {
  try {
    const { date } = req.params;
    const result = await service.getEmployeeByDate(date);
    res.status(200).json(result);
  } catch (e) {
    res.status(404).json({
      error: e.message,
    });
  }
};

const getEmployeeByUf = async (req, res) => {
  try {
    const { uf } = req.params;
    const result = await service.getEmployeeByUf(uf);
    res.status(200).json(result);
  } catch (e) {
    res.status(404).json({
      error: e.message,
    });
  }
};

const getEmployeeBySalary = async (req, res) => {
  try {
    const { range } = req.params;
    const result = await service.getEmployeeBySalary(range);
    res.status(200).json(result);
  } catch (e) {
    res.status(404).json({
      error: e.message,
    });
  }
};

const getEmployeeByStatus = async (req, res) => {
  try {
    const { status } = req.params;
    const result = await service.getEmployeeByStatus(status);
    res.status(200).json(result);
  } catch (e) {
    res.status(404).json({
      error: e.message,
    });
  }
};

const createEmployee = async (req, res) => {
    const allEmployees = await data();
    const createUser = service.newUser(req.body);
    allEmployees.push(createUser);
    await setData(JSON.stringify(allEmployees));
    res.status(200).json({ message: 'Criado com sucesso' });
};

const deletedEmployees = async (req, res) => {
  try {
    const { Cpf } = req.body;
    const result = await service.deleteEmployee(Cpf);
    res.status(200).json(result);
  } catch (e) {
    res.status(404).json({
      error: e.message,
    });
  }
};

module.exports = {
  getEmployeeByName,
  getEmployeeByCpf,
  getEmployeeByRole,
  getEmployeeByDate,
  getEmployeeByUf,
  getEmployeeBySalary,
  getEmployeeByStatus,
  createEmployee,
  deletedEmployees,
};
