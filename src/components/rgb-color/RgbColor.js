import React from 'react';
import PropTypes from 'prop-types';

import InputField from '../input-field/InputField';

import {
  R_COLOR,
  G_COLOR,
  B_COLOR
} from '../../constants';

import './RgbColor.scss';

const RgbColor = ({ r, g, b, onChangeRValue, onChangeGValue, onChangeBValue }) => (
  <div className="rgb-color">
    <InputField label={R_COLOR} value={r} onChangeValue={onChangeRValue} />
    <InputField label={G_COLOR} value={g} onChangeValue={onChangeGValue} />
    <InputField label={B_COLOR} value={b} onChangeValue={onChangeBValue} />
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