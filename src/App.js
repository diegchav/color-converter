import React from 'react';
import { connect } from 'react-redux';

import ColorSwitcher from './components/color-switcher/ColorSwitcher';
import InputColor from './components/input-color/InputColor';
import ConvertButton from './components/convert-button/ConvertButton';
import OutputColor from './components/output-color/OutputColor';

import './App.css';

const App = () => {
  return (
    <div className="app">
      <ColorSwitcher />
      <InputColor />
      <ConvertButton />
      <OutputColor />
    </div>
  );
}

const mapStateToProps = ({ color }) => ({
  inputColor: color.inputColor,
  rValue: color.rValue,
  gValue: color.gValue,
  bValue: color.bValue,
  hexValue: color.hexValue
});

export default connect(mapStateToProps)(App);