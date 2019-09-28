import React from 'react';
import { connect } from 'react-redux';

import RgbColor from '../rgb-color/RgbColor';
import HexColor from '../hex-color/HexColor';

import './InputColor.scss';

import {
  INPUT_RGB
} from '../../constants';

const InputColor = ({
  inputColor,
}) => {
  return (
    <div className="input-color">
      {
        inputColor === INPUT_RGB
        ? <RgbColor />
        : <HexColor />
      }
    </div>
  );
};

const mapStateToProps = ({ color }) => ({
  inputColor: color.inputColor
});

export default connect(mapStateToProps)(InputColor);