import { ExtendedStatus } from './ExtendedStatus';

export interface TimelinePeriod {
  __type: 'TimelinePeriod:http://jdlf.com.au/ns/data/attendance/v2';
  attendanceOverride: boolean;
  exportId: string;
  extendedStatus?: ExtendedStatus;
  finish: string;
  name: string;
  onCampus: boolean;
  start: string;
  status?: number;
  statusName: string;
  teachingTime: boolean;
  userId: number;
}
