// src/data/agenda.ts
// Conference agenda data — 3 days, multiple tracks per day, speakers per session.

export type Speaker = {
  id: string;
  name: string;
  role: string;
  org: string;
  bio: string;
  avatarHue: number; // 0–360, used for placeholder gradient
};

export type Session = {
  id: string;
  start: string;        // "09:30"
  end: string;          // "10:15"
  title: string;
  kind: "keynote" | "talk" | "workshop" | "panel" | "break" | "lounge";
  abstract: string;
  speakers: Speaker[];
  capacity?: number;
  tags?: string[];
};

export type Track = {
  id: string;
  name: string;          // "Mainstage"
  subtitle: string;      // "Grand Hall"
  icon: string;          // material symbol
  accent: "core" | "gold" | "crimson"; // visual accent
  sessions: Session[];
};

export type Day = {
  id: string;
  label: string;         // "Day 01"
  date: string;          // "Wed · Oct 14"
  theme: string;         // "Ignition"
  blurb: string;
  tracks: Track[];
};

const sp = (
  id: string, name: string, role: string, org: string, bio: string, hue: number
): Speaker => ({ id, name, role, org, bio, avatarHue: hue });

// Recurring speakers
const ANYA   = sp("anya",   "Anya Volkov",     "Chief Technologist",  "Helios Labs",     "Anya leads research into liquid-cooled silicon and is a frequent voice on energy-aware compute. Former IEEE board member.", 18);
const RUI    = sp("rui",    "Rui Tanaka",      "Principal Engineer",  "Forge Systems",   "Rui has shipped four generations of database engines used by half the Fortune 100. He writes a popular newsletter on systems craft.", 32);
const NADIA  = sp("nadia",  "Nadia Okonkwo",   "Design Director",     "Crucible Studio", "Nadia's team has redefined editorial UI for a generation of news products. She is a Visiting Critic at RISD.", 42);
const LEO    = sp("leo",    "Leo Marchetti",   "VP Product",          "Aurora",          "Leo previously led platform at two unicorns. His talks bridge product strategy and applied ML.", 12);
const MIRA   = sp("mira",   "Mira Halvorsen",  "Founder & CEO",       "Solstice",        "Mira built Solstice from a Helsinki garage to 200 engineers. She advocates for European deep-tech sovereignty.", 28);
const DEV    = sp("dev",    "Dev Krishnan",    "Distinguished Eng.",  "Quanta Cloud",    "Dev's work on consensus protocols underpins three major open-source databases. He teaches at Stanford.", 22);
const ELE    = sp("ele",    "Eleanor Pryce",   "Head of Research",    "Phoenix Institute","Eleanor's team published the seminal paper on flame-front modelling that inspired this conference's name.", 36);
const SAM    = sp("sam",    "Samir Haddad",    "Creative Director",   "Independent",     "Samir has art-directed campaigns for three of the world's most recognised brands. His side-practice is generative typography.", 8);
const KIRA   = sp("kira",   "Kira Yamamoto",   "Engineering Lead",    "Solstice",        "Kira leads Solstice's edge runtime team and contributes to the Cloudflare Workers ecosystem.", 46);
const TOMAS  = sp("tomas",  "Tomas Reinholt",  "Security Architect",  "Forge Systems",   "Tomas runs Forge's red team and has disclosed CVEs in three major runtimes.", 6);
const PRIYA  = sp("priya",  "Priya Sundaram",  "Staff Designer",      "Crucible Studio", "Priya leads accessibility practice at Crucible and is a maintainer of the open-source `axe-react` toolkit.", 40);
const WREN   = sp("wren",   "Wren Albright",   "Researcher",          "Phoenix Institute","Wren's research on combustion-inspired scheduling is published in three major conferences.", 26);

