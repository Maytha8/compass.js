import { CookieJar } from 'tough-cookie';
import { RequestOptions } from './managers/RequestManager';

export interface ClientOptions {
  request?: {
    cookieJar?: CookieJar;
    requestOptions?: RequestOptions;
  };
}
