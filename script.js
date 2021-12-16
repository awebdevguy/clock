const time = document.getElementById('time');
const ampm = document.getElementById('ampm');

window.onload = function () {
  displayTime();
};

window.document.addEventListener('click', () => {
  const html = document.querySelector('html');

  html.classList.contains('light') ? html.classList.remove('light') : html.classList.add('light');
});

function displayTime() {
  let date = new Date();
  let hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  let amPM = date.getHours() >= 12 ? "PM" : "AM";
  // hours = hours < 10 ? "0" + hours : hours;
  let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  // let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  // systemTime = hours + ":" + minutes + ":" + seconds;
  systemTime = hours + ":" + minutes;
  time.innerHTML = systemTime;
  ampm.innerHTML = amPM;
};

setInterval(() => {
  displayTime();
}, 1000);
