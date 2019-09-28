import React from 'react';
import { connect } from 'react-redux';

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

const mapStateToProps = ({ color }) => ({
  colorLabel: color.outputColorLabel,
  colorBg: color.outputColorBg
});

export default connect(mapStateToProps)(OutputColor);