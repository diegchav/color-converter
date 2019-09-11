import React from 'react';
import PropTypes from 'prop-types';

import RgbColor from '../rgb-color/RgbColor';
import HexColor from '../hex-color/HexColor';

import './InputColor.scss';

import {
  INPUT_RGB
} from '../../constants';

const InputColor = ({
  inputType,
  rValue,
  onChangeRValue,
  gValue,
  onChangeGValue,
  bValue,
  onChangeBValue,
  hexValue,
  onChangeHexValue
}) => {
  return (
    <div className="input-color">
      {inputType === INPUT_RGB
        ? <RgbColor
            r={rValue}
            g={gValue}
            b={bValue}
            onChangeRValue={onChangeRValue}
            onChangeGValue={onChangeGValue}
            onChangeBValue={onChangeBValue}
          />
        : <HexColor
            value={hexValue}
            onChangeHexValue={onChangeHexValue}
          />
      }
    </div>
  );
};

InputColor.propTypes = {
  inputType: PropTypes.string.isRequired,
  rValue: PropTypes.string.isRequired,
  onChangeRValue: PropTypes.func.isRequired,
  gValue: PropTypes.string.isRequired,
  onChangeGValue: PropTypes.func.isRequired,
  bValue: PropTypes.string.isRequired,
  onChangeBValue: PropTypes.func.isRequired,
  hexValue: PropTypes.string.isRequired,
  onChangeHexValue: PropTypes.func.isRequired
};

export default InputColor;