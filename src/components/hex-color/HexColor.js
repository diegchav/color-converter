import React from 'react';

import InputField from '../input-field/InputField';

const HexColor = ({hex}) => (
  <div>
    <InputField value={hex} />
  </div>
);

export default HexColor;