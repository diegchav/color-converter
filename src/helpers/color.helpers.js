const isHexValid = (hexColor) => {
  return !isNaN(parseInt(hexColor, 16));
};

export const isHexColorValid = (hexColor) => {
  // Remove hash symbol.
  hexColor = hexColor.replace(/#/g, '');
  return isHexValid(hexColor);
};

/*
* Convert a color represented in hexadecimal into its rgb equivalent.
*
* Ex: 'eb4034' -> [235, 64, 52]
*/
export const hexColor2Rgb = (hexColor) => {
  // Remove hash symbol.
  hexColor = hexColor.replace(/#/g, '');

  if (!isHexValid(hexColor)) {
    throw new Error(`Invalid hex color: #${hexColor}`);
  }

  const r = parseInt(hexColor, 16) >> 16;
  const g = (parseInt(hexColor, 16) >> 8) & 255;
  const b = parseInt(hexColor, 16) & 255;

  return `${r}, ${g}, ${b}`;
};

const isRgbValid = (value) => {
  return (value >= 0 && value <= 255);
};

export const isRgbColorValid = (r, g, b) => {
  return isRgbValid(r) && isRgbValid(g) && isRgbValid(b);
};

const toHex = (value) => {
  value = Number(value).toString(16);
  return value.length === 1
    ? `0${value}`
    : value;
};

/*
* Convert a color in rgb format to its hex equivalent.
*
* Ex: r=252, g=186, b=3 -> '#fcba03'
*/
export const rgbColor2Hex = (r, g, b) => {
  if (isRgbValid(r) && isRgbValid(g) && isRgbValid(b)) {
    let hexColor = '#';
    hexColor += toHex(r);
    hexColor += toHex(g);
    hexColor += toHex(b);
    return hexColor;
  } else {
    throw new Error(`Invalid rgb color: (${r}, ${g}, ${b})`);
  }
};