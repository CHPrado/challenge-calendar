const cToF = (cTemp: number) => {
  return parseFloat(((cTemp * 9) / 5 + 32).toFixed(2));
};

const fToC = (fTemp: number) => {
  return parseFloat((((fTemp - 32) * 5) / 9).toFixed(2));
};

export { cToF, fToC };
