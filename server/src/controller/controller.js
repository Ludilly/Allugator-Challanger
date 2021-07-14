const service = require('../service/service');
const data = require('../model/fsFile');
const setData = require('../model/fsWrite');

const getEmployeeByName = async (req, res) => {
  try {
    const { Nome } = req.body;
    const result = await service.getEmployeeByName(Nome);
    res.status(200).json(result);
  } catch (e) {
    res.status(404).json({
      error: e.message,
    });
  }
};

const getEmployeeByCpf = async (req, res) => {
  try {
    const { Cpf } = req.body;
    const result = await service.getEmployeeByCpf(Cpf);
    res.status(200).json(result);
  } catch (e) {
    res.status(404).json({
      error: e.message,
    });
  }
};

const getEmployeeByRole = async (req, res) => {
  try {
    const { Cargo } = req.body;
    const result = await service.getEmployeeByRole(Cargo);
    res.status(200).json(result);
  } catch (e) {
    res.status(404).json({
      error: e.message,
    });
  }
};

const getEmployeeByDate = async (req, res) => {
  try {
    const { DataCad } = req.body;
    const result = await service.getEmployeeByDate(DataCad);
    res.status(200).json(result);
  } catch (e) {
    res.status(404).json({
      error: e.message,
    });
  }
};

const getEmployeeByUf = async (req, res) => {
  try {
    const { UfNasc } = req.body;
    const result = await service.getEmployeeByUf(UfNasc);
    res.status(200).json({ UF: UfNasc, quantityUf: result.length });
  } catch (e) {
    res.status(404).json({
      error: e.message,
    });
  }
};

const getEmployeeBySalary = async (req, res) => {
  try {
    const { min, max } = req.body;
    const result = await service.getEmployeeBySalary(min, max);
    res.status(200).json(result);
  } catch (e) {
    res.status(404).json({
      error: e.message,
    });
  }
};

const getEmployeeByStatus = async (req, res) => {
  try {
    const { Status } = req.body;
    const result = await service.getEmployeeByStatus(Status);
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
