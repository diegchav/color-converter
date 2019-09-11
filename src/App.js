import React from 'react';

import InputColor from './components/input-color/InputColor';
import OutputColor from './components/output-color/OutputColor';

import {
  INPUT_RGB
} from './constants';

import './App.css';

function App() {
  return (
    <div className="app">
      <InputColor input={INPUT_RGB} />
      <OutputColor color="#fcba03" />
    </div>
  );
}

export default App;
