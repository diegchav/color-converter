import React from 'react';

import './ConvertButton.scss';

const ConvertButton = ({ title, onConvertClick }) => (
  <div className="convert-button">
    <button onClick={() => onConvertClick()}>{title}</button>
  </div>
);

export default ConvertButton;