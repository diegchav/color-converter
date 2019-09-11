import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import './OutputColor.scss';

const OutputColor = ({ colorLabel, colorBg }) => {

  return (
    <div className="output-color">
      <Typography variant="overline">
       {colorLabel}
      </Typography>
      <Paper style={{
        backgroundColor: colorBg
      }}></Paper>
    </div>
  );
};

OutputColor.propTypes = {
  colorLabel: PropTypes.string.isRequired,
  colorBg: PropTypes.string.isRequired
};

export default OutputColor;