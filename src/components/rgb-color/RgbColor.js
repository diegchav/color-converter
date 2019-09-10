import React from 'react';

import InputField from '../input-field/InputField';

import './RgbColor.scss';

const RgbColor = ({ r, g, b }) => (
  <div className="rgb-color">
    <InputField value={r} />
    <InputField value={g} />
    <InputField value={b} />
  </div>
);

export default RgbColor;