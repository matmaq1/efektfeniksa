// src/components/Sections.jsx
// Hero, Speakers strip, Stats, CTA, Nav, Footer — Phoenix Rising aesthetic.

const { useEffect, useRef, useState } = React;

// ─── Ember particle field ────────────────────────────────────────
function EmberField({ count = 28 }) {
  const ref = useRef(null);
  useEffect(() => {
    const host = ref.current;
    if (!host) return;
    host.innerHTML = "";
    for (let i = 0; i < count; i++) {
      const e = document.createElement("div");
      e.className = "ember";
      const size = 2 + Math.random() * 5;
      const left = Math.random() * 100;
      const dur = 6 + Math.random() * 9;
      const delay = -Math.random() * dur;
      const drift = (Math.random() - 0.5) * 140;
      const opacity = 0.4 + Math.random() * 0.6;
      e.style.left = left + "%";
      e.style.width = size + "px";
      e.style.height = size + "px";
      e.style.opacity = opacity;
      e.style.setProperty("--drift", drift + "px");
      e.style.animation = `emberRise ${dur}s linear ${delay}s infinite`;
      host.appendChild(e);
    }
  }, [count]);
  return <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true"></div>;
}

// ─── Heat distortion overlay (SVG turbulence + animation) ───────
function HeatDistortion() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-40 mix-blend-screen pointer-events-none" aria-hidden="true">
      <defs>
        <filter id="heat" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.012 0.04" numOctaves="2" seed="3">
            <animate attributeName="baseFrequency" dur="22s" values="0.012 0.04;0.018 0.06;0.012 0.04" repeatCount="indefinite"/>
          </feTurbulence>
          <feColorMatrix values="0 0 0 0 1   0 0 0 0 0.55   0 0 0 0 0.05   0 0 0 0.5 0"/>
        </filter>
      </defs>
      <rect width="100%" height="100%" filter="url(#heat)"/>
    </svg>
  );
}

