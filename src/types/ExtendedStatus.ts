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

export interface ExtendedStatus {
  __type: 'Es:http://jdlf.com.au/ns/business/attendance/transport';
  attendanceGridDisplayMode?: unknown; // UNknown
  attendanceGridOrdinal?: unknown; // Unknown
  c: string;
  d: string;
  def: boolean;
  eventsUi: boolean;
  id: number;
  isAttendanceAdminDefault: boolean;
  isCustom: boolean;
  lastModified?: string;
  lastModifiedUserId?: number;
  n: string;
  note: string;
  parentApprovalsUi: boolean;
  pdef: boolean;
  periodCalc_LateParentApproved: boolean;
  periodCalc_LateUnapproved: boolean;
  periodCalc_NotMarked: boolean;
  periodCalc_NotPresentUnapproved: boolean;
  periodCalc_Present: boolean;
  rowGuid: string;
  schoolActivitiesUi: boolean;
  schoolSystemCountedAbsence: boolean;
  schoolSystemExportIdentifier: string;
  schoolSystemType: number;
  shortName: string;
  sourceRowGuid?: unknown; // Unknown
  standardClassesUi: boolean;
  studentApprovalsUi: boolean;
  uiStatus: number;
}
