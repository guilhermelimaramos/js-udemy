function formatDate (date) {
  const day = zeroLeft(date.getDate());
  const mouth = zeroLeft(date.getMonth() + 1);
  const year = zeroLeft(date.getFullYear());
  const hour = zeroLeft(date.getHours());
  const minutes = zeroLeft(date.getMinutes());
  const seconds = zeroLeft(date.getSeconds());
  const milliseconds = zeroLeft(date.getMilliseconds());

  getDate(`${day}/${mouth}/${year} ${hour}:${minutes}:${seconds}:${milliseconds}`)
}

function zeroLeft (num) {
  return num >= 10 ? num : `0${num}`;
}

function getDate (text) { 
  console.log(text);
}


const date = new Date();

formatDate(date);
