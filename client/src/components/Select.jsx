import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ label,
  name,
  onChange,
  options,
  values,
}) => (
  <label htmlFor={ name }>
    { label }
    <select
      name={ name }
      required
      onChange={ onChange }
    >
      {
        options.map((option, index) => (
          <option key={ index } value={ values[index] }>{ option }</option>
        ))
      }
    </select>
  </label>
);

Select.propTypes = {
  label: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default Select;
