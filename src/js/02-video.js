import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import {
   saveToLS,
   loadFromLS,
   removeLS
 } from './storage.js';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";

function loadData() {
   for (let i = 0; i < localStorage.length; i++) {
      if (localStorage[LOCALSTORAGE_KEY]) {
         const ObjectLS = loadFromLS(LOCALSTORAGE_KEY);
         player.setCurrentTime(ObjectLS['seconds']);
      }
   }
 }
 loadData();

const onPlay = function(data) {
   console.log('played the video!');
   console.log(data);
   saveToLS(LOCALSTORAGE_KEY, data);
};

player.on('timeupdate', throttle(onPlay, 1000));


