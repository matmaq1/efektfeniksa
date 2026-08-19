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
  /** Miejsce poza kampusem - na stronie głównej dostaje małą mapkę pod kartą. */
  venue?: { name: string; address: string };
  /** Pozycja wyróżniona: na stronie głównej dostaje dużą kartę ze zdjęciem. */
  feature?: boolean;
  /**
   * Ogranicza pozycję do jednego widoku:
   *   'skrot' - tylko zakładki dni na stronie głównej (przegląd),
   *   'pelna' - tylko kalendarz /agenda i tabela z całym programem.
   * Bez tego pola pozycja jest widoczna wszędzie. Używane tam, gdzie przegląd
   * ma pokazać jeden zbiorczy blok, a szczegóły - rozpisane wystąpienia.
   */
  only?: 'skrot' | 'pelna';
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
/** Pozycje widoczne w danym widoku - patrz AgendaItem.only. */
export const viewItems = (items: AgendaItem[], view: 'skrot' | 'pelna'): AgendaItem[] =>
  items.filter(it => !it.only || it.only === view);

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
        venue: { name: 'Ramen Shop & Sushi', address: 'ul. Kazimierzowska 4, 62-800 Kalisz' },
        note: 'Klub z Warszawy przenosi swoje 572. spotkanie do Kalisza. Przemówienia, improwizacja, inspirujące historie i przestrzeń na poznanie nowych ludzi - to nie będzie zwykłe spotkanie klubu, tylko spotkanie klubów z całej Polski. Spotykamy się w restauracji Ramen Shop & Sushi przy ul. Kazimierzowskiej 4 w Kaliszu.' },
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
      { time: '10:30-12:30', room: '', kind: 'logistyka', title: 'Zwiedzanie Kalisza', feature: true,
        image: '/images/kalisz-centrum-polski.webp',
        note: 'Spacer z przewodnikiem po najstarszym mieście w Polsce - historia, klimat i pierwsze rozmowy przed startem. Po wycieczce zostaje czas, żeby zostać w centrum na obiad i wrócić na kampus na własnych zasadach. Udział opcjonalny.' },
      // Welcome networking celowo nie jest osobna pozycja - to ostatni blok COT-u
      // i organizatorzy poprosili, zeby nie wydzielac go w agendzie.
      { time: '12:00-15:15', room: 'Warsztatowa I', kind: 'logistyka', title: 'COT - Club Officer Training',
        note: 'Szkolenie dla zarządów klubów Toastmasters: prezentacja o Dystrykcie 231, szkolenia z funkcji oficerów (równolegle na dwóch salach), panel o rozwiązywaniu konfliktów, a na koniec moderowany welcome networking otwarty dla wszystkich.' },
      // Rejestracja realnie dziala dluzej, ale w agendzie podajemy zamkniete
      // okna - zeby ludzie zjawiali sie wtedy, kiedy przy stanowisku stoi pelna
      // obsada, a nie w trakcie pierwszego konkursu.
      { time: '14:00-14:30', room: '', kind: 'logistyka', title: 'Rejestracja zawodników konkursów',
        note: 'Stanowisko w holu głównym. Zawodnicy rejestrują się jako pierwsi, jeszcze przed próbą generalną na scenie głównej.' },
      { time: '14:30-15:15', room: '', kind: 'logistyka', title: 'Rejestracja gości i uczestników',
        note: 'Stanowisko w holu głównym: odbiór wejściówek i materiałów, zapoznanie z przestrzenią Uniwersytetu Kaliskiego. To okno, w którym przy rejestracji jest największa obsada - przyjdź wtedy, a odbierzesz wszystko bez kolejki i zdążysz na otwarcie.' },
      { time: '15:30-17:10', room: 'AULA', kind: 'konkurs', title: 'Konkurs Mów Humorystycznych',
        note: 'Otwarcie konferencji, a zaraz po nim pierwsza konkurencja Mistrzostw - błyskotliwy humor na scenie głównej.' },
      { time: '17:40-18:40', room: 'AULA', kind: 'konkurs', title: 'Konkurs Gorących Pytań',
        note: 'Improwizacja pod presją czasu: każdy zawodnik odpowiada na to samo, nieznane wcześniej pytanie.' },
      { time: '19:00', room: '', kind: 'wieczor', title: 'Piknik i zabawy integracyjne',
        note: 'Luźny wieczór na terenie kampusu: jedzenie, zabawy integracyjne i nowe znajomości. Kończymy wtedy, kiedy skończą się rozmowy.' },
    ],
  },
  {
    key: 'sobota',
    label: 'Sobota',
    date: '29.08',
    intro: 'Najintensywniejszy dzień - dwa kluczowe konkursy przed obiadem, trzy bloki prelekcji i warsztatów po nim, a na koniec wyniki i gala.',
    items: [
      { time: '08:30-09:00', room: '', kind: 'logistyka', title: 'Rejestracja zawodników konkursów',
        note: 'Stanowisko w holu głównym. Zawodnicy odbierają wejściówki przed próbą generalną na scenie głównej.' },
      { time: '09:00-09:45', room: '', kind: 'logistyka', title: 'Rejestracja gości i uczestników',
        note: 'Stanowisko w holu głównym - dla wszystkich, którzy dołączają dopiero w sobotę.' },
      { time: '09:00-09:45', room: 'Warsztatowa I', kind: 'prelekcja', speaker: 'maciej-benben' },
      { time: '09:00-09:45', room: 'Warsztatowa II', kind: 'prelekcja', speaker: 'magdalena-andler' },
      { time: '10:00-11:30', room: 'AULA', kind: 'konkurs', title: 'Konkurs Mów Wszelakich',
        note: 'Najważniejsza konkurencja Mistrzostw: przygotowane przemówienia w języku polskim.' },
      { time: '11:50-12:45', room: 'AULA', kind: 'konkurs', title: 'Konkurs Ewaluacji',
        note: 'Sztuka informacji zwrotnej: mowa testowa, a po niej ewaluacje uczestników.' },
      { time: '13:00-15:00', room: '', kind: 'przerwa', title: 'Przerwa obiadowa' },
      { time: '15:00-15:45', room: 'AULA', kind: 'prelekcja', speaker: 'greg-albrecht' },
      { time: '15:00-15:45', room: 'Warsztatowa I', kind: 'prelekcja', speaker: 'jerzy-zientkowski' },
      { time: '15:00-15:45', room: 'Warsztatowa II', kind: 'prelekcja', speaker: 'julia-jasiczak' },
      { time: '16:00-16:45', room: 'AULA', kind: 'prelekcja', speaker: 'przemyslaw-kutnyj' },
      { time: '16:00-16:45', room: 'Warsztatowa I', kind: 'prelekcja', speaker: 'agnieszka-brak' },
      { time: '16:00-16:45', room: 'Warsztatowa II', kind: 'prelekcja', speaker: 'robert-umpirowicz' },
      { time: '17:00-17:45', room: 'AULA', kind: 'prelekcja', speaker: 'piotr-rudzki' },
      { time: '17:00-17:45', room: 'Warsztatowa I', kind: 'prelekcja', speaker: 'czarniewski-turek' },
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
    intro: 'Spokojniejszy finał - poranna niespodzianka, prelekcje i warsztaty na trzech salach, panel dyskusyjny i wspólne pożegnanie. W bloku albo jedno wystąpienie na pełne 45 minut, albo dwa po 20 minut.',
    items: [
      { time: '09:00-09:45', room: 'AULA', kind: 'scena', title: 'Niespodzianka',
        note: 'Poranny akcent na scenie głównej. Szczegóły zdradzimy bliżej wydarzenia.' },
      // Przeglad dnia pokazuje jeden zbiorczy blok (prosba organizatorow),
      // ale szczegolowy kalendarz i tabela nadal rozpisuja kazde wystapienie.
      { time: '09:45-13:00', room: '', kind: 'prelekcja', only: 'skrot',
        title: 'Prelekcje, warsztaty, panel dyskusyjny',
        note: 'Trzy sale równolegle: prelekcje i warsztaty w blokach 20- i 45-minutowych, a na zakończenie panel dyskusyjny o historii i przyszłości Efektu Feniksa.' },
      { time: '09:45-10:05', room: 'AULA', kind: 'prelekcja', only: 'pelna', speaker: 'pawel-konieczko' },
      { time: '09:45-10:05', room: 'Warsztatowa I', kind: 'prelekcja', only: 'pelna', title: 'Arek Ćwiek',
        note: 'Temat wystąpienia podamy wkrótce.' },
      { time: '09:45-10:30', room: 'Warsztatowa II', kind: 'prelekcja', only: 'pelna', speaker: 'agnieszka-ciochon' },
      { time: '10:10-10:30', room: 'AULA', kind: 'prelekcja', only: 'pelna', speaker: 'anna-kaldonek' },
      { time: '10:10-10:30', room: 'Warsztatowa I', kind: 'prelekcja', only: 'pelna', speaker: 'karolina-rzeznik' },
      { time: '10:45-11:05', room: 'AULA', kind: 'prelekcja', only: 'pelna', speaker: 'lukasz-ostrowski' },
      { time: '10:45-11:05', room: 'Warsztatowa I', kind: 'prelekcja', only: 'pelna', speaker: 'luiza-markiewicz' },
      { time: '10:45-11:30', room: 'Warsztatowa II', kind: 'prelekcja', only: 'pelna', speaker: 'eliza-krzak' },
      { time: '11:10-11:30', room: 'AULA', kind: 'prelekcja', only: 'pelna', speaker: 'michal-golemo' },
      { time: '11:10-11:30', room: 'Warsztatowa I', kind: 'prelekcja', only: 'pelna', speaker: 'marta-glegolska' },
      { time: '11:45-12:45', room: 'AULA', kind: 'scena', only: 'pelna', title: 'Panel dyskusyjny',
        note: 'Historia i przyszłość Efektu Feniksa - historie byłych organizatorów. Prowadzi Angelika Głowacka, w panelu m.in. Renata Grenda, Damian Głowiński, Anna Białkowska, Michał Włosiński i Wojciech Mach.' },
      // Bez godziny konca - wprost poproszone o to w arkuszu ("nie pisac godziny
      // zakonczenia w agendzie"), zeby nikt nie wychodzil z sali z zegarkiem w reku.
      { time: '13:00', room: 'AULA', kind: 'scena', title: 'Uroczyste zakończenie konferencji',
        note: 'Podsumowanie trzech dni i pożegnanie społeczności Efektu Feniksa.' },
    ],
  },
];
