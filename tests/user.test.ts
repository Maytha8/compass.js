import { setGlobalDispatcher } from 'undici';
import { agent } from './mock-agent';
import { Client, CompassError } from '..';

describe('UserManager', function () {
  let client: Client;
  beforeAll(async function () {
    setGlobalDispatcher(agent);
    client = new Client('https://example.compass.education');
    await client.login('john.doe', 'correctpassword');
  });
  it('should get a user by their ID', async function () {
    const user = await client.users.get(456);
    expect(user.toJSON()).toStrictEqual({
      __type: 'UserDetailsBlob',
      chroniclePinnedCount: 0,
      userACTStudentID: undefined,
      userAccessRestrictions: undefined, // Unknown
      userCompassPersonId: '9fc0aba3-5552-4afb-8b07-260d170e6b04',
      userDetails: '15 years, 0 months (01/01/07)',
      userDisplayCode: 'mdoe',
      userEmail: 'mike.doe@example.edu.au',
      userFirstName: 'Mike',
      userFlags: [], // Unknown
      userFormGroup: 'Form 2',
      userFullName: 'Mike Doe',
      userGenderPronouns: undefined, // Unknown
      userHouse: undefined, // Unknown
      userId: 456,
      userLastName: 'Doe',
      userPhoneExtension: undefined, // Unknown
      userPhotoPath: '/download/cdn/full/example.jpg',
      userPreferredLastName: undefined,
      userPreferredName: 'John',
      userRole: 1,
      userSchoolId: 'example.edu.au',
      userSchoolURL: 'example.compass.education',
      userSquarePhotoPath: '/download/cdn/square/example.jpg',
      userStatus: 1,
      userSussiID: 'mike.doe',
      userTimeLinePeriods: [], // Unknown
      userVSN: undefined, // Unknown
      userYearLevel: 'Year 7',
      userYearLevelId: 7,
    });
  });
  it('should get the currently logged in user', async function () {
    const user = await client.users.me();
    expect(user.toJSON()).toStrictEqual({
      __type: 'UserDetailsBlob',
      chroniclePinnedCount: 0,
      userACTStudentID: undefined,
      userAccessRestrictions: undefined, // Unknown
      userCompassPersonId: '9fc0aba3-5552-4afb-8b07-260d170e6b04',
      userDetails: '16 years, 0 months (01/01/06)',
      userDisplayCode: 'jdoe',
      userEmail: 'john.doe@example.edu.au',
      userFirstName: 'John',
      userFlags: [], // Unknown
      userFormGroup: 'Form 1',
      userFullName: 'John Doe',
      userGenderPronouns: undefined, // Unknown
      userHouse: undefined, // Unknown
      userId: 123,
      userLastName: 'Doe',
      userPhoneExtension: undefined, // Unknown
      userPhotoPath: '/download/cdn/full/example.jpg',
      userPreferredLastName: undefined,
      userPreferredName: 'John',
      userRole: 1,
      userSchoolId: 'example.edu.au',
      userSchoolURL: 'example.compass.education',
      userSquarePhotoPath: '/download/cdn/square/example.jpg',
      userStatus: 1,
      userSussiID: 'john.doe',
      userTimeLinePeriods: [], // Unknown
      userVSN: undefined, // Unknown
      userYearLevel: 'Year 7',
      userYearLevelId: 7,
    });
  });
  it('should throw an error if server returns error', function () {
    expect(async function () {
      await client.users.get(404);
    }).rejects.toThrowError(CompassError);
  });
});
