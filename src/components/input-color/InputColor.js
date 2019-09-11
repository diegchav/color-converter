import React, { useState } from 'react';
import PropTypes from 'prop-types';

import RgbColor from '../rgb-color/RgbColor';
import HexColor from '../hex-color/HexColor';

import './InputColor.scss';

import {
  INPUT_RGB,
  INPUT_HEX
} from '../../constants';

const InputColor = ({ inputType, initialRgb, onColorConvert }) => {
  
  const [rValue, setRValue] = useState(initialRgb.r);
  const [gValue, setGValue] = useState(initialRgb.g);
  const [bValue, setBValue] = useState(initialRgb.b);
  const [hexValue, setHexValue] = useState('');

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
      onColorConvert(rValue, gValue, bValue);
      setRValue('');
      setGValue('');
      setBValue('');
    } else if (inputType === INPUT_HEX) {
      onColorConvert(hexValue);
      setHexValue('');
    }
  };

  return (
    <div className="input-color">
      {inputType === INPUT_RGB
        ? <RgbColor
            r={rValue}
            g={gValue}
            b={bValue}
            onChangeRValue={handleChangeRValue}
            onChangeGValue={handleChangeGValue}
            onChangeBValue={handleChangeBValue}
          />
        : <HexColor
            value={hexValue}
            onChangeHexValue={handleChangeHexValue}
          />
      }
      <button onClick={handleConvertClick}>Convert</button>
    </div>
  );
};

InputColor.propTypes = {
  inputType: PropTypes.string.isRequired,
  onColorConvert: PropTypes.func.isRequired
};

export default InputColor;