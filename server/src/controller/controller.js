const service = require('../service/employeeService');

const getEmployeeByName = async (req, res) => {
  try {
    const { nome } = req.params;
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
    const result = await service.getEmployeeByCpf(Number(cpf));
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
  try {
    const result = await service.createEmployee(req.body);
    res.status(200).json(result);
  } catch (e) {
    res.status(404).json({
      error: e.message,
    });
  }
};

const deletedEmployees = async (req, res) => {
  try {
    const { cpf } = req.params;
    const result = await service.deleteEmployee(cpf);
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
