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

import { TimelinePeriod } from './TimelinePeriod';

export interface UserDetailsBlob {
  __type: 'UserDetailsBlob';
  chroniclePinnedCount: number;
  userACTStudentID?: number;
  userAccessRestrictions?: unknown; // Unknown
  userCompassPersonId: string;
  userDetails: string;
  userDisplayCode: string;
  userEmail: string;
  userFirstName: string;
  userFlags: Array<unknown>; // Unknown
  userFormGroup: string;
  userFullName: string;
  userGenderPronouns?: unknown; // Unknown
  userHouse?: unknown; // Unknown
  userId: number;
  userLastName: string;
  userPhoneExtension?: unknown; // Unknown
  userPhotoPath: string;
  userPreferredLastName?: string;
  userPreferredName?: string;
  userRole: number;
  userSchoolId: string;
  userSchoolURL: string;
  userSquarePhotoPath: string;
  userStatus: number;
  userSussiID: string;
  userTimeLinePeriods: Array<TimelinePeriod>;
  userVSN?: unknown; // Unknown
  userYearLevel: string;
  userYearLevelId: number;
}
