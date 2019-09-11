import React from 'react';
import PropTypes from 'prop-types';

import './ConvertButton.scss';

const ConvertButton = ({ onConvertClick }) => (
  <div className="convert-button">
    <button onClick={onConvertClick}>Convert</button>
  </div>
);

ConvertButton.propTypes = {
  onConvertClick: PropTypes.func.isRequired
};

export default ConvertButton;