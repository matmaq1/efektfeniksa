// src/components/SpeakersGallery.jsx
// Dedicated section: speaker portrait left + bio left, workshop description right.
// Each entry alternates orientation for editorial rhythm.

import React, { useState } from "react";

export function SpeakerCard({ entry, index }) {
  const flip = index % 2 === 1;

  return (
    <article className="grid grid-cols-12 gap-6 md:gap-10 items-stretch py-12 md:py-20"
             style={{ borderTop: index === 0 ? "none" : "1px solid rgba(255,182,39,0.10)" }}>
      {/* PHOTO + BIO ── always on the left visually; flip swaps order on md+ */}
      <div className={`col-span-12 md:col-span-6 ${flip ? "md:order-2" : ""}`}>
        <div className="grid grid-cols-12 gap-5">
          {/* Big photo */}
          <div className="col-span-12 sm:col-span-7">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden group"
                 style={{
                   background: `linear-gradient(160deg, oklch(0.55 0.21 ${entry.hue}) 0%, oklch(0.30 0.15 ${(entry.hue+30)%360}) 60%, #1a0d07 100%)`,
                   boxShadow: "0 30px 60px -20px rgba(255,90,31,0.35), inset 0 0 0 1px rgba(255,182,39,0.18)",
                 }}>
              {/* Stripe placeholder texture */}
              <div className="absolute inset-0 opacity-40 mix-blend-overlay"
                   style={{ background: "repeating-linear-gradient(135deg, transparent 0 14px, rgba(0,0,0,0.4) 14px 28px)" }}/>
              {/* Initials watermark */}
              <div className="absolute inset-0 grid place-items-center">
                <span className="font-headline italic text-[10rem] leading-none text-white/15"
                      style={{ textShadow: "0 4px 30px rgba(0,0,0,0.4)" }}>
                  {entry.name.split(" ").map(p=>p[0]).slice(0,2).join("")}
                </span>
              </div>
              {/* Bottom gradient */}
              <div className="absolute inset-x-0 bottom-0 h-2/5"
                   style={{ background: "linear-gradient(180deg, transparent 0%, rgba(14,6,4,0.85) 100%)" }}/>
              {/* Caption */}
              <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between">
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-primary-fixed-dim font-bold">
                    {entry.country}
                  </div>
                  <div className="font-headline italic text-on-surface text-lg mt-1">
                    {entry.org}
                  </div>
                </div>
                <span className="material-symbols-outlined text-primary-fixed-dim/60" style={{ fontSize: 18 }}>image</span>
              </div>
              {/* Mono placeholder hint */}
              <div className="absolute top-4 left-4 text-[10px] font-mono text-primary-fixed-dim/70 tracking-tight">
                portrait · {entry.name.toLowerCase().split(" ").join("_")}.jpg
              </div>
            </div>
          </div>

          {/* Bio sidebar */}
          <div className="col-span-12 sm:col-span-5 flex flex-col">
            <div className="text-[10px] tracking-[0.35em] uppercase text-primary-fixed-dim font-bold mb-3">
              Prelegent · 0{index+1}
            </div>
            <h3 className="font-headline text-3xl md:text-4xl text-on-surface leading-tight">
              {entry.name}
            </h3>
            <div className="text-on-surface-variant italic font-headline text-base mt-2">
              {entry.role}
            </div>

            <div className="rule-gold w-12 my-5 opacity-70"></div>

            <p className="text-on-surface-variant text-sm leading-relaxed font-light">
              {entry.bio}
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              {entry.stats.map(s => (
                <div key={s.k} className="p-3 rounded-md" style={{ background: "rgba(26,13,7,0.6)", boxShadow: "inset 0 0 0 1px rgba(255,182,39,0.10)" }}>
                  <div className="font-headline italic text-2xl flame-text">{s.v}</div>
                  <div className="text-[9px] tracking-[0.25em] uppercase text-on-surface-variant mt-1">{s.k}</div>
                </div>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-3 mt-5 text-[10px] tracking-[0.3em] uppercase">
              {entry.links.map(l => (
                <a key={l} href="#" className="ignite-link text-primary-fixed-dim hover:text-on-surface">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* WORKSHOP DESCRIPTION ── right side */}
      <div className={`col-span-12 md:col-span-6 ${flip ? "md:order-1" : ""}`}>
        <div className="h-full p-7 md:p-10 rounded-xl ember-glass relative overflow-hidden">
          {/* corner glow */}
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full pointer-events-none"
               style={{ background: `radial-gradient(circle, oklch(0.65 0.22 ${entry.hue} / 0.35) 0%, transparent 70%)` }}/>

          <div className="flex items-center gap-3 mb-5 relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-[0.25em] uppercase"
                  style={{ background: "linear-gradient(135deg, rgba(255,90,31,0.25), rgba(255,182,39,0.15))", color: "#ffd166", boxShadow: "inset 0 0 0 1px rgba(255,182,39,0.4)" }}>
              <span className="material-symbols-outlined" style={{ fontSize: 12 }}>{entry.workshop.icon}</span>
              {entry.workshop.kind}
            </span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-on-surface-variant">
              {entry.workshop.day} · {entry.workshop.duration}
            </span>
          </div>

          <h4 className="font-headline text-3xl md:text-4xl leading-[1.1] tracking-tight relative z-10">
            <span className="text-on-surface">{entry.workshop.titleA}</span>{" "}
            <span className="flame-text italic">{entry.workshop.titleB}</span>
          </h4>

          <p className="text-on-surface-variant text-base leading-relaxed mt-5 max-w-prose relative z-10">
            {entry.workshop.description}
          </p>

          {/* Bullet points */}
          <div className="mt-6 space-y-3 relative z-10">
            {entry.workshop.points.map((p, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="material-symbols-outlined ms-fill mt-0.5"
                      style={{ fontSize: 16, color: "#ffb627" }}>local_fire_department</span>
                <span className="text-sm text-on-surface-variant flex-1">{p}</span>
              </div>
            ))}
          </div>

          {/* Footer meta + CTA */}
          <div className="mt-7 pt-6 relative z-10 flex flex-wrap items-end justify-between gap-4"
               style={{ borderTop: "1px solid rgba(255,182,39,0.15)" }}>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] tracking-[0.25em] uppercase text-on-surface-variant">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>group</span>
                limit {entry.workshop.capacity} osób
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>signal_cellular_alt</span>
                {entry.workshop.level}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>translate</span>
                {entry.workshop.lang}
              </span>
            </div>
            <button className="btn-ghost-flame px-5 py-2.5 rounded-md text-[10px]">
              Zapisz się →
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export function SpeakersGallery({ entries }) {
  return (
    <section id="prelegenci" className="relative py-28 md:py-36 overflow-hidden"
             style={{ background: "linear-gradient(180deg, #0e0604 0%, #140905 50%, #0e0604 100%)" }}>
      {/* ambient glow */}
      <div className="absolute inset-x-0 top-0 h-60 pointer-events-none"
           style={{ background: "radial-gradient(60% 100% at 50% 0%, rgba(255,90,31,0.18) 0%, transparent 70%)" }}/>

      <div className="max-w-screen-xl mx-auto px-6 md:px-12 relative">
        {/* Heading */}
        <div className="grid grid-cols-12 gap-6 items-end mb-16 md:mb-20">
          <div className="col-span-12 md:col-span-8">
            <div className="text-[11px] tracking-[0.35em] uppercase text-primary-fixed-dim mb-4">— Prelegenci & Warsztaty</div>
            <h2 className="font-headline text-5xl md:text-7xl leading-[1.0] tracking-tight">
              <span className="text-on-surface">Twórcy ognia,</span><br/>
              <span className="flame-text italic">jeden po drugim.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 text-on-surface-variant md:text-right text-sm leading-relaxed">
            Każdy prelegent prowadzi jedne warsztaty.<br className="hidden md:inline"/>
            Po lewej — kim są. Po prawej — co zbudujesz razem z nimi.
          </div>
        </div>

        {/* Cards */}
        <div>
          {entries.map((e, i) => (
            <SpeakerCard key={e.id} entry={e} index={i}/>
          ))}
        </div>
      </div>
    </section>
  );
}


