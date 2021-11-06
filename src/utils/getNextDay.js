export const getNextDay = () => {
  const today = new Date();
  let nextDay = new Date();
  return nextDay.setDate(today.getDate() + 1);
};
