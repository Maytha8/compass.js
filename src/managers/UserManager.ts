import { BaseManager } from './BaseManager';
import { CompassError } from '../errors/CompassError';
import { User } from '../structures/User';
import { UserDetailsBlob } from '../types/UserDetailsBlob';

export class UserManager extends BaseManager {
  /**
   * Get a user by their ID.
   * @param id User ID.
   * @returns User instance.
   */
  async get(id: number): Promise<User> {
    const { statusCode, body } = await this.client.request.request(
      '/Services/User.svc/GetUserDetailsBlobByUserId',
      {
        method: 'POST',
        body: JSON.stringify({
          id,
          targetUserId: id,
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
    const response: UserDetailsBlob = parsed.d;
    return new User(this.client, response);
  }

  /**
   * Get the user the client is logged in as.
   * @returns User instance.
   */
  async me(): Promise<User> {
    return await this.get(this.client.session.userId);
  }
}
