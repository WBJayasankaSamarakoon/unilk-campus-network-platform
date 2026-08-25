import type { ModerationReport, VerificationRequest } from '../types/campus';

export const adminMetrics = [
{ label: 'Weekly active students', value: '2,914', delta: '+8.4%', hint: 'North star metric' },
{ label: 'Verified students', value: '3,186', delta: '+142', hint: 'of 8,420 enrolled' },
{ label: 'Posts this week', value: '1,047', delta: '+12%', hint: '318 official' },
{ label: 'Events live', value: '23', delta: '+5', hint: '7 need approval' }];


export const engagementByFaculty = [
{ faculty: 'Computing', joined: 892, active: 741 },
{ faculty: 'Management Studies', joined: 771, active: 498 },
{ faculty: 'Applied Sciences', joined: 604, active: 402 },
{ faculty: 'Social Sciences', joined: 512, active: 296 },
{ faculty: 'Geomatics', joined: 241, active: 138 },
{ faculty: 'Medicine', joined: 166, active: 88 }];


export const reports: ModerationReport[] = [
{
  id: 'r1',
  reason: 'Copyright violation',
  content: 'Uploaded PDF “Database System Concepts 7th Edition” to Computing resources',
  reporter: 'Faculty of Computing',
  target: '@sanjula.k',
  submitted: '38 min ago',
  severity: 'High',
  status: 'Pending'
},
{
  id: 'r2',
  reason: 'Impersonation',
  content: 'Account claiming to be “SUSL Examination Division” without verification',
  reporter: '4 students',
  target: '@susl.exams.official',
  submitted: '2 hours ago',
  severity: 'High',
  status: 'Reviewing'
},
{
  id: 'r3',
  reason: 'Spam',
  content: '17 identical posts with an external betting link across 6 communities',
  reporter: 'Automated detection',
  target: '@quickwin2026',
  submitted: '3 hours ago',
  severity: 'Medium',
  status: 'Pending'
},
{
  id: 'r4',
  reason: 'Fake information',
  content: 'Post claiming semester exams are postponed by two weeks',
  reporter: '11 students',
  target: '@campusnews.lk',
  submitted: '5 hours ago',
  severity: 'High',
  status: 'Pending'
},
{
  id: 'r5',
  reason: 'Harassment',
  content: 'Repeated targeted comments on a student post in SUSL General',
  reporter: '@hasini.w',
  target: '@anon_2411',
  submitted: '1 day ago',
  severity: 'Medium',
  status: 'Reviewing'
}];


export const verificationRequests: VerificationRequest[] = [
{
  id: 'v1',
  name: 'Chemical Engineering Society',
  type: 'Society account',
  institution: 'Faculty of Applied Sciences',
  evidence: 'Signed letter from the Dean · constitution attached',
  submitted: '1 day ago'
},
{
  id: 'v2',
  name: 'Ishara Dissanayake',
  type: 'Batch representative',
  institution: 'Management Studies · 2027',
  evidence: 'Student union appointment letter',
  submitted: '2 days ago'
},
{
  id: 'v3',
  name: 'SUSL Media Unit',
  type: 'Official institution account',
  institution: 'Sabaragamuwa University',
  evidence: 'Verified from @susl.ac.lk domain email',
  submitted: '3 days ago'
}];


export interface AdminUser {
  id: string;
  name: string;
  handle: string;
  faculty: string;
  batch: string;
  role: 'Student' | 'Representative' | 'Organization admin' | 'Faculty admin';
  verification: 'Institution verified' | 'Email verified' | 'Pending';
  status: 'Active' | 'Suspended' | 'Restricted';
  lastActive: string;
}

export const adminUsers: AdminUser[] = [
{
  id: 'u1',
  name: 'Buddhika Senanayake',
  handle: '@buddhika',
  faculty: 'Computing',
  batch: '2026',
  role: 'Representative',
  verification: 'Institution verified',
  status: 'Active',
  lastActive: '2 min ago'
},
{
  id: 'u2',
  name: 'Nimesha Rathnayake',
  handle: '@nimesha.r',
  faculty: 'Computing',
  batch: '2026',
  role: 'Representative',
  verification: 'Institution verified',
  status: 'Active',
  lastActive: '18 min ago'
},
{
  id: 'u3',
  name: 'Sanjula Kumara',
  handle: '@sanjula.k',
  faculty: 'Applied Sciences',
  batch: '2025',
  role: 'Student',
  verification: 'Institution verified',
  status: 'Restricted',
  lastActive: '1 hour ago'
},
{
  id: 'u4',
  name: 'Ishara Dissanayake',
  handle: '@ishara.d',
  faculty: 'Management Studies',
  batch: '2027',
  role: 'Student',
  verification: 'Pending',
  status: 'Active',
  lastActive: '3 hours ago'
},
{
  id: 'u5',
  name: 'Anonymous account',
  handle: '@anon_2411',
  faculty: 'Unknown',
  batch: '—',
  role: 'Student',
  verification: 'Email verified',
  status: 'Suspended',
  lastActive: '1 day ago'
},
{
  id: 'u6',
  name: 'Hasini Wijesuriya',
  handle: '@hasini.w',
  faculty: 'Computing',
  batch: '2027',
  role: 'Student',
  verification: 'Institution verified',
  status: 'Active',
  lastActive: '5 hours ago'
}];


export const moderationLog = [
{ action: 'Content removed', target: '@fastcash.lk post in SUSL General', by: 'K. Jayasuriya', time: '22 min ago' },
{ action: 'Account suspended (7 days)', target: '@anon_2411', by: 'Auto-escalation → N. Perera', time: '3 hours ago' },
{ action: 'Verification approved', target: 'Rotaract Club of SUSL', by: 'Institution Admin', time: '6 hours ago' },
{ action: 'Warning issued', target: '@sanjula.k', by: 'K. Jayasuriya', time: '1 day ago' }];