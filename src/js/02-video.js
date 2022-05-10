import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";

const writeValueToLocaleStorage = function (timeupdate) {
    localStorage.setItem(LOCALSTORAGE_KEY, timeupdate.seconds);
}

player.on('timeupdate', throttle(writeValueToLocaleStorage, 1000));

player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY));
