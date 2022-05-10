import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";

const updateTime = function (timeupdate) {
    localStorage.setItem(LOCALSTORAGE_KEY, timeupdate.seconds);
}

player.on('timeupdate', throttle(updateTime, 1000));

//  _.throttle(func, [wait=0], [options={}])

player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY)).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

