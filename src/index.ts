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

export * from './Client';
export * from './ClientOptions';
export * from './Session';

export * from './errors/AuthError';
export * from './errors/CompassError';

export * from './managers/BaseManager';
export * from './managers/RequestManager';
export * from './managers/UserManager';

export * from './structures/User';

export * from './types/AuthenticatedUserRole';
export * from './types/AuthenticationResult';
export * from './types/UserDetailsBlob';
export * from './types/TimelinePeriod';
export * from './types/ExtendedStatus';
