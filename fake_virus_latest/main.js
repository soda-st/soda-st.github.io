let time = document.getElementById('time');
const virusCount = document.getElementById('virus-count');
let c = Math.random() * 10000;
let sec = Math.floor(c % 60);
let min = Math.floor((c % 3600) / 60);
let hour = Math.floor(c / 3600);

virusCount.textContent = Math.floor((Math.random() * 10) + 1); 

let virusTimer = setInterval(() => {
  if (sec === 0 && min === 0 && hour === 0) {
    clearInterval(virusTimer);
  }
  time.textContent = `${hour}時間${min}分${sec}秒`;
  c--;
  sec = Math.floor(c % 60);
  min = Math.floor((c % 3600) / 60);
  hour = Math.floor(c / 3600);
}, 1000);