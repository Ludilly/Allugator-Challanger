const express = require('express');
const controller = require('../controller/controller');

const Router = express.Router();

Router.get('/name/:nome', controller.getEmployeeByName);
Router.get('/cpf/:cpf', controller.getEmployeeByCpf);
Router.get('/role/:role', controller.getEmployeeByRole);
Router.get('/date/:date', controller.getEmployeeByDate);
Router.get('/uf/:uf', controller.getEmployeeByUf);
Router.get('/salary/:range', controller.getEmployeeBySalary);
Router.get('/status/:status', controller.getEmployeeByStatus);
Router.post('/create', controller.createEmployee);
Router.delete('/delete', controller.deletedEmployees);

module.exports = Router;
