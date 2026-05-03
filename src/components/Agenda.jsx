// src/components/Agenda.jsx
// Expandable agenda: Day → Track (section) → Session → Speaker.

import React, { useState, useMemo, useEffect, useRef } from "react";

// ---------- helpers ----------
const KIND_META = {
  keynote:  { label: "Keynote",  icon: "auto_awesome",          tone: "core"   },
  talk:     { label: "Talk",     icon: "campaign",              tone: "gold"   },
  workshop: { label: "Workshop", icon: "construction",          tone: "gold"   },
  panel:    { label: "Panel",    icon: "groups",                tone: "core"   },
  break:    { label: "Break",    icon: "coffee",                tone: "muted"  },
  lounge:   { label: "Lounge",   icon: "forum",                 tone: "crimson"},
};

const ACCENT_TOKENS = {
  core:    { ring: "rgba(255,90,31,0.5)",  bg: "rgba(255,90,31,0.10)",  text: "#ffb27a", glow: "0 0 60px -10px rgba(255,90,31,0.5)"  },
  gold:    { ring: "rgba(255,182,39,0.55)",bg: "rgba(255,182,39,0.10)", text: "#ffd166", glow: "0 0 60px -10px rgba(255,182,39,0.45)"},
  crimson: { ring: "rgba(201,48,44,0.55)", bg: "rgba(201,48,44,0.12)",  text: "#ff8a73", glow: "0 0 60px -10px rgba(201,48,44,0.45)" },
  muted:   { ring: "rgba(255,212,170,0.18)",bg: "rgba(255,212,170,0.04)",text: "#a98968", glow: "none" },
};

export function SpeakerAvatar({ s, size = 44 }) {
  const initials = s.name.split(" ").map(p => p[0]).slice(0,2).join("");
  const grad = `conic-gradient(from 210deg, oklch(0.68 0.18 ${s.avatarHue}) 0deg, oklch(0.55 0.21 ${(s.avatarHue+30)%360}) 140deg, oklch(0.40 0.15 ${(s.avatarHue+60)%360}) 280deg, oklch(0.68 0.18 ${s.avatarHue}) 360deg)`;
  return (
    <div
      className="relative shrink-0 rounded-full grid place-items-center font-headline italic text-on-primary"
      style={{ width: size, height: size, background: grad, fontSize: size*0.36 }}
      aria-label={s.name}
      title={s.name}
    >
      <div className="absolute inset-[2px] rounded-full grid place-items-center"
           style={{ background: "linear-gradient(160deg,#22130b 0%,#0e0604 100%)", color: "#fff4d6" }}>
        <span style={{ fontSize: size*0.34, letterSpacing: "0.02em" }}>{initials}</span>
      </div>
    </div>
  );
}

export function SpeakerStack({ speakers, max = 3 }) {
  if (!speakers?.length) return null;
  const shown = speakers.slice(0, max);
  const overflow = speakers.length - shown.length;
  return (
    <div className="flex items-center">
      <div className="flex -space-x-2">
        {shown.map(s => (
          <div key={s.id} className="ring-2 ring-[#0e0604] rounded-full">
            <SpeakerAvatar s={s} size={32}/>
          </div>
        ))}
      </div>
      {overflow > 0 && (
        <span className="ml-3 text-[11px] tracking-[0.2em] uppercase text-on-surface-variant">+{overflow} more</span>
      )}
    </div>
  );
}

