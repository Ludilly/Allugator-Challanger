import React, { useState } from 'react';
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';
import Table from '../components/Table';

const Forms = () => {
  const arryOfOptions = [
    'Nome', 'Cpf', 'Cargo', 'UfNasc', 'Status', 'DataCad', 'Salário'];
  const arrayOfRoutes = ['name', 'cpf', 'role', 'uf', 'status', 'date', 'salary'];
  const [option, setOptions] = useState('');
  const [inputValue, setinputValue] = useState('');

  const fetchApi = async () => {
    console.log(option);
    const endpoint = `http://localhost:3001/${option}/${inputValue}`;
    const results = await fetch(endpoint);
    const data = await results.json();
    console.log(data);
  };

  return (
    <>
      <fieldset>
        <Select
          label="Escolha uma opção:"
          options={ arryOfOptions }
          onChange={ (e) => setOptions(e.target.value) }
          values={ arrayOfRoutes }
        />
        <Input
          label="Digite a sua busca:"
          onChange={ (e) => setinputValue(e.target.value) }
          value={ inputValue }
        />

        <Button
          label="Filtrar"
          onClick={ () => fetchApi() }
        />
      </fieldset>
      <Table />
    </>
  );
};

export default Forms;