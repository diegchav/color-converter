import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

import './InputField.scss';

const InputField = ({ label = '', value, onChangeValue }) => {
  const handleChange = e => {
    const value = e.target.value;
    onChangeValue(value);
  };
  
  return (
    <TextField
      label={label}
      value={value}
      variant="outlined"
      inputProps={{ 'aria-label': 'bare' }}
      onChange={handleChange}
    />
  )
};

InputField.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeValue: PropTypes.func.isRequired
};

export default InputField;