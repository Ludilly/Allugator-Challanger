const express = require('express');
const data = require('../model/fsFile');
const setData = require('../model/fsWrite');

const router = express.Router();

router.get('/name', async (req, res) => {
  const content = await data();
  const { Nome } = req.body;
      if (Nome) {
        const getEmployeeByName = content.filter((employee) => employee.Nome.includes(Nome));
        return res.status(200).json(getEmployeeByName);
      }
      return res.status(404).json({ menssage: 'Nome não encontrado' });
  });

router.get('/cpf', async (req, res) => {
  const content = await data();
  const { Cpf } = req.body;
      if (Cpf) {
        const getEmployeeByCpf = content.filter((employee) => employee.Cpf === Cpf);
        return res.status(200).json(getEmployeeByCpf);
      }
      return res.status(404).json({ menssage: 'Cpf não encontrado' });
});

router.get('/cargo', async (req, res) => {
  const content = await data();
  const { Cargo } = req.body;
      if (Cargo) {
        const getEmployeeByJob = content.filter((employee) => employee.Cargo.includes(Cargo));
        return res.status(200).json(getEmployeeByJob);
      }
      return res.status(404).json({ menssage: 'Cargo não encontrado' });
});

router.get('/datacad', async (req, res) => {
  const content = await data();
  const { DataCad } = req.body;
      if (DataCad) {
        const getEmployeeByDate = content.filter((employee) => employee.DataCad === DataCad);
        return res.status(200).json(getEmployeeByDate);
      }
      return res.status(404).json({ menssage: 'Data não encontrada' });
});

router.get('/uf', async (req, res) => {
  const content = await data();
  const { UfNasc } = req.body;
      if (UfNasc) {
        const getEmployeeByUf = content.filter((employee) => employee.UfNasc === UfNasc);
        return res.status(200).json(getEmployeeByUf);
      }
      return res.status(404).json({ menssage: 'UF não encontrada' });
});

router.get('/salario', async (req, res) => {
  const content = await data();
  const { min, max } = req.body;
      if (min && max) {
        const getEmployeeBySalary = content.filter(
          (employee) => (employee.Salario >= min && employee.Salario <= max),
);
        return res.status(200).json(getEmployeeBySalary);
      }
      return res.status(404).json({ menssage: 'Salário não encontrado' });
});

router.get('/status', async (req, res) => {
  const content = await data();
  const { Status } = req.body;
      if (Status) {
        const getEmployeeByStatus = content.filter((employee) => employee.Status === Status);
        return res.status(200).json(getEmployeeByStatus);
      }
      return res.status(404).json({ menssage: 'Status não encontrado' });
});

const newUser = (e) => ({
  DataCad: e.DataCad,
  Cargo: e.Cargo,
  Cpf: e.Cpf,
  Nome: e.Nome,
  UfNasc: e.UfNasc,
  Salario: e.Salario,
  Status: e.Status,
});

router.post('/newuser', async (req, res) => {
  const content = await data();
  const insertObj = newUser(req.body); 
      content.push(insertObj);
      await setData(JSON.stringify(content));
      res.status(201).json({ message: 'Criado com sucesso' });
});

router.delete('/delete', async (req, res) => {
  const { Cpf } = req.body;
  const content = await data();
  const deletByCpf = content.filter((c) => c.Cpf !== Cpf);
  res.status(200).json(deletByCpf);
});

module.exports = router;
