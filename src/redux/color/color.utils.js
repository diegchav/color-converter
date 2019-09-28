import {
  isHexColorValid,
  hexColor2Rgb,
  isRgbColorValid,
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

const convertRgbColor = (r, g, b) => {
  if (!isRgbColorValid(r, g, b)) {
    return {
      outputColorLabel: 'Invalid',
      outputColorBg: '#fff'
    };
  } else {
    const hexColor = '#' + rgbColor2Hex(r, g, b);
    return {
      outputColorLabel: hexColor,
      outputColorBg: hexColor
    };
  }
};

const convertHexColor = (color) => {
  if (!isHexColorValid(color)) {
    return {
      outputColorLabel: 'Invalid',
      outputColorBg: '#fff'
    };
  } else {
    const {r, g, b} = hexColor2Rgb(color);
    return {
      outputColorLabel: `(${r}, ${g}, ${b})`,
      outputColorBg: '#' + color
    };
  }
};

export const convertColor = state => {
  const { inputColor, rValue, gValue, bValue, hexValue } = state;
  if (inputColor === INPUT_RGB) {
    return convertRgbColor(rValue, gValue, bValue);
  } else if (inputColor === INPUT_HEX) {
    return convertHexColor(hexValue);
  }
};