// ---------- session row (collapsed → speaker bios) ----------
export function SessionRow({ session, accent, defaultOpen }) {
  const [open, setOpen] = useState(!!defaultOpen);
  const [activeSpeaker, setActiveSpeaker] = useState(null);
  const tokens = ACCENT_TOKENS[accent] || ACCENT_TOKENS.core;
  const km = KIND_META[session.kind] || KIND_META.talk;
  const isBreak = session.kind === "break";

  useEffect(() => {
    if (open && session.speakers?.length && !activeSpeaker) {
      setActiveSpeaker(session.speakers[0].id);
    }
  }, [open]);

  const active = session.speakers?.find(s => s.id === activeSpeaker);

  return (
    <div
      className="agenda-row group relative"
      data-open={open}
      style={{
        borderTop: "1px solid rgba(255,182,39,0.10)",
      }}
    >
      <button
        type="button"
        onClick={() => session.speakers.length || session.abstract ? setOpen(o => !o) : null}
        className="w-full text-left grid grid-cols-12 gap-4 items-center py-6 px-6 md:px-8 transition-colors hover:bg-[rgba(255,90,31,0.04)]"
        aria-expanded={open}
      >
        {/* Time */}
        <div className="col-span-12 md:col-span-2">
          <div className="flex items-baseline gap-2">
            <span className="font-headline text-2xl md:text-3xl tracking-tight" style={{ color: tokens.text }}>
              {session.start}
            </span>
            <span className="text-on-surface-variant text-xs tracking-widest">→ {session.end}</span>
          </div>
        </div>

        {/* Title + kind chip */}
        <div className="col-span-12 md:col-span-7">
          <div className="flex items-center gap-3 mb-1">
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase"
              style={{
                background: tokens.bg,
                color: tokens.text,
                boxShadow: `inset 0 0 0 1px ${tokens.ring}`,
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 12 }}>{km.icon}</span>
              {km.label}
            </span>
            {session.tags?.slice(0,2).map(t => (
              <span key={t} className="text-[10px] tracking-[0.18em] uppercase text-on-surface-variant">#{t}</span>
            ))}
          </div>
          <h4 className={`font-headline ${isBreak ? "italic text-on-surface-variant" : "text-on-surface"} text-xl md:text-2xl leading-snug`}>
            {session.title}
          </h4>
        </div>

        {/* Speaker stack + chev */}
        <div className="col-span-12 md:col-span-3 flex items-center md:justify-end gap-4">
          {session.speakers.length > 0 && <SpeakerStack speakers={session.speakers} />}
          {(session.speakers.length > 0 || session.abstract) && (
            <span className="chev material-symbols-outlined text-primary-fixed-dim" style={{ fontSize: 22 }}>
              chevron_right
            </span>
          )}
        </div>
      </button>

      {/* Expanded panel */}
      <div
        className="grid transition-all duration-500 ease-out"
        style={{
          gridTemplateRows: open ? "1fr" : "0fr",
          opacity: open ? 1 : 0,
        }}
      >
        <div className="overflow-hidden">
          <div className="px-6 md:px-8 pb-8 pt-1 grid grid-cols-12 gap-6">
            {/* Abstract column */}
            <div className="col-span-12 md:col-span-7">
              <div className="rule-gold w-16 mb-5 opacity-60"></div>
              <p className="text-on-surface-variant leading-relaxed text-base md:text-[17px] max-w-2xl">
                {session.abstract}
              </p>
              <div className="flex flex-wrap gap-3 mt-6 text-[11px] tracking-[0.2em] uppercase text-outline">
                {session.capacity && (
                  <span className="inline-flex items-center gap-1.5">
                    <span className="material-symbols-outlined" style={{ fontSize: 14 }}>group</span>
                    cap. {session.capacity}
                  </span>
                )}
                <span className="inline-flex items-center gap-1.5">
                  <span className="material-symbols-outlined" style={{ fontSize: 14 }}>schedule</span>
                  {session.start}–{session.end}
                </span>
              </div>
            </div>

            {/* Speakers column */}
            {session.speakers.length > 0 && (
              <div className="col-span-12 md:col-span-5">
                <div className="text-[11px] tracking-[0.25em] uppercase text-outline mb-4">Speakers</div>
                <div className="space-y-1">
                  {session.speakers.map(s => {
                    const isActive = s.id === activeSpeaker;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={(e) => { e.stopPropagation(); setActiveSpeaker(s.id); }}
                        className="w-full text-left px-3 py-2.5 rounded-md flex items-center gap-3 transition-colors"
                        style={{
                          background: isActive ? "rgba(255,90,31,0.08)" : "transparent",
                          boxShadow: isActive ? `inset 0 0 0 1px ${tokens.ring}` : "none",
                        }}
                      >
                        <SpeakerAvatar s={s} size={36}/>
                        <div className="min-w-0">
                          <div className="font-headline text-on-surface truncate">{s.name}</div>
                          <div className="text-xs text-on-surface-variant truncate">{s.role} · {s.org}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {active && (
                  <div className="mt-5 p-5 rounded-md ember-glass">
                    <div className="text-[10px] tracking-[0.3em] uppercase text-primary-fixed-dim mb-2">O prelegencie</div>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{active.bio}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- track section (expandable) ----------
export function TrackSection({ track, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);
  const tokens = ACCENT_TOKENS[track.accent] || ACCENT_TOKENS.core;

  // Track stats
  const sessionCount = track.sessions.filter(s => s.kind !== "break").length;
  const speakerCount = useMemo(() => {
    const ids = new Set();
    track.sessions.forEach(s => s.speakers.forEach(sp => ids.add(sp.id)));
    return ids.size;
  }, [track]);

  return (
    <section className="mb-6 rounded-xl overflow-hidden"
      style={{
        background: "linear-gradient(180deg, rgba(26,13,7,0.6) 0%, rgba(14,6,4,0.4) 100%)",
        boxShadow: open ? `inset 0 0 0 1px ${tokens.ring}, ${tokens.glow}` : "inset 0 0 0 1px rgba(255,182,39,0.08)",
        transition: "box-shadow .4s ease",
      }}
    >
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full px-6 md:px-8 py-6 flex items-center gap-5 text-left hover:bg-[rgba(255,90,31,0.04)] transition-colors"
        aria-expanded={open}
      >
        <div className="grid place-items-center w-12 h-12 rounded-lg shrink-0"
          style={{ background: tokens.bg, boxShadow: `inset 0 0 0 1px ${tokens.ring}` }}>
          <span className="material-symbols-outlined" style={{ fontSize: 22, color: tokens.text }}>{track.icon}</span>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-3 flex-wrap">
            <h3 className="font-headline text-2xl md:text-3xl text-on-surface">{track.name}</h3>
            <span className="text-on-surface-variant italic font-headline text-base">— {track.subtitle}</span>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-1 mt-1.5 text-[11px] tracking-[0.2em] uppercase text-outline">
            <span>{sessionCount} sessions</span>
            <span>{speakerCount} speakers</span>
            <span style={{ color: tokens.text }}>{track.accent} track</span>
          </div>
        </div>

        <span className="chev material-symbols-outlined text-primary-fixed-dim" style={{ fontSize: 28, transform: open ? "rotate(90deg)" : "rotate(0deg)", transition: "transform .35s" }}>
          chevron_right
        </span>
      </button>

      {/* Sessions list */}
      <div
        className="grid transition-all duration-500 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div>
            {track.sessions.map(s => (
              <SessionRow key={s.id} session={s} accent={track.accent}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- day tabs + filter ----------
export function Agenda({ days }) {
  const [activeDay, setActiveDay] = useState(days[0].id);
  const [filter, setFilter] = useState("all"); // all | mainstage | workshop | lounge
  const day = days.find(d => d.id === activeDay) || days[0];

  const filteredTracks = day.tracks.filter(t => {
    if (filter === "all") return true;
    return t.id.endsWith(filter === "mainstage" ? "main" : filter === "workshop" ? "work" : "lounge");
  });

  return (
    <div className="max-w-screen-xl mx-auto px-6 md:px-12">
      {/* Section heading */}
      <div className="mb-12 md:mb-16 grid grid-cols-12 gap-6 items-end">
        <div className="col-span-12 md:col-span-8">
          <div className="text-[11px] tracking-[0.35em] uppercase text-primary-fixed-dim mb-4">— The Programme</div>
          <h2 className="font-headline text-5xl md:text-7xl leading-[1.0] tracking-tight">
            <span className="text-on-surface">Three days,</span><br/>
            <span className="flame-text italic">one long fire.</span>
          </h2>
        </div>
        <div className="col-span-12 md:col-span-4 text-on-surface-variant md:text-right text-sm leading-relaxed">
          Tap any track to expand. Tap a session for the abstract,<br className="hidden md:inline"/>
          tap a speaker for their bio.
        </div>
      </div>

      {/* Day tabs */}
      <div className="flex flex-wrap gap-3 md:gap-5 mb-6 border-b border-outline-variant/40 pb-6">
        {days.map(d => {
          const active = d.id === activeDay;
          return (
            <button
              key={d.id}
              type="button"
              onClick={() => setActiveDay(d.id)}
              className="group relative flex-1 min-w-[170px] text-left p-5 rounded-lg transition-all"
              style={{
                background: active
                  ? "linear-gradient(135deg, rgba(255,90,31,0.18) 0%, rgba(255,182,39,0.10) 100%)"
                  : "rgba(26,13,7,0.6)",
                boxShadow: active
                  ? "inset 0 0 0 1px rgba(255,182,39,0.45), 0 0 50px -10px rgba(255,90,31,0.4)"
                  : "inset 0 0 0 1px rgba(255,182,39,0.08)",
              }}
              aria-pressed={active}
            >
              <div className="flex items-baseline justify-between mb-2">
                <span className={`text-[11px] tracking-[0.3em] uppercase ${active ? "text-primary-fixed" : "text-outline"}`}>
                  {d.label}
                </span>
                {active && <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" style={{boxShadow:"0 0 12px #ff5a1f"}}></span>}
              </div>
              <div className={`font-headline text-2xl ${active ? "text-on-surface" : "text-on-surface-variant"}`}>
                {d.theme}
              </div>
              <div className="text-xs tracking-widest text-on-surface-variant/80 mt-1">{d.date}</div>
            </button>
          );
        })}
      </div>

      {/* Day blurb + filter */}
      <div className="grid grid-cols-12 gap-6 mb-8 items-end">
        <div className="col-span-12 md:col-span-7">
          <p className="font-headline italic text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-snug">
            "{day.blurb}"
          </p>
        </div>
        <div className="col-span-12 md:col-span-5 flex flex-wrap gap-2 md:justify-end">
          {[
            { id: "all", label: "All tracks" },
            { id: "mainstage", label: "Mainstage" },
            { id: "workshop", label: "Workshop" },
            { id: "lounge", label: "Lounge" },
          ].map(f => {
            const active = f.id === filter;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                className="px-4 py-2 rounded-full text-[11px] tracking-[0.22em] uppercase font-bold transition-all"
                style={{
                  color: active ? "#1a0500" : "#ffd166",
                  background: active ? "linear-gradient(135deg,#ffb627,#ff5a1f)" : "transparent",
                  boxShadow: active ? "0 6px 18px -6px rgba(255,90,31,0.6)" : "inset 0 0 0 1px rgba(255,182,39,0.3)",
                }}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tracks */}
      <div>
        {filteredTracks.map((t, i) => (
          <TrackSection key={t.id} track={t} defaultOpen={i === 0}/>
        ))}
      </div>
    </div>
  );
}



