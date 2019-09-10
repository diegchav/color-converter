import React from 'react';

import './ConvertButton.scss';

const ConvertButton = ({ title }) => (
  <div className="convert-button">
    <button>{title}</button>
  </div>
);

export default ConvertButton;