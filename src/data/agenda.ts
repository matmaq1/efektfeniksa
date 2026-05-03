// src/data/agenda.ts
export type Speaker = {
  id: string; name: string; role: string; org: string; bio: string; avatarHue: number;
};
export type Session = {
  id: string; start: string; end: string; title: string;
  kind: "keynote" | "talk" | "workshop" | "panel" | "break" | "lounge";
  abstract: string; speakers: Speaker[]; capacity?: number; tags?: string[];
};
export type Track = {
  id: string; name: string; subtitle: string; icon: string;
  accent: "core" | "gold" | "crimson"; sessions: Session[];
};
export type Day = {
  id: string; label: string; date: string; theme: string; blurb: string; tracks: Track[];
};

const sp = (id: string, name: string, role: string, org: string, bio: string, hue: number): Speaker => ({ id, name, role, org, bio, avatarHue: hue });

const MAREK = sp("marek", "Marek Jarosławski", "Główny Prelegent", "Toastmasters", "Ekspert w dziedzinie psychologii przemawiania publicznego i treningu odporności.", 18);
const ANNA  = sp("anna", "Anna Kowalska", "Facylitator", "Toastmasters", "Trener emisji głosu specjalizujący się w tonie, projekcji i komunikacji perswazyjnej.", 32);
const PIOTR = sp("piotr", "Piotr Lewandowski", "Sędzia Konkursowy", "Toastmasters", "Mistrz Toastmasters International z ponad 15-letnim doświadczeniem scenicznym.", 42);

export const ALL_SPEAKERS = [MAREK, ANNA, PIOTR];

export const GALLERY = [
  {
    id: "marek", name: "Marek Jarosławski", role: "Główny Prelegent, Toastmasters", org: "Toastmasters", country: "Kalisz, Polska", hue: 18,
    bio: "Ekspert w dziedzinie psychologii przemawiania publicznego. Pomógł setkom mówców przełamać tremę.",
    stats: [{k:"Lat doświadczenia", v:"20+"}, {k:"Wystąpień", v:"500+"}], links: ["LinkedIn"],
    workshop: {
      kind: "Keynote", icon: "auto_awesome", day: "Dzień 01", duration: "2h",
      titleA: "Psychologia", titleB: "Sceny.",
      description: "Marek podzieli się sekretami kontrolowania emocji i budowania trwałej więzi z publicznością.",
      points: ["Techniki radzenia sobie z tremą", "Zarządzanie uwagą"], capacity: 100, level: "Wszyscy", lang: "PL",
    },
  },
  {
    id: "anna", name: "Anna Kowalska", role: "Facylitator, Toastmasters", org: "Toastmasters", country: "Kalisz, Polska", hue: 32,
    bio: "Trener emisji głosu specjalizujący się w tonie i komunikacji.",
    stats: [{k:"Lat na scenie", v:"10"}, {k:"Szkoleń", v:"300"}], links: ["LinkedIn"],
    workshop: {
      kind: "Warsztat", icon: "construction", day: "Dzień 02", duration: "3h",
      titleA: "Głos jako", titleB: "Narzędzie.",
      description: "Praktyczny warsztat z emisji głosu i perswazji.",
      points: ["Trening oddechu", "Modulacja i tempo"], capacity: 35, level: "Średnio", lang: "PL",
    },
  }
];

export const AGENDA_DAYS: Day[] = [
  {
    id: "d1", label: "Dzień 01", date: "Piątek · 28 Sierpnia", theme: "Odrodzenie", blurb: "Rozpalamy ogień.",
    tracks: [
      {
        id: "d1-main", name: "Scena Główna", subtitle: "Centrum Kultury", icon: "local_fire_department", accent: "core",
        sessions: [
          { id: "s1", start: "09:30", end: "10:30", title: "Otwarcie: Wspólny Ogień", kind: "keynote", abstract: "Powitanie uczestników.", speakers: [MAREK], tags: ["keynote"] },
          { id: "s2", start: "11:00", end: "12:30", title: "Warsztat Emisji Głosu", kind: "workshop", abstract: "Warsztaty z Anną.", speakers: [ANNA], tags: ["warsztat"] },
          { id: "s3", start: "14:00", end: "16:00", title: "Konkurs Mów Ewaluacyjnych", kind: "panel", abstract: "Piotr ocenia uczestników.", speakers: [PIOTR], tags: ["konkurs"] }
        ]
      }
    ]
  }
];
