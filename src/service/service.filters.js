export const cutString = (input) => {
  if (input.length > 200) return input.substr(0, 260) + "...";
  else return input;
};

export const getDateStrFromTimeStamp = (timeStamp) => {
  let dateObj = new Date(timeStamp);
  let day = String(dateObj.getDate()).padStart(2, "0");
  let month = String(dateObj.getMonth()).padStart(2, "0");
  let year = String(dateObj.getFullYear());
  return day + "/" + month + "/" + year;
};

export const getIntRating = (input) => {
  return Math.round(input / 10);
};
