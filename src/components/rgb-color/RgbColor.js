import React from 'react';

import InputField from '../input-field/InputField';

import './RgbColor.scss';

const RgbColor = ({ r, g, b, onChangeRValue, onChangeGValue, onChangeBValue }) => (
  <div className="rgb-color">
    <InputField value={r} onChangeValue={onChangeRValue} />
    <InputField value={g} onChangeValue={onChangeGValue} />
    <InputField value={b} onChangeValue={onChangeBValue} />
  </div>
);

export default RgbColor;