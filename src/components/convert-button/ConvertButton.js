import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import './ConvertButton.scss';

const ConvertButton = ({ onConvertClick }) => (
  <div className="convert-button">
    <Button size="small" color="primary" variant="contained" onClick={onConvertClick}>
      Convert
    </Button>
  </div>
);

ConvertButton.propTypes = {
  onConvertClick: PropTypes.func.isRequired
};

export default ConvertButton;