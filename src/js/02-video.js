import Vimeo from '@vimeo/player';

const player = new Vimeo('vimeo-player');

player.on('timeupdate', async function (data) {
  const duration = await player.getDuration();
  const seconds = data.seconds;
  const percent = (seconds / duration) * 100;

  console.log(
    `Duration: ${formatTime(duration)}, Seconds: ${formatTime(
      seconds
    )}, Percent: ${percent.toFixed(2)}%`
  );

  localStorage.setItem('videoplayer-current-time', seconds);
});

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
  player.setCurrentTime(savedTime);
}
