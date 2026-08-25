const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const TODAY = new Date('2026-08-24T09:00:00');

function parse(iso: string): Date {
  return new Date(`${iso}T00:00:00`);
}

export function dayNumber(iso: string): string {
  return String(parse(iso).getDate());
}

export function monthShort(iso: string): string {
  return MONTHS[parse(iso).getMonth()];
}

export function weekdayShort(iso: string): string {
  return DAYS[parse(iso).getDay()];
}

export function relativeDay(iso: string): string {
  const target = parse(iso);
  const base = new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate());
  const diff = Math.round((target.getTime() - base.getTime()) / 86400000);
  if (diff === 0) return 'Today';
  if (diff === 1) return 'Tomorrow';
  if (diff > 1 && diff < 7) return `In ${diff} days`;
  return `${weekdayShort(iso)} ${dayNumber(iso)} ${monthShort(iso)}`;
}

export function longDate(iso: string): string {
  const date = parse(iso);
  return `${DAYS[date.getDay()]}, ${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
}