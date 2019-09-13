import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

import './InputField.scss';

const InputField = ({ label = '', value, onChangeValue }) => (
  <TextField
    label={label}
    value={value}
    variant="outlined"
    inputProps={{ 'aria-label': 'bare' }}
    onChange={onChangeValue}
  />
);

InputField.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeValue: PropTypes.func.isRequired
};

export default InputField;