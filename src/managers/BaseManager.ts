import { CookieJar } from 'tough-cookie';
import { Client } from '../Client';

export class BaseManager {
  constructor(public readonly client: Client) {}
}
