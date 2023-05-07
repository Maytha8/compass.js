import { CompassError } from './errors/CompassError';
import { AuthError } from './errors/AuthError';
import { RequestManager } from './managers/RequestManager';
import { ClientOptions } from './ClientOptions';
import { AuthenticationResult } from './types/AuthenticationResult';
import { Session, SessionData } from './Session';
import { UserManager } from './managers/UserManager';
import { CookieJar } from 'tough-cookie';

export class Client {
  /**
   * Constructs a new Compass `Client` instance.
   * @param url URL to school-specific Compass website.
   * @param options Configuration to pass to managers.
   */
  constructor(url: string, options?: ClientOptions) {
    this._request = new RequestManager(this, url, options?.request);
    this._users = new UserManager(this);
  }

  /**
   * Current session.
   */
  protected _session?: Session;

  /**
   * Current session. `undefined` when unauthenticated.
   */
  get session() {
    return this._session;
  }

  /**
   * Create a `Client` instance from an existing session.
   * @param url URL to school-specific Compass website.
   * @param session Object/JSON with session data.
   * @param options Configuration to pass to managers.
   */
  static async fromSession(
    url: string,
    session: string | SessionData,
    options?: ClientOptions
  ) {
    const instance = new Client(url, options);
    if (typeof session === 'string') {
      session = JSON.parse(session) as SessionData;
    }
    instance._session = await Session.fromJSON(instance, session);
    return instance;
  }

  static async fromData(
    url: string,
    userId: number,
    cookieJar: CookieJar,
    options?: ClientOptions
  ) {
    const instance = new Client(url, options);
    instance._session = new Session(instance, userId);
    instance._request.cookieJar = cookieJar;
    return instance;
  }

  /**
   * Request manager.
   */
  protected _request: RequestManager;

  /**
   * Request manager.
   */
  get request() {
    return this._request;
  }

  /**
   * User manager.
   */
  protected _users: UserManager;

  /**
   * User manager.
   */
  get users() {
    return this._users;
  }

  /**
   * Whether client instance is authenticated.
   * @param deepCheck When `true`, makes a request to test if the session is valid.
   */
  async isAuthenticated(deepCheck = true): Promise<boolean> {
    if (!this.session) return false;
    if (!deepCheck) return true;
    const { statusCode } = await this.request.request(
      '/',
      { method: 'GET' },
      false
    );
    // If unauthenticated, 302 will be returned (redirect to login page).
    return statusCode === 200;
  }

  /**
   * Login to Compass.
   * @param username Username of user account.
   * @param password Password of user account.
   */
  async login(username: string, password: string) {
    const { statusCode, body } = await this.request.request(
      '/services/admin.svc/AuthenticateUserCredentials',
      {
        method: 'POST',
        body: JSON.stringify({
          password,
          sessionstate: 'readonly',
          username,
        }),
        headers: {
          'content-type': 'application/json',
        },
      }
    );
    if (statusCode !== 200) {
      throw new CompassError('Server did not return a successful status code.');
    }
    const parsed = await body.json();
    const response: AuthenticationResult = parsed.d;
    if (!response.success) {
      throw new AuthError(response.friendlyMessage);
    }
    if (!('roles' in response) || response.roles.length !== 1) {
      throw new AuthError('No roles returned from server.');
    }
    this._session = new Session(
      this,
      response.roles[0].userId,
      response.roles[0].baseRole
    );
  }
}
