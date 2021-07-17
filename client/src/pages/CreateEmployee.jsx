import React, { useState } from 'react';

import Input from '../components/Input';
import Button from '../components/Button';

const Create = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [cargo, setCargo] = useState('');
  const [uf, setUf] = useState('');
  const [status, setStatus] = useState('');
  const [data, setData] = useState('');
  const [salario, setSalario] = useState('');

  const fetchApi = async () => {
    const endpoint = 'http://localhost:3001/employees/';
    const response = await fetch(endpoint, { headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      Nome: nome,
      Cpf: cpf,
      Cargo: cargo,
      UfNasc: uf,
      Status: status,
      DataCad: data,
      Salario: salario,

    }) });
    const result = await response.json();
    console.log(result);
  };

  return (
    <fieldset>
      <Input
        label="Nome:"
        onChange={ (e) => setNome(e.target.value) }
        value={ nome }
      />
      <Input
        label="CPF:"
        onChange={ (e) => setCpf(e.target.value) }
        value={ cpf }
      />
      <Input
        label="Cargo:"
        onChange={ (e) => setCargo(e.target.value) }
        value={ cargo }
      />
      <Input
        label="Uf:"
        onChange={ (e) => setUf(e.target.value) }
        value={ uf }
      />
      <Input
        label="Status: "
        onChange={ (e) => setStatus(e.target.value) }
        value={ status }
      />
      <Input
        label="Data:"
        onChange={ (e) => setData(e.target.value) }
        value={ data }
      />
      <Input
        label="Salário:"
        onChange={ (e) => setSalario(e.target.value) }
        value={ salario }
      />
      <Button
        label="CRIAR"
        onClick={ fetchApi }
      />
    </fieldset>
  );
};

export default Create;
