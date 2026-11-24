// Dane wspólne dla całej strony: kontakt, nawigacja, grupy usług (mega menu „Oferta”).
// Treści zgodne z makietą strona-glowna-v6 (design-ref).

export const CONTACT = {
  phone: "577 611 464",
  phoneHref: "tel:+48577611464",
  bookingUrl: "https://dobremiejscefizjoterapiadzieci.booksy.com/",
  addressShort: "ul. Jankego 48/1, 40-612 Katowice",
  address: "ul. Waltera-Jankego 48/1, 40-612 Katowice",
};

// Pasek ogłoszeń nad nagłówkiem. Żeby go pokazać, ustaw enabled: true.
// Odwiedzający może go zamknąć; zmiana treści (text) pokaże go ponownie.
export const ANNOUNCEMENT = {
  enabled: false,
  text: "Nowość: osteopatia także dla dorosłych.",
  link: { label: "Zobacz", href: "/osteopata-dzieciecy" },
};

// Główne pozycje menu. Pozycja z `offer: true` to przycisk mega menu „Oferta”.
export const MAIN_NAV = [
  { label: "Start", href: "/" },
  { label: "O nas", href: "/o-nas" },
  { label: "Nasz zespół", href: "/zespol" },
  { label: "Oferta", offer: true },
  { label: "Cennik", href: "/cennik" },
  { label: "Aktualności", href: "/aktualnosci" },
  { label: "Blog", href: "/blog" },
  { label: "Kontakt", href: "/kontakt" },
];

// Grupy usług – mega menu „Oferta”, menu mobilne i karty w sekcji Oferta na stronie głównej.
// `href` grupy = główna podstrona tej grupy.
export const OFFER_GROUPS = [
  {
    name: "Fizjoterapia niemowląt i wcześniaków",
    href: "/rehabilitacja-noworodkow",
    text: "Fizjoterapia niemowląt od pierwszych dni życia, w tym wcześniaków i dzieci po pobycie na OIOM.",
    links: [
      { label: "Rehabilitacja wcześniaków", href: "/rehabilitacja-wczesniakow" },
      { label: "Rehabilitacja niemowląt", href: "/rehabilitacja-noworodkow" },
      { label: "Terapia oddechowa", href: "/terapia-oddechowa" },
    ],
  },
  {
    name: "Diagnostyka rozwoju",
    href: "/diagnostyka-hine",
    text: "Wcześnie wykrywamy trudności rozwojowe metodami HINE i Prechtla.",
    links: [
      { label: "Diagnostyka HINE", href: "/diagnostyka-hine" },
      { label: "Metoda Prechtla", href: "/diagnostyka-metoda-prechtla" },
    ],
  },
  {
    name: "Fizjoterapia dzieci starszych",
    href: "/terapia-wad-postawy-u-dzieci",
    text: "Postawa, stopy, skolioza, kontuzje i powrót do sportu.",
    links: [
      { label: "Fizjoterapia ortopedyczna", href: "/terapia-ortopedyczna" },
      { label: "Wady postawy", href: "/terapia-wad-postawy-u-dzieci" },
      // Brak osobnej podstrony o skoliozie – kierujemy do wad postawy
      { label: "Skolioza (FITS)", href: "/terapia-wad-postawy-u-dzieci" },
      { label: "Wkładki ortopedyczne", href: "/wkladki-ortopedyczne-igli-junior" },
    ],
  },
  {
    name: "Integracja sensoryczna",
    href: "/terapia-si-w-katowicach",
    text: "Diagnoza i terapia integracji sensorycznej dla dzieci z trudnościami w odbiorze i przetwarzaniu bodźców.",
    links: [{ label: "Diagnoza i terapia SI", href: "/terapia-si-w-katowicach" }],
  },
  {
    name: "Mowa i karmienie",
    href: "/neurologopeda-katowice",
    text: "Neurologopedia od pierwszych dni życia i logopedia dla dzieci od 3 lat.",
    links: [
      { label: "Neurologopeda", href: "/neurologopeda-katowice" },
      // Brak osobnej podstrony logopedy – kierujemy do neurologopedy
      { label: "Logopeda", href: "/neurologopeda-katowice" },
    ],
  },
  {
    name: "Osteopatia",
    href: "/osteopata-dzieciecy",
    text: "Terapia manualna dla niemowląt, dzieci i dorosłych.",
    links: [{ label: "Osteopata dziecięcy i dla dorosłych", href: "/osteopata-dzieciecy" }],
  },
  {
    name: "Ruch i trening",
    href: "/trener-personalny-dla-dzieci",
    text: "Trening dla dzieci oraz dla kobiet w ciąży i po porodzie.",
    links: [
      { label: "Fizjoterapia sportowa", href: "/fizjoterapia-sportowa" },
      { label: "Trener personalny", href: "/trener-personalny-dla-dzieci" },
    ],
  },
];
