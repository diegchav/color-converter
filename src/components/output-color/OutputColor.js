import React from 'react';

import './OutputColor.scss';

const OutputColor = ({ color }) => (
  <div className="output-color">
    <span>{color}</span>
  </div>
);

export default OutputColor;