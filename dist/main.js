/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/browser.js
const isBrowser = false;

;// CONCATENATED MODULE: ./src/sdk.js
const sdk = 'sdk';

;// CONCATENATED MODULE: ./src/native.js
const native_native = 'native';

;// CONCATENATED MODULE: ./src/index.js

const isNative = false;


if (isBrowser) {
  console.log('sdk', sdk);
} else {
  console.log('nothing');
}

if (isNative) {
  console.log('native', native_native);
} else {
  console.log('nothing again');
}

/******/ })()
;