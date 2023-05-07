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
