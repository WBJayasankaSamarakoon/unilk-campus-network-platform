import type { Community, Discussion } from '../types/campus';
import { authors } from './authors';

export const communities: Community[] = [
{
  id: 'se-2026',
  name: 'Software Engineering 2026',
  scope: 'Batch · Computing',
  visibility: 'Batch only',
  members: 148,
  newPosts: 12,
  description:
  'Your batch community — lecture changes, group work, past papers and everything the 2026 SE batch needs.',
  joined: true
},
{
  id: 'computing',
  name: 'Faculty of Computing',
  scope: 'Faculty · SUSL',
  visibility: 'Faculty only',
  members: 892,
  newPosts: 6,
  description:
  'Faculty-wide announcements, academic discussions and resource sharing across all Computing departments.',
  joined: true
},
{
  id: 'susl-general',
  name: 'SUSL General',
  scope: 'Institution · SUSL',
  visibility: 'Institution only',
  members: 3186,
  newPosts: 24,
  description:
  'The main community for everyone at Sabaragamuwa University. Campus life, notices and open discussion.',
  joined: true
},
{
  id: 'hostel',
  name: 'Hostel & Accommodation',
  scope: 'Institution · SUSL',
  visibility: 'Institution only',
  members: 1104,
  newPosts: 9,
  description:
  'Room allocations, boarding recommendations around Belihuloya, and hostel notices.',
  joined: false
},
{
  id: 'sports',
  name: 'SUSL Sports',
  scope: 'Institution · SUSL',
  visibility: 'Public',
  members: 1470,
  newPosts: 15,
  description: 'Fixtures, results, trials and team announcements across all university sports.',
  joined: false
},
{
  id: 'ds-2027',
  name: 'Data Science 2027',
  scope: 'Batch · Computing',
  visibility: 'Batch only',
  members: 132,
  newPosts: 4,
  description: 'Batch community for the 2027 Data Science intake.',
  joined: false
}];


export const discussions: Discussion[] = [
{
  id: 'd1',
  author: authors.rep,
  body: 'Tomorrow’s Distributed Systems lecture moves to Lab 04. Dr. Fernando confirmed this morning — please pass it on to anyone who misses this.',
  postedAt: '6 hours ago',
  replies: 23,
  reactions: 188,
  resolved: true
},
{
  id: 'd2',
  author: authors.student1,
  body: 'Does anyone have the 2024 Database Systems past paper? The library copy is missing the second section.',
  postedAt: '1 day ago',
  replies: 17,
  reactions: 74
},
{
  id: 'd3',
  author: authors.student3,
  body: 'Group allocation for the Software Architecture project — three of us are still looking for a fourth member. Comment if interested.',
  postedAt: '1 day ago',
  replies: 31,
  reactions: 52
},
{
  id: 'd4',
  author: authors.student2,
  body: 'What time works best for the study group before the statistics quiz?',
  postedAt: '2 days ago',
  replies: 28,
  reactions: 96,
  poll: [
  { label: 'Weekdays 6–8 PM', votes: 84 },
  { label: 'Saturday morning', votes: 121 },
  { label: 'Sunday evening', votes: 37 }]

}];