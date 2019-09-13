import React from 'react';
import PropTypes from 'prop-types';

import InputField from '../input-field/InputField';

import {
  HEX_COLOR
} from '../../constants';

import './HexColor.scss';

const HexColor = ({ value, onChangeHexValue }) => (
  <div className="hex-color">
    <InputField label={HEX_COLOR} value={value} onChangeValue={onChangeHexValue} />
  </div>
);

HexColor.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeHexValue: PropTypes.func.isRequired
};

export default HexColor;