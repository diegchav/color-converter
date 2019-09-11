import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import './ColorSwitcher.scss';

import {
  INPUT_RGB,
  INPUT_HEX
} from '../../constants';

const ColorSwitcher = ({ currentColor, onSwitchColor }) => {
  const tabValue = currentColor === INPUT_RGB ? 0 : 1;

  const handleTabChange = (event, newValue) => {
    if (newValue === 0) {
      onSwitchColor(INPUT_RGB);
    } else if (newValue === 1) {
      onSwitchColor(INPUT_HEX);
    }
  };

  return (
    <div className="color-switcher">
      <Paper square>
        <Tabs
          value={tabValue}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleTabChange}
          aria-label="color switcher"
        >
          <Tab label="RGB" />
          <Tab label="HEX" />
        </Tabs>
      </Paper>
    </div>
  );
};

ColorSwitcher.propTypes = {
  currentColor: PropTypes.string.isRequired,
  onSwitchColor: PropTypes.func.isRequired
};

export default ColorSwitcher;