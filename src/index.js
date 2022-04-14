export const getRandomInt = (min, max) => {
  const roundMin = Math.ceil(min);
  const roundMax = Math.floor(max);
  return Math.floor(Math.random() * (roundMax - roundMin) + roundMin);
  // The maximum is exclusive and the minimum is inclusive
};

export const printRule = (rule) => {
  console.log(rule);
};
