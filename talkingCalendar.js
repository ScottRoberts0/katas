const talkingCalendar = function (date) {
  var newString = "";
  var month = date.substring(5, 7);
  var day = Number(date.substring(8, 10));
  var year = date.substring(0, 4);
  switch (Number(month)) {
    case 01:
      month = "January";
      break;
    case 02:
      month = "February";
      break;
    case 03:
      month = "March";
      break;
    case 04:
      month = "April";
      break;
    case 05:
      month = "May";
      break;
    case 06:
      month = "June";
      break;
    case 07:
      month = "July";
      break;
    case 08:
      month = "August";
      break;
    case 09:
      month = "September";
      break;
    case 10:
      month = "October";
      break;
    case 11:
      month = "November";
      break;
    case 12:
      month = "December";
      break;
  }


  if (Number(day) < 11 || (Number(day) > 14)) {
    switch (Number(day) % 10) {
      case 1:
        day += "st";
        break;
      case 2:
        day += "nd";
        break;
      case 3:
        day += "rd";
        break;
      default:
        day += "th"
    }
  } else {
    day += "th";
  }
  return month + " " + day + ", " + year;

};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

