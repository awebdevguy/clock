const time = document.getElementById('time');
const ampm = document.getElementById('ampm');

window.onload = function () {
  DisplayCurrentTime();
};

function DisplayCurrentTime() {
  let date = new Date();
  let hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  let am_pm = date.getHours() >= 12 ? "PM" : "AM";
  hours = hours < 10 ? "0" + hours : hours;
  let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  // var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  // systemTime = hours + ":" + minutes + ":" + seconds + " " + am_pm;
  systemTime = hours + ":" + minutes;
  time.innerHTML = systemTime;
  ampm.innerHTML = am_pm;
};

setInterval(() => {
  DisplayCurrentTime();
}, 1000);
