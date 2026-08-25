import React, { useState } from 'react';
import { BellIcon, MapPinIcon } from 'lucide-react';
import { matches, pointsTable, sportCategories, teams } from '../data/sports';
import type { Match } from '../data/sports';

function MatchCard({ match }: {match: Match;}) {
  const isResult = match.status === 'Result';
  return (
    <article className="rounded-2xl border border-line bg-surface p-4 shadow-card">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium text-muted">
          {match.sport} · {match.tournament}
        </p>
        <span
          className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${
          isResult ? 'bg-elevated text-muted' : 'bg-cat-sports-bg text-cat-sports-fg'}`
          }>
          
          {match.status}
        </span>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <div className="flex min-w-0 flex-1 items-center gap-2.5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-elevated font-display text-[11px] font-bold text-ink ring-1 ring-line">
            {match.homeShort}
          </span>
          <span className="min-w-0 truncate text-sm font-semibold text-ink">{match.home}</span>
        </div>

        {isResult ?
        <span className="shrink-0 font-display text-xl font-extrabold tracking-tight text-ink">
            {match.homeScore} – {match.awayScore}
          </span> :

        <span className="shrink-0 text-xs font-semibold uppercase tracking-wide text-muted">
            vs
          </span>
        }

        <div className="flex min-w-0 flex-1 items-center justify-end gap-2.5 text-right">
          <span className="min-w-0 truncate text-sm font-semibold text-ink">{match.away}</span>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-elevated font-display text-[11px] font-bold text-ink">
            {match.awayShort}
          </span>
        </div>
      </div>

      <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-line pt-3 text-xs text-muted">
        <span>
          {match.date} · {match.time}
        </span>
        <span className="flex items-center gap-1">
          <MapPinIcon className="h-3.5 w-3.5" aria-hidden="true" />
          {match.venue}
        </span>
        {match.summary && <span className="font-medium text-cat-sports-fg">{match.summary}</span>}
        {!isResult &&
        <button
          type="button"
          className="ml-auto inline-flex items-center gap-1.5 rounded-lg px-2 py-1 font-semibold text-brand transition-colors duration-150 ease-out hover:bg-brand-soft">
          
            <BellIcon className="h-3.5 w-3.5" aria-hidden="true" />
            Remind me
          </button>
        }
      </p>
    </article>);

}

export function Sports() {
  const [sport, setSport] = useState('All');

  const filtered = matches.filter((match) => sport === 'All' || match.sport === sport);
  const upcoming = filtered.filter((match) => match.status !== 'Result');
  const results = filtered.filter((match) => match.status === 'Result');

  return (
    <div className="mx-auto max-w-6xl space-y-5">
      <header>
        <h1 className="font-display text-3xl font-extrabold tracking-tight text-ink">Sports</h1>
        <p className="mt-1.5 text-sm text-muted">
          Fixtures, results and standings for Sabaragamuwa University teams.
        </p>
      </header>

      <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 md:mx-0 md:px-0">
        {sportCategories.map((option) =>
        <button
          key={option}
          type="button"
          onClick={() => setSport(option)}
          aria-pressed={sport === option}
          className={`shrink-0 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors duration-150 ease-out ${
          sport === option ?
          'border-brand bg-brand text-white' :
          'border-line bg-surface text-muted hover:border-brand/50 hover:text-brand'}`
          }>
          
            {option}
          </button>
        )}
      </div>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <div className="space-y-5">
          <section>
            <h2 className="font-display text-lg font-bold text-ink">Upcoming fixtures</h2>
            <div className="mt-3 space-y-3">
              {upcoming.length ?
              upcoming.map((match) => <MatchCard key={match.id} match={match} />) :

              <p className="rounded-2xl border border-dashed border-line bg-surface px-6 py-10 text-center text-sm text-muted">
                  No fixtures scheduled for {sport.toLowerCase()} right now.
                </p>
              }
            </div>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-ink">Recent results</h2>
            <div className="mt-3 space-y-3">
              {results.length ?
              results.map((match) => <MatchCard key={match.id} match={match} />) :

              <p className="rounded-2xl border border-dashed border-line bg-surface px-6 py-10 text-center text-sm text-muted">
                  No results recorded yet this season.
                </p>
              }
            </div>
          </section>
        </div>

        <div className="space-y-4">
          <section className="overflow-hidden rounded-2xl border border-line bg-surface shadow-card">
            <h2 className="border-b border-line px-4 py-3 font-display text-sm font-bold text-ink">
              Inter-University Championship
            </h2>
            <table className="w-full text-sm">
              <caption className="sr-only">Points table</caption>
              <thead>
                <tr className="text-xs text-muted">
                  <th scope="col" className="px-4 py-2 text-left font-medium">
                    Team
                  </th>
                  <th scope="col" className="px-2 py-2 text-right font-medium">
                    P
                  </th>
                  <th scope="col" className="px-2 py-2 text-right font-medium">
                    W
                  </th>
                  <th scope="col" className="px-4 py-2 text-right font-medium">
                    Pts
                  </th>
                </tr>
              </thead>
              <tbody>
                {pointsTable.map((row) => {
                  const isUs = row.team.startsWith('Sabaragamuwa');
                  return (
                    <tr
                      key={row.team}
                      className={`border-t border-line ${isUs ? 'bg-brand-soft/50' : ''}`}>
                      
                      <th
                        scope="row"
                        className={`px-4 py-2.5 text-left font-medium ${isUs ? 'text-brand' : 'text-ink'}`}>
                        
                        {row.team}
                      </th>
                      <td className="px-2 py-2.5 text-right text-muted">{row.played}</td>
                      <td className="px-2 py-2.5 text-right text-muted">{row.won}</td>
                      <td className="px-4 py-2.5 text-right font-semibold text-ink">{row.points}</td>
                    </tr>);

                })}
              </tbody>
            </table>
          </section>

          <section className="rounded-2xl border border-line bg-surface p-4 shadow-card">
            <h2 className="font-display text-sm font-bold text-ink">University teams</h2>
            <ul className="mt-3 space-y-2.5">
              {teams.map((team) =>
              <li key={team.id} className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-elevated font-display text-[11px] font-bold text-ink">
                    {team.sport.slice(0, 2).toUpperCase()}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium text-ink">{team.name}</span>
                    <span className="block truncate text-xs text-muted">
                      {team.players} players · Coach {team.coach}
                    </span>
                  </span>
                  <button
                  type="button"
                  className="shrink-0 rounded-lg border border-line px-2.5 py-1 text-xs font-semibold text-brand transition-colors duration-150 ease-out hover:border-brand hover:bg-brand-soft">
                  
                    Follow
                  </button>
                </li>
              )}
            </ul>
          </section>
        </div>
      </div>
    </div>);

}