import React, { useState } from 'react';
import { connect } from 'react-redux';

import ColorSwitcher from './components/color-switcher/ColorSwitcher';
import InputColor from './components/input-color/InputColor';
import ConvertButton from './components/convert-button/ConvertButton';
import OutputColor from './components/output-color/OutputColor';

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
  rValue,
  gValue,
  bValue,
  hexValue,
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

  const handleConvertClick = () => {
    if (inputColor === INPUT_RGB) {
      convertRgbColor(rValue, gValue, bValue);
    } else if (inputColor === INPUT_HEX) {
      convertHexColor(hexValue);
    }
  };

  return (
    <div className="app">
      <ColorSwitcher />
      <InputColor />
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

export default connect(mapStateToProps)(App);