import React from 'react';

import './InputField.scss';

const InputField = ({ value }) => (
  <input type="text" defaultValue={value} />
);

export default InputField;