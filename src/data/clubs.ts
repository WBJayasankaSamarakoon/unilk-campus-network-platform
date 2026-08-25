import type { Club } from '../types/campus';

export const clubs: Club[] = [
{
  id: 'ieee',
  name: 'IEEE Student Branch',
  shortName: 'IEEE',
  category: 'Technology',
  faculty: 'Faculty of Computing',
  followers: 2450,
  about:
  'The IEEE Student Branch of Sabaragamuwa University runs technical workshops, competitions and industry sessions for students across all faculties.',
  verified: true,
  following: true,
  upcoming: 'Web Development Workshop · 29 Aug',
  cover: "/cc46a7b5-aa40-4ff5-b1e9-15b33fbf4b4b.jpg"

},
{
  id: 'computing-society',
  name: 'Computing Society',
  shortName: 'CS',
  category: 'Technology',
  faculty: 'Faculty of Computing',
  followers: 1870,
  about: 'Student-run society organising the annual SUSL Hackathon, coding nights and mentoring.',
  verified: true,
  following: true,
  upcoming: 'SUSL Hackathon 2026 · 30 Aug'
},
{
  id: 'rotaract',
  name: 'Rotaract Club of SUSL',
  shortName: 'RC',
  category: 'Community service',
  faculty: 'University-wide',
  followers: 1620,
  about: 'Community service projects, blood donation camps and leadership development.',
  verified: true,
  following: false,
  upcoming: 'Monthly Meeting · 26 Aug'
},
{
  id: 'aiesec',
  name: 'AIESEC in SUSL',
  shortName: 'AI',
  category: 'Leadership',
  faculty: 'University-wide',
  followers: 940,
  about: 'Global exchange programmes, leadership experiences and internships abroad.',
  verified: true,
  following: false,
  upcoming: null
},
{
  id: 'drama',
  name: 'Drama & Arts Society',
  shortName: 'DA',
  category: 'Cultural',
  faculty: 'Social Sciences & Languages',
  followers: 780,
  about: 'Stage productions, poetry evenings and the annual inter-faculty drama festival.',
  verified: true,
  following: false,
  upcoming: 'Auditions · 2 Sep'
},
{
  id: 'cricket',
  name: 'University Cricket Team',
  shortName: 'CT',
  category: 'Sports',
  faculty: 'Sports Council',
  followers: 3120,
  about: 'Official men’s and women’s cricket teams representing SUSL at inter-university level.',
  verified: true,
  following: true,
  upcoming: 'SUSL vs UOC · 25 Aug'
},
{
  id: 'entrepreneur',
  name: 'Entrepreneurship Club',
  shortName: 'EC',
  category: 'Business',
  faculty: 'Management Studies',
  followers: 610,
  about: 'Startup clinics, pitch nights and founder talks for students building businesses.',
  verified: false,
  following: false,
  upcoming: null
},
{
  id: 'music',
  name: 'Music Circle',
  shortName: 'MC',
  category: 'Cultural',
  faculty: 'University-wide',
  followers: 1240,
  about: 'Choir, band practice and the annual musical night held every November.',
  verified: true,
  following: false,
  upcoming: null
}];