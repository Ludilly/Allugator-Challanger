import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, name, label, onChange, value, id }) => (
  <label htmlFor={ name }>
    { label }
    <input
      type={ type }
      name={ name }
      value={ value }
      onChange={ onChange }
      id={ id }
    />
  </label>
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  label: '',
  value: '',
  name: '',
  id: '',
  onChange: null,
};

export default Input;
