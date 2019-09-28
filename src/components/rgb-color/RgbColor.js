import React from 'react';
import { connect } from 'react-redux';

import InputField from '../input-field/InputField';

import {
  changeRValue,
  changeGValue,
  changeBValue,
} from '../../redux/color/color.actions';

import {
  R_COLOR,
  G_COLOR,
  B_COLOR
} from '../../constants';

import './RgbColor.scss';

const RgbColor = ({
  rValue,
  gValue,
  bValue,
  changeRValue,
  changeGValue,
  changeBValue
}) => (
  <div className="rgb-color">
    <InputField label={R_COLOR} value={rValue} onChangeValue={changeRValue} />
    <InputField label={G_COLOR} value={gValue} onChangeValue={changeGValue} />
    <InputField label={B_COLOR} value={bValue} onChangeValue={changeBValue} />
  </div>
);

const mapStateToProps = ({ color: { rValue, gValue, bValue } }) => ({
  rValue,
  gValue,
  bValue
});

const mapDispatchToProps = dispatch => ({
  changeRValue: value => dispatch(changeRValue(value)),
  changeGValue: value => dispatch(changeGValue(value)),
  changeBValue: value => dispatch(changeBValue(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(RgbColor);