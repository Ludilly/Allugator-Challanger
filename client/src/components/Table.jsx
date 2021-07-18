import React from 'react';
import { useSelector } from 'react-redux';

const Table = () => {
  const employee = useSelector((state) => state.reducer.employees);
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Cpf</th>
          <th>Cargo</th>
          <th>UF</th>
          <th>Status</th>
          <th>Data</th>
          <th>Salário</th>
        </tr>
        {employee.map((e) => (
          <tr key={ e.Nome }>
            <td>{e.Nome}</td>
            <td>{e.Cpf}</td>
            <td>{e.Cargo}</td>
            <td>{e.UfNasc}</td>
            <td>{e.Status}</td>
            <td>{e.DataCad}</td>
            <td>{e.Salario}</td>
          </tr>
        ))}
      </thead>
    </table>
  );
};

export default Table;
