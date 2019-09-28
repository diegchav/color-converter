import ColorActionTypes from './color.types';

import {
  randomRgbColor,
  rgbColor2Hex,
  isRgbValid,
  isHexValid
} from '../../helpers/color.helpers';

import {
  INPUT_RGB
} from '../../constants';

// Generate a random RGB color.
const { r, g, b } = randomRgbColor();
const hex = rgbColor2Hex(r, g, b);

const INITIAL_STATE = {
  inputColor: INPUT_RGB, // Current input color format. Ex. RGB
  rValue: r,
  gValue: g,
  bValue: b,
  hexValue: hex
};

const colorReducer = (state = INITIAL_STATE, action) => {
  const value = action.payload;
  switch (action.type) {
    case ColorActionTypes.SWITCH_INPUT_COLOR:
      return {
        ...state,
        inputColor: value
      };
    case ColorActionTypes.CHANGE_R_VALUE:
      return {
        ...state,
        rValue: (value.length === 0 || isRgbValid(value)) ? value : state.rValue
      };
    case ColorActionTypes.CHANGE_G_VALUE:
      return {
        ...state,
        gValue: (value.length === 0 || isRgbValid(value)) ? value : state.gValue
      };
    case ColorActionTypes.CHANGE_B_VALUE:
      return {
        ...state,
        bValue: (value.length === 0 || isRgbValid(value)) ? value : state.bValue
      };
    case ColorActionTypes.CHANGE_HEX_VALUE:
      return {
        ...state,
        hexValue: (value.length === 0 || isHexValid(value)) ? value : state.hexValue
      };
    default:
      return state;
  }
}

export default colorReducer;