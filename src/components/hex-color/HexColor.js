import React from 'react';
import { connect } from 'react-redux';

import InputField from '../input-field/InputField';

import {
  changeHexValue
} from '..//../redux/color/color.actions';

import {
  HEX_COLOR
} from '../../constants';

import './HexColor.scss';

const HexColor = ({ hexValue, changeHexValue }) => (
  <div className="hex-color">
    <InputField label={HEX_COLOR} value={hexValue} onChangeValue={changeHexValue} />
  </div>
);

const mapStateToProps = ({ color: { hexValue }}) => ({
  hexValue
});

const mapDispatchToProps = dispatch => ({
  changeHexValue: value => dispatch(changeHexValue(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(HexColor);