import React from 'react';
import { categoryMeta } from '../utils/categories';
import { TODAY } from '../utils/date';
import type { CampusEvent } from '../types/campus';

interface MonthCalendarProps {
  events: CampusEvent[];
  selected: string | null;
  onSelect: (iso: string | null) => void;
}

const WEEKDAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

export function MonthCalendar({ events, selected, onSelect }: MonthCalendarProps) {
  const year = TODAY.getFullYear();
  const month = TODAY.getMonth();
  const firstDay = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const leading = (firstDay.getDay() + 6) % 7;

  const cells: (number | null)[] = [
  ...Array.from({ length: leading }, () => null),
  ...Array.from({ length: daysInMonth }, (_, index) => index + 1)];


  const iso = (day: number) =>
  `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

  return (
    <div>
      <div className="flex items-baseline justify-between">
        <h2 className="text-sm font-semibold text-ink">
          {firstDay.toLocaleString('en-GB', { month: 'long' })} {year}
        </h2>
        {selected &&
        <button
          type="button"
          onClick={() => onSelect(null)}
          className="text-xs font-medium text-brand hover:underline">
          
            Clear date
          </button>
        }
      </div>

      <div className="mt-3 grid grid-cols-7 gap-1 text-center text-[11px] font-medium text-muted">
        {WEEKDAYS.map((day, index) =>
        <span key={`${day}-${index}`}>{day}</span>
        )}
      </div>

      <div className="mt-1 grid grid-cols-7 gap-1">
        {cells.map((day, index) => {
          if (day === null) return <span key={`empty-${index}`} />;
          const date = iso(day);
          const dayEvents = events.filter((event) => event.date === date);
          const isToday = day === TODAY.getDate();
          const isSelected = selected === date;
          return (
            <button
              key={date}
              type="button"
              disabled={dayEvents.length === 0}
              onClick={() => onSelect(isSelected ? null : date)}
              aria-pressed={isSelected}
              className={`flex h-9 flex-col items-center justify-center rounded-lg text-xs transition-colors duration-150 ease-out ${
              isSelected ?
              'bg-brand font-semibold text-white' :
              isToday ?
              'bg-brand-soft font-semibold text-brand' :
              dayEvents.length ?
              'font-medium text-ink hover:bg-canvas' :
              'text-muted/60'}`
              }>
              
              {day}
              <span className="mt-0.5 flex h-1 gap-0.5">
                {dayEvents.slice(0, 3).map((event) =>
                <span
                  key={event.id}
                  className={`h-1 w-1 rounded-full ${
                  isSelected ? 'bg-white' : categoryMeta[event.category].accent}`
                  }
                  aria-hidden="true" />

                )}
              </span>
            </button>);

        })}
      </div>
    </div>);

}