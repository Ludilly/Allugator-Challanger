import React from 'react';
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';

const Forms = () => (
  // const [data, setData] = useState([]);
  <fieldset>
    <Input label="Salário - Min" />
    <Input label="Salário - Max" />
    <Select />
    <Button label="Filtrar" />
  </fieldset>
);

export default Forms;
