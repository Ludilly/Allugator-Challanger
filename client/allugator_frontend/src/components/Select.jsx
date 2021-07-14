import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ label,
  name,
  onChange,
  value,
  id,
  defaultOption,
  defaultValue,
  options,
}) => (
  <label htmlFor={ name }>
    { label }
    <select
      name={ name }
      id={ id }
      required
      onChange={ onChange }
      value={ value }
    >
      <option value={ defaultValue }>{ defaultOption }</option>
      {
        options.map((option, index) => (
          <option key={ index }>{ option }</option>
        ))
      }
    </select>
  </label>
);

Select.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.func.isRequired,
  defaultValue: PropTypes.func.isRequired,
  defaultOption: PropTypes.func.isRequired,
};

export default Select;
