export const workspaceOverview = [
{ label: 'Active students', value: '3,186', delta: '+184 this month', hint: '38% of enrolment' },
{ label: 'Announcements', value: '42', delta: '9 this week', hint: 'Published officially' },
{ label: 'Upcoming events', value: '18', delta: '5 need approval', hint: 'Next 30 days' },
{ label: 'Engagement', value: '61%', delta: '+4 pts', hint: 'Weekly active students' }];


export interface AttentionItem {
  id: string;
  count: number;
  title: string;
  detail: string;
  action: string;
  tone: 'brand' | 'cyan' | 'warning' | 'danger';
}

export const needsAttention: AttentionItem[] = [
{
  id: 'a1',
  count: 12,
  title: 'Student verification requests',
  detail: 'Waiting on ID review — oldest is 3 days old',
  action: 'Review requests',
  tone: 'brand'
},
{
  id: 'a2',
  count: 4,
  title: 'Event approvals',
  detail: 'Submitted by Computing Society, Rotaract and two faculties',
  action: 'Approve events',
  tone: 'cyan'
},
{
  id: 'a3',
  count: 3,
  title: 'Reported posts',
  detail: 'One flagged as high severity in SE 2026 Batch',
  action: 'Open moderation',
  tone: 'danger'
},
{
  id: 'a4',
  count: 2,
  title: 'Organization requests',
  detail: 'Drama Circle and Chess Club applying for verified profiles',
  action: 'Review organizations',
  tone: 'warning'
}];


export const workspaceTeam = [
{ name: 'Buddhika Senanayake', role: 'Institution owner', scope: 'Whole institution', status: 'Active' },
{ name: 'Dr. N. Wickramasinghe', role: 'Faculty admin', scope: 'Faculty of Computing', status: 'Active' },
{ name: 'S. Kumari', role: 'Event manager', scope: 'Whole institution', status: 'Active' },
{ name: 'Student Affairs Office', role: 'Institution admin', scope: 'Whole institution', status: 'Active' },
{ name: 'H. Perera', role: 'Resource manager', scope: 'Computing · Year 2–4', status: 'Invited' }];


export const academicStructure = [
{
  faculty: 'Faculty of Computing',
  departments: ['Computing & Information Systems', 'Software Engineering', 'Data Science'],
  programs: 5,
  batches: 4,
  students: 1240
},
{
  faculty: 'Faculty of Applied Sciences',
  departments: ['Physical Sciences', 'Natural Resources', 'Biosystems'],
  programs: 7,
  batches: 4,
  students: 1810
},
{
  faculty: 'Faculty of Management Studies',
  departments: ['Accountancy & Finance', 'Marketing', 'Tourism Management'],
  programs: 6,
  batches: 4,
  students: 2130
}];


export const auditLog = [
{
  id: 'l1',
  actor: 'Buddhika Senanayake',
  role: 'Institution owner',
  action: 'Updated permissions',
  target: 'Role · Faculty admin',
  change: 'Added approve_event',
  time: '12 minutes ago',
  device: 'Chrome · Colombo'
},
{
  id: 'l2',
  actor: 'Student Affairs Office',
  role: 'Institution admin',
  action: 'Approved organization',
  target: 'IEEE Student Branch',
  change: 'Status: pending → verified',
  time: '1 hour ago',
  device: 'Chrome · Belihuloya'
},
{
  id: 'l3',
  actor: 'S. Kumari',
  role: 'Event manager',
  action: 'Published event',
  target: 'Inter-Faculty Hackathon 2026',
  change: 'Visible to whole institution',
  time: '3 hours ago',
  device: 'Mobile · Kandy'
},
{
  id: 'l4',
  actor: 'Platform moderator',
  role: 'Moderator',
  action: 'Removed content',
  target: 'Post in SE 2026 Batch',
  change: 'Reason: harassment',
  time: 'Yesterday',
  device: 'Chrome · Colombo'
},
{
  id: 'l5',
  actor: 'Dr. N. Wickramasinghe',
  role: 'Faculty admin',
  action: 'Verified students',
  target: '18 accounts · Faculty of Computing',
  change: 'Level 1 → Level 2',
  time: 'Yesterday',
  device: 'Chrome · Belihuloya'
}];


export const institutionTypes = [
{ id: 'university', label: 'University', detail: 'State or private, with faculties and departments' },
{ id: 'school', label: 'School', detail: 'Grades, classes and sections' },
{ id: 'college', label: 'College', detail: 'Higher-secondary or affiliated college' },
{ id: 'institute', label: 'Institute', detail: 'Technical, vocational or professional institute' },
{ id: 'training', label: 'Training centre', detail: 'Short courses and certifications' },
{ id: 'organization', label: 'Educational organization', detail: 'Networks, boards and trusts' }];