import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteUserSuccess } from '../Redux/actions/actions';

import Input from '../components/Input';
// import Select from '../components/Select';
import Button from '../components/Button';
import Table from '../components/Table';

const Delete = () => {
  // const arryOfOptions = [
  //   'delete',
  // ];
  // const arrayOfRoutes = ['cpf'];
  // // const [option, setOptions] = useState('');
  const [inputValue, setinputValue] = useState('');
  const dispatch = useDispatch();

  const fetchApi = async () => {
    const endpoint = `http://localhost:3001/employees/${inputValue}`;
    const results = await fetch(endpoint, { method: 'DELETE' });
    const data = await results.json();
    dispatch(deleteUserSuccess(data));
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
          onClick={ () => {
            fetchApi();
          } }
        />
      </fieldset>
      <Table />
    </>
  );
};

export default Delete;
