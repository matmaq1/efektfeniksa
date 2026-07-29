// Pelna agenda Efektu Feniksa 2026.
// Zrodlo: arkusz "Efekt 2026 - zespol", zakladka "WWW Agenda" (wersja pod strone).
// Pozycje prelegentow wskazuja slug z ../data/prelegenci - tytul, sala i opis
// sa brane stamtad, zeby nie duplikowac tresci w dwoch miejscach.
//
// tbc: true = pozycja koliduje w arkuszu z inna (ta sama sala i godzina) albo nie ma
// jeszcze godziny. Na stronie dostaje etykiete "do potwierdzenia".

export type Kind = 'konkurs' | 'przerwa' | 'wieczor' | 'logistyka' | 'scena' | 'prelekcja';

export type AgendaItem = {
  time: string;
  room: string;
  title?: string;
  kind: Kind;
  note?: string;
  speaker?: string;
  tbc?: boolean;
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

export const agenda: AgendaDay[] = [
  {
    key: 'piatek',
    label: 'Piątek',
    date: '28.08',
    intro: 'Dzień otwarcia - poznajemy miasto, ruszają pierwsze dwa konkursy, a wieczór należy do integracji przy ognisku.',
    items: [
      { time: '10:30-13:30', room: '', kind: 'logistyka', title: 'Zwiedzanie Kalisza',
        note: 'Spacer po najstarszym mieście w Polsce - historia, klimat i pierwsze rozmowy przed startem. Udział opcjonalny.' },
      { time: '10:30-14:30', room: 'Warsztatowa I', kind: 'logistyka', title: 'COT - Club Officer Training',
        note: 'Szkolenie dla zarządów klubów Toastmasters.' },
      { time: '14:00-19:00', room: '', kind: 'logistyka', title: 'Rejestracja uczestników i gości',
        note: 'Odbiór wejściówek i materiałów, zapoznanie z przestrzenią Uniwersytetu Kaliskiego.' },
      { time: '15:30-17:00', room: 'AULA', kind: 'konkurs', title: 'Konkurs Mów Humorystycznych',
        note: 'Otwarcie konferencji, a zaraz po nim pierwsza konkurencja - błyskotliwy humor na scenie głównej.' },
      { time: '17:00-17:30', room: 'AULA', kind: 'przerwa', title: 'Przerwa' },
      { time: '17:30-18:30', room: 'AULA', kind: 'konkurs', title: 'Konkurs Gorących Pytań',
        note: 'Improwizacja pod presją czasu - mowa testowa, a potem uczestnicy jeden po drugim.' },
      { time: '19:00-20:30', room: '', kind: 'prelekcja', speaker: 'artur-sojka',
        note: 'Networking z integracją - praktyczne warsztaty budowania relacji, prowadzi Artur Sójka. Zamiast luźnego mixera: konkretne techniki, które od razu ćwiczysz na sali.' },
      { time: '20:30-02:00', room: '', kind: 'wieczor', title: 'Piknik i ognisko',
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
      { time: '17:00-17:45', room: 'Warsztatowa I', kind: 'prelekcja', speaker: 'czarnieski-turek',
        note: 'Wywiad z Ewą Turek, prowadzi Michał Czarnieski.' },
      { time: '17:00-17:45', room: 'Warsztatowa II', kind: 'prelekcja', speaker: 'adrian-dornia' },
      { time: '18:30-19:30', room: 'AULA', kind: 'konkurs', title: 'Ogłoszenie wyników konkursów',
        note: 'Moment prawdy - wyniki wszystkich czterech konkurencji.' },
      { time: '20:30-02:00', room: '', kind: 'wieczor', title: 'Gala i integracja',
        note: 'Uroczysta gala i wspólne świętowanie w Komoda Club przy ul. Niecałej 6.' },
    ],
  },
  {
    key: 'niedziela',
    label: 'Niedziela',
    date: '30.08',
    intro: 'Spokojniejszy finał - poranny koncert, dwa bloki krótkich prelekcji na trzech salach, panel dyskusyjny i wspólne pożegnanie.',
    items: [
      { time: '09:00-10:00', room: 'AULA', kind: 'scena', title: 'Koncert',
        note: 'Poranny akcent na scenie głównej.' },
      { time: '10:00-10:20', room: 'AULA', kind: 'prelekcja', speaker: 'pawel-konieczko' },
      { time: '10:00-10:20', room: 'Warsztatowa I', kind: 'prelekcja', speaker: 'lukasz-ostrowski' },
      { time: '10:00-10:45', room: 'Warsztatowa II', kind: 'prelekcja', speaker: 'agnieszka-brak' },
      { time: '10:20-10:40', room: 'AULA', kind: 'prelekcja', speaker: 'anna-kaldonek' },
      { time: '10:30-10:50', room: 'Warsztatowa I', kind: 'prelekcja', speaker: 'karolina-rzeznik' },
      { time: '10:40-11:00', room: 'AULA', kind: 'prelekcja', speaker: 'michal-golemo' },
      { time: '11:00-11:45', room: 'Warsztatowa I', kind: 'prelekcja', speaker: 'agnieszka-ciochon' },
      { time: '11:00-11:45', room: 'Warsztatowa II', kind: 'prelekcja', speaker: 'eliza-krzak' },
      // 11:11 to celowa godzina startu panelu, nie literowka - potwierdzone przez organizatora
      { time: '11:11-12:30', room: 'AULA', kind: 'scena', title: 'Panel dyskusyjny',
        note: 'Historia i przyszłość Efektu Feniksa - rozmowa z organizatorami i społecznością. Start punktualnie o 11:11.' },
      { time: '12:00-12:20', room: 'Warsztatowa I', kind: 'prelekcja', speaker: 'luiza-markiewicz' },
      { time: '12:00-12:20', room: 'Warsztatowa II', kind: 'prelekcja', speaker: 'marta-glegolska' },
      { time: '13:00-14:30', room: 'AULA', kind: 'scena', title: 'Uroczyste zakończenie konferencji',
        note: 'Podsumowanie trzech dni i pożegnanie społeczności Efektu Feniksa.' },
    ],
  },
];
