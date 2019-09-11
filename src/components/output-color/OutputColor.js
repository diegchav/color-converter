import React from 'react';
import PropTypes from 'prop-types';

import './OutputColor.scss';

const OutputColor = ({ colorLabel, colorBg }) => {

  return (
    <div className="output-color">
      <span>{colorLabel}</span>
      <div style={{
        backgroundColor: colorBg
      }}></div>
    </div>
  );
};

OutputColor.propTypes = {
  colorLabel: PropTypes.string.isRequired,
  colorBg: PropTypes.string.isRequired
};

export default OutputColor;