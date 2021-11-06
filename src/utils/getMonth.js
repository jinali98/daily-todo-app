const getMonth = (date) => {
  const receivedDate = date ? new Date(date) : new Date();

  return receivedDate.getMonth();
};

export default getMonth;
