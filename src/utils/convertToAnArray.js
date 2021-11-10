export const convertToArray = (input) => {
  return Object.keys(input).map((key) => input[key]);
};
