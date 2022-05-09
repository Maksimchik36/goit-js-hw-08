// import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";

player.on('play', function(timeupdate) {
    localStorage.setItem(LOCALSTORAGE_KEY, timeupdate)
});




