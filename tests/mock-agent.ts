import { MockAgent } from 'undici';

export const agent = new MockAgent();
agent.disableNetConnect();

const pool = agent.get('https://example.compass.education');

pool
  .intercept({
    path: '/',
    method: 'GET',
  })
  .reply(200);

pool
  .intercept({
    path: '/services/admin.svc/AuthenticateUserCredentials',
    method: 'POST',
    body(body) {
      const data = JSON.parse(body);
      return data.username === 'breakserver';
    },
  })
  .reply(500);

pool
  .intercept({
    path: '/services/admin.svc/AuthenticateUserCredentials',
    method: 'POST',
    body(body) {
      const data = JSON.parse(body);
      return data.username === 'noroles' && data.password === 'correctpassword';
    },
  })
  .reply(
    200,
    {
      d: {
        '2FAuthRequired': false,
        '__type': 'AuthenticationResult:http://jdlf.com.au/ns/data/mobile/',
        'friendlyMessage': '',
        'roles': [],
        'success': true,
        'technicalMessage': '',
        'tfaProperties': undefined,
      },
    },
    {
      headers: {
        'set-cookie': [
          'cpssid_example.edu.au=9fc0aba3-5552-4afb-8b07-260d170e6b04; domain=.compass.education; path=/; secure; HttpOnly; SameSite=Lax',
          'ASP.NET_SessionId=9fc0aba3-5552-4afb-8b07-260d170e6b04; domain=.example.compass.education; path=/; secure; HttpOnly; SameSite=Lax',
        ],
      },
    }
  );

pool
  .intercept({
    path: '/services/admin.svc/AuthenticateUserCredentials',
    method: 'POST',
    body(body) {
      const data = JSON.parse(body);
      return (
        data.username === 'john.doe' && data.password === 'correctpassword'
      );
    },
  })
  .reply(
    200,
    {
      d: {
        '2FAuthRequired': false,
        '__type': 'AuthenticationResult:http://jdlf.com.au/ns/data/mobile/',
        'friendlyMessage': '',
        'roles': [
          {
            __type: 'AuthenticatedUserRole:http://jdlf.com.au/ns/data/mobile/',
            baseRole: 1,
            fqdn: 'example.compass.education',
            schoolId: 'example.edu.au',
            userId: 123,
          },
        ],
        'success': true,
        'technicalMessage': '',
        'tfaProperties': undefined,
      },
    },
    {
      headers: {
        'set-cookie': [
          'cpssid_example.edu.au=9fc0aba3-5552-4afb-8b07-260d170e6b04; domain=.compass.education; path=/; secure; HttpOnly; SameSite=Lax',
          'ASP.NET_SessionId=9fc0aba3-5552-4afb-8b07-260d170e6b04; domain=.example.compass.education; path=/; secure; HttpOnly; SameSite=Lax',
        ],
      },
    }
  );

pool
  .intercept({
    path: '/services/admin.svc/AuthenticateUserCredentials',
    method: 'POST',
    body(body) {
      const data = JSON.parse(body);
      return data.username === 'john.doe';
    },
  })
  .reply(200, {
    d: {
      '2FAuthRequired': false,
      '__type': 'AuthenticationResult:http://jdlf.com.au/ns/data/mobile/',
      'friendlyMessage': 'Sorry - your username and/or password was incorrect.',
      'roles': undefined,
      'success': false,
      'technicalMessage':
        'Local password incorrect; LoginSecurity.Authenticate()',
      'tfaProperties': undefined,
    },
  });

pool
  .intercept({
    path: '/services/admin.svc/AuthenticateUserCredentials',
    method: 'POST',
  })
  .reply(200, {
    d: {
      '2FAuthRequired': false,
      '__type': 'AuthenticationResult:http://jdlf.com.au/ns/data/mobile/',
      'friendlyMessage': 'Sorry - your username and/or password was incorrect.',
      'roles': undefined,
      'success': false,
      'technicalMessage': 'Invalid SussiId',
      'tfaProperties': undefined,
    },
  });

pool
  .intercept({
    path: '/Services/User.svc/GetUserDetailsBlobByUserId',
    method: 'POST',
    body(body) {
      const data = JSON.parse(body);
      return data.id === 123;
    },
  })
  .reply(200, {
    d: {
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
    },
  });

pool
  .intercept({
    path: '/Services/User.svc/GetUserDetailsBlobByUserId',
    method: 'POST',
    body(body) {
      const data = JSON.parse(body);
      return data.id === 456;
    },
  })
  .reply(200, {
    d: {
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
    },
  });

pool
  .intercept({
    path: '/Services/User.svc/GetUserDetailsBlobByUserId',
    method: 'POST',
  })
  .reply(500);
