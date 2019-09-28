import { combineReducers } from 'redux';

import colorReducer from './color/color.reducer';

const rootReducer = combineReducers({
  color: colorReducer
});

export default rootReducer;