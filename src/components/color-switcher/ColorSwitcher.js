import React from 'react';
import PropTypes from 'prop-types';

import './ColorSwitcher.scss';

import {
  INPUT_RGB,
  INPUT_HEX
} from '../../constants';

const ColorSwitcher = ({ currentColor, onSwitchColor }) => (
  <div className="color-switcher">
    <span
      className={currentColor === INPUT_RGB ? 'active' : ''}
      onClick={() => {onSwitchColor(INPUT_RGB)}}
    >
      RGB
    </span>
    |
    <span
      className={currentColor === INPUT_HEX ? 'active' : ''}
      onClick={() => {onSwitchColor(INPUT_HEX)}}
    >
      HEX
    </span>
  </div>
);

ColorSwitcher.propTypes = {
  currentColor: PropTypes.string.isRequired,
  onSwitchColor: PropTypes.func.isRequired
};

export default ColorSwitcher;