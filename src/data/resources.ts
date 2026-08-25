export interface Resource {
  id: string;
  title: string;
  type: 'Past paper' | 'Lecture notes' | 'Tutorial' | 'Lab sheet' | 'Book' | 'Research paper';
  fileType: 'PDF' | 'DOCX' | 'ZIP' | 'PPTX';
  subject: string;
  course: string;
  year: string;
  size: string;
  uploadedBy: string;
  official: boolean;
  downloads: number;
}

export const resourceBreadcrumb = [
'Sabaragamuwa University',
'Faculty of Computing',
'Software Engineering',
'Year 3'];


export const resourceSubjects = [
{ name: 'Database Systems', code: 'CS3101', count: 14 },
{ name: 'Machine Learning', code: 'CS3202', count: 18 },
{ name: 'Software Architecture', code: 'SE3103', count: 11 },
{ name: 'Distributed Systems', code: 'SE3204', count: 9 },
{ name: 'Human–Computer Interaction', code: 'CS3305', count: 7 }];


export const resourceTypes = [
'All',
'Past paper',
'Lecture notes',
'Tutorial',
'Lab sheet',
'Book',
'Research paper'] as
const;

export const resources: Resource[] = [
{
  id: 'res1',
  title: 'Database Systems — Final Examination 2025',
  type: 'Past paper',
  fileType: 'PDF',
  subject: 'Database Systems',
  course: 'CS3101',
  year: '2025',
  size: '1.2 MB',
  uploadedBy: 'Faculty of Computing',
  official: true,
  downloads: 1840
},
{
  id: 'res2',
  title: 'Database Systems — Final Examination 2024',
  type: 'Past paper',
  fileType: 'PDF',
  subject: 'Database Systems',
  course: 'CS3101',
  year: '2024',
  size: '980 KB',
  uploadedBy: 'Faculty of Computing',
  official: true,
  downloads: 2410
},
{
  id: 'res3',
  title: 'Machine Learning — Weeks 1 to 6 slides',
  type: 'Lecture notes',
  fileType: 'ZIP',
  subject: 'Machine Learning',
  course: 'CS3202',
  year: '2026',
  size: '32 MB',
  uploadedBy: 'Dr. A. Gunasekara',
  official: true,
  downloads: 764
},
{
  id: 'res4',
  title: 'Normalisation worked examples (student notes)',
  type: 'Tutorial',
  fileType: 'PDF',
  subject: 'Database Systems',
  course: 'CS3101',
  year: '2026',
  size: '640 KB',
  uploadedBy: 'Nimesha Rathnayake',
  official: false,
  downloads: 512
},
{
  id: 'res5',
  title: 'Lab 04 — Message queues with RabbitMQ',
  type: 'Lab sheet',
  fileType: 'PDF',
  subject: 'Distributed Systems',
  course: 'SE3204',
  year: '2026',
  size: '410 KB',
  uploadedBy: 'Department of Computing',
  official: true,
  downloads: 288
},
{
  id: 'res6',
  title: 'Architectural patterns summary sheet',
  type: 'Lecture notes',
  fileType: 'DOCX',
  subject: 'Software Architecture',
  course: 'SE3103',
  year: '2026',
  size: '220 KB',
  uploadedBy: 'Kavindu Perera',
  official: false,
  downloads: 903
},
{
  id: 'res7',
  title: 'Usability evaluation methods — open access reading',
  type: 'Research paper',
  fileType: 'PDF',
  subject: 'Human–Computer Interaction',
  course: 'CS3305',
  year: '2023',
  size: '2.4 MB',
  uploadedBy: 'Faculty of Computing',
  official: true,
  downloads: 176
},
{
  id: 'res8',
  title: 'Introduction to Statistical Learning (open textbook)',
  type: 'Book',
  fileType: 'PDF',
  subject: 'Machine Learning',
  course: 'CS3202',
  year: '2021',
  size: '18 MB',
  uploadedBy: 'Library — open access',
  official: true,
  downloads: 1320
}];