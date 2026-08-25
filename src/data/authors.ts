import type { Author } from '../types/campus';

export const authors: Record<string, Author> = {
  susl: {
    id: 'susl',
    name: 'Sabaragamuwa University',
    handle: '@susl.official',
    role: 'Institution',
    verification: 'official',
    color: 'bg-brand'
  },
  computing: {
    id: 'computing',
    name: 'Faculty of Computing',
    handle: '@susl.computing',
    role: 'Faculty · SUSL',
    verification: 'official',
    color: 'bg-cat-resource-fg'
  },
  ieee: {
    id: 'ieee',
    name: 'IEEE Student Branch',
    handle: '@ieee.susl',
    role: 'Society · SUSL',
    verification: 'official',
    color: 'bg-cat-club-fg'
  },
  sports: {
    id: 'sports',
    name: 'SUSL Sports Council',
    handle: '@susl.sports',
    role: 'Sports body · SUSL',
    verification: 'official',
    color: 'bg-cat-sports-fg'
  },
  career: {
    id: 'career',
    name: 'Career Guidance Unit',
    handle: '@susl.careers',
    role: 'Department · SUSL',
    verification: 'official',
    color: 'bg-cat-opportunity-fg'
  },
  rep: {
    id: 'rep',
    name: 'Nimesha Rathnayake',
    handle: '@nimesha.r',
    role: 'Batch rep · SE 2026',
    verification: 'representative',
    color: 'bg-cat-announcement-fg'
  },
  student1: {
    id: 'student1',
    name: 'Kavindu Perera',
    handle: '@kavindu',
    role: 'Software Engineering · 2026',
    verification: 'student',
    color: 'bg-cat-student-fg'
  },
  student2: {
    id: 'student2',
    name: 'Hasini Wijesuriya',
    handle: '@hasini.w',
    role: 'Data Science · 2027',
    verification: 'student',
    color: 'bg-cat-student-fg'
  },
  ieeeLK: {
    id: 'ieeeLK',
    name: 'IEEE Sri Lanka Section',
    handle: '@ieee.lk',
    role: 'National organisation',
    verification: 'official',
    color: 'bg-cat-club-fg'
  },
  mohe: {
    id: 'mohe',
    name: 'Ministry of Higher Education',
    handle: '@mohe.gov.lk',
    role: 'Government · Sri Lanka',
    verification: 'official',
    color: 'bg-brand'
  },
  uom: {
    id: 'uom',
    name: 'University of Moratuwa',
    handle: '@uom.official',
    role: 'Institution',
    verification: 'official',
    color: 'brand-gradient'
  },
  student3: {
    id: 'student3',
    name: 'Tharindu Silva',
    handle: '@tharindu',
    role: 'Computing · 2025',
    verification: 'student',
    color: 'bg-cat-student-fg'
  }
};