export interface ScheduleItem {
  id: string;
  time: string;
  endTime: string;
  title: string;
  detail: string;
  kind: 'class' | 'event' | 'deadline' | 'exam';
  location: string;
  live?: boolean;
}

export const todaySchedule: ScheduleItem[] = [
{
  id: 's1',
  time: '08:30',
  endTime: '10:00',
  title: 'Software Architecture — Lecture',
  detail: 'Dr. N. Wickramasinghe · SE3201',
  kind: 'class',
  location: 'Computing Lecture Hall 2'
},
{
  id: 's2',
  time: '10:15',
  endTime: '12:15',
  title: 'Database Systems — Lab',
  detail: 'Lab sheet 06 · bring your laptop',
  kind: 'class',
  location: 'Computing Lab A',
  live: true
},
{
  id: 's3',
  time: '13:00',
  endTime: '14:30',
  title: 'Computing Society — Open Session',
  detail: 'Hackathon team formation',
  kind: 'event',
  location: 'Auditorium foyer'
},
{
  id: 's4',
  time: '17:00',
  endTime: '17:00',
  title: 'Group assignment submission',
  detail: 'Software Architecture · closes at 5:00 PM',
  kind: 'deadline',
  location: 'Online submission'
}];


export interface DeadlineItem {
  id: string;
  title: string;
  context: string;
  due: string;
  urgency: 'today' | 'soon' | 'later';
}

export const upcomingDeadlines: DeadlineItem[] = [
{
  id: 'd1',
  title: 'Software Architecture assignment',
  context: 'SE3201 · group submission',
  due: 'Today, 5:00 PM',
  urgency: 'today'
},
{
  id: 'd2',
  title: 'Dialog Innovation Challenge registration',
  context: 'National competition',
  due: 'Tomorrow',
  urgency: 'soon'
},
{
  id: 'd3',
  title: 'Mahapola scholarship application',
  context: 'Financial aid',
  due: 'In 5 days',
  urgency: 'later'
}];


export const dayHighlights = [
{
  id: 'h1',
  label: 'Campus updates',
  value: '3 new',
  detail: 'Exam timetable · hostel notice · library hours',
  to: '/feed'
},
{
  id: 'h2',
  label: 'Community activity',
  value: '12 replies',
  detail: 'SE 2026 Batch and Faculty of Computing',
  to: '/communities'
},
{
  id: 'h3',
  label: 'Opportunities',
  value: '4 new',
  detail: '2 match your course',
  to: '/opportunities'
}];