import React, { useState } from 'react';

import InputColor from './components/input-color/InputColor';
import OutputColor from './components/output-color/OutputColor';

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
  const initialRgb = randomRgbColor();
  const { r, g, b } = initialRgb;

  const [rValue, setRValue] = useState(r);
  const [gValue, setGValue] = useState(g);
  const [bValue, setBValue] = useState(b);
  const [hexValue, setHexValue] = useState('');

  const [inputType, setInputType] = useState(INPUT_RGB);
  const [invalid, setInvalid] = useState(false);
  const [outputColor, setOutputColor] = useState(rgbColor2Hex(r, g, b));

  const convertRgbColor = (r, g, b) => {
    if (!isRgbColorValid(r, g, b)) {
      setInvalid(true);
    } else {
      setOutputColor(rgbColor2Hex(r, g, b));
      setInvalid(false);
    }
  };

  const convertHexColor = (color) => {
    if (!isHexColorValid(color)) {
      setInvalid(true);
    } else {
      setOutputColor(hexColor2Rgb(color));
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

  return (
    <div className="app">
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
      <OutputColor color={outputColor} invalid={invalid} />
    </div>
  );
}

export default App;