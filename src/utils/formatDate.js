export const formatDate = (date) => {
  const receivedDate = date ? new Date(date) : new Date();
  const formatedDate = new Intl.DateTimeFormat("en-US").format(receivedDate);

  return formatedDate;
};
