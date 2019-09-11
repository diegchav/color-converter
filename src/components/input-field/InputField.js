import React from 'react';
import PropTypes from 'prop-types';

import './InputField.scss';

const InputField = ({ value, onChangeValue }) => (
  <input type="text" value={value} onChange={onChangeValue} />
);

InputField.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeValue: PropTypes.func.isRequired
};

export default InputField;