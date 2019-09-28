import ColorActionTypes from './color.types';

export const switchInputColor = inputColor => ({
  type: ColorActionTypes.SWITCH_INPUT_COLOR,
  payload: inputColor
});