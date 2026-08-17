// Pelna agenda Efektu Feniksa 2026.
// Zrodlo: arkusz "Efekt 2026 - zespol", zakladka "WWW Agenda" (wersja pod strone),
// godziny doprecyzowane z zakladki "agenda techniczna" (nowsza).
// Czwartek pochodzi z wydarzenia na Facebooku Toastmasters Centrum (spotkanie 572).
// Pozycje prelegentow wskazuja slug z ../data/prelegenci - tytul, sala i opis
// sa brane stamtad, zeby nie duplikowac tresci w dwoch miejscach.

export type Kind = 'konkurs' | 'przerwa' | 'wieczor' | 'logistyka' | 'scena' | 'prelekcja' | 'klub';

export type AgendaItem = {
  time: string;
  room: string;
  title?: string;
  kind: Kind;
  note?: string;
  speaker?: string;
  /** Grafika do rozwinięcia karty tam, gdzie nie ma prelegenta ze zdjęciem. */
  image?: string;
  /** Link zewnętrzny - np. wydarzenie na Facebooku. */
  link?: string;
  /** Pozycja wyróżniona: na stronie głównej dostaje dużą kartę ze zdjęciem. */
  feature?: boolean;
};

export type AgendaDay = {
  key: string;
  label: string;
  date: string;
  intro: string;
  items: AgendaItem[];
};

/** Trzy sale w kolejnosci, w jakiej stoja w kolumnach na stronie i w arkuszu. */
export const ROOMS = ['AULA', 'Warsztatowa I', 'Warsztatowa II'];

/** slug sali do filtrowania na mobile; pozycje bez sali dostaja 'all' */
export const roomSlug = (room: string): string =>
  room === 'AULA' ? 'aula'
  : room === 'Warsztatowa I' ? 'w1'
  : room === 'Warsztatowa II' ? 'w2'
  : 'all';

const startMin = (t: string): number => {
  const m = /^(\d{1,2}):(\d{2})/.exec(t);
  return m ? Number(m[1]) * 60 + Number(m[2]) : 9999;
};

/**
 * Grupuje pozycje dnia po GODZINIE STARTU (nie po calym zakresie), zeby
 * 10:00-10:20 i 10:00-10:45 trafily do jednego wiersza siatki i trzy sale
 * stanely obok siebie. Pelny zakres kazdej pozycji zostaje na jej karcie.
 */
export function groupByStart(items: AgendaItem[]): { start: string; items: AgendaItem[] }[] {
  const sorted = [...items].sort((a, b) => startMin(a.time) - startMin(b.time));
  const out: { start: string; items: AgendaItem[] }[] = [];
  for (const it of sorted) {
    const key = it.time.split('-')[0].trim();
    const last = out[out.length - 1];
    if (last && last.start === key) last.items.push(it);
    else out.push({ start: key, items: [it] });
  }
  return out;
}

const endMin = (t: string): number => {
  const [a, b] = t.split('-');
  const s = startMin(a);
  if (!b) return s + 30;
  const m = /^(\d{1,2}):(\d{2})/.exec(b.trim());
  const e = m ? Number(m[1]) * 60 + Number(m[2]) : s + 30;
  return e <= s ? e + 24 * 60 : e;
};

const hhmm = (m: number): string =>
  String(Math.floor(m / 60) % 24).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0');

export type SummaryRow = { time: string; items: AgendaItem[] };

/**
 * Skrot dnia na strone glowna - to samo zrodlo co pelny kalendarz, tylko
 * grubszym pedzlem. Prelekcje idace rownolegle (i bloki rozdzielone krotka
 * przerwa) schodza sie w jeden wiersz, a kwadransowe przerwy miedzy nimi w
 * ogole nie trafiaja na liste. Zostaje szkielet dnia, ktory da sie przeczytac
 * w kilka sekund; szczegoly czekaja na /agenda.
 */
export function summarise(day: AgendaDay): SummaryRow[] {
  const rows: SummaryRow[] = [];
  const sorted = [...day.items]
    .filter(it => !(it.kind === 'przerwa' && endMin(it.time) - startMin(it.time) < 60))
    .sort((a, b) => startMin(a.time) - startMin(b.time));

  for (const it of sorted) {
    // Szukamy wstecz ostatniego bloku prelekcji, a nie tylko poprzedniego
    // wiersza: w sobote miedzy rownoleglymi wystapieniami siedzi "Gosc
    // specjalny", a bez tego rozbijalby blok 15:00-17:45 na trzy kawalki.
    const host = it.kind === 'prelekcja'
      ? [...rows].reverse().find(r => r.items.every(p => p.kind === 'prelekcja'))
      : undefined;
    const joins = host && startMin(it.time) - Math.max(...host.items.map(p => endMin(p.time))) <= 30;
    if (joins) host.items.push(it);
    else rows.push({ time: '', items: [it] });
  }

  return rows.map(r => ({
    ...r,
    time: r.items.length === 1
      ? r.items[0].time
      : `${hhmm(Math.min(...r.items.map(i => startMin(i.time))))}-${hhmm(Math.max(...r.items.map(i => endMin(i.time))))}`,
  }));
}

export const agenda: AgendaDay[] = [
  {
    key: 'czwartek',
    label: 'Czwartek',
    date: '27.08',
    intro: 'Dzień przed konferencją. Toastmasters Centrum z Warszawy zabiera swoje spotkanie do Kalisza, a zaraz po nim spotykamy się na luźnym before party.',
    items: [
      { time: '19:15-21:30', room: '', kind: 'klub', title: 'Spotkanie klubu Toastmasters Centrum', feature: true,
        image: '/images/wydarzenia/tm-centrum-kalisz.webp',
        link: 'https://www.facebook.com/events/2059887384612880/',
        note: 'Klub z Warszawy przenosi swoje 572. spotkanie do Kalisza. Przemówienia, improwizacja, inspirujące historie i przestrzeń na poznanie nowych ludzi - to nie będzie zwykłe spotkanie klubu, tylko spotkanie klubów z całej Polski. Dokładną lokalizację podamy wkrótce.' },
      { time: '21:00', room: '', kind: 'wieczor', title: 'Before party',
        note: 'Luźne spotkanie na rozgrzewkę - bez agendy i bez scenariusza. Dla wszystkich, którzy przyjeżdżają do Kalisza dzień wcześniej.' },
    ],
  },
  {
    key: 'piatek',
    label: 'Piątek',
    date: '28.08',
    intro: 'Dzień otwarcia - poznajemy miasto, ruszają pierwsze dwa konkursy, a wieczór należy do integracji przy grillu.',
    items: [
      { time: '10:00-12:00', room: '', kind: 'logistyka', title: 'Zwiedzanie Kalisza', feature: true,
        image: '/images/kalisz-centrum-polski.webp',
        note: 'Spacer po najstarszym mieście w Polsce - historia, klimat i pierwsze rozmowy przed startem. Zaczynamy zanim ruszy konferencja, więc to najlepszy moment, żeby poznać Kalisz i ludzi, z którymi spędzisz kolejne trzy dni. Udział opcjonalny.' },
      { time: '12:00-14:30', room: 'Warsztatowa I', kind: 'logistyka', title: 'COT - Club Officer Training',
        note: 'Szkolenie dla zarządów klubów Toastmasters: prezentacja o Dystrykcie 231, szkolenia z funkcji oficerów (równolegle na dwóch salach) i panel o rozwiązywaniu konfliktów.' },
      { time: '14:00-19:00', room: '', kind: 'logistyka', title: 'Rejestracja uczestników i gości',
        note: 'Odbiór wejściówek i materiałów, zapoznanie z przestrzenią Uniwersytetu Kaliskiego.' },
      { time: '14:30-15:15', room: 'Warsztatowa I', kind: 'prelekcja', title: 'Moderowany Welcome Networking - Grzegorz Turniak',
        note: 'Rozgrzewka towarzyska przed otwarciem konferencji - moderowana tak, żeby każdy zdążył poznać kilka nowych osób.' },
      { time: '15:30-17:00', room: 'AULA', kind: 'konkurs', title: 'Konkurs Mów Humorystycznych',
        note: 'Otwarcie konferencji, a zaraz po nim pierwsza konkurencja - błyskotliwy humor na scenie głównej.' },
      { time: '17:00-17:30', room: 'AULA', kind: 'przerwa', title: 'Przerwa' },
      { time: '17:30-18:30', room: 'AULA', kind: 'konkurs', title: 'Konkurs Gorących Pytań',
        note: 'Improwizacja pod presją czasu - każdy uczestnik wchodzi na scenę po kolei i odpowiada na to samo, nieznane wcześniej pytanie.' },
      { time: '19:00-20:30', room: '', kind: 'prelekcja', speaker: 'artur-sojka',
        note: 'Networking z integracją - praktyczne warsztaty budowania relacji, prowadzi Artur Sójka. Zamiast luźnego mixera: konkretne techniki, które od razu ćwiczysz na sali.' },
      { time: '20:30-02:00', room: '', kind: 'wieczor', title: 'Piknik i grill',
        note: 'Luźny wieczór w dobrym towarzystwie: jedzenie, rozmowy i nowe znajomości.' },
    ],
  },
  {
    key: 'sobota',
    label: 'Sobota',
    date: '29.08',
    intro: 'Najintensywniejszy dzień - dwa kluczowe konkursy przed obiadem, trzy bloki prelekcji i warsztatów po nim, a na koniec wyniki i gala.',
    items: [
      { time: '09:00-09:45', room: 'Warsztatowa I', kind: 'prelekcja', speaker: 'maciej-benben' },
      { time: '09:00-09:45', room: 'Warsztatowa II', kind: 'prelekcja', speaker: 'magdalena-andler' },
      { time: '10:00-11:30', room: 'AULA', kind: 'konkurs', title: 'Konkurs Mów Wszelakich',
        note: 'Najważniejsza konkurencja Mistrzostw - przygotowane przemówienia w języku polskim.' },
      { time: '11:30-12:00', room: 'AULA', kind: 'przerwa', title: 'Przerwa' },
      { time: '12:00-13:00', room: 'AULA', kind: 'konkurs', title: 'Konkurs Ewaluacji',
        note: 'Sztuka informacji zwrotnej - mowa testowa, a po niej ewaluacje uczestników.' },
      { time: '13:00-15:00', room: '', kind: 'przerwa', title: 'Przerwa obiadowa' },
      { time: '15:00-15:45', room: 'AULA', kind: 'prelekcja', speaker: 'greg-albrecht' },
      { time: '15:00-15:45', room: 'Warsztatowa I', kind: 'prelekcja', speaker: 'jerzy-zientkowski' },
      { time: '15:00-15:45', room: 'Warsztatowa II', kind: 'prelekcja', speaker: 'julia-jasiczak' },
      { time: '16:00-16:45', room: 'AULA', kind: 'prelekcja', speaker: 'przemyslaw-kutnyj' },
      { time: '16:00-16:45', room: 'Warsztatowa I', kind: 'scena', title: 'Gość specjalny',
        note: 'Nazwisko zostanie ogłoszone wkrótce.' },
      { time: '16:00-16:45', room: 'Warsztatowa II', kind: 'prelekcja', speaker: 'robert-umpirowicz' },
      { time: '17:00-17:45', room: 'AULA', kind: 'prelekcja', speaker: 'piotr-rudzki' },
      { time: '17:00-17:45', room: 'Warsztatowa I', kind: 'prelekcja', speaker: 'czarniewski-turek',
        note: 'Wywiad z Ewą Turek, prowadzi Michał Czarniewski.' },
      { time: '17:00-17:45', room: 'Warsztatowa II', kind: 'prelekcja', speaker: 'adrian-dornia' },
      { time: '18:00-19:00', room: 'AULA', kind: 'konkurs', title: 'Ogłoszenie wyników konkursów',
        note: 'Moment prawdy - wyniki wszystkich czterech konkurencji.' },
      { time: '21:00-02:00', room: '', kind: 'wieczor', title: 'Gala i integracja',
        note: 'Uroczysta gala i wspólne świętowanie w Komoda Club przy ul. Niecałej 6.' },
    ],
  },
  {
    key: 'niedziela',
    label: 'Niedziela',
    date: '30.08',
    intro: 'Spokojniejszy finał - poranna niespodzianka, dwa bloki krótkich prelekcji na trzech salach, panel dyskusyjny i wspólne pożegnanie.',
    items: [
      { time: '09:00-10:00', room: 'AULA', kind: 'scena', title: 'Niespodzianka',
        note: 'Poranny akcent na scenie głównej. Nazwisko zostanie ogłoszone wkrótce.' },
      { time: '10:00-10:20', room: 'AULA', kind: 'prelekcja', speaker: 'pawel-konieczko' },
      { time: '10:00-10:20', room: 'Warsztatowa I', kind: 'prelekcja', speaker: 'lukasz-ostrowski' },
      { time: '10:00-10:45', room: 'Warsztatowa II', kind: 'prelekcja', speaker: 'agnieszka-brak' },
      { time: '10:20-10:40', room: 'AULA', kind: 'prelekcja', speaker: 'anna-kaldonek' },
      { time: '10:30-10:50', room: 'Warsztatowa I', kind: 'prelekcja', speaker: 'karolina-rzeznik' },
      { time: '10:40-11:00', room: 'AULA', kind: 'prelekcja', speaker: 'michal-golemo' },
      { time: '11:00-11:45', room: 'Warsztatowa I', kind: 'prelekcja', speaker: 'agnieszka-ciochon' },
      { time: '11:00-11:45', room: 'Warsztatowa II', kind: 'prelekcja', speaker: 'eliza-krzak' },
      { time: '11:00-12:30', room: 'AULA', kind: 'scena', title: 'Panel dyskusyjny',
        note: 'Historia i przyszłość Efektu Feniksa - rozmowa z organizatorami i społecznością.' },
      { time: '12:00-12:20', room: 'Warsztatowa I', kind: 'prelekcja', speaker: 'luiza-markiewicz' },
      { time: '12:00-12:20', room: 'Warsztatowa II', kind: 'prelekcja', speaker: 'marta-glegolska' },
      // Bez godziny konca - wprost poproszone o to w arkuszu ("nie pisac godziny
      // zakonczenia w agendzie"), zeby nikt nie wychodzil z sali z zegarkiem w reku.
      { time: '13:00', room: 'AULA', kind: 'scena', title: 'Uroczyste zakończenie konferencji',
        note: 'Podsumowanie trzech dni i pożegnanie społeczności Efektu Feniksa.' },
    ],
  },
];