// ─── Top Nav ─────────────────────────────────────────────────────
function Nav({ active = "home", onNav }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = [
    { id: "home",     label: "Home" },
    { id: "agenda",   label: "Agenda" },
    { id: "speakers", label: "Speakers" },
    { id: "venue",    label: "Venue" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all"
      style={{
        background: scrolled ? "rgba(14,6,4,0.85)" : "rgba(14,6,4,0.0)",
        backdropFilter: scrolled ? "blur(16px) saturate(140%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px) saturate(140%)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(255,182,39,0.12)" : "none",
      }}
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group" onClick={(e)=>{e.preventDefault();onNav?.("home");}}>
          <span className="relative grid place-items-center w-10 h-10 rounded-md overflow-hidden"
                style={{ background: "linear-gradient(135deg,#ff3d00 0%,#ff5a1f 50%,#ffb627 100%)" }}>
            <span className="material-symbols-outlined ms-fill text-on-primary" style={{ fontSize: 22 }}>local_fire_department</span>
          </span>
          <div>
            <div className="font-headline italic text-xl tracking-tight text-on-surface leading-none">Feniks</div>
            <div className="text-[9px] tracking-[0.4em] uppercase text-primary-fixed-dim mt-0.5">Vienna · 2026</div>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-9">
          {items.map(it => (
            <a key={it.id} href={"#" + it.id}
               onClick={(e)=>{e.preventDefault();onNav?.(it.id);}}
               className={`ignite-link font-headline tracking-tight uppercase text-[11px] font-semibold ${active===it.id ? "text-primary-fixed active" : "text-on-surface/80 hover:text-on-surface"}`}>
              {it.label}
            </a>
          ))}
        </div>

        <button className="btn-fire px-6 py-3 rounded-md text-[11px]">
          Register
        </button>
      </div>
    </nav>
  );
}

// ─── HERO ────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20"
      style={{ background: "radial-gradient(60% 60% at 50% 110%, #5a1500 0%, #1a0d07 45%, #0e0604 75%)" }}>
      <HeatDistortion/>
      <EmberField count={36}/>

      {/* big phoenix glow */}
      <div className="absolute inset-x-0 bottom-0 h-[60%] pointer-events-none animate-flame-flicker"
           style={{
             background: "radial-gradient(50% 100% at 50% 100%, rgba(255,90,31,0.55) 0%, rgba(201,48,44,0.25) 35%, transparent 70%)",
             filter: "blur(8px)",
           }}/>

      {/* layered silhouettes */}
      <div className="absolute -left-20 bottom-0 w-[40vw] h-[80vh] pointer-events-none opacity-50"
           style={{
             background: "radial-gradient(circle at 60% 100%, rgba(255,182,39,0.4) 0%, transparent 60%)",
             mixBlendMode: "screen",
           }}/>
      <div className="absolute -right-32 top-10 w-[50vw] h-[70vh] pointer-events-none opacity-30"
           style={{
             background: "radial-gradient(circle at 30% 30%, rgba(255,90,31,0.45) 0%, transparent 60%)",
             mixBlendMode: "screen",
           }}/>

      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-12 gap-8 items-center w-full">
        <div className="col-span-12 lg:col-span-8 space-y-8">
          <div className="reveal in inline-flex items-center gap-3">
            <div className="w-10 rule-gold"></div>
            <span className="font-label text-primary-fixed-dim uppercase tracking-[0.35em] text-[11px] font-bold">
              The Phoenix Sessions · Edition III
            </span>
          </div>

          <h1 className="font-headline font-bold leading-[0.95] tracking-tight">
            <span className="block text-on-surface text-6xl md:text-8xl lg:text-[9rem]">From the</span>
            <span className="block flame-text italic text-7xl md:text-9xl lg:text-[10rem] animate-heat-shimmer">ashes,</span>
            <span className="block text-on-surface text-5xl md:text-7xl lg:text-[8rem] mt-2">we build.</span>
          </h1>

          <p className="text-on-surface-variant text-lg md:text-xl max-w-xl font-light leading-relaxed">
            Three days, three stages, twenty-four speakers. A working conference for the people
            who actually ship — held in the Imperial Opera House, Vienna, this October.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button className="btn-fire px-9 py-4 rounded-md text-xs">Reserve a seat</button>
            <button className="btn-ghost-flame px-9 py-4 rounded-md text-xs">View the programme</button>
          </div>

          {/* Hero meta strip */}
          <div className="grid grid-cols-3 gap-6 pt-12 max-w-2xl">
            {[
              { k: "14–16 OCT", v: "Three days" },
              { k: "VIENNA, AT", v: "Imperial Hall" },
              { k: "82% FULL",  v: "Closing soon" },
            ].map(m => (
              <div key={m.k} className="border-l border-outline-variant/40 pl-4">
                <div className="text-[10px] tracking-[0.3em] uppercase text-primary-fixed-dim font-bold">{m.k}</div>
                <div className="font-headline text-xl text-on-surface mt-1">{m.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column: animated phoenix mark */}
        <div className="col-span-12 lg:col-span-4 hidden lg:block">
          <PhoenixMark/>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-on-surface-variant animate-float">
        <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
        <span className="material-symbols-outlined" style={{ fontSize: 18 }}>south</span>
      </div>
    </section>
  );
}

// ─── Phoenix mark — pure CSS/SVG flame ─────────────────────────
function PhoenixMark() {
  return (
    <div className="relative aspect-square w-full max-w-[420px] mx-auto">
      {/* Outer halo ring */}
      <div className="absolute inset-0 rounded-full animate-glow-pulse"
           style={{ boxShadow: "0 0 80px 0 rgba(255,90,31,0.5)" }}/>

      {/* Rotating ring of dots */}
      <div className="absolute inset-0 rounded-full animate-spin"
           style={{ animationDuration: "40s",
                    background: "conic-gradient(from 0deg, transparent 0%, rgba(255,182,39,0.25) 25%, transparent 50%, rgba(255,90,31,0.35) 75%, transparent 100%)",
                    maskImage: "radial-gradient(circle, transparent 60%, black 62%, black 70%, transparent 72%)",
                    WebkitMaskImage: "radial-gradient(circle, transparent 60%, black 62%, black 70%, transparent 72%)" }}/>

      {/* Inner core */}
      <div className="absolute inset-[18%] rounded-full overflow-hidden animate-flame-flicker"
           style={{ background: "radial-gradient(circle at 50% 70%, #fff4d6 0%, #ffb627 18%, #ff5a1f 45%, #c9302c 75%, #1a0d07 100%)" }}>
        {/* Flame licks */}
        <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
          <defs>
            <radialGradient id="flame-g" cx="50%" cy="80%" r="70%">
              <stop offset="0%" stopColor="#fff4d6" stopOpacity="0.9"/>
              <stop offset="35%" stopColor="#ffb627" stopOpacity="0.7"/>
              <stop offset="100%" stopColor="#ff5a1f" stopOpacity="0"/>
            </radialGradient>
          </defs>
          <g style={{ transformOrigin: "100px 180px" }}>
            <path d="M100,180 C70,160 60,120 80,90 C70,110 90,130 90,150 C95,120 110,100 100,70 C115,100 130,120 120,150 C125,130 140,115 130,95 C145,125 145,160 100,180 Z"
                  fill="url(#flame-g)">
              <animateTransform attributeName="transform" type="scale" values="1 1; 1.05 0.95; 1 1.02; 1 1" dur="2.2s" repeatCount="indefinite" additive="sum"/>
            </path>
          </g>
        </svg>
      </div>

      {/* Spark dots */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <span key={i}
                className="absolute w-1 h-1 rounded-full bg-primary-fixed-dim animate-float"
                style={{
                  top: `${50 + Math.cos(i * 0.78) * 45}%`,
                  left: `${50 + Math.sin(i * 0.78) * 45}%`,
                  animationDelay: `${i * 0.4}s`,
                  boxShadow: "0 0 8px #ffb627",
                }}/>
        ))}
      </div>

      {/* Centerpiece label */}
      <div className="absolute inset-x-0 bottom-0 text-center">
        <div className="text-[10px] tracking-[0.45em] uppercase text-primary-fixed-dim">Edition III</div>
        <div className="font-headline italic text-2xl text-on-surface mt-1">Feniks 2026</div>
      </div>
    </div>
  );
}

