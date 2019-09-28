import ColorActionTypes from './color.types';

export const switchInputColor = inputColor => ({
  type: ColorActionTypes.SWITCH_INPUT_COLOR,
  payload: inputColor
});

export const changeRValue = rValue => ({
  type: ColorActionTypes.CHANGE_R_VALUE,
  payload: rValue
});

export const changeGValue = gValue => ({
  type: ColorActionTypes.CHANGE_G_VALUE,
  payload: gValue
});

export const changeBValue = bValue => ({
  type: ColorActionTypes.CHANGE_B_VALUE,
  payload: bValue
});

export const changeHexValue = hexValue => ({
  type: ColorActionTypes.CHANGE_HEX_VALUE,
  payload: hexValue
});

export const convertColor = () => ({
  type: ColorActionTypes.CONVERT_COLOR
});