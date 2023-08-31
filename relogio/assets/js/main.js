function getTimeFromSeconds(seconds) {
  const date = new Date(seconds * 1000);
  return date.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'GMT'
  });
}

const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');
const clock = document.querySelector('.clock');

let timer;
let seconds = 0;



function startTimer() {
  timer = setInterval(function() {
    seconds++;
    clock.innerHTML = getTimeFromSeconds(seconds);
  }, 1000);
}


start.addEventListener('click', function(event) {
  clock.style.color = 'black'
  clearInterval(timer);
  startTimer();
});

pause.addEventListener('click', function(event) {
  clearInterval(timer);
  clock.style.color = 'red';
});

reset.addEventListener('click', function(event) {
  clearInterval(timer);
  clock.style.color = 'black';
  clock.innerHTML = '00:00:00';
  seconds = 0;
});
