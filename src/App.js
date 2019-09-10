import React from 'react';

import InputColor from './components/input-color/InputColor';
import ConvertButton from './components/convert-button/ConvertButton';
import OutputColor from './components/output-color/OutputColor';

import {
  INPUT_RGB
} from './constants';

import './App.css';

function App() {
  return (
    <div className="App">
      <InputColor input={INPUT_RGB} />
      <ConvertButton title="Convert" />
      <OutputColor color="#fcba03" />
    </div>
  );
}

export default App;
