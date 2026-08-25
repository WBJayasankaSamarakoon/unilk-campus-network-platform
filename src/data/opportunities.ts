export interface Opportunity {
  id: string;
  role: string;
  organization: string;
  type: 'Internship' | 'Job' | 'Scholarship' | 'Hackathon' | 'Competition' | 'Research' | 'Workshop';
  location: string;
  mode: 'On-site' | 'Hybrid' | 'Remote';
  deadline: string;
  daysLeft: number;
  relevance: string;
  posted: string;
  compensation?: string;
}

export const opportunityTypes = [
'All',
'Internship',
'Job',
'Scholarship',
'Hackathon',
'Competition',
'Research',
'Workshop'] as
const;

export const opportunities: Opportunity[] = [
{
  id: 'o1',
  role: 'Software Engineering Intern',
  organization: '99x',
  type: 'Internship',
  location: 'Colombo 03',
  mode: 'Hybrid',
  deadline: '5 September 2026',
  daysLeft: 3,
  relevance: 'Matches your course · Year 3 Computing',
  posted: 'Posted by Career Guidance Unit · 1 day ago',
  compensation: 'LKR 45,000 / month'
},
{
  id: 'o2',
  role: 'Mahapola Merit Scholarship — 2026 intake',
  organization: 'Ministry of Higher Education',
  type: 'Scholarship',
  location: 'Nationwide',
  mode: 'On-site',
  deadline: '12 September 2026',
  daysLeft: 10,
  relevance: 'Open to all SUSL undergraduates',
  posted: 'Posted by Sabaragamuwa University · 3 days ago'
},
{
  id: 'o3',
  role: 'CodeSprint 6.0 National Hackathon',
  organization: 'IEEE Sri Lanka Section',
  type: 'Hackathon',
  location: 'Colombo',
  mode: 'On-site',
  deadline: '20 September 2026',
  daysLeft: 18,
  relevance: 'Recommended — you follow IEEE Student Branch',
  posted: 'Posted by IEEE Student Branch · 2 days ago'
},
{
  id: 'o4',
  role: 'Associate QA Engineer',
  organization: 'Sysco LABS',
  type: 'Job',
  location: 'Colombo 02',
  mode: 'Hybrid',
  deadline: '30 September 2026',
  daysLeft: 28,
  relevance: 'For final-year and graduating students',
  posted: 'Posted by Career Guidance Unit · 4 days ago',
  compensation: 'Negotiable'
},
{
  id: 'o5',
  role: 'Undergraduate Research Assistant — HCI Lab',
  organization: 'Faculty of Computing, SUSL',
  type: 'Research',
  location: 'Belihuloya',
  mode: 'On-site',
  deadline: '8 September 2026',
  daysLeft: 6,
  relevance: 'Matches your interest in Technology',
  posted: 'Posted by Faculty of Computing · 5 hours ago',
  compensation: 'Stipend + co-authorship'
},
{
  id: 'o6',
  role: 'Cloud Fundamentals Certification Workshop',
  organization: 'Dialog Axiata',
  type: 'Workshop',
  location: 'Online',
  mode: 'Remote',
  deadline: '1 September 2026',
  daysLeft: 8,
  relevance: 'Free for verified university students',
  posted: 'Posted by Career Guidance Unit · 1 week ago'
}];