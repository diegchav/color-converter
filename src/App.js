import React, { useState } from 'react';

import InputColor from './components/input-color/InputColor';
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

function App() {
  const [inputType, setInputType] = useState(INPUT_RGB);
  const [invalid, setInvalid] = useState(false);
  const [outputColor, setOutputColor] = useState('');

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

  const onColorConvert = (...args) => {
    if (inputType === INPUT_RGB) {
      convertRgbColor(args[0], args[1], args[2]);
    } else if (inputType === INPUT_HEX) {
      convertHexColor(args[0]);
    }
  };

  return (
    <div className="app">
      <InputColor inputType={inputType} onColorConvert={onColorConvert} />
      <OutputColor color={outputColor} invalid={invalid} />
    </div>
  );
}

export default App;