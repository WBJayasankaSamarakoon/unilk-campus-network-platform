import type { NotificationItem } from '../types/campus';

export const notifications: NotificationItem[] = [
{
  id: 'n1',
  category: 'announcement',
  title: 'Semester 5 examination timetable released',
  body: 'Sabaragamuwa University published an official announcement for all students.',
  time: '2 hours ago',
  unread: true,
  priority: 'high'
},
{
  id: 'n2',
  category: 'opportunity',
  title: 'Internship applications close in 3 days',
  body: 'Software Engineering Internship at 99x — Career Guidance Unit.',
  time: '4 hours ago',
  unread: true,
  priority: 'high'
},
{
  id: 'n3',
  category: 'sports',
  title: 'SUSL vs UOC starts tomorrow at 2:00 PM',
  body: 'You marked yourself as going. Buses leave Belihuloya at 12:30 PM.',
  time: '5 hours ago',
  unread: true
},
{
  id: 'n4',
  category: 'student',
  title: '12 new posts in Software Engineering 2026',
  body: 'Including a lecture hall change confirmed by your batch representative.',
  time: '6 hours ago',
  unread: true
},
{
  id: 'n5',
  category: 'event',
  title: 'Registration open: Web Development Workshop',
  body: 'IEEE Student Branch · 40 seats · closes Friday 6:00 PM.',
  time: '9 hours ago',
  unread: false
},
{
  id: 'n6',
  category: 'resource',
  title: 'New notes in Machine Learning (CS3202)',
  body: 'Faculty of Computing uploaded 14 files to the resource hub.',
  time: '2 days ago',
  unread: false
},
{
  id: 'n7',
  category: 'club',
  title: 'Computing Society posted an update',
  body: 'Hackathon team registration is now open.',
  time: '3 days ago',
  unread: false
}];


export const notificationSettings = [
{ id: 'important', label: 'Important announcements', detail: 'Official institution notices', on: true, locked: true },
{ id: 'academic', label: 'Academic', detail: 'Exams, timetables, resources', on: true, locked: false },
{ id: 'events', label: 'Events', detail: 'Reminders for events you saved', on: true, locked: false },
{ id: 'community', label: 'Community', detail: 'Posts in communities you joined', on: true, locked: false },
{ id: 'sports', label: 'Sports', detail: 'Fixtures and results', on: false, locked: false },
{ id: 'opportunities', label: 'Opportunities', detail: 'Internships, scholarships, competitions', on: true, locked: false },
{ id: 'social', label: 'Social', detail: 'Reactions and replies to your posts', on: false, locked: false }];