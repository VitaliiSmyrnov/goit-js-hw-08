import throttle from 'lodash.throttle';
import {
   saveToLS,
   loadFromLS,
   removeLS
 } from './storage.js';

const form = document.querySelector(".feedback-form");
const LOCALSTORAGE_KEY = "feedback-form-state";

const formData = loadFromLS(LOCALSTORAGE_KEY);

function loadData() {
   for (let i = 0; i < localStorage[LOCALSTORAGE_KEY].length; i++) {
      if (localStorage[LOCALSTORAGE_KEY]) {
         const ObjectLS = loadFromLS(LOCALSTORAGE_KEY);
         let keys = Object.keys(ObjectLS);
         for (let key of keys) {
         form.elements[key].value = ObjectLS[key];
         }
      }
   }
 }
 loadData();

form.addEventListener('input', throttle(onMsgElemInput, 500));

function onMsgElemInput(e) {
   formData[e.target.name] = e.target.value;
   saveToLS(LOCALSTORAGE_KEY, formData);
}

form.addEventListener('submit', e => {
   e.preventDefault(); 
   removeLS(LOCALSTORAGE_KEY);
   form.reset();
   console.log(formData);
});