export const AGENDA: Day[] = [
  // ─────────────────────────── Day 01
  {
    id: "d1",
    label: "Day 01",
    date: "Wed · Oct 14",
    theme: "Ignition",
    blurb: "We strike the match. Foundational keynotes set the temperature for the three days ahead.",
    tracks: [
      {
        id: "d1-main",
        name: "Mainstage",
        subtitle: "Grand Hall",
        icon: "local_fire_department",
        accent: "core",
        sessions: [
          { id: "d1-m-1", start: "08:30", end: "09:30", title: "Doors & Welcome Coffee",
            kind: "break", abstract: "Registration opens. Pastries, espresso, and the first sparks of conversation in the Grand Foyer.", speakers: [] },
          { id: "d1-m-2", start: "09:30", end: "10:15", title: "Opening Keynote — Why We Burn",
            kind: "keynote",
            abstract: "A field-leading address on the philosophy behind compute, craft, and the courage to start over. We frame the three days ahead as a single piece, in three movements.",
            speakers: [MIRA], tags: ["philosophy","keynote"] },
          { id: "d1-m-3", start: "10:30", end: "11:15", title: "Liquid Silicon: A New Substrate",
            kind: "talk",
            abstract: "Anya presents two years of unpublished research into thermal-aware compute and what it means for the next decade of data centers.",
            speakers: [ANYA], tags: ["hardware","research"] },
          { id: "d1-m-4", start: "11:30", end: "12:30", title: "Panel — The Sovereign Stack",
            kind: "panel",
            abstract: "Four founders debate what a sovereign European deep-tech stack would actually look like — and what it would cost.",
            speakers: [MIRA, LEO, RUI, ELE], tags: ["panel","strategy"] },
          { id: "d1-m-5", start: "12:30", end: "14:00", title: "Lunch — Garden Terrace",
            kind: "break", abstract: "Long lunch on the terrace. Tables of eight, no name cards.", speakers: [] },
          { id: "d1-m-6", start: "14:00", end: "14:45", title: "The Editorial Interface",
            kind: "talk",
            abstract: "Nadia argues that software interfaces should aspire to the discipline of editorial design — and shows what that looks like at scale.",
            speakers: [NADIA], tags: ["design"] },
          { id: "d1-m-7", start: "15:00", end: "15:45", title: "Consensus, Reconsidered",
            kind: "talk",
            abstract: "A from-first-principles tour of where consensus protocols are heading, with live demos from production systems.",
            speakers: [DEV], tags: ["systems","databases"] },
          { id: "d1-m-8", start: "16:00", end: "17:00", title: "Closing Fireside — Day One",
            kind: "panel",
            abstract: "An informal round-table with the day's speakers. Audience questions encouraged.",
            speakers: [MIRA, ANYA, NADIA, DEV] },
        ],
      },
      {
        id: "d1-work",
        name: "Workshop",
        subtitle: "The Foundry",
        icon: "construction",
        accent: "gold",
        sessions: [
          { id: "d1-w-1", start: "10:30", end: "12:30", title: "Building on Edge Runtimes",
            kind: "workshop",
            abstract: "A hands-on, laptop-required session. We'll build a low-latency API on Cloudflare Workers from scratch, ending with a live deploy.",
            speakers: [KIRA], capacity: 40, tags: ["edge","cloudflare","workshop"] },
          { id: "d1-w-2", start: "14:00", end: "16:00", title: "Threat-Modelling for Speed",
            kind: "workshop",
            abstract: "Tomas walks through a real, recently-disclosed CVE and runs the room through a threat model in real time. Bring questions.",
            speakers: [TOMAS], capacity: 30, tags: ["security","workshop"] },
        ],
      },
      {
        id: "d1-lounge",
        name: "Lounge",
        subtitle: "Salon Rouge",
        icon: "forum",
        accent: "crimson",
        sessions: [
          { id: "d1-l-1", start: "11:00", end: "12:30", title: "Open Office Hours — Design",
            kind: "lounge",
            abstract: "Drop-in critique sessions. Bring your portfolio, screens, or sketches. Two designers on rotation.",
            speakers: [NADIA, PRIYA] },
          { id: "d1-l-2", start: "15:00", end: "17:00", title: "Open Office Hours — Engineering",
            kind: "lounge",
            abstract: "Drop-in architectural review. Bring a system diagram, or the napkin sketch of one.",
            speakers: [RUI, DEV] },
          { id: "d1-l-3", start: "18:00", end: "21:00", title: "Welcome Reception",
            kind: "break",
            abstract: "First-night reception in the Salon Rouge. Catered, no badges required after 18:00.",
            speakers: [] },
        ],
      },
    ],
  },

  // ─────────────────────────── Day 02
  {
    id: "d2",
    label: "Day 02",
    date: "Thu · Oct 15",
    theme: "Combustion",
    blurb: "The room is warm. We push deeper — into systems, security, and what production actually looks like at scale.",
    tracks: [
      {
        id: "d2-main",
        name: "Mainstage",
        subtitle: "Grand Hall",
        icon: "local_fire_department",
        accent: "core",
        sessions: [
          { id: "d2-m-1", start: "09:00", end: "09:45", title: "Day Two Keynote — Combustion",
            kind: "keynote",
            abstract: "Eleanor opens the second day with the research that gave this conference its name: how flame-front dynamics map onto distributed systems.",
            speakers: [ELE], tags: ["keynote","research"] },
          { id: "d2-m-2", start: "10:00", end: "10:45", title: "Forge: Lessons from Four Generations",
            kind: "talk",
            abstract: "Rui distills 12 years of database-engine engineering into one talk. What survived, what didn't, and why.",
            speakers: [RUI], tags: ["systems","retrospective"] },
          { id: "d2-m-3", start: "11:00", end: "11:45", title: "Product at the Edge",
            kind: "talk",
            abstract: "Leo on what edge compute changes for product teams — and why most product orgs aren't ready for it yet.",
            speakers: [LEO], tags: ["product"] },
          { id: "d2-m-4", start: "12:00", end: "13:30", title: "Lunch — Garden Terrace", kind: "break", abstract: "Lunch.", speakers: [] },
          { id: "d2-m-5", start: "13:30", end: "14:15", title: "Generative Type, In Anger",
            kind: "talk",
            abstract: "Samir walks through three commercial campaigns built with generative type systems, shipped to millions of impressions.",
            speakers: [SAM], tags: ["design","generative"] },
          { id: "d2-m-6", start: "14:30", end: "15:30", title: "Panel — Building With Constraints",
            kind: "panel",
            abstract: "How constraint-driven engineering produces better products than abundance-driven engineering. Five practitioners, one moderator.",
            speakers: [ANYA, RUI, KIRA, NADIA], tags: ["panel"] },
          { id: "d2-m-7", start: "15:45", end: "16:30", title: "Accessibility as Performance",
            kind: "talk",
            abstract: "Priya argues that accessibility is a performance discipline — and shows the receipts.",
            speakers: [PRIYA], tags: ["accessibility","design"] },
        ],
      },
      {
        id: "d2-work",
        name: "Workshop",
        subtitle: "The Foundry",
        icon: "construction",
        accent: "gold",
        sessions: [
          { id: "d2-w-1", start: "10:00", end: "12:00", title: "Distributed Systems: A Failure Tour",
            kind: "workshop",
            abstract: "We deliberately break a small distributed system, then fix it together. Laptop required.",
            speakers: [DEV, RUI], capacity: 35 },
          { id: "d2-w-2", start: "13:30", end: "15:30", title: "Combustion-Inspired Scheduling",
            kind: "workshop",
            abstract: "Wren leads a deep-dive into the scheduling algorithm featured in the morning keynote, with a working reference implementation.",
            speakers: [WREN], capacity: 25 },
        ],
      },
      {
        id: "d2-lounge",
        name: "Lounge",
        subtitle: "Salon Rouge",
        icon: "forum",
        accent: "crimson",
        sessions: [
          { id: "d2-l-1", start: "11:00", end: "12:00", title: "Hiring Roundtable",
            kind: "lounge",
            abstract: "Founders and engineering leaders discuss what hiring actually looks like in 2026. No HR.",
            speakers: [MIRA, LEO, KIRA] },
          { id: "d2-l-2", start: "14:00", end: "15:30", title: "Critique Hour — Founders",
            kind: "lounge",
            abstract: "Bring a deck, a landing page, or a half-formed idea. Three operators on rotation.",
            speakers: [LEO, MIRA, NADIA] },
          { id: "d2-l-3", start: "20:00", end: "23:00", title: "Conference Dinner — Imperial Hall",
            kind: "break",
            abstract: "Black tie optional. Seated dinner with a short address from the host city.",
            speakers: [] },
        ],
      },
    ],
  },

  // ─────────────────────────── Day 03
  {
    id: "d3",
    label: "Day 03",
    date: "Fri · Oct 16",
    theme: "Afterglow",
    blurb: "We wind down with reflection, applied workshops, and a closing fireside that names the work to come.",
    tracks: [
      {
        id: "d3-main",
        name: "Mainstage",
        subtitle: "Grand Hall",
        icon: "local_fire_department",
        accent: "core",
        sessions: [
          { id: "d3-m-1", start: "09:30", end: "10:15", title: "Morning Reading — Afterglow",
            kind: "keynote",
            abstract: "A quieter opening, befitting the third day. Nadia reads from her forthcoming book on editorial systems.",
            speakers: [NADIA] },
          { id: "d3-m-2", start: "10:30", end: "11:15", title: "Research Showcase",
            kind: "talk",
            abstract: "Three Phoenix Institute researchers present in 12-minute slots: Wren on scheduling, plus two surprise guests.",
            speakers: [WREN, ELE] },
          { id: "d3-m-3", start: "11:30", end: "12:30", title: "Panel — What We Got Wrong",
            kind: "panel",
            abstract: "Senior practitioners revisit predictions from previous years. Honest, unsparing, occasionally funny.",
            speakers: [ANYA, RUI, MIRA, ELE] },
          { id: "d3-m-4", start: "12:30", end: "14:00", title: "Lunch", kind: "break", abstract: "Final lunch.", speakers: [] },
          { id: "d3-m-5", start: "14:00", end: "15:00", title: "Closing Keynote — The Work Ahead",
            kind: "keynote",
            abstract: "A direct, named-priorities address: what the field should focus on between now and next October.",
            speakers: [MIRA, ELE], tags: ["keynote","closing"] },
          { id: "d3-m-6", start: "15:15", end: "16:30", title: "Closing Fireside",
            kind: "panel",
            abstract: "An open mic and a long round-table to close the conference. Recommended for those staying for the late train.",
            speakers: [MIRA, NADIA, RUI, ANYA, DEV] },
        ],
      },
      {
        id: "d3-work",
        name: "Workshop",
        subtitle: "The Foundry",
        icon: "construction",
        accent: "gold",
        sessions: [
          { id: "d3-w-1", start: "10:00", end: "12:00", title: "Editorial Layout in Code",
            kind: "workshop",
            abstract: "Hands-on — we'll port a print spread to a fully responsive web layout in two hours.",
            speakers: [NADIA, PRIYA, SAM], capacity: 40 },
          { id: "d3-w-2", start: "14:00", end: "16:00", title: "Cloudflare Pages — Production Patterns",
            kind: "workshop",
            abstract: "Real-world production patterns for Pages: routing, caching, observability. Laptop required.",
            speakers: [KIRA], capacity: 50, tags: ["cloudflare","workshop"] },
        ],
      },
      {
        id: "d3-lounge",
        name: "Lounge",
        subtitle: "Salon Rouge",
        icon: "forum",
        accent: "crimson",
        sessions: [
          { id: "d3-l-1", start: "11:00", end: "12:30", title: "Letters to Future Self",
            kind: "lounge",
            abstract: "A guided 90-minute writing session. Pens & paper provided. Letters mailed back to attendees in October 2027.",
            speakers: [] },
          { id: "d3-l-2", start: "16:30", end: "18:00", title: "Final Drinks — Salon Rouge",
            kind: "break",
            abstract: "An informal close. Quiet music, low light, no programming.",
            speakers: [] },
        ],
      },
    ],
  },
];
