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

import { CookieJar } from 'tough-cookie';
import { Client } from './Client';

export class Session {
  constructor(public readonly client: Client, public userId: number) {}

  toJSON(): SessionData {
    return {
      userId: this.userId,
      cookies: this.client.request.cookieJar.toJSON(),
    };
  }

  static async fromJSON(client: Client, data: SessionData) {
    // CookieJar#fromJSON only accepts a string as an argument,
    // even though CookieJar#toJSON returns an Object.
    client.request.cookieJar = CookieJar.fromJSON(JSON.stringify(data.cookies));
    return new Session(client, data.userId);
  }
}

export interface SessionData {
  userId: number;
  cookies: CookieJar.Serialized;
}
