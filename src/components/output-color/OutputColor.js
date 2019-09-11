import React from 'react';
import PropTypes from 'prop-types';

import './OutputColor.scss';

const OutputColor = ({ colorLabel, colorBg, invalid }) => {

  return (
    <div className="output-color">
      <span>{invalid ? 'Invalid' : colorLabel}</span>
      <div style={{
        backgroundColor: invalid ? '#fff' : colorBg
      }}></div>
    </div>
  );
};

OutputColor.propTypes = {
  colorLabel: PropTypes.string.isRequired,
  colorBg: PropTypes.string.isRequired,
  invalid: PropTypes.bool.isRequired
};

export default OutputColor;