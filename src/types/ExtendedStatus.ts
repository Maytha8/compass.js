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
