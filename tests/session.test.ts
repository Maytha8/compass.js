import { setGlobalDispatcher } from 'undici';
import { agent } from './mock-agent';
import { Client } from '..';

describe('Session', function () {
  beforeAll(function () {
    setGlobalDispatcher(agent);
  });
  it('should convert to and from an object', async function () {
    const client = new Client('https://example.compass.education');
    await client.login('john.doe', 'correctpassword');

    const session = client.session.toJSON();
    expect(session).toHaveProperty('userId', 123);
    expect(session).toHaveProperty('baseRole', 1);
    expect(session).toHaveProperty('cookies');

    const newClient = await Client.fromSession(
      'https://example.compass.education',
      session
    );
    expect(newClient.session.userId).toEqual(123);

    const newClient2 = await Client.fromSession(
      'https://example.compass.education',
      JSON.stringify(session)
    );
    expect(newClient.session.userId).toEqual(123);
  });
});
