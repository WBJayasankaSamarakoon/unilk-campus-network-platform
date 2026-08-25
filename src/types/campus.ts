export type Category =
'announcement' |
'event' |
'sports' |
'club' |
'resource' |
'opportunity' |
'student';

export type VerificationLevel = 'official' | 'representative' | 'student';

export interface Author {
  id: string;
  name: string;
  handle: string;
  role: string;
  verification: VerificationLevel;
  color: string;
}

export interface PostAttachment {
  kind: 'image' | 'document' | 'link' | 'poll';
  label: string;
  meta?: string;
  url?: string;
  options?: {label: string;votes: number;}[];
}

export type FeedScope = 'campus' | 'national';

export interface FeedPost {
  id: string;
  author: Author;
  category: Category;
  title?: string;
  body: string;
  postedAt: string;
  audience: string;
  scope?: FeedScope;
  institution?: string;
  pinned?: boolean;
  attachment?: PostAttachment;
  reactions: number;
  comments: number;
  saved?: boolean;
}

export interface CampusEvent {
  id: string;
  title: string;
  organizer: string;
  organizerVerified: boolean;
  category: Category;
  categoryLabel: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  description: string;
  going: number;
  interested: number;
  capacity?: number;
  registrationDeadline?: string;
  cover?: string;
  registrationRequired: boolean;
}

export interface Community {
  id: string;
  name: string;
  scope: string;
  visibility: 'Public' | 'Institution only' | 'Faculty only' | 'Batch only';
  members: number;
  newPosts: number;
  description: string;
  joined: boolean;
}

export interface Discussion {
  id: string;
  author: Author;
  body: string;
  postedAt: string;
  replies: number;
  reactions: number;
  resolved?: boolean;
  poll?: {label: string;votes: number;}[];
}

export interface Club {
  id: string;
  name: string;
  shortName: string;
  category: string;
  faculty: string;
  followers: number;
  about: string;
  verified: boolean;
  following: boolean;
  upcoming: string | null;
  cover?: string;
}

export interface NotificationItem {
  id: string;
  category: Category;
  title: string;
  body: string;
  time: string;
  unread: boolean;
  priority?: 'high';
}

export interface ModerationReport {
  id: string;
  reason: string;
  content: string;
  reporter: string;
  target: string;
  submitted: string;
  severity: 'High' | 'Medium' | 'Low';
  status: 'Pending' | 'Reviewing';
}

export interface VerificationRequest {
  id: string;
  name: string;
  type: string;
  institution: string;
  evidence: string;
  submitted: string;
}