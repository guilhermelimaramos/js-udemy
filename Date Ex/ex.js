function formatDate (date) {
  const dayWeek = getDayWeek(date.getDay());
  const day = zeroLeft(date.getDate());
  const month = getMonth(date.getMonth());
  const year = zeroLeft(date.getFullYear());
  const hour = zeroLeft(date.getHours());
  const minutes = zeroLeft(date.getMinutes());

  getDate (`${dayWeek}, ${day} of ${month} of ${year} ${hour}:${minutes}`);
}

function getDate (text) {
  console.log(text);
}

function getDayWeek (dayWeek) {
  
  switch (dayWeek) {
    case 0: return 'Sunday';
    case 1: return 'Monday';
    case 2: return 'Tuesday';
    case 3: return 'Wednesday';
    case 4: return 'Thursday';
    case 5: return 'Friday';
    case 6: return 'Saturday';
    default: return 'Day invalid';
  }
}

function getMonth (month) {

  switch (month) {

    case 0: return 'January';
    case 1: return 'February';
    case 2: return 'March';
    case 3: return 'April';
    case 4: return 'May';
    case 5: return 'June';
    case 6: return 'July';
    case 7: return 'August';
    case 8: return 'September';
    case 9: return 'October';
    case 10: return 'November';
    case 11: return 'December';
    default: return 'Mouth invalid';
  }
}

function zeroLeft (num) {
  return num >= 10 ? num : `0{num}`
}

const date = new Date(/*'2023-12-15 14:55'*/);
formatDate(date);
