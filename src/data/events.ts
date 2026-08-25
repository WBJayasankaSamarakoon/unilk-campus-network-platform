import type { CampusEvent } from '../types/campus';

export const events: CampusEvent[] = [
{
  id: 'e1',
  title: 'Inter-University Cricket: SUSL vs UOC',
  organizer: 'SUSL Sports Council',
  organizerVerified: true,
  category: 'sports',
  categoryLabel: 'Sports',
  date: '2026-08-25',
  startTime: '2:00 PM',
  endTime: '6:30 PM',
  location: 'University Grounds, Belihuloya',
  description:
  'Group stage fixture of the Inter-University Cricket Championship. Free entry for all SUSL students with a valid ID.',
  going: 612,
  interested: 1140,
  registrationRequired: false,
  cover: "/48b6d72d-dff0-41c4-a02e-28df0b43faf6.jpg"

},
{
  id: 'e2',
  title: 'Web Development Workshop',
  organizer: 'IEEE Student Branch',
  organizerVerified: true,
  category: 'event',
  categoryLabel: 'Workshop',
  date: '2026-08-29',
  startTime: '10:00 AM',
  endTime: '3:00 PM',
  location: 'Computer Lab 02, Faculty of Computing',
  description:
  'Build and deploy a full-stack web application in a single day. Laptops required. Beginners welcome.',
  going: 88,
  interested: 214,
  capacity: 40,
  registrationDeadline: 'Friday 28 Aug, 6:00 PM',
  registrationRequired: true,
  cover: "/b40a0418-e358-44ad-b628-027390af307e.jpg"

},
{
  id: 'e3',
  title: 'SUSL Hackathon 2026 — Qualifiers',
  organizer: 'Computing Society',
  organizerVerified: true,
  category: 'event',
  categoryLabel: 'Hackathon',
  date: '2026-08-30',
  startTime: '8:00 AM',
  endTime: '11:59 PM',
  location: 'Main Auditorium',
  description:
  'Teams of four build a working prototype in 16 hours. Winners represent SUSL at the national finals in October.',
  going: 156,
  interested: 402,
  capacity: 120,
  registrationDeadline: 'Wednesday 26 Aug',
  registrationRequired: true,
  cover: "/d568eec0-3f7f-4602-b3df-95ef7fc8226b.jpg"

},
{
  id: 'e4',
  title: 'Rotaract Club Monthly Meeting',
  organizer: 'Rotaract Club of SUSL',
  organizerVerified: true,
  category: 'club',
  categoryLabel: 'Club',
  date: '2026-08-26',
  startTime: '5:00 PM',
  endTime: '6:30 PM',
  location: 'Lecture Hall 07',
  description:
  'Planning session for the September blood donation camp. Open to members and anyone interested in joining.',
  going: 42,
  interested: 97,
  registrationRequired: false
},
{
  id: 'e5',
  title: 'Career Fair: Tech & Engineering',
  organizer: 'Career Guidance Unit',
  organizerVerified: true,
  category: 'opportunity',
  categoryLabel: 'Career',
  date: '2026-09-03',
  startTime: '9:00 AM',
  endTime: '4:00 PM',
  location: 'Convocation Hall',
  description:
  'Eighteen companies recruiting for internships and graduate roles. Bring printed CVs. Final-year students prioritised.',
  going: 328,
  interested: 890,
  registrationDeadline: '1 September',
  registrationRequired: true
},
{
  id: 'e6',
  title: 'Annual Inter-Faculty Sports Meet',
  organizer: 'SUSL Sports Council',
  organizerVerified: true,
  category: 'sports',
  categoryLabel: 'Sports',
  date: '2026-08-28',
  startTime: '7:30 AM',
  endTime: '5:00 PM',
  location: 'University Stadium',
  description:
  'Track, field and team events across all six faculties. Faculty colours encouraged.',
  going: 740,
  interested: 1620,
  registrationRequired: false
},
{
  id: 'e7',
  title: 'Guest Lecture: Research Methods in HCI',
  organizer: 'Faculty of Computing',
  organizerVerified: true,
  category: 'resource',
  categoryLabel: 'Academic',
  date: '2026-09-01',
  startTime: '11:00 AM',
  endTime: '12:30 PM',
  location: 'Seminar Room, Computing',
  description:
  'Dr. Amali Gunasekara on planning and publishing user research. Recommended for Year 3 and Year 4 students.',
  going: 96,
  interested: 188,
  registrationRequired: false
}];


export const eventFilters = [
'All',
'Academic',
'Sports',
'Clubs',
'Career',
'Workshop'] as
const;