import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const KEY_STORAGE = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

player.on('timeupdate', throttle(updateTimeLocalStorage, 1000));

function updateTimeLocalStorage({ seconds }) {
  localStorage.setItem(KEY_STORAGE, seconds);
}

player.setCurrentTime(localStorage.getItem(KEY_STORAGE) || 0);