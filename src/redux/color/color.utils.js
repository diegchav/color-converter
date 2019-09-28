import {
  hexColor2Rgb,
  rgbColor2Hex
} from '../../helpers/color.helpers';

import {
  INPUT_RGB,
  INPUT_HEX
} from '../../constants';

export const setInputColor = (state, newInputColor) => {
  const { rValue, gValue, bValue, hexValue, inputColor } = state;
  if (newInputColor === INPUT_RGB) {
    try {
      const { r, g, b } = hexColor2Rgb(hexValue);
      return {
        rValue: r,
        gValue: g,
        bValue: b,
        inputColor: newInputColor
      };
    } catch (e) {
      console.error(e.message);
      return { rValue, gValue, bValue, hexValue, inputColor };
    }
  } else if (newInputColor === INPUT_HEX) {
    try {
      const hex = rgbColor2Hex(rValue, gValue, bValue);
      return {
        hexValue: hex,
        inputColor: newInputColor
      };
    } catch (e) {
      console.error(e.message);
      return { rValue, gValue, bValue, hexValue, inputColor };
    }
  }
};