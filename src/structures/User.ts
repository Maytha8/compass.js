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

import { Client } from '../Client';
import { TimelinePeriod } from '../types/TimelinePeriod';
import { UserDetailsBlob } from '../types/UserDetailsBlob';

export class User {
  chroniclePinnedCount: number;
  ACTStudentID?: number;
  accessRestrictions?: unknown; // Unknown
  compassPersonId: string;
  details: string;
  displayCode: string;
  email: string;
  firstName: string;
  flags: Array<unknown>; // Unknown
  formGroup: string;
  fullName: string;
  genderPronouns?: unknown; // Unknown
  house?: unknown; // Unknown
  id: number;
  lastName: string;
  phoneExtension?: unknown; // Unknown
  photoPath: string;
  preferredLastName?: string;
  preferredName?: string;
  role: number;
  schoolId: string;
  schoolURL: string;
  squarePhotoPath: string;
  status: number;
  username: string;
  timeLinePeriods: Array<TimelinePeriod>;
  VSN?: unknown; // Unknown
  yearLevel: string;
  yearLevelId: number;

  constructor(client: Client, data: UserDetailsBlob) {
    this.chroniclePinnedCount = data.chroniclePinnedCount;
    this.ACTStudentID = data.userACTStudentID;
    this.accessRestrictions = data.userAccessRestrictions; // Unknown
    this.compassPersonId = data.userCompassPersonId;
    this.details = data.userDetails;
    this.displayCode = data.userDisplayCode;
    this.email = data.userEmail;
    this.firstName = data.userFirstName;
    this.flags = data.userFlags; // Unknown
    this.formGroup = data.userFormGroup;
    this.fullName = data.userFullName;
    this.genderPronouns = data.userGenderPronouns; // Unknown
    this.house = data.userHouse; // Unknown
    this.id = data.userId;
    this.lastName = data.userLastName;
    this.phoneExtension = data.userPhoneExtension; // Unknown
    this.photoPath = data.userPhotoPath;
    this.preferredLastName = data.userPreferredLastName;
    this.preferredName = data.userPreferredName;
    this.role = data.userRole;
    this.schoolId = data.userSchoolId;
    this.schoolURL = data.userSchoolURL;
    this.squarePhotoPath = data.userSquarePhotoPath;
    this.status = data.userStatus;
    this.username = data.userSussiID;
    this.timeLinePeriods = data.userTimeLinePeriods; // Unknown
    this.VSN = data.userVSN; // Unknown
    this.yearLevel = data.userYearLevel;
    this.yearLevelId = data.userYearLevelId;
  }

  toJSON(): Omit<UserDetailsBlob, '__type'> {
    return {
      chroniclePinnedCount: this.chroniclePinnedCount,
      userACTStudentID: this.ACTStudentID,
      userAccessRestrictions: this.accessRestrictions,
      userCompassPersonId: this.compassPersonId,
      userDetails: this.details,
      userDisplayCode: this.displayCode,
      userEmail: this.email,
      userFirstName: this.firstName,
      userFlags: this.flags,
      userFormGroup: this.formGroup,
      userFullName: this.fullName,
      userGenderPronouns: this.genderPronouns,
      userHouse: this.house,
      userId: this.id,
      userLastName: this.lastName,
      userPhoneExtension: this.phoneExtension,
      userPhotoPath: this.photoPath,
      userPreferredLastName: this.preferredLastName,
      userPreferredName: this.preferredName,
      userRole: this.role,
      userSchoolId: this.schoolId,
      userSchoolURL: this.schoolURL,
      userSquarePhotoPath: this.squarePhotoPath,
      userStatus: this.status,
      userSussiID: this.username,
      userTimeLinePeriods: this.timeLinePeriods,
      userVSN: this.VSN,
      userYearLevel: this.yearLevel,
      userYearLevelId: this.yearLevelId,
    };
  }
}
