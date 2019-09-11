import React from 'react';

import './InputField.scss';

const InputField = ({ value, onChangeValue }) => (
  <input type="text" value={value} onChange={onChangeValue} />
);

export default InputField;