import React, { useState } from 'react';
import { connect } from 'react-redux';

import ColorSwitcher from './components/color-switcher/ColorSwitcher';
import InputColor from './components/input-color/InputColor';
import ConvertButton from './components/convert-button/ConvertButton';
import OutputColor from './components/output-color/OutputColor';

import { switchInputColor } from './redux/color/color.actions';

import {
  isHexColorValid,
  hexColor2Rgb,
  isRgbColorValid,
  rgbColor2Hex,
  randomRgbColor,
  isHexValid,
  isRgbValid
} from './helpers/color.helpers';

import {
  INPUT_RGB,
  INPUT_HEX
} from './constants';

import './App.css';

const App = ({ inputColor, switchInputColor }) => {
  // Generate a random rgb color on load.
  const { r, g, b } = randomRgbColor();
  const hex = rgbColor2Hex(r, g, b);

  const [rValue, setRValue] = useState(r);
  const [gValue, setGValue] = useState(g);
  const [bValue, setBValue] = useState(b);
  const [hexValue, setHexValue] = useState('');

  // When converting from hex to rgb, output color label and bg will be different.
  const [outputColorLabel, setOutputColorLabel] = useState('#' + hex);
  const [outputColorBg, setOutputColorBg] = useState('#' + hex);

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
    if (value.length === 0 || isRgbValid(value)) {
      setRValue(value);
    }
  };

  const handleChangeGValue = (event) => {
    const value = event.target.value;
    if (value.length === 0 || isRgbValid(value)) {
      setGValue(value);
    }
  };

  const handleChangeBValue = (event) => {
    const value = event.target.value;
    if (value.length === 0 || isRgbValid(value)) {
      setBValue(value);
    }
  };

  const handleChangeHexValue = (event) => {
    const value = event.target.value;
    if (value.length === 0 || isHexValid(value)) {
      setHexValue(value);
    }
  };

  const handleConvertClick = () => {
    if (inputColor === INPUT_RGB) {
      convertRgbColor(rValue, gValue, bValue);
    } else if (inputColor === INPUT_HEX) {
      convertHexColor(hexValue);
    }
  };

  const setInvalidInput = () => {
    setRValue('');
    setGValue('');
    setBValue('');
    setHexValue('');
    setOutputColorLabel('No color');
    setOutputColorBg('#fff');
  };

  const handleSwitchColor = (inputColor) => {
    if (inputColor === INPUT_RGB) {
      try {
        const { r, g, b } = hexColor2Rgb(hexValue);
        convertRgbColor(r, g, b);
        setRValue(r);
        setGValue(g);
        setBValue(b);
        setHexValue('');
      } catch (e) {
        setInvalidInput();
      }
    } else if (inputColor === INPUT_HEX) {
      try {
        const hex = rgbColor2Hex(rValue, gValue, bValue);
        convertHexColor(hex);
        setHexValue(hex);
        setRValue('');
        setGValue('');
        setBValue('');
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
  inputColor: color.inputColor
});

const mapDispatchToProps = dispatch => ({
  switchInputColor: inputColor => dispatch(switchInputColor(inputColor))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);