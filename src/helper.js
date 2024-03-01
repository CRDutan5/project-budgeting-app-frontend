export function dateToString(date) {
  const months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };
  const [year, month, day] = date.toString().split("-");
  return `${months[+month]} ${+day}, ${year}`;
}

export function capitalizedWord(word) {
  const capitalized = word.toString().charAt(0).toUpperCase() + word.slice(1);
  return capitalized;
}
