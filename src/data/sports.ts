export interface Match {
  id: string;
  sport: string;
  home: string;
  homeShort: string;
  away: string;
  awayShort: string;
  date: string;
  time: string;
  venue: string;
  status: 'Upcoming' | 'Live' | 'Result';
  homeScore?: string;
  awayScore?: string;
  summary?: string;
  tournament: string;
}

export const sportCategories = [
'All',
'Cricket',
'Football',
'Rugby',
'Volleyball',
'Basketball',
'Athletics',
'Badminton',
'Esports'];


export const matches: Match[] = [
{
  id: 'm1',
  sport: 'Cricket',
  home: 'Sabaragamuwa University',
  homeShort: 'SUSL',
  away: 'University of Colombo',
  awayShort: 'UOC',
  date: '25 Aug 2026',
  time: '2:00 PM',
  venue: 'University Grounds, Belihuloya',
  status: 'Upcoming',
  tournament: 'Inter-University Championship'
},
{
  id: 'm2',
  sport: 'Volleyball',
  home: 'Sabaragamuwa University',
  homeShort: 'SUSL',
  away: 'Wayamba University',
  awayShort: 'WUSL',
  date: '27 Aug 2026',
  time: '4:30 PM',
  venue: 'Indoor Stadium',
  status: 'Upcoming',
  tournament: 'Inter-University Volleyball League'
},
{
  id: 'm3',
  sport: 'Rugby',
  home: 'Sabaragamuwa University',
  homeShort: 'SUSL',
  away: 'University of Peradeniya',
  awayShort: 'UOP',
  date: '18 Aug 2026',
  time: '3:00 PM',
  venue: 'Peradeniya Grounds',
  status: 'Result',
  homeScore: '24',
  awayScore: '17',
  summary: 'SUSL won by 7 points',
  tournament: 'Inter-University Rugby Cup'
},
{
  id: 'm4',
  sport: 'Football',
  home: 'University of Moratuwa',
  homeShort: 'UOM',
  away: 'Sabaragamuwa University',
  awayShort: 'SUSL',
  date: '14 Aug 2026',
  time: '4:00 PM',
  venue: 'Moratuwa Stadium',
  status: 'Result',
  homeScore: '2',
  awayScore: '2',
  summary: 'Draw — SUSL qualifies on goal difference',
  tournament: 'Inter-University Football League'
},
{
  id: 'm5',
  sport: 'Basketball',
  home: 'Sabaragamuwa University',
  homeShort: 'SUSL',
  away: 'Uva Wellassa University',
  awayShort: 'UWU',
  date: '31 Aug 2026',
  time: '5:00 PM',
  venue: 'Indoor Stadium',
  status: 'Upcoming',
  tournament: 'Inter-University Basketball'
}];


export const pointsTable = [
{ team: 'University of Colombo', played: 6, won: 5, lost: 1, points: 10 },
{ team: 'Sabaragamuwa University', played: 6, won: 4, lost: 2, points: 8 },
{ team: 'University of Peradeniya', played: 6, won: 3, lost: 3, points: 6 },
{ team: 'University of Moratuwa', played: 6, won: 2, lost: 4, points: 4 },
{ team: 'Wayamba University', played: 6, won: 1, lost: 5, points: 2 }];


export const teams = [
{ id: 't1', name: 'Men’s Cricket', players: 18, coach: 'S. Ranasinghe', sport: 'Cricket' },
{ id: 't2', name: 'Women’s Netball', players: 14, coach: 'D. Wickramasinghe', sport: 'Netball' },
{ id: 't3', name: 'Men’s Rugby', players: 26, coach: 'A. Kodithuwakku', sport: 'Rugby' },
{ id: 't4', name: 'Athletics Squad', players: 32, coach: 'P. Bandara', sport: 'Athletics' }];