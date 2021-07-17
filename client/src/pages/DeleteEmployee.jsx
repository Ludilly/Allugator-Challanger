import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteUserSuccess } from '../Redux/actions/actions';

import Input from '../components/Input';
import Button from '../components/Button';
import Table from '../components/Table';

const Delete = () => {
  const [inputValue, setinputValue] = useState('');
  const dispatch = useDispatch();

  const fetchApi = async () => {
    const endpoint = `http://localhost:3001/employees/${inputValue}`;
    const results = await fetch(endpoint, { method: 'DELETE' });
    await results.json();
    dispatch(deleteUserSuccess(inputValue));
  };

  return (
    <>
      <fieldset>
        <Input
          label="Digite o CPF:"
          onChange={ (e) => setinputValue(e.target.value) }
          value={ inputValue }
        />
        <Button
          label="Deletar"
          onClick={ fetchApi }
        />
      </fieldset>
      <Table />
    </>
  );
};

export default Delete;
