import { isBrowser } from './browser.js';
import { answer } from './answer.js';
const isNative = false;
import { sdk } from './sdk.js';
import { native } from './native.js';
if (isBrowser) {
  console.log('sdk', sdk);
} else {
  console.log('nothing');
}

if (isNative) {
  console.log('native', native);
} else {
  console.log('nothing again');
}
