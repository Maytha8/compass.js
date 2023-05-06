import { CookieJar } from 'tough-cookie';
import { Client } from './Client';

export class Session {
  constructor(
    public readonly client: Client,
    public userId: number,
    public baseRole: number
  ) {}

  toJSON(): SessionData {
    return {
      userId: this.userId,
      baseRole: this.baseRole,
      cookies: this.client.request.cookieJar.toJSON(),
    };
  }

  static async fromJSON(client: Client, data: SessionData) {
    // CookieJar#fromJSON only accepts a string as an argument,
    // even though CookieJar#toJSON returns an Object.
    client.request.cookieJar = CookieJar.fromJSON(JSON.stringify(data.cookies));
    return new Session(client, data.userId, data.baseRole);
  }
}

export interface SessionData {
  userId: number;
  baseRole: number;
  cookies: CookieJar.Serialized;
}
