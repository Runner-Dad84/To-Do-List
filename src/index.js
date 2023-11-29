import './style.css';
import { projectBtn } from './DOM.js';
import { submit } from './form.js';
import { newList } from './console.js'
import './style.css';
import './form.style.css';
import './style.buttons.css';
import './style.table.css';

//GLOBAL ARRAY
//array of all lists
let listArray = [];
globalThis.listArray = listArray;






/*
//Local Storage
//retrieve array from local storage
let storedArray = JSON.parse(localStorage.getItem('listArray')) || [];

//create proxy
function deepProxy (obj, onChange) {
  const handler = {
    get (target, prop, receiver) {
      const value = Reflect.get (target, prop, receiver);
      if (typeof value === 'object' && value !== null){
        return deepProxy (value, onChange);
      }
      return value;
    },
    set(target, prop, value, receiver){
      const result = Reflect.set(target, prop, value, receiver);
        onChange();
        return result;
    },
    deleteProperty(target, prop) {
      const result = Reflect.deleteProperty(targe, prop);
      onChange();
      return result;
    },
  };
  return new Proxy(obj,handler);
};

//function to handle change
function handleArranyChange () {
  localStorage.setItem('storedArray', JSON.stringify(listArray));
  console.log(`Array update: ${listArray}`)
};

//create deep proxy for array
let arrayProxy = deepProxy(storedArray,handleArranyChange);
*/