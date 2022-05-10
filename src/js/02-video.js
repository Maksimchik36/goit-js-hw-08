import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";

// Записывает текущий хронометраж видео в localeStorage
const writeValueToLocaleStorage = function (timeupdate) {
    localStorage.setItem(LOCALSTORAGE_KEY, timeupdate.seconds);
}

// При проигрывании выполняет ф-ю writeValueToLocaleStorage с интервалом в 1 сек
player.on('timeupdate', throttle(writeValueToLocaleStorage, 1000));

const saveTime = localStorage.getItem(LOCALSTORAGE_KEY);
//Для первоначальной записи нужно проверить, чтобы значение было не null
if(saveTime){
player.setCurrentTime(saveTime)}
