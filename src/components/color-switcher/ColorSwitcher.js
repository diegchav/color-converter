import React from 'react';
import { connect } from 'react-redux';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { switchInputColor } from '../../redux/color/color.actions';

import {
  INPUT_RGB,
  INPUT_HEX
} from '../../constants';

import './ColorSwitcher.scss';

const ColorSwitcher = ({ inputColor, switchInputColor }) => {
  const tabValue = inputColor === INPUT_RGB ? 0 : 1;

  const handleTabChange = (event, newValue) => {
    if (newValue === 0) {
      switchInputColor(INPUT_RGB);
    } else if (newValue === 1) {
      switchInputColor(INPUT_HEX);
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

const mapStateToProps = ({ color }) => ({
  inputColor: color.inputColor
});

const mapDispatchToProps = dispatch => ({
  switchInputColor: inputColor => dispatch(switchInputColor(inputColor))
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorSwitcher);