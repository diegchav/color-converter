import React, { useState } from 'react';
import { connect } from 'react-redux';

import ColorSwitcher from './components/color-switcher/ColorSwitcher';
import InputColor from './components/input-color/InputColor';
import ConvertButton from './components/convert-button/ConvertButton';
import OutputColor from './components/output-color/OutputColor';

import {
  switchInputColor,
  changeRValue,
  changeGValue,
  changeBValue,
  changeHexValue
} from './redux/color/color.actions';

import {
  isHexColorValid,
  hexColor2Rgb,
  isRgbColorValid,
  rgbColor2Hex
} from './helpers/color.helpers';

import {
  INPUT_RGB,
  INPUT_HEX
} from './constants';

import './App.css';

const App = ({
  inputColor,
  switchInputColor,
  rValue,
  changeRValue,
  gValue,
  changeBValue,
  bValue,
  changeGValue,
  hexValue,
  changeHexValue
}) => {
  // When converting from hex to rgb, output color label and bg will be different.
  const [outputColorLabel, setOutputColorLabel] = useState('#' + hexValue);
  const [outputColorBg, setOutputColorBg] = useState('#' + hexValue);

  const convertRgbColor = (r, g, b) => {
    if (!isRgbColorValid(r, g, b)) {
      setOutputColorLabel('Invalid');
      setOutputColorBg('#fff');
    } else {
      const hexColor = '#' + rgbColor2Hex(r, g, b);
      setOutputColorLabel(hexColor);
      setOutputColorBg(hexColor);
    }
  };

  const convertHexColor = (color) => {
    if (!isHexColorValid(color)) {
      setOutputColorLabel('Invalid');
      setOutputColorBg('#fff');
    } else {
      const {r, g, b} = hexColor2Rgb(color);
      setOutputColorLabel(`(${r}, ${g}, ${b})`);
      // We assume color is in hex.
      setOutputColorBg('#' + color);
    }
  };

  const handleChangeRValue = (event) => {
    const value = event.target.value;
    changeRValue(value);
  };

  const handleChangeGValue = (event) => {
    const value = event.target.value;
    changeBValue(value);
  };

  const handleChangeBValue = (event) => {
    const value = event.target.value;
    changeGValue(value);
  };

  const handleChangeHexValue = (event) => {
    const value = event.target.value;
    changeHexValue(value);
  };

  const handleConvertClick = () => {
    if (inputColor === INPUT_RGB) {
      convertRgbColor(rValue, gValue, bValue);
    } else if (inputColor === INPUT_HEX) {
      convertHexColor(hexValue);
    }
  };

  const setInvalidInput = () => {
    changeRValue('');
    changeBValue('');
    changeGValue('');
    changeHexValue('');
    setOutputColorLabel('No color');
    setOutputColorBg('#fff');
  };

  const handleSwitchColor = (inputColor) => {
    if (inputColor === INPUT_RGB) {
      try {
        const { r, g, b } = hexColor2Rgb(hexValue);
        convertRgbColor(r, g, b);
        changeRValue(r);
        changeBValue(g);
        changeGValue(b);
        changeHexValue('');
      } catch (e) {
        setInvalidInput();
      }
    } else if (inputColor === INPUT_HEX) {
      try {
        const hex = rgbColor2Hex(rValue, gValue, bValue);
        convertHexColor(hex);
        changeHexValue(hex);
        changeRValue('');
        changeBValue('');
        changeGValue('');
      } catch (e) {
        setInvalidInput();
      }
    }

    switchInputColor(inputColor);
  };

  return (
    <div className="app">
      <ColorSwitcher currentColor={inputColor} onSwitchColor={handleSwitchColor} />
      <InputColor
        inputType={inputColor}
        rValue={rValue}
        onChangeRValue={handleChangeRValue}
        gValue={gValue}
        onChangeGValue={handleChangeGValue}
        bValue={bValue}
        onChangeBValue={handleChangeBValue}
        hexValue={hexValue}
        onChangeHexValue={handleChangeHexValue} />
      <ConvertButton onConvertClick={handleConvertClick} />
      <OutputColor
        colorLabel={outputColorLabel}
        colorBg={outputColorBg} />
    </div>
  );
}

const mapStateToProps = ({ color }) => ({
  inputColor: color.inputColor,
  rValue: color.rValue,
  gValue: color.gValue,
  bValue: color.bValue,
  hexValue: color.hexValue
});

const mapDispatchToProps = dispatch => ({
  switchInputColor: inputColor => dispatch(switchInputColor(inputColor)),
  changeRValue: value => dispatch(changeRValue(value)),
  changeBValue: value => dispatch(changeGValue(value)),
  changeGValue: value => dispatch(changeBValue(value)),
  changeHexValue: value => dispatch(changeHexValue(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);