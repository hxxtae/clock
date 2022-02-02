function clockSet() {
  const Deg = 6;
  const clock = new Date();
  const hour = clock.getHours();
  const min = clock.getMinutes();
  const sec = clock.getSeconds();

  let hrDeg = (hour + Number((min / 60).toFixed(2))) * 30;
  let mnDeg = min * Deg;
  let scDeg = sec * Deg;

  const hr = document.querySelector('.hr');
  const mn = document.querySelector('.mn');
  const sc = document.querySelector('.sc');

  hr.style.transform = `rotate(${hrDeg}deg)`;
  mn.style.transform = `rotate(${mnDeg}deg)`;
  sc.style.transform = `rotate(${scDeg}deg)`;
}

clockSet();
setInterval(clockSet, 1000);
