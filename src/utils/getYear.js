const getYear = (date) => {
  const receivedDate = date ? new Date(date) : new Date();

  return receivedDate.getFullYear();
};

export default getYear;
