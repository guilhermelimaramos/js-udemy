function showHour() {
  let date = new Date('2021-01-01 00:00:01');

  return date.toLocaleTimeString('pt-BR', {
    hour12: false,
  })
}



const timer = setInterval(function functionInterval(){
  console.log(showHour());
} ,1000);

// setTimeout(function() {
//   clearInterval(timer);
// }, 3000);

// setTimeout(function() {
//   console.log('Olá mundo!');
// }, 5000);