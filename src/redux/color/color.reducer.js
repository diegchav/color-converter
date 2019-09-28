import ColorActionTypes from './color.types';

import {
  INPUT_RGB
} from '../../constants';

const INITIAL_STATE = {
  inputColor: INPUT_RGB // Current input color format. Ex. RGB
};

const colorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ColorActionTypes.SWITCH_INPUT_COLOR:
      return {
        ...state,
        inputColor: action.payload
      };
    default:
      return state;
  }
}

export default colorReducer;