import { AuthenticatedUserRole } from './AuthenticatedUserRole';

export interface AuthenticationResult {
  '2FAuthRequired': boolean;
  '__type': 'AuthenticationResult:http://jdlf.com.au/ns/data/mobile/';
  'friendlyMessage': string;
  'roles': Array<AuthenticatedUserRole>;
  'success': boolean;
  'technicalMessage': string;
  'tfaProperties'?: unknown; // Unknown
}
