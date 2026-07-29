// Prelegenci i prowadzący - Efekt Feniksa 2026.
// Źródło: arkusz "Efekt 2026 - zespół", zakładki "WWW Agenda" + "prelegenci opisy".
// Zdjęcia: 1200x1500 WebP q85 w /public/images/prelegenci/.

export type Block = { t: 'p' | 'li' | 'h'; s: string };
export type Link = { label: string; url: string };

export type Speaker = {
  slug: string;
  name: string;
  photo: string | null;
  day: string;
  date: string;
  room: string;
  time: string;
  format: string;
  title: string;
  desc: Block[];
  intro: Block[];
  tm: Block[];
  misjaLabel: string;
  misja: Block[];
  links: Link[];
};

export const speakers: Speaker[] = [
  {
    slug: "artur-sojka",
    name: "Artur Sójka",
    photo: null,
    day: "Piątek", date: "28.08", room: "", time: "", format: "networking",
    title: "Praktyczne warsztaty umiejętności networkingowych",
    desc: [
      {t:"p",s:"„Jedyne życie, które ma sens, to życie towarzyskie” – mawiał Edward Dziewoński (pseudonim „Dudek”) - wybitny polski aktor, reżyser i legendarny twórca kabaretu Dudek."},
      {t:"p",s:"Ale co jeśli jesteś osobą nieśmiałą, introwertyczną? Jak prowadzić życie towarzyskie, gdy wyzwaniem jest samo przebywanie wśród obcych? A co, jeśli jesteś osobą zbyt ekspansywną i ekstrawertyczną? Widzisz, jak bardzo wielu ludzi zamyka się w sobie i masz kłopot. Czujesz, że dominowanie rozmów to nie najlepsza strategia, ale gdy Ty milkniesz, nastaje ta krępująca cisza? Jak ośmielić innych? A może umiejętności budowania relacji potrzebne Ci są zawodowo/biznesowo? Potrafisz to robić, ale jakoś tak intuicyjnie i nie do końca profesjonalnie?"},
      {t:"p",s:"Jeśli dotyczy Cię którakolwiek z wymienionych sytuacji, to praktyczne warsztaty networkingowe są dla Ciebie! Dzięki zastosowaniu cyklu Kolba pozyskaną podczas nich wiedzę od razu przećwiczysz, a doświadczenia te przekształcisz w trwałe umiejętności."},
      {t:"h",s:"Nauczysz się"},
      {t:"li",s:"kiedy i jak zainicjować rozmowę"},
      {t:"li",s:"jak ją prowadzić, aby zrobić świetnie pierwsze wrażenie"},
      {t:"li",s:"kiedy i jak kulturalnie ją zakończyć"},
      {t:"li",s:"co zrobić po poznaniu nowych ludzi, aby kontakty zamienić w relacje"},
      {t:"p",s:"Networking nie jest umiejętnością dla ekstrawertyków. Jest umiejętnością dla ludzi, którzy chcą budować wartościowe relacje. A tego można się nauczyć. Jeśli więc jesteś osobą, której zależy na dobrych relacjach z innymi, zapraszam."}
    ],
    intro: [
      {t:"p",s:"Jestem praktykiem sprzedaży relacyjnej i networkingu oraz trenerem, który od 2007 roku rozwija i wdraża systemy pozyskiwania klientów poprzez rekomendacje. Jako mówca i moderator networkingu występowałem na licznych wydarzeniach biznesowych i konferencjach. Pełnię funkcję Prezesa Biznes Klub Polska, prowadzę agencję social media, wyspecjalizowaną w LinkedIn Ghost Writers. Jestem też współautorem książki „Eventworking”. Były redaktor naczelny portalu InfoBydgoszcz.pl oraz dziennikarz serwisu MyPolInfo.pl."}
    ],
    tm: [
      {t:"p",s:"Jestem współtwórcą klubów Toastmasters w Bydgoszczy, Lublinie i Warszawie (tutaj zainicjowałem powstanie trzech). Pełniłem funkcje Area Director, wielokrotnie Prezesa Klubu (w 4 klubach), Wiceprezesów ds. Członkowskich i PR."}
    ],
    misjaLabel: "Misja",
    misja: [
      {t:"p",s:"Dziś łączę swoje wszystkie doświadczenia zawodowe w jednym obszarze: uczę, jak budować biznes poprzez relacje, zaufanie i rekomendacje, zamiast przypadkowej sprzedaży."}
    ],
    links: [{label:"LinkedIn",url:"https://www.linkedin.com/in/artursojka/"}],
  },
  {
    slug: "maciej-benben",
    name: "Maciej Benben",
    photo: "/images/prelegenci/maciej-benben.webp",
    day: "Sobota", date: "29.08", room: "Warsztatowa I", time: "9:00-9:45", format: "warsztaty 45 min",
    title: "Table Chatter: Rozmawiaj bez strachu.",
    desc: [
      {t:"h",s:"Warsztaty „Table Chatter” – Opanuj Sztukę Swobodnej Rozmowy"},
      {t:"p",s:"Masz problem z wejściem w dyskusję w obcym towarzystwie? Chcesz mówić płynnie i bez stresu? Te warsztaty łączą naukę z doskonałą zabawą, budując Twoją pewność siebie w każdej sytuacji towarzyskiej."},
      {t:"h",s:"Program warsztatów"},
      {t:"li",s:"Rozgrzewka impro: przełamanie pierwszych lodów i pobudzenie kreatywności."},
      {t:"li",s:"Table chatter: swobodne rozmowy na dowolny temat przy wspólnym stole."},
      {t:"li",s:"Wytrychy słowne: gotowe techniki i zwroty, jak płynnie dołączyć jako trzeci rozmówca."},
      {t:"li",s:"Informacja zwrotna: konstruktywny feedback, który pomoże Ci rozwinąć skrzydła"},
      {t:"h",s:"Czego dowiedzą się uczestnicy warsztatu"},
      {t:"p",s:"Przełamywanie barier: jak bezstresowo inicjować kontakt i szybko budować swobodną atmosferę w nowym otoczeniu. Płynna konwersacja: jak naturalnie podtrzymywać dyskusję na dowolny temat i zapomnieć o niezręcznej ciszy. Dołączanie do rozmowy: jak sprytnie włączać się do trwających dialogów za pomocą gotowych zwrotów. Samoświadomość komunikacyjna: jakie są Twoje mocne strony oraz nad czym warto jeszcze popracować."}
    ],
    intro: [
      {t:"p",s:"Przedsiębiorca, inwestor oraz ekspert HR z ponad 10-letnim doświadczeniem w zarządzaniu kapitałem ludzkim i strategicznym doradztwie biznesowym. Jako członek zarządu Prime Consulting, z sukcesem realizuje projekty łączące talenty z kluczowymi potrzebami biznesowymi na dynamicznym rynku europejskim."},
      {t:"p",s:"W swojej praktyce menedżerskiej i inwestycyjnej unika szablonowych rozwiązań. Decyzje biznesowe opiera na twardych danych oraz zaawansowanej psychologii decyzji. Specjalizuje się w implementacji mechanizmów perswazji i wywierania wpływu, co pozwala mu skutecznie negocjować, budować silne zespoły oraz maksymalizować zwrot z inwestycji."},
      {t:"p",s:"Prywatnie i zawodowo jest głęboko zafascynowany nauką o ludzkich zachowaniach. W codziennej pracy operacyjnej i strategicznej z powodzeniem implementuje koncepcje ekonomii behawioralnej Daniela Kahnemana (teoria systemów myślenia i błędów poznawczych) oraz filary perswazji według Roberta Cialdiniego. Dzięki temu łączy intuicję biznesową z naukowym podejściem do zarządzania."}
    ],
    tm: [],
    misjaLabel: "Misja",
    misja: [
      {t:"p",s:"Dążę do tworzenia przestrzeni, w której biznes spotyka się z humanizmem, a kluczem do tego dialogu jest potęga świadomego słowa. Edukuję i inspiruję do tego, by poprzez zrozumienie własnych potrzeb i emocji, uczyć się głębokiego słuchania oraz akceptacji drugiego człowieka. Wierzę, że precyzyjna i pełna szacunku komunikacja to najcenniejszy kapitał współczesnego lidera, zdolny odmieniać całe organizacje."}
    ],
    links: [],
  },
  {
    slug: "magdalena-andler",
    name: "Magdalena Andler",
    photo: "/images/prelegenci/magdalena-andler.webp",
    day: "Sobota", date: "29.08", room: "Warsztatowa II", time: "9:00-9:45", format: "warsztaty 45 min",
    title: "By ciało chciało - mowa ciała, która wzmacnia przekaz",
    desc: [],
    intro: [],
    tm: [],
    misjaLabel: "Misja",
    misja: [],
    links: [],
  },
  {
    slug: "greg-albrecht",
    name: "Greg Albrecht",
    photo: null,
    day: "Sobota", date: "29.08", room: "AULA", time: "15:00-15:45", format: "prelekcja 45 min",
    title: "",
    desc: [],
    intro: [],
    tm: [],
    misjaLabel: "Misja",
    misja: [],
    links: [],
  },
  {
    slug: "jerzy-zientkowski",
    name: "Jerzy Zientkowski",
    photo: "/images/prelegenci/jerzy-zientkowski.webp",
    day: "Sobota", date: "29.08", room: "Warsztatowa I", time: "15:00-15:45", format: "warsztaty 45 min",
    title: "Pimp my speech, czyli jak stworzyć efektowną mowę!",
    desc: [
      {t:"p",s:"W każdej mowie jest hais. Pieniądz. Sława. Płomień w oczach widowni, serca bijące mocniej, dłonie składające się do oklasków - albo wędrujące w stronę portfeli."},
      {t:"p",s:"Ale ważna jest też i autentyczność, i narzędziowość. Nic po sukcesie tej samej mowy dla jednej widowni, gdy druga podczas niej zasypia."},
      {t:"p",s:"Zbudujmy zatem hais: humor, atraktory, interakcje i strukturę. Odpicujmy istniejącą mowę tak, żeby była benchmarkiem standardu i działała zawsze."},
      {t:"h",s:"Podczas spotkania z Jerzym popracujemy nad pięcioma elementami"},
      {t:"li",s:"benchmark dobrej mowy (jak oceniać swoją własną prezentację)"},
      {t:"li",s:"humor (jak i po co dodać humor do przemowy)"},
      {t:"li",s:"atraktory (jak utrzymać uwagę widowni)"},
      {t:"li",s:"interakcje (jak zaangażować widownię, bez chaosu i nieprzewidywalności)"},
      {t:"li",s:"strutkura (jak zacząć prezentację, żeby od razu chcieli słuchać)"},
      {t:"p",s:"Którko (45 minut), interaktywnie (bo tak), z przykładami i narzędziami od razu do wzięcia (norma, co nie)"}
    ],
    intro: [
      {t:"p",s:"Z wykształcenia informatyk, z zawodu mówca profesjonalny. Z blisko 30‑letnim dorobkiem w biznesie i współpracą z najróżniejszymi branżami i firmami różnej wielkości, posiada doświadczenie i unikatowy punkt patrzenia na skuteczność i efektywność biznesu."}
    ],
    tm: [
      {t:"p",s:"Pięciokrotny mistrz Polski w mowach wszelakich, humorystycznych, improwizowaych i ewaluacji, w języku polskim i angielskim. Dotarł w 2012 do finałów mistrzostw Europy w przemówieniach humorystycznych."},
      {t:"p",s:"W 2011 założył klub Verbal Victory w Poznaniu, współzałożyciel i mentor wielu innych klubów, Jerzy rokrocznie staje na scenach Toastmasters Leadership Institute, dzieląc się wiedzą o organizacji i przemawianiu."}
    ],
    misjaLabel: "Misja",
    misja: [
      {t:"p",s:"Pytany o to, co go pcha do przodu, odpowiada, że najlepszym odczuciem jest iskra w oczach widowni, kiedy ludzie odkrywają w jego prezentacjach narzędzia, schematy albo po prostu perełki wiedzy, które są dla nich wartością. Zwolennik zdrowego rozsądku, lubi mówić o sobie, że “Pozbawia złudzeń, nie pozbawiając marzeń”."}
    ],
    links: [{label:"zientkowski.pl",url:"https://zientkowski.pl/"}, {label:"Facebook",url:"https://www.facebook.com/jerzy.zientkowski"}],
  },
  {
    slug: "julia-jasiczak",
    name: "Julia Jasiczak",
    photo: "/images/prelegenci/julia-jasiczak.webp",
    day: "Sobota", date: "29.08", room: "Warsztatowa II", time: "15:00-15:45", format: "prelekcja 45 min",
    title: "Archetypy marki osobistej. Jak świadomie budować swój indywidualny styl komunikacji.",
    desc: [
      {t:"p",s:"Dlaczego niektóre osoby są natychmiast rozpoznawalne, a inne pomimo dużych kompetencji, mają trudność z pokazaniem światu swojej wartości? Co sprawia, że sposób, w jaki komunikujemy siebie, pozostaje spójny i na długo zapada w pamięć?"},
      {t:"p",s:"Archetypy marki osobistej pomagają lepiej zrozumieć to, w jaki sposób budujemy relacje z odbiorcami. Dają nam narzędzie, które pozwala odkryć nasz naturalny styl komunikacji, świadomie kształtować wizerunek i tworzyć przekaz zgodny z tym, kim jesteśmy i jaką wartość dajemy innym."},
      {t:"p",s:"Znajomość własnego archetypu jest niezbędna do kreowania silnej marki osobistej. Może też stać się inspiracją do rozwijania własnego stylu wystąpień publicznych i świadomego budowania swojej roli jako mówcy."},
      {t:"p",s:"Spójrz na swoją komunikację z nowej perspektywy i odkryj, jak archetypy mogą pomóc Tobie budować bardziej autentyczny i spójny przekaz, który odzwierciedla Twoje wartości i wzmacnia markę osobistą."}
    ],
    intro: [
      {t:"p",s:"W projektowaniu stawia na czystość przekazu, a w biznesie na wyrazisty wizerunek. Julia Jasiczak to specjalistka ds. marek i komunikacji oraz właścicielka agencji kreatywnej PXLnova. Zajmuje się również facylitacją spotkań wspierających decyzyjność liderów."}
    ],
    tm: [
      {t:"p",s:"od 2024 roku rozwija swoje umiejętności przemawiania w klubie Toastmasters Poznań."}
    ],
    misjaLabel: "Misja",
    misja: [
      {t:"p",s:"Jako Wiceprezes ds. Public Relations z pasją kreuje spójną wizję klubu i wspiera innych w budowaniu pewności siebie."}
    ],
    links: [{label:"pxlnova.pl",url:"https://pxlnova.pl/"}, {label:"LinkedIn",url:"https://pl.linkedin.com/in/julia-jasiczak"}],
  },
  {
    slug: "przemyslaw-kutnyj",
    name: "Przemysław Kutnyj",
    photo: "/images/prelegenci/przemyslaw-kutnyj.webp",
    day: "Sobota", date: "29.08", room: "AULA", time: "16:00-16:45", format: "prelekcja 45 min",
    title: "Życie to zagadka, więc szukaj dowodów na to, kim jesteś. O sztuce autonarracji dla popełniających błędy",
    desc: [
      {t:"p",s:"Każdy ma jakąś markę. Wystarczy zapytać o nią tych, którzy zostali w pokoju tuż po naszym wyjściu. Skupiamy się na budowaniu marki, mając na myśli to, jak odczytają nas inni i zapominamy o sobie. Z czego i jak budować historię samego/samej siebie? Jak snuć opowieść, w którą uwierzymy sami na tyle, by stanowiła dla nas światło także wtedy, gdy wokół zrobi się ciemno?"},
      {t:"p",s:"Jak zadbać o to, co stanowi dla nas duchowe spa i gdzie go szukać? Jeśli życie to zagadka, to jak szukać dowodów na to, kim jesteśmy? Czy to, co się wydarzyło, może stanowić trampolinę do tego, co się dopiero stanie? Jeśli tak, to jak skakać, by się nie połamać, bardziej, niż trzeba? Wystąpienie pomoże przyjrzeć się sobie krytycznie, by złapać trop swojej narracji, odsączonej z bieżącego zamętu i marketingowego chaosu."},
      {t:"p",s:"Zobaczysz, że Twoje rozterki wobec siebie są stare jak świat, a skoro tak, to pewnie ktoś wymyślił na nie algorytm. Algorytm, który możesz zastosować w swoim życiu nawet bez AI. Nauczysz się opowiadać o sobie dla siebie bez kłamstw i naciągania faktów, tak aby mieć w życiu więcej sensu. Dzięki temu łatwiej będzie budować swoją markę bez napięcia i prężenia muskułów."},
      {t:"h",s:"Dowiesz się"},
      {t:"li",s:"jak snuć autonarrację"},
      {t:"li",s:"jak szukać dowodów na to, kim jesteś"},
      {t:"li",s:"pożegnasz syndrom oszusta i znajdziesz źródło zdrowej pewności siebie"},
      {t:"p",s:"Poznaj algorytm na opowieść o samym/samej sobie tak, żeby być jej twórcą, a nie przypadkowym przedmiotem."}
    ],
    intro: [
      {t:"p",s:"Certyfikowany trener biznesu, mówca, autor poradników o komunikacji i wystąoieniach publicznych."}
    ],
    tm: [
      {t:"p",s:"W TM od 2015, aktualnie w TM Business Leaders. Najdłużej w TM Centrum. Były prezes klubu TM Centrum, dyrektor rejonu."},
      {t:"p",s:"Wicemistrz Polski w 2016, mistrz Polski w przemowach humorystycznych w styczniu 2017, mistrz dystryktu w przemówieniach humorystycznych w 2021."}
    ],
    misjaLabel: "Misja",
    misja: [
      {t:"p",s:"Motywuje mnie to, co nieznane i pociągające. TM jest dla mnie ważne, ponieważ skupia dobrych i przyjaznych ludzi, między innymi ;-) Wspieranie innych to moja misja, a pasja to przekładanie myśli na działanie, mówienie, pisanie."}
    ],
    links: [{label:"przemyslawkutnyj.pl",url:"https://www.przemyslawkutnyj.pl"}, {label:"YouTube",url:"https://www.youtube.com/dobramowa.wystapieniapubliczne"}, {label:"LinkedIn",url:"https://www.linkedin.com/in/przemyslaw-kutnyj/"}],
  },
  {
    slug: "robert-umpirowicz",
    name: "Robert Umpirowicz",
    photo: "/images/prelegenci/robert-umpirowicz.webp",
    day: "Sobota", date: "29.08", room: "Warsztatowa II", time: "16:00-16:45", format: "warsztaty 45 min",
    title: "Komunikuj się z energią! Inspiruj z entuzjazmem",
    desc: [
      {t:"p",s:"Jeśli nie umiesz się uśmiechać, nie otwieraj sklepu” – głosi chińskie przysłowie. To jednak znacznie więcej niż rada dla sprzedawców. To przypomnienie, że entuzjazm, pozytywna energia i autentyczne emocje należą do najskuteczniejszych narzędzi wpływu – zarówno na scenie, jak i w roli lidera."},
      {t:"p",s:"Podczas tego 45-minutowego, pełnego energii warsztatu przekonasz się, jak ogromny wpływ na odbiór Twojego wystąpienia mają nastawienie, głos i mowa ciała. Dzięki praktycznym ćwiczeniom nauczysz się świadomie budować pozytywne emocje oraz wykorzystywać je, by skuteczniej angażować, inspirować i przekonywać swoich odbiorców."},
      {t:"p",s:"Wyjdziesz z warsztatu z konkretnymi technikami, większą energią i gotowością, aby już podczas kolejnego wystąpienia wywierać jeszcze silniejszy, pozytywny wpływ na innych."}
    ],
    intro: [
      {t:"p",s:"Trener biznesu oraz praktyk z wieloletnim doświadczeniem w sprzedaży. Absolwent Akademii Ekonomicznej we Wrocławiu, studiów podyplomowych „Psychologia w życiu firmy” oraz Szkoły Trenerów Moderator. Wiedzę z zakresu coachingu rozwijał w Laboratorium Psychoedukacji w Warszawie. Obecnie trener w Dale Carnegie Training."},
      {t:"p",s:"Specjalizuje się w szkoleniach z zakresu perswazji, komunikacji oraz obrony przed manipulacją. W ramach kierunku studiów podyplomowych „Wystąpienia publiczne i przywództwo w biznesie”, prowadzi zajęcia na Uniwersytecie WSB Merito we Wrocławiu."}
    ],
    tm: [
      {t:"p",s:"Od 2014 roku aktywnie rozwija swoje umiejętności w Toastmasters International. W 2018 roku zdobył tytuł wicemistrza Polski w udzielaniu informacji zwrotnej i do dziś pozostaje aktywnym członkiem zaawansowanego klubu Toastmasters we Wrocławiu."}
    ],
    misjaLabel: "Pasja",
    misja: [
      {t:"p",s:"Prywatnie pasjonat sztuk walki, instruktor samoobrony oraz miłośnik psychologii biznesu. Szczególnie ceni książkę „Pułapki myślenia” autorstwa Daniela Kahneman, którą chętnie poleca osobom zainteresowanym lepszym rozumieniem ludzkich decyzji i zachowań."}
    ],
    links: [],
  },
  {
    slug: "piotr-rudzki",
    name: "Piotr Rudzki",
    photo: "/images/prelegenci/piotr-rudzki.webp",
    day: "Sobota", date: "29.08", room: "AULA", time: "17:00-17:45", format: "prelekcja 45 min",
    title: "Heurystyką, dobijemy go heurystyką! Jak mózg oszukuje nas w Toastmasters?",
    desc: [
      {t:"p",s:"Pięćdziesiąt osób słucha z uwagą, jedna ziewa — i już masz pewność, że Twoje wystąpienie było katastrofą. Sędzia chce być obiektywny, ale kolejność wystąpień lub pierwsze wrażenie niepostrzeżenie wpływają na jego ocenę. Lider wie, że warto coś zmienić, a mimo to wybiera to, co znane. Dlaczego mózg tak łatwo podsuwa nam przekonujące, lecz błędne interpretacje? Jak rozpoznać moment, w którym skrót myślowy zaczyna sterować naszym zachowaniem? Ten interaktywny wykład to spojrzenie na błędy poznawcze z trzech perspektyw: mówcy, sędziego i lidera. Dowiesz się, dlaczego przeceniamy własne potknięcia, ulegamy efektowi halo, bronimy wcześniejszych decyzji i wybieramy utrzymanie status quo. Nie nauczę Cię wyłączać heurystyk — to praktycznie niemożliwe. Ale kiedy poznasz ich imiona, przestaną działać po cichu."}
    ],
    intro: [
      {t:"p",s:"Mówca inspiracyjny, konferansjer, lektor i trener biznesu."}
    ],
    tm: [
      {t:"p",s:"Z Toastmasters od 2015 roku. Klub macierzysty Top Careers Toastmasters. W organizacji przeszedł drogę od introwertyka do Mistrza Polski Wystąpień Publicznych. Ponad 5 lat w zarządach: sekretarz, VPM, VPE, prezes, dyrektor rejonu, dyrektor okręgu. Konkursy zna z każdej strony — jako uczestnik, organizator i główny sędzia. Regularnie prelegent, trener i głos wydarzeń TM."}
    ],
    misjaLabel: "Misja",
    misja: [
      {t:"p",s:"Zgodnie ze swoją życiową zasadą: „Angażuj się w to, co kochasz. Kochaj to, w co się angażujesz”, inspiruje liderów do przekraczania własnych granic."}
    ],
    links: [{label:"piotr.rudzki.studio",url:"https://piotr.rudzki.studio/"}],
  },
  {
    slug: "czarnieski-turek",
    name: "Michał Czarnieski i Ewa Turek",
    photo: null,
    day: "Sobota", date: "29.08", room: "Warsztatowa I", time: "17:00-17:45", format: "wywiad",
    title: "Wywiad",
    desc: [],
    intro: [],
    tm: [],
    misjaLabel: "Misja",
    misja: [],
    links: [],
  },
  {
    slug: "adrian-dornia",
    name: "Adrian Dornia",
    photo: null,
    day: "Sobota", date: "29.08", room: "Warsztatowa II", time: "17:00-17:45", format: "warsztaty 45 min",
    title: "Jak założyć firmę i nie zwariować?",
    desc: [
      {t:"p",s:"Myślisz o pójściu „na swoje”, ale przeraża Cię wizja bycia własnym szefem? Własny biznes brzmi jak wolność, a w praktyce bywa bezlitosnym rollercoasterem. Operacyjna bieżączka, faktury, prospecting i obsługa klienta potrafią przytłoczyć. 📈📊 Jak utrzymać tempo i nie stracić głowy? Czy da się budować firmę od zera bez pewności sukcesu, zachowując przy tym zdrowe zmysły i czas na odpoczynek? 🤔⏳ Podczas warsztatu bez owijania w bawełnę wejdziemy za kulisy kilku branż. Przejdziemy przez realne case study – od pozyskiwania środków na start, przez marketing i twardą sprzedaż, aż po procesy obsługi klienta. 🛠️🚀"},
      {t:"h",s:"Przeanalizujemy kluczowe obszary"},
      {t:"li",s:"Finanse: skąd brać kapitał i jak nim mądrze zarządzać. 💰"},
      {t:"li",s:"Sprzedaż: jak skutecznie oferować produkty i usługi. 📈"},
      {t:"li",s:"Higiena pracy: jak ładować baterie, by nie wypalić się na starcie. 🔋"},
      {t:"p",s:"Złap swoje miejsce na warsztacie i zacznij budować biznes z głową."}
    ],
    intro: [
      {t:"p",s:"Adrian Dornia – przedsiębiorca, wiceprezes Izby Gospodarczej, właściciel marki Wiateo oraz Agencji Bardzo Kreatywnej „Optimistic”. Koordynował setki inwestycji w kraju i za granicą. Poliglota, który odwiedził 40 krajów."}
    ],
    tm: [
      {t:"p",s:"Z Toastmasters związany od 2025 roku – jako Prezes klubu TM IG Wodzisław przeszedł dynamiczną ścieżkę, zdobywając m.in. 3. miejsce w konkursie mów improwizowanych po angielsku na szczeblu dystryktu."}
    ],
    misjaLabel: "Misja",
    misja: [
      {t:"p",s:"W biznesie i na scenie woli działać i poprawiać błędy, niż stać w miejscu."}
    ],
    links: [],
  },
  {
    slug: "pawel-konieczko",
    name: "Paweł Konieczko",
    photo: "/images/prelegenci/pawel-konieczko.webp",
    day: "Niedziela", date: "30.08", room: "AULA", time: "10:00-10:20", format: "prelekcja 20 min",
    title: "Dlaczego twoje prezentacje nie prowadzą do decyzji?",
    desc: [
      {t:"p",s:"Większość prezentacji w biznesie kończy się albo serią pytań albo potrzebą zrobienia kolejnego spotkania. Niewiele z nich kończy się tym, co było ich prawdziwym celem – decyzją, zmianą sposobu myślenia lub konkretnym działaniem."},
      {t:"p",s:"Dlaczego tak się dzieje? Czy problemem są slajdy, treść, a może coś zupełnie innego?"},
      {t:"p",s:"Podczas wystąpienia spojrzymy na prezentacje z perspektywy nadawcy i odbiorcy. Zastanowimy się, dlaczego dobrze przygotowane prezentacje często nie przynoszą oczekiwanego efektu. Pokażę najczęstsze pułapki, które sprawiają, że odbiorcy wychodzą ze spotkania z dużą ilością informacji, ale bez jasnych wniosków i decyzji. Przyjrzymy się również temu, dlaczego nawet wartościowe pomysły potrafią przepaść, jeśli sposób ich przedstawienia nie pozwala odbiorcom dostrzec ich znaczenia i konsekwencji."}
    ],
    intro: [
      {t:"p",s:"Jest certyfikowanym trenerem biznesu i specjalizuje się w wystąpieniach publicznych oraz prezentacjach biznesowych. Przez 15 lat pracował w korporacji, gdzie przygotowywał prezentacje i prowadził projekty, w których decyzje miały realne konsekwencje biznesowe."}
    ],
    tm: [
      {t:"p",s:"Jest Prezesem klubu Toastmasters Speakers of Łódź."}
    ],
    misjaLabel: "Misja",
    misja: [
      {t:"p",s:"Wspiera ekspertów, liderów i prelegentów w przygotowaniu wystąpień, które pomagają odbiorcom zrozumieć złożone tematy i prowadzą do decyzji."}
    ],
    links: [],
  },
  {
    slug: "lukasz-ostrowski",
    name: "Łukasz Ostrowski",
    photo: null,
    day: "Niedziela", date: "30.08", room: "Warsztatowa I", time: "10:00-10:20", format: "prelekcja 20 min",
    title: "Nie ma ostatniej góry. Stoicka odwaga w świecie, którego nie da się kontrolować.",
    desc: [
      {t:"p",s:"Każdy zdobyty szczyt odsłania kolejny. Rozwiązujemy jeden problem, a za nim pojawia się następny w pracy, relacjach i życiu. Czy trudności świadczą o tym, że jesteśmy niewystarczający?"},
      {t:"p",s:"A może nie zakłócają życia, lecz właśnie je tworzą?"},
      {t:"p",s:"To wystąpienie pokazuje, jak spojrzeć na niepewność, zwątpienie i własne ograniczenia przez pryzmat stoicyzmu. Uczestnicy zobaczą, jak oddzielać to, co zależy od nas, od tego, czym nie możemy zarządzać, oraz jak działać mimo lęku i braku pełnej kontroli. Pojawi się też myśl: niemal wszystko, co nas spotyka, może z czasem stać się dobrą zabawą albo dobrą historią."},
      {t:"p",s:"Nawet gdy sprawy nie układają się po naszej myśli, niepoznawalność życia nadaje doświadczeniom wartość i głębię."},
      {t:"p",s:"Życie nie jest egzaminem, do którego będziemy w pełni przygotowani. Bardziej przypomina występ, podczas którego uczymy się grać. Nie ma ostatniej góry. Jest tylko kolejna droga."}
    ],
    intro: [
      {t:"p",s:"jest dyrektorem kreatywnym, projektantem, przedsiębiorcą i ambasadorem wrażliwości. Od ponad 15 lat pomaga markom projektować doświadczenia klientów, łącząc design z ekonomią behawioralną. Projektuje produkty, usługi i przestrzenie oraz popularyzuje wiedzę w serii Insight360 na LinkedInie i YouTubie."},
      {t:"p",s:"Bliska jest mu koncepcja Homo Experiens człowieka kształtowanego przez doświadczenia oraz sens ukryty w pozornie irracjonalnych decyzjach. Prywatnie ceni stoicyzm, książki i sport."}
    ],
    tm: [],
    misjaLabel: "Misja",
    misja: [],
    links: [],
  },
  {
    slug: "agnieszka-brak",
    name: "Agnieszka Brak",
    photo: null,
    day: "Niedziela", date: "30.08", room: "Warsztatowa II", time: "10:00-10:45", format: "warsztaty 45 min",
    title: "Stres? To nie wróg, lecz sprzymierzeniec!",
    desc: [
      {t:"p",s:"Wielu widzi stres jako bezlitosnego przeciwnika – niszczyciela spokoju, sabotażystę planów, cień, który odbiera radość z działania. A co, jeśli prawda jest inna? Co, jeśli stres to nie twój wróg, lecz największy sojusznik na drodze do sukcesu?"},
      {t:"p",s:"Rozmowa z osobą, która jest w stresie to momentami trudna komunikacja. Każdy z nas na zdarzenie stresowe reaguje inaczej."},
      {t:"p",s:"Agnieszka Brak od lat zgłębia tematykę pracy ze stresem – nie po to, by go zwalczać, lecz by ujarzmić jego moc i wykorzystać ją do realizacji celów."},
      {t:"p",s:"Na warsztacie „Komunikacja z osobą w stresie” pokaże, w jaki sposób rozmawiać kiedy dana osoba jest w stresie. Reakcja na stres może być różna. Jedni wybuchają agresją inni siedzą cicho."},
      {t:"p",s:"Dzięki mojemu warsztatowi zapoznacie się jakie mogą być reakcje i jak z takimi osobami pracować i rozmawiać. Jeśli chcesz się dowiedzieć, jak komunikować się z osobą w stresie, ten warsztat jest dla Ciebie. Pamiętaj stres to Twój sprzymierzeniec i to od Ciebie zależy jak go wykorzystasz."}
    ],
    intro: [
      {t:"p",s:"to lider, mówca i trener umiejętności miękkich. Jest również Praktykiem Odporności Psychicznej, a pozyskaną widzę testuje na sobie."}
    ],
    tm: [
      {t:"p",s:"Od 2017 roku związana z Toastmasters International. Członek klubu Toastmastrers na Szczycie. Pełniła funkcję Dyrektora Area oraz Dyrektoraz Dywizji. Na swoim koncie współorganizację dwóch konferencji dywizji (2019 i 2024), pomoc w Konferencję Dystryktu w Rzeszowie, jako Dyrektor Dywzjii współorganizowała konferencje dywizji."}
    ],
    misjaLabel: "Pasja",
    misja: [
      {t:"p",s:"Biega w maratonach i półmaratonach. A przecież sportowcy wiedzą najlepiej, że stres to nie przeciwnik – to paliwo do działania."}
    ],
    links: [],
  },
  {
    slug: "karolina-rzeznik",
    name: "Karolina Natalia Rzeźnik",
    photo: null,
    day: "Niedziela", date: "30.08", room: "Warsztatowa I", time: "10:30-10:50", format: "prelekcja 20 min",
    title: "W świecie AI każdy może być ekspertem. Kto zostanie liderem?",
    desc: [
      {t:"p",s:"W świecie, w którym wiedza jest dostępna na wyciągnięcie ręki, niemal każdy może stać się ekspertem. Ale czy ekspert automatycznie staje się liderem?"},
      {t:"p",s:"Co sprawia, że jedni potrafią inspirować, budować zaufanie i rozwijać innych, podczas gdy inni pozostają jedynie źródłem informacji? Czy w erze sztucznej inteligencji przywództwo będzie mniej ważne... czy wręcz przeciwnie?"},
      {t:"h",s:"Podczas tej prelekcji poszukamy odpowiedzi na pytania"},
      {t:"li",s:"Jakie kompetencje będą miały największą wartość w przyszłości?"},
      {t:"li",s:"Czego AI nie potrafi zastąpić?"},
      {t:"li",s:"Jak rozwijać umiejętności, które pozwalają nie tylko przewodzić, ale także inspirować kolejnych liderów?"},
      {t:"p",s:"Jeśli interesuje Cię przyszłość przywództwa, rozwój osobisty i miejsce człowieka w świecie AI, zapraszam na moją prelekcję:"},
      {t:"p",s:"„W świecie AI każdy może być ekspertem. Kto zostanie liderem?”"},
      {t:"p",s:"Być może przyszłość nie będzie należała do tych, którzy wiedzą najwięcej."},
      {t:"p",s:"Być może będzie należała do tych, którzy potrafią rozwijać innych."}
    ],
    intro: [
      {t:"p",s:"Project Manager, mentorka i liderka rozwoju przywództwa. Od lat rozwija liderów zarówno w biznesie, jak i w Toastmasters International."}
    ],
    tm: [
      {t:"p",s:"Pełniłam m.in. role Club President, Area Director C4 oraz Club Retention Committee Chair dla Dystryktu 108, od lipca 2026 również Division E Director dla Dystryktu 231 TMI."}
    ],
    misjaLabel: "Misja",
    misja: [
      {t:"p",s:"Jej pasją jest inspirowanie ludzi do przekraczania własnych ograniczeń i odkrywania potencjału, który często sami w sobie przeoczają."}
    ],
    links: [{label:"LinkedIn",url:"https://www.linkedin.com/in/karolina-natalia-k-67b02286/"}],
  },
  {
    slug: "michal-golemo",
    name: "Michał Golemo",
    photo: null,
    day: "Niedziela", date: "30.08", room: "AULA", time: "10:40-11:00", format: "prelekcja 20 min",
    title: "Odrodzenie z popiołów. Jak wyjść ze status quo i przejąć kontrolę nad własnym rozwojem",
    desc: [
      {t:"p",s:"Często wolimy tkwić w niewygodnym, ale dobrze znanym status quo, niż zaryzykować zmianę. Budujemy klatki z własnych przekonań, pozwalając, by to ego dyktowało nam najbezpieczniejszą drogę."},
      {t:"p",s:"Dlaczego tak często jesteśmy swoim największym hamulcem? Co sprawia, że mechanizmy obronne nie pozwalają nam ruszyć z miejsca? Jak rozpoznać moment, w którym musimy pozwolić starym nawykom spłonąć, by odrodzić się na nowo?"},
      {t:"p",s:"Podczas wystąpienia spojrzymy na proces życiowej i zawodowej transformacji. Na przykładzie własnych doświadczeń pokażę, jak zdemaskować myśli blokujące rozwój i zamienić je w siłę napędową."},
      {t:"h",s:"Poszukamy odpowiedzi między innymi na pytania"},
      {t:"li",s:"dlaczego Feniks odradza się z popiołów i jak pracować z przekonaniami trzymającymi nas w miejscu,"},
      {t:"li",s:"jak na co dzień wypatrywać i demaskować mechanizmy obronne własnego ego,"},
      {t:"li",s:"jak zarządzać emocjami w budowaniu skutecznej komunikacji."},
      {t:"p",s:"Być może odkryjesz, że to właśnie po drugiej stronie lęku czeka wersja Ciebie, której zawsze szukałeś."}
    ],
    intro: [
      {t:"p",s:"to inżynier automatyk i trener wystąpień publicznych, który współtworzy startup AI Voicie."}
    ],
    tm: [
      {t:"p",s:"Z klubem Toastmasters Kraków związany jest od 2025 roku. Obecnie pełni tam funkcję Prezesa, tworząc bezpieczne środowisko do pokonywania lęku przed sceną."}
    ],
    misjaLabel: "Misja i pasja",
    misja: [
      {t:"p",s:"Jego misją jest łączenie inżynieryjnej analityki z psychologią, by uczyć specjalistów mówić tak, by byli słuchani. Prywatnie pasjonat historii, górskich szczytów i srebrnego ekranu."}
    ],
    links: [],
  },
  {
    slug: "agnieszka-ciochon",
    name: "Agnieszka Ciochoń",
    photo: "/images/prelegenci/agnieszka-ciochon.webp",
    day: "Niedziela", date: "30.08", room: "Warsztatowa I", time: "11:00-11:45", format: "prelekcja 45 min",
    title: "A co, jeśli to, co Cię zatrzymuje, jest tylko przekonaniem?",
    desc: [
      {t:"p",s:"Niewidzialne stery życia. Dlaczego tak często rezygnujemy z własnych marzeń, nie potrafimy odmówić, boimy się oceny innych albo przez lata tkwimy w sytuacjach, które nas unieszczęśliwiają? Czy naprawdę brakuje nam odwagi, czy może naszym życiem kieruje coś, czego nawet nie zauważamy?"},
      {t:"p",s:"Podczas wystąpienia pokażę, jak ograniczające przekonania wpływają na nasze decyzje, relacje i poczucie własnej wartości. Opowiem o własnych doświadczeniach i historiach, które doprowadziły mnie do odkrycia, że wiele naszych życiowych wyborów nie wynika z rzeczywistości, lecz z przekonań, które przejęły stery naszego życia."},
      {t:"p",s:"Uczestnicy dowiedzą się, jak rozpoznawać przekonania, które ich wspierają, a które zatrzymują w miejscu, oraz jak zrobić pierwszy krok, by odzyskać większy wpływ na własne decyzje. Bo czasem największą zmianę przynosi nie nowa droga, lecz nowe spojrzenie na historię, którą od lat opowiadamy sami sobie."}
    ],
    intro: [
      {t:"p",s:"Mówczyni, coachka ICF, mentorka zmiany i współautorka książki „Przełom”. Prowadzi warsztaty i wystąpienia o wpływie przekonań na nasze decyzje, pewność siebie i gotowość do zmian. Jest uczestniczką Akademii Zawodowych Mówców Sebastiana Kotowa."}
    ],
    tm: [
      {t:"p",s:"Rozwija swój warsztat wystąpień publicznych w Silesia Toastmasters."}
    ],
    misjaLabel: "Misja",
    misja: [
      {t:"p",s:"Wierzy, że jedno uświadomione przekonanie może stać się początkiem życiowego przełomu. Prywatnie kocha teatr – od czasu do czasu można zobaczyć ją na scenie. Uwielbia także śpiew, taniec i górskie wędrówki. Chętnie biega i z przyjemnością zanurza się w dobrej książce."}
    ],
    links: [{label:"LinkedIn",url:"https://www.linkedin.com/in/agnieszka-ciocho%C5%84/"}, {label:"Facebook",url:"https://www.facebook.com/profile.php?id=61576248836576"}, {label:"wlasnymkrokiempl.my.canva.site",url:"https://wlasnymkrokiempl.my.canva.site/mojadroga-odwaga-zyciepozmianie/"}],
  },
  {
    slug: "eliza-krzak",
    name: "Eliza Krzak",
    photo: null,
    day: "Niedziela", date: "30.08", room: "Warsztatowa I", time: "11:00-11:45", format: "warsztaty 45 min",
    title: "W DRODZE DO SIEBIE. O autentyczności, własnej odpowiedzialności i sprawczości",
    desc: [
      {t:"p",s:"Wchodzisz na Facebooka, Instagrama, TikToka, na inne media w świecie internetu."},
      {t:"p",s:"Widzisz zdjęcie znajomych, którzy polecieli na kolejne wakacje w tym roku. Kolejne zdjęcie, inny znajomy pokazuje zakup nowego samochodu. Ktoś jeszcze inny wrzuca zdjęcie z uśmiechem i pisze, że właśnie zmienił pracę na pracę swoich marzeń. Kolejny post i kolejna informacja, że komuś coś się udało. Oglądasz ich wyjazdy, uśmiechy, sukcesy. I zaczynasz się zastanawiać co z Tobą nie tak? Dlaczego Ja tak nie mam? Czemu to mi przytrafia się tyle kłopotów i trudności?"},
      {t:"p",s:"I znowu zaglądasz na media i w Twojej głowie rodzi się coraz więcej pytań. Nawet zauważasz posty, na których nie wszystko jest idealne. Nawet przeczytasz i… ponownie Twoje myśli wracają do tych informacji, w których widzisz: szczęście, sukces, zadowolenie. W których widzisz wymarzony świat. Twój wymarzony Świat. A przynajmniej tak Ci się wydaje."},
      {t:"p",s:"Zaczynasz się zastanawiać co możesz jeszcze zrobić inaczej i też osiągać sukcesy. Spoglądasz na to co Twoi znajomi czy inne osoby robią; że osiągają sukcesy. I próbujesz. Ten ubiera się elegancko to Ty też tak będziesz się ubierał… Inny codziennie biega po 10 km, to Ty też tak zaczniesz... Jeszcze inna osoba pracuje po 10 h dziennie to Ty też zaczniesz tak układać swój czas pracy…. itd., itp…. Próbujesz, próbujesz, próbujesz, a wymarzony sukces nie nadchodzi…"},
      {t:"p",s:"Co sprawia, że podejmowane działania nie przynoszą spodziewanych efektów? Czy to znaczy, że Ty nie potrafisz być skuteczny? Czy może chodzi o coś innego- o coś subtelniejszego, tylko Twojego?"},
      {t:"p",s:"Podczas wystąpienia poznasz techniki, które pozwolą Ci odnaleźć siebie prawdziwego. Nauczysz się odróżniać presje społeczną na to jaki powinieneś być od tego jaki jesteś i co jest dla Ciebie ważne i wartościowe. Nauczysz się dostrzegać mocne strony w tym co wydawało Ci się, że jest słabe i nic dobrego nie wnosi w Twoje życie."},
      {t:"p",s:"„Najlepszą wersją Ciebie jesteś Ty – prawdziwy.” Eliza Krzak"}
    ],
    intro: [
      {t:"p",s:"Certyfikowana psychoterapeutka i superwizorka, trenerka, mentorka. Od 20 lat pracuję z ludźmi i pomagam im w wychodzeniu z ich trudnych sytuacji życiowych. Od 9 lat prowadzę własną działalność szkoleniową Feniks-Vitae."}
    ],
    tm: [
      {t:"p",s:"Uczestnictwo w Klubie Toastmasters to dla mnie nauka dobrego mówienia. Jest to dla mnie bardzo ważne, by przemawiać do ludzi poprawnym językiem polskim. A pełnienie różnych ról podczas spotkań pozwala mi rozwijać zdolności organizacyjne, zarządzanie zespołem i prowadzenie twórczych dyskusji."}
    ],
    misjaLabel: "Misja",
    misja: [
      {t:"p",s:"Moją misją jest wsparcie drugiego człowieka w Jego DRODZE DO SIEBIE – tak nazywam kierunek mojej pracy z ludźmi. Uważam, że ten kierunek to najlepsza droga do własnego spokoju, stabilności i siły. A to pozwala na rozwój zgodny ze sobą i skuteczny."},
      {t:"p",s:"„Nie mierz swoich osiągnięć i miejsca w którym jesteś, osiągnięciami innych. Mierz tym, ile przeszkód w życiu pokonałeś, by znaleźć się tu gdzie jesteś” Eliza Krzak"}
    ],
    links: [],
  },
  {
    slug: "luiza-markiewicz",
    name: "Luiza Markiewicz",
    photo: "/images/prelegenci/luiza-markiewicz.webp",
    day: "Niedziela", date: "30.08", room: "Warsztatowa I", time: "12:00-12:20", format: "prelekcja 20 min",
    title: "Po co wstajesz rano? O sile IKIGAI",
    desc: [
      {t:"p",s:"Budzik dzwoni. Otwierasz oczy i zaczyna się kolejny dzień. Praca, obowiązki, dom, kolejne zadania. Z zewnątrz wszystko wygląda dobrze, a jednak coraz więcej ludzi gubi radość i poczucie sensu."},
      {t:"p",s:"Dlaczego jedni budzą się z energią, a inni tylko odliczają dni do weekendu? Czy można na nowo odnaleźć w sobie pasję do życia?"},
      {t:"p",s:"IKIGAI to pochodzące z Japonii słowo oznaczające „powód, dla którego warto wstać rano”. To filozofia, która pomaga odnaleźć sens w codzienności, pracy, relacjach i marzeniach."},
      {t:"p",s:"Zapraszam Cię do zatrzymania się na chwilę i spojrzenia na swoje życie z nowej perspektywy. Opowiem o odwadze, wartościach i decyzjach, które zmieniają nas bardziej niż wielkie życiowe rewolucje. Być może wyjdziesz z tego wystąpienia z jednym pytaniem, które zostanie z Tobą na długo: Po co Ty wstajesz rano?"}
    ],
    intro: [
      {t:"p",s:"Certyfikowany Coach Kognitywny, i Akademii Zawodowych Mówców. Od ponad 25 lat wspiera ludzi w rozwoju, a jako dyrektor sklepu Castorama każdego dnia pokazuje, że skuteczne przywództwo zaczyna się od człowieka."}
    ],
    tm: [
      {t:"h",s:"Członkini Toastmasters Wrocław"}
    ],
    misjaLabel: "Misja",
    misja: [
      {t:"p",s:"Z czułością i odwagą inspiruje do odnajdywania własnego IKIGAI, bo wierzy, że życie nabiera sensu wtedy, gdy każdego ranka wiemy, po co wstajemy. Wierzy, że nigdy nie jest za późno, by zacząć żyć po swojemu."}
    ],
    links: [{label:"Facebook",url:"https://www.facebook.com/luiza.naomi.markiewicz"}, {label:"LinkedIn",url:"https://www.linkedin.com/in/luiza-markiewicz"}],
  },
  {
    slug: "marta-glegolska",
    name: "Marta Glegolska",
    photo: null,
    day: "Niedziela", date: "30.08", room: "Warsztatowa II", time: "12:00-12:20", format: "prelekcja 20 min",
    title: "Z cyklu feniks w popiele czyli kryzys na scenie - jak bez pomocy narzędzi AI uratować sytuację?",
    desc: [
      {t:"p",s:"Mowa humorystyczno-informacyjna o wpadkach na scenie - Praktyczne trik dla mówców. Cel - Pomóc Mówcy poradzić sobie w kryzysowych sytuacjach."},
      {t:"p",s:"Wybiegasz na scenę jako feniks, a kończysz jak grillowany kurczak w popiele? Czarna dziura w pamięci sprawia, że osiągasz „wewnętrzną pustkę”. Prezentacja w stylu Mad Max z niedziałającym pilotem do slajdów a Twój lewy policzek niespodziewanie wchodzi w tryb wibracji ? Ostatkiem sił ratujesz się dowcipem wygenerowanym przez „darmową wersję” a on nie wywołuje nawet uśmiechu?"},
      {t:"p",s:"Kiedy sceniczna rzeczywistość brutalnie weryfikuje Twój plan działania. Podczas prelekcji nauczysz się wdrażać ludzki „algorytm pewności siebie” i hakować kryzysowe sytuacje z humorem. Dowiesz się,jak przeprogramować uwagę zaspanej publiczności oraz jak hipnotyzować z tak głębokim przekonaniem, by ewaluatorzy sami chcieli otrzymać od ciebie feedback. Sztuczna inteligencja świetnie układa konspekty,ale to człowiek podejmuje ryzyko i wchodzi na scenę. Dowiedz się, jak zresetować kryzys, wgrać aktualizację Feniks 2.0 i powstać z popiołów w absolutnie wielkim stylu!"}
    ],
    intro: [
      {t:"p",s:"jest architektem i koordynatorką BIM w międzynarodowych projektach przemysłowych."}
    ],
    tm: [
      {t:"p",s:"Od kwietnia 2026 roku w klubie Toastmasters IT Wrocław szlifuje sztukę scenicznej pewności siebie"}
    ],
    misjaLabel: "Pasja",
    misja: [
      {t:"p",s:"Poza pracą tańczy, zdobywa górskie szczyty oraz gotuje. Co ciekawe, jako jedna z niewielu osób wie, jak złożyć origami „Pikachu”. Z równą precyzją, z jaką koordynuje budowy, konstruuje swoje przemówienia – dlatego nie możesz przegapić jej wystąpienia!"}
    ],
    links: [],
  },
  {
    slug: "anna-kaldonek",
    name: "Anna Kałdonek",
    photo: "/images/prelegenci/anna-kaldonek.webp",
    day: "Niedziela", date: "30.08", room: "AULA", time: "", format: "prelekcja 20 min",
    title: "Dlaczego rozłożyłam psa na części? Czyli jak tłumaczyć trudne zagadnienia, aby ludzie rzeczywiście Cię słuchali.",
    desc: [
      {t:"p",s:"Według badań prosty i zrozumiały język sprawia, że jesteśmy postrzegani jako osoby inteligentniejsze, bardziej kompetentne i godne zaufania."},
      {t:"p",s:"Niestety, gdy opowiadamy o skomplikowanym systemie IT, zawiłej usłudze finansowej albo prawnych zawijasach, często ulegamy klątwie wiedzy. Szczególnie narażeni są na nią eksperci: im lepiej znasz swój temat, tym trudniej opowiadać o nim w prosty sposób."},
      {t:"p",s:"Podczas prelekcji poznasz schemat POMOST — sześć kroków prowadzących od"},
      {t:"h",s:"żargonu do klarownego przekazu. Odpowiemy między innymi na pytania"},
      {t:"li",s:"jak w kwadrans przygotować wyjaśnienie zawiłego tematu,"},
      {t:"li",s:"dlaczego „poprawny” przykład często nie jest najlepszym wyborem,"},
      {t:"li",s:"jak wykorzystać AI podczas przygotowań."},
      {t:"p",s:"Co robił rozłożony na części pies na scenie konferencji inżynierskiej w Las Vegas? Był przykładem w mojej prelekcji — a jego historia pozwoli Ci zobaczyć metodę POMOST w praktyce."},
      {t:"p",s:"Jeśli opowiadasz o czymś, co dobrze znasz, i zależy Ci na jasnym, przekonującym przekazie, ta prelekcja może Ci w tym pomóc."}
    ],
    intro: [
      {t:"p",s:"Pomaga w precyzyjnym projektowaniu wystąpień publicznych. Przez dekadę jako programistka i architektka oprogramowania PLM pracowała przy wielkich, międzynarodowych projektach dla marek takich jak BMW czy Airbus Helicopters. Dziś wspiera prelegentów w tym, co najtrudniejsze: przekładaniu technicznego żargonu na porywający storytelling, a także prowadzi warsztaty z public speekingu w firmach."}
    ],
    tm: [
      {t:"p",s:"Jest członkinią klubu Toastmasters Białystok, w którym czynnie angażuje się w działalnosc rozwojową, często podejmując się prowadzenia warsztatów zarówno na spotkaniach i wydarzeniach klubowych jak i poza klubem."}
    ],
    misjaLabel: "Misja",
    misja: [
      {t:"p",s:"Wierzy, że każda prezentacja techniczna może być fascynująca – wystarczy tylko odpowiednio zaprojektować jej architekturę."}
    ],
    links: [{label:"LinkedIn",url:"https://www.linkedin.com/in/anna-ka%C5%82donek/"}, {label:"odgadania.pl",url:"https://odgadania.pl/"}],
  }
];
