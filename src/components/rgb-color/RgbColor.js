import React from 'react';

import InputField from '../input-field/InputField';

const RgbColor = ({ r, g, b }) => (
  <div>
    <InputField value={r} />
    <InputField value={g} />
    <InputField value={b} />
  </div>
);

export default RgbColor;