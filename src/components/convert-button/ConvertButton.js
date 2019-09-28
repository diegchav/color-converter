import React from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';

import { convertColor } from '../../redux/color/color.actions';

import './ConvertButton.scss';

const ConvertButton = ({ convertColor }) => (
  <div className="convert-button">
    <Button size="small" color="primary" variant="contained" onClick={convertColor}>
      Convert
    </Button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  convertColor: () => dispatch(convertColor())
});

export default connect(null, mapDispatchToProps)(ConvertButton);