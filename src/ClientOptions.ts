import { RequestOptions } from './managers/RequestManager';

/**
 * Client options to pass to managers.
 */
export interface ClientOptions {
  /**
   * Request options to pass to `RequestManager`.
   */
  request?: RequestOptions;
}
