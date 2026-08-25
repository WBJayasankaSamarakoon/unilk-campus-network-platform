import type { FeedPost } from '../types/campus';
import { authors } from './authors';

export const feedPosts: FeedPost[] = [
{
  id: 'p1',
  author: authors.susl,
  category: 'announcement',
  title: 'Semester 5 examination timetable released',
  body: 'The examination timetable for Semester 5 (2025/2026) is now published for all faculties. Examinations begin on 8 September at the main examination hall. Students must settle outstanding payments before 4:00 PM on 29 August to be eligible.',
  postedAt: '2 hours ago',
  audience: 'All students · SUSL',
  pinned: true,
  attachment: {
    kind: 'document',
    label: 'Semester_5_Timetable_2026.pdf',
    meta: 'PDF · 412 KB · Official'
  },
  reactions: 1284,
  comments: 96
},
{
  id: 'p2',
  author: authors.sports,
  category: 'sports',
  title: 'Inter-University Cricket: SUSL vs UOC',
  body: 'Our men’s cricket team faces University of Colombo tomorrow at the University Grounds. Buses leave the Belihuloya premises at 12:30 PM. Come in university colours and support the team.',
  postedAt: '5 hours ago',
  audience: 'SUSL · Sports',
  attachment: {
    kind: 'image',
    label: 'Match preview',
    url: "/48b6d72d-dff0-41c4-a02e-28df0b43faf6.jpg"
  },
  reactions: 642,
  comments: 41
},
{
  id: 'p3',
  author: authors.rep,
  category: 'student',
  title: undefined,
  body: 'Reminder for SE 2026 — tomorrow’s Distributed Systems lecture moves to Lab 04 (not the usual hall). Dr. Fernando confirmed this morning.',
  postedAt: '6 hours ago',
  audience: 'SE 2026 Batch community',
  reactions: 188,
  comments: 23
},
{
  id: 'p4',
  author: authors.ieee,
  category: 'event',
  title: 'Web Development Workshop — Saturday',
  body: 'A hands-on session on building and deploying modern web apps. Open to all faculties, no prior experience required. 40 seats, registration closes Friday 6:00 PM.',
  postedAt: '9 hours ago',
  audience: 'Followers · Faculty of Computing',
  attachment: {
    kind: 'image',
    label: 'Workshop',
    url: "/b40a0418-e358-44ad-b628-027390af307e.jpg"
  },
  reactions: 431,
  comments: 58
},
{
  id: 'p5',
  author: authors.career,
  category: 'opportunity',
  title: 'Software Engineering Internship — 99x (Colombo)',
  body: 'Six-month internship intake for Year 3 Computing students. Applications close 5 September. Shortlisted candidates will be contacted through the Career Guidance Unit.',
  postedAt: '1 day ago',
  audience: 'Computing · Year 3',
  attachment: {
    kind: 'link',
    label: 'Apply via careers.susl.ac.lk',
    meta: 'Official source'
  },
  reactions: 512,
  comments: 34
},
{
  id: 'p6',
  author: authors.student1,
  category: 'student',
  body: 'Does anyone have the 2024 Database Systems past paper? The library copy is missing the second section.',
  postedAt: '1 day ago',
  audience: 'Computing community',
  reactions: 74,
  comments: 17
},
{
  id: 'p7',
  author: authors.computing,
  category: 'resource',
  title: 'Lecture notes uploaded: Machine Learning (CS3202)',
  body: 'Weeks 1–6 lecture slides and lab sheets are now available in the Computing resource hub. Uploaded by the department, free to use for enrolled students.',
  postedAt: '2 days ago',
  audience: 'Computing · Year 3',
  attachment: {
    kind: 'document',
    label: 'CS3202_Weeks_1-6.zip',
    meta: '14 files · Institution provided'
  },
  reactions: 356,
  comments: 12
},
{
  id: 'p8',
  author: authors.student2,
  category: 'student',
  body: 'Poll for the 2027 batch — what time works best for the study group before the statistics quiz?',
  postedAt: '2 days ago',
  audience: 'Data Science 2027',
  attachment: {
    kind: 'poll',
    label: 'Study group timing',
    options: [
    { label: 'Weekdays 6–8 PM', votes: 84 },
    { label: 'Saturday morning', votes: 121 },
    { label: 'Sunday evening', votes: 37 }]

  },
  reactions: 96,
  comments: 28
}];


export const nationalPosts: FeedPost[] = [
{
  id: 'n1',
  author: authors.mohe,
  category: 'opportunity',
  title: 'Mahapola Merit Scholarship 2026 — applications open',
  body: 'Undergraduates across all state universities can now apply for the 2026 Mahapola merit scholarship cycle. Applications are submitted through your own institution’s student affairs division before 12 September.',
  postedAt: '4 hours ago',
  audience: 'All state universities',
  scope: 'national',
  institution: 'Ministry of Higher Education',
  attachment: {
    kind: 'link',
    label: 'Guidelines on mohe.gov.lk',
    meta: 'Official source'
  },
  reactions: 4820,
  comments: 312
},
{
  id: 'n2',
  author: authors.ieeeLK,
  category: 'event',
  title: 'CodeSprint 6.0 — national hackathon, registrations open',
  body: 'Teams of four from any Sri Lankan university or institute can enter. Regional rounds run in Colombo, Kandy and Matara before the national final in October.',
  postedAt: '1 day ago',
  audience: 'Students across Sri Lanka',
  scope: 'national',
  institution: 'IEEE Sri Lanka Section',
  attachment: {
    kind: 'image',
    label: 'Hackathon',
    url: "/d568eec0-3f7f-4602-b3df-95ef7fc8226b.jpg"
  },
  reactions: 2140,
  comments: 186
},
{
  id: 'n3',
  author: authors.uom,
  category: 'sports',
  title: 'Inter-University Games: Moratuwa tops the medal table',
  body: 'Day three results are in. Moratuwa leads with 14 golds, Peradeniya second on 11, Colombo third on 9. Athletics finals continue tomorrow at Sugathadasa Stadium.',
  postedAt: '1 day ago',
  audience: 'Inter-university sports',
  scope: 'national',
  institution: 'University of Moratuwa',
  reactions: 1760,
  comments: 143
},
{
  id: 'n4',
  author: authors.ieeeLK,
  category: 'announcement',
  title: 'National Undergraduate Research Symposium — call for papers',
  body: 'Abstract submissions are open to final-year undergraduates from every participating institution. Accepted papers are presented in Colombo in November.',
  postedAt: '3 days ago',
  audience: 'Final-year undergraduates',
  scope: 'national',
  institution: 'IEEE Sri Lanka Section',
  reactions: 640,
  comments: 47
}];


export const feedFilters = [
'For you',
'Announcements',
'Events',
'My batch',
'Sports',
'Opportunities'] as
const;