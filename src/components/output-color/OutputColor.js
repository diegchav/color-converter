import React from 'react';
import PropTypes from 'prop-types';

import './OutputColor.scss';

const OutputColor = ({ color, invalid }) => {

  return (
    <div className="output-color">
      <span className={invalid ? 'invalid' : ''}>{invalid ? 'Invalid' : color}</span>
    </div>
  );
};

// OutputColor.propTypes = {
//   color: PropTypes.string.isRequired,
//   invalid: PropTypes.bool.isRequired
// };

export default OutputColor;