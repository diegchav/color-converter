import React, { useState } from 'react';

import InputColor from './components/input-color/InputColor';
import OutputColor from './components/output-color/OutputColor';
import ColorSwitcher from './components/color-switcher/ColorSwitcher';

import {
  isHexColorValid,
  hexColor2Rgb,
  isRgbColorValid,
  rgbColor2Hex,
  randomRgbColor
} from './helpers/color.helpers';

import {
  INPUT_RGB,
  INPUT_HEX
} from './constants';

import './App.css';

function App() {
  // Generate a random rgb color on load.
  const { r, g, b } = randomRgbColor();
  const hex = rgbColor2Hex(r, g, b);

  const [rValue, setRValue] = useState(r);
  const [gValue, setGValue] = useState(g);
  const [bValue, setBValue] = useState(b);
  const [hexValue, setHexValue] = useState('');

  const [inputType, setInputType] = useState(INPUT_RGB);
  const [invalid, setInvalid] = useState(false);
  // When converting from hex to rgb, output color label and bg will be different.
  const [outputColorLabel, setOutputColorLabel] = useState('#' + hex);
  const [outputColorBg, setOutputColorBg] = useState('#' + hex);

  const convertRgbColor = (r, g, b) => {
    if (!isRgbColorValid(r, g, b)) {
      setInvalid(true);
    } else {
      const hexColor = '#' + rgbColor2Hex(r, g, b);
      setOutputColorLabel(hexColor);
      setOutputColorBg(hexColor);
      setInvalid(false);
    }
  };

  const convertHexColor = (color) => {
    if (!isHexColorValid(color)) {
      setInvalid(true);
    } else {
      const {r, g, b} = hexColor2Rgb(color);
      setOutputColorLabel(`(${r}, ${g}, ${b})`);
      // We assume color is in hex.
      setOutputColorBg('#' + color);
      setInvalid(false);
    }
  };

  const handleChangeRValue = (event) => {
    setRValue(event.target.value);
  };

  const handleChangeGValue = (event) => {
    setGValue(event.target.value);
  };

  const handleChangeBValue = (event) => {
    setBValue(event.target.value);
  };

  const handleChangeHexValue = (event) => {
    setHexValue(event.target.value);
  };

  const handleConvertClick = () => {
    if (inputType === INPUT_RGB) {
      convertRgbColor(rValue, gValue, bValue);
    } else if (inputType === INPUT_HEX) {
      convertHexColor(hexValue);
    }
  };

  const handleSwitchColor = (colorType) => {
    if (colorType === INPUT_RGB) {
      const { r, g, b } = hexColor2Rgb(hexValue);
      convertRgbColor(r, g, b);
      setRValue(r);
      setGValue(g);
      setBValue(b);
      setHexValue('');
    } else if (colorType === INPUT_HEX) {
      const hex = rgbColor2Hex(rValue, gValue, bValue);
      convertHexColor(hex);
      setHexValue(hex);
      setRValue('');
      setGValue('');
      setBValue('');
    }
    setInputType(colorType);
  };

  return (
    <div className="app">
      <ColorSwitcher currentColor={inputType} onSwitchColor={handleSwitchColor} />
      <InputColor
        inputType={inputType}
        rValue={rValue}
        onChangeRValue={handleChangeRValue}
        gValue={gValue}
        onChangeGValue={handleChangeGValue}
        bValue={bValue}
        onChangeBValue={handleChangeBValue}
        hexValue={hexValue}
        onChangeHexValue={handleChangeHexValue}
        onColorConvert={handleConvertClick} />
      <OutputColor
        colorLabel={outputColorLabel}
        colorBg={outputColorBg}
        invalid={invalid} />
    </div>
  );
}

export default App;