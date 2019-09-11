import React from 'react';

import RgbColor from '../rgb-color/RgbColor';
import HexColor from '../hex-color/HexColor';
import ConvertButton from '../convert-button/ConvertButton';

import './InputColor.style.scss';

import {
  INPUT_RGB
} from '../../constants';

const InputColor = ({ input }) => (
  <div className="input-color">
    {input === INPUT_RGB
      ? <RgbColor r="252" g="186" b="3" />
      : <HexColor hex="#fcba03" />
    }
    <ConvertButton title="Convert" />
  </div>
);

export default InputColor;