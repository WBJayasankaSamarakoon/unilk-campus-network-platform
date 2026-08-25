export interface InstitutionSummary {
  id: string;
  name: string;
  short: string;
  type: 'State university' | 'Private institute' | 'School';
  location: string;
  students: number;
  onPlatform: number;
  faculties: number;
  clubs: number;
  live: boolean;
  primary?: boolean;
}

export const institutions: InstitutionSummary[] = [
{
  id: 'susl',
  name: 'Sabaragamuwa University of Sri Lanka',
  short: 'SUSL',
  type: 'State university',
  location: 'Belihuloya',
  students: 8420,
  onPlatform: 3186,
  faculties: 6,
  clubs: 34,
  live: true,
  primary: true
},
{
  id: 'uoc',
  name: 'University of Colombo',
  short: 'UOC',
  type: 'State university',
  location: 'Colombo 03',
  students: 12400,
  onPlatform: 5240,
  faculties: 9,
  clubs: 61,
  live: true
},
{
  id: 'uom',
  name: 'University of Moratuwa',
  short: 'UOM',
  type: 'State university',
  location: 'Katubedda',
  students: 11200,
  onPlatform: 4712,
  faculties: 5,
  clubs: 48,
  live: true
},
{
  id: 'uop',
  name: 'University of Peradeniya',
  short: 'UOP',
  type: 'State university',
  location: 'Peradeniya',
  students: 13100,
  onPlatform: 4108,
  faculties: 9,
  clubs: 57,
  live: true
},
{
  id: 'ruh',
  name: 'University of Ruhuna',
  short: 'RUH',
  type: 'State university',
  location: 'Matara',
  students: 9600,
  onPlatform: 2140,
  faculties: 7,
  clubs: 29,
  live: true
},
{
  id: 'sliit',
  name: 'SLIIT',
  short: 'SLIIT',
  type: 'Private institute',
  location: 'Malabe',
  students: 14800,
  onPlatform: 3960,
  faculties: 4,
  clubs: 42,
  live: true
},
{
  id: 'nsbm',
  name: 'NSBM Green University',
  short: 'NSBM',
  type: 'Private institute',
  location: 'Homagama',
  students: 12000,
  onPlatform: 2480,
  faculties: 3,
  clubs: 31,
  live: true
},
{
  id: 'royal',
  name: 'Royal College Colombo',
  short: 'RC',
  type: 'School',
  location: 'Colombo 07',
  students: 8100,
  onPlatform: 0,
  faculties: 0,
  clubs: 0,
  live: false
},
{
  id: 'mahamaya',
  name: 'Mahamaya Girls’ College',
  short: 'MGC',
  type: 'School',
  location: 'Kandy',
  students: 4300,
  onPlatform: 0,
  faculties: 0,
  clubs: 0,
  live: false
}];


export const platformStats = [
{ label: 'Institutions live', value: '7' },
{ label: 'Verified students', value: '25,800+' },
{ label: 'Communities', value: '410' },
{ label: 'Events this month', value: '186' }];


export const roles = [
{
  id: 'student',
  name: 'Student',
  scope: 'Own institution',
  summary:
  'Reads a personalized feed, posts and comments, joins communities, follows organizations, saves resources and reports content.',
  permissions: ['view_content', 'create_post', 'comment', 'join_community', 'save_resource', 'report_content']
},
{
  id: 'representative',
  name: 'Student representative',
  scope: 'Batch · faculty · organization',
  summary:
  'A verified student who can publish approved content on behalf of a batch, faculty, department or student organization.',
  permissions: ['create_announcement', 'create_event', 'pin_post', 'moderate_community']
},
{
  id: 'organization',
  name: 'Club / society admin',
  scope: 'Own organization',
  summary:
  'Manages an organization profile, publishes posts and events, recruits members and shares achievements.',
  permissions: ['manage_organization', 'create_post', 'create_event', 'manage_members']
},
{
  id: 'teacher',
  name: 'Teacher / lecturer',
  scope: 'Own course · department',
  summary:
  'Publishes academic announcements, uploads course material and runs course communities and workshops.',
  permissions: ['create_announcement', 'manage_resources', 'create_community', 'create_event']
},
{
  id: 'department',
  name: 'Department administrator',
  scope: 'Own department',
  summary: 'Maintains department information, courses, subjects and department-level announcements.',
  permissions: ['manage_department', 'manage_courses', 'create_announcement']
},
{
  id: 'faculty',
  name: 'Faculty administrator',
  scope: 'Own faculty',
  summary:
  'Manages faculty announcements, events, communities and academic structure below the faculty.',
  permissions: ['manage_faculty', 'create_event', 'manage_communities', 'moderate_content']
},
{
  id: 'institution',
  name: 'Institution administrator',
  scope: 'Own institution only',
  summary:
  'Runs an entire institution workspace — official announcements, events, organization approvals, representatives and moderation.',
  permissions: [
  'manage_institution',
  'create_announcement',
  'approve_organization',
  'verify_users',
  'moderate_content',
  'view_analytics']

},
{
  id: 'moderator',
  name: 'Platform moderator',
  scope: 'Assigned institutions',
  summary:
  'Reviews reports, removes content, issues warnings, suspends accounts and handles disputes across assigned institutions.',
  permissions: ['review_reports', 'remove_content', 'warn_user', 'suspend_user']
},
{
  id: 'super',
  name: 'Super administrator',
  scope: 'Entire platform',
  summary:
  'Creates institutions, configures academic structures, assigns roles and permissions and manages platform settings.',
  permissions: ['manage_platform', 'manage_institutions', 'manage_roles', 'manage_permissions', 'view_analytics']
}];