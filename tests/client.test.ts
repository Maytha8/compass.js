import { setGlobalDispatcher } from 'undici';
import { CookieJar } from 'tough-cookie';
import { agent } from './mock-agent';
import {
  AuthError,
  Client,
  CompassError,
  RequestManager,
  Session,
  UserManager,
} from '..';

describe('Client', function () {
  beforeAll(function () {
    setGlobalDispatcher(agent);
  });

  it('should construct', function () {
    const client = new Client('https://example.compass.education');

    expect(client).toBeInstanceOf(Client);

    expect(client).toHaveProperty('session');
    expect(client.session).toBeUndefined();

    expect(client).toHaveProperty('request');
    expect(client.request).toBeInstanceOf(RequestManager);

    expect(client).toHaveProperty('users');
    expect(client.users).toBeInstanceOf(UserManager);

    expect(client.isAuthenticated()).resolves.toEqual(false);
  });

  it('should throw error when server returns error HTTP status code', async function () {
    const client = new Client('https://example.compass.education');
    await expect(async function () {
      await client.login('breakserver', 'correctpassword');
    }).rejects.toThrowError(CompassError);
  });

  it('should throw error when server returns no roles', async function () {
    const client = new Client('https://example.compass.education');
    await expect(async function () {
      await client.login('noroles', 'correctpassword');
    }).rejects.toThrowError(AuthError);
  });

  it('should throw error when login was unsuccessful', async function () {
    const client = new Client('https://example.compass.education');
    await expect(async function () {
      await client.login('john.doe', 'incorrectpassword');
    }).rejects.toThrowError(AuthError);
  });

  it('should successfully login', async function () {
    const options = {
      request: { headers: { Accept: 'application/json' } },
    };
    const client = new Client('https://example.compass.education', options);
    await client.login('john.doe', 'correctpassword');

    // Shallow check
    expect(client.isAuthenticated(false)).resolves.toEqual(true);

    // Deep check
    expect(client.isAuthenticated(true)).resolves.toEqual(true);

    expect(client.session).toBeInstanceOf(Session);
    expect(client.session).toHaveProperty('userId', 123);
    expect(client.session).toHaveProperty('baseRole', 1);
  });
});
