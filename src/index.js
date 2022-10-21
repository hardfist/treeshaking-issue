import { isBrowser } from './browser';
import { sdk } from './sdk';
if (isBrowser) {
  console.log('sdk', sdk);
}
