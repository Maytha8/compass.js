/**
 * Copyright (C) 2023  Maytham Alsudany
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { request, type Dispatcher } from 'undici';
import { Client } from '../Client';
import { BaseManager } from './BaseManager';
import { CookieJar } from 'tough-cookie';

export class RequestManager extends BaseManager {
  constructor(
    client: Client,
    public readonly url: string,
    public requestOptions?: RequestOptions
  ) {
    super(client);
  }

  public cookieJar = new CookieJar();

  async request(
    path: string,
    requestOptions?: RequestOptions,
    setCookie = false
  ) {
    const url = String(new URL(path, this.url));
    const response = await request(url, {
      ...this.requestOptions,
      ...requestOptions,
      headers: {
        ...this.requestOptions?.headers,
        ...requestOptions?.headers,
        cookie: await this.cookieJar.getCookieString(url),
      },
    });
    if (setCookie && 'set-cookie' in response.headers) {
      for (
        let index = 0;
        index < response.headers['set-cookie'].length;
        index++
      ) {
        let cookie = response.headers['set-cookie'][index];
        if (Buffer.isBuffer(cookie)) {
          cookie = cookie.toString();
        }
        await this.cookieJar.setCookie(cookie, url);
      }
    }
    return response;
  }
}

export type RequestOptions = { dispatcher?: Dispatcher } & Omit<
  Dispatcher.RequestOptions,
  'origin' | 'path' | 'method'
> &
  Partial<Pick<Dispatcher.RequestOptions, 'method'>>;
