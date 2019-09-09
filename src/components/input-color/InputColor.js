import React from 'react';

import RgbColor from '../rgb-color/RgbColor';
import HexColor from '../hex-color/HexColor';

import {
  INPUT_RGB
} from '../../constants';

const InputColor = ({ input }) => (
  <div>
    {input === INPUT_RGB
      ? <RgbColor r="252" g="186" b="3" />
      : <HexColor hex="#fcba03" />
    }
  </div>
);

export default InputColor;