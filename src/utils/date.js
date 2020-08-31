export const getCurrentDate = () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();

  today = `${yyyy}-${mm}-${dd}`;

  return today;
};

export const formatDate = (milliseconds) => {
  let d = new Date(milliseconds * 1000);
  let currentDate = d.toLocaleDateString();
  let currentTime = d.toLocaleTimeString();

  return `${currentDate} ${currentTime}`;
};
