import React from 'react';
import PropTypes from 'prop-types';

import InputField from '../input-field/InputField';

import './RgbColor.scss';

const RgbColor = ({ r, g, b, onChangeRValue, onChangeGValue, onChangeBValue }) => (
  <div className="rgb-color">
    <InputField value={r} onChangeValue={onChangeRValue} />
    <InputField value={g} onChangeValue={onChangeGValue} />
    <InputField value={b} onChangeValue={onChangeBValue} />
  </div>
);

RgbColor.propTypes = {
  r: PropTypes.string.isRequired,
  g: PropTypes.string.isRequired,
  b: PropTypes.string.isRequired,
  onChangeRValue: PropTypes.func.isRequired,
  onChangeGValue: PropTypes.func.isRequired,
  onChangeBValue: PropTypes.func.isRequired
};

export default RgbColor;