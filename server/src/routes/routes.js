const express = require('express');
const controller = require('../controller/controller');

const Router = express.Router();

Router.get('/name', controller.getEmployeeByName);
Router.get('/cpf', controller.getEmployeeByCpf);
Router.get('/role', controller.getEmployeeByRole);
Router.get('/date', controller.getEmployeeByDate);
Router.get('/uf', controller.getEmployeeByUf);
Router.get('/salary', controller.getEmployeeBySalary);
Router.get('/salary', controller.getEmployeeByStatus);
Router.post('/create', controller.createEmployee);
Router.delete('/delete', controller.deletedEmployees);

module.exports = Router;
