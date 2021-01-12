const hexToR = (h: string) => {
  return parseInt(cutHex(h).substring(0, 2), 16);
};
const hexToG = (h: string) => {
  return parseInt(cutHex(h).substring(2, 4), 16);
};
const hexToB = (h: string) => {
  return parseInt(cutHex(h).substring(4, 6), 16);
};
const cutHex = (h: string) => {
  return h.charAt(0) === "#" ? h.substring(1, 7) : h;
};

const contrastColor = (hexColor: string) => {
  const threshold = 130;

  const hRed = hexToR(hexColor);
  const hGreen = hexToG(hexColor);
  const hBlue = hexToB(hexColor);

  const cBrightness = (hRed * 299 + hGreen * 587 + hBlue * 114) / 1000;
  if (cBrightness > threshold) {
    return "#000000";
  } else {
    return "#FFFFFF";
  }
};

export default contrastColor;