// ─── Speakers Marquee ────────────────────────────────────────────
function SpeakersStrip({ speakers }) {
  const doubled = [...speakers, ...speakers];
  return (
    <section id="speakers" className="relative py-24 overflow-hidden border-y border-outline-variant/20">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-12">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <div className="text-[11px] tracking-[0.35em] uppercase text-primary-fixed-dim mb-3">— The Roster</div>
            <h2 className="font-headline text-4xl md:text-6xl tracking-tight">
              <span className="text-on-surface">Twenty-four voices,</span><br/>
              <span className="flame-text italic">one long conversation.</span>
            </h2>
          </div>
          <a href="#" className="btn-ghost-flame px-6 py-3 rounded-md text-[11px]">Full speaker list →</a>
        </div>
      </div>

      <div className="marquee-track gap-6 py-4">
        {doubled.map((s, i) => (
          <div key={i} className="shrink-0 w-[320px] p-6 rounded-xl ember-glass flex items-center gap-4">
            <SpeakerAvatar s={s} size={56}/>
            <div className="min-w-0">
              <div className="font-headline text-lg text-on-surface truncate">{s.name}</div>
              <div className="text-[11px] tracking-[0.18em] uppercase text-primary-fixed-dim truncate">{s.role}</div>
              <div className="text-xs text-on-surface-variant truncate mt-0.5">{s.org}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Venue / Stats ──────────────────────────────────────────────
function Venue() {
  return (
    <section id="venue" className="relative py-32 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-12 gap-12 items-start">
        <div className="col-span-12 lg:col-span-5 space-y-8">
          <div className="text-[11px] tracking-[0.35em] uppercase text-primary-fixed-dim">— The Venue</div>
          <h2 className="font-headline text-5xl md:text-6xl leading-[1.05] tracking-tight">
            <span className="text-on-surface">Imperial Hall,</span><br/>
            <span className="flame-text italic">Vienna.</span>
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed max-w-md font-light">
            We took over an Opera House. Three stages, a long lunch terrace,
            and a salon for the conversations that don't fit on a programme.
          </p>
          <div className="grid grid-cols-2 gap-4 max-w-md pt-4">
            {[
              { k: "320", v: "Seats / Mainstage" },
              { k: "1898", v: "Year built" },
              { k: "3", v: "Working stages" },
              { k: "24h", v: "Salon access" },
            ].map(s => (
              <div key={s.v} className="p-5 rounded-md ember-glass">
                <div className="font-headline italic text-3xl flame-text">{s.k}</div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-on-surface-variant mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 lg:col-span-7 grid grid-cols-6 gap-4">
          {/* Placeholder venue tiles — striped, monospace explainers */}
          {[
            { c: "col-span-6 row-span-2 h-[360px]", label: "wide shot · auditorium interior" },
            { c: "col-span-3 h-[200px]", label: "balcony · gold leaf detail" },
            { c: "col-span-3 h-[200px]", label: "salon rouge · evening" },
          ].map((t, i) => (
            <div key={i} className={`${t.c} rounded-xl overflow-hidden relative group`}
                 style={{
                   background: "repeating-linear-gradient(135deg, #1a0d07 0 12px, #22130b 12px 24px)",
                 }}>
              <div className="absolute inset-0"
                   style={{ background: "radial-gradient(circle at 50% 100%, rgba(255,90,31,0.25), transparent 60%)" }}/>
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-tight text-primary-fixed-dim">{t.label}</span>
                <span className="material-symbols-outlined text-primary-fixed-dim/60" style={{ fontSize: 16 }}>image</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA ─────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: "radial-gradient(50% 80% at 50% 100%, rgba(255,90,31,0.45) 0%, rgba(201,48,44,0.15) 50%, transparent 80%)" }}/>
      <EmberField count={20}/>

      <div className="relative max-w-3xl mx-auto px-6 md:px-12 text-center">
        <span className="material-symbols-outlined ms-fill flame-text" style={{ fontSize: 64 }}>local_fire_department</span>
        <h2 className="font-headline text-5xl md:text-7xl font-bold leading-tight mt-6">
          <span className="text-on-surface">Light the </span>
          <span className="flame-text italic">match.</span>
        </h2>
        <p className="text-on-surface-variant text-xl md:text-2xl my-8 font-headline italic max-w-xl mx-auto">
          The third edition is 82% full. Once it's gone, it's gone.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="btn-fire px-12 py-5 rounded-md text-xs">Register · €890</button>
          <button className="btn-ghost-flame px-12 py-5 rounded-md text-xs">Become a sponsor</button>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="border-t border-outline-variant/20 bg-surface-container-lowest">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-16 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-5">
          <div className="flex items-center gap-3 mb-4">
            <span className="grid place-items-center w-10 h-10 rounded-md"
                  style={{ background: "linear-gradient(135deg,#ff3d00,#ff5a1f,#ffb627)" }}>
              <span className="material-symbols-outlined ms-fill text-on-primary" style={{ fontSize: 22 }}>local_fire_department</span>
            </span>
            <div className="font-headline italic text-2xl text-on-surface">Feniks</div>
          </div>
          <p className="text-on-surface-variant text-sm leading-relaxed max-w-sm">
            A working conference for the people who ship, held annually in October at the
            Imperial Opera House, Vienna.
          </p>
        </div>
        <div className="col-span-6 md:col-span-2">
          <div className="text-[10px] tracking-[0.3em] uppercase text-primary-fixed-dim mb-4">Programme</div>
          <ul className="space-y-2 text-sm text-on-surface-variant">
            <li><a className="ignite-link" href="#agenda">Agenda</a></li>
            <li><a className="ignite-link" href="#speakers">Speakers</a></li>
            <li><a className="ignite-link" href="#venue">Venue</a></li>
            <li><a className="ignite-link" href="#">Travel</a></li>
          </ul>
        </div>
        <div className="col-span-6 md:col-span-2">
          <div className="text-[10px] tracking-[0.3em] uppercase text-primary-fixed-dim mb-4">Editions</div>
          <ul className="space-y-2 text-sm text-on-surface-variant">
            <li><a className="ignite-link" href="#">2024 — Spark</a></li>
            <li><a className="ignite-link" href="#">2025 — Kindling</a></li>
            <li><a className="ignite-link active" href="#">2026 — Phoenix</a></li>
          </ul>
        </div>
        <div className="col-span-12 md:col-span-3">
          <div className="text-[10px] tracking-[0.3em] uppercase text-primary-fixed-dim mb-4">Newsletter</div>
          <p className="text-xs text-on-surface-variant mb-3">Three letters a year. No promotions.</p>
          <div className="flex gap-2">
            <input type="email" placeholder="you@domain.com"
                   className="flex-1 bg-transparent text-sm text-on-surface placeholder:text-outline px-3 py-2 rounded-md"
                   style={{ boxShadow: "inset 0 0 0 1px rgba(255,182,39,0.25)" }}/>
            <button className="btn-fire px-4 py-2 rounded-md text-[10px]">Sign up</button>
          </div>
        </div>
      </div>
      <div className="border-t border-outline-variant/15">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant">© 2026 Feniks · Built on Cloudflare Pages</div>
          <div className="flex gap-6 text-[10px] tracking-[0.3em] uppercase text-on-surface-variant">
            <a className="ignite-link" href="#">Code of conduct</a>
            <a className="ignite-link" href="#">Privacy</a>
            <a className="ignite-link" href="#">Press kit</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, Hero, SpeakersStrip, Venue, FinalCTA, Footer, EmberField, HeatDistortion });
