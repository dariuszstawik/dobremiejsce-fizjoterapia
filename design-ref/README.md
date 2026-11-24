# Makiety – jak je czytać

Pliki `*.dc.html` pochodzą z narzędzia do projektowania (Claude Design). To pojedyncze strony HTML z **inline’owymi stylami** i prostym językiem szablonów:

- `{{ nazwa }}` – wartość wyliczana w skrypcie na dole pliku (`<script type="text/x-dc">`, metoda `renderVals()`),
- `<sc-for list="{{ lista }}" as="x">` – pętla (w React: `.map()`),
- `<sc-if value="{{ warunek }}">` – warunek,
- `style-hover="…"` – styl po najechaniu (w Tailwind: `hover:`),
- `<helmet>` – zawartość `<head>` (tytuł, fonty, style globalne).

**Dane (listy usług, grup wiekowych, cen, FAQ, bloga, założycielek) są w `renderVals()` na dole pliku.** Treść tekstowa w makietach jest aktualna i zatwierdzona – przenoś ją dokładnie.
`support.js` to tylko silnik podglądu makiet – nie przenoś go do projektu.

## Breakpointy i zachowanie (z kodu makiet)

- **< 1100px**: menu w nagłówku zamienia się na przycisk hamburgera (pełnoekranowe menu mobilne), na dole ekranu pojawia się przyklejony pasek „Zadzwoń / Umów wizytę” (treść strony ma wtedy dolny padding 70px).
- **≥ 1024px**: hero w dwóch kolumnach (tekst + zdjęcie po prawej, wysokość `clamp(580px, 100svh − nagłówek, 960px)`); poniżej – jedna kolumna, zdjęcie pod tekstem (`hero-img-mobile.webp`).
- **< 760px**: bloki „W czym możemy pomóc” układają się w kolumnę (na desktopie zdjęcie i tekst na przemian lewo/prawo).
- **Nagłówek**: przyklejony; po przewinięciu > 64px zmniejsza się (mniejsze logo i padding) i dostaje delikatny cień.
- **Mega menu „Oferta”**: otwiera się po najechaniu i kliknięciu, siatka 3 kolumny, szer. `min(760px, 100vw − 48px)`, zamyka Escape.
- **Menu mobilne**: dialog na cały ekran, rozwijana sekcja „Oferta”, pułapka fokusu, Escape zamyka.
- **FAQ**: akordeon, pierwsze pytanie otwarte domyślnie.
- **Pasek ogłoszeń** nad nagłówkiem („Nowość: osteopatia także dla dorosłych”) – domyślnie **wyłączony**, z przyciskiem zamknięcia. Warto zrobić go sterowanym z Contentful lub flagą.
- **Podkreślenie pod H1** to łuk SVG mierzony do szerokości najdłuższej linii nagłówka. Prostsza wersja (np. stała szerokość) jest OK.

## Strona główna (`strona-glowna-v6.dc.html`) – kolejność sekcji i tło

| # | Sekcja | Tło |
|---|---|---|
| 1 | Hero – H1 „Dobre Miejsce dla rozwoju Twojego dziecka”, wstęp, „Umów wizytę”, telefon, zdjęcie | gradient brzoskwiniowy |
| 2 | `#pomoc` „W czym możemy pomóc?” – 4 grupy wiekowe (zdjęcie + objawy + pigułki z linkami), notka o dorosłych | białe |
| 3 | `#oferta` „Specjaliści w jednym miejscu” – 7 kart usług + karta „Nie wiesz, od czego zacząć?” (siatka 4×2), „Sprawdź cennik” | kremowe |
| 4 | „Jak pracujemy” – 4 karty z dużymi ikonami | białe |
| 5 | `#zespol` „Poznaj nasz zespół” – 2 karty założycielek (białe), pasek „+14 kolejnych specjalistów” | kremowe |
| 6 | „Opinie klientów” – 3 opinie Google | białe |
| 7 | `#ceny` „Jak umówić pierwszą wizytę?” – 3 kroki + karta „Przykładowe ceny” | kremowe |
| 8 | `#pytania` FAQ (lewa kolumna) + 3 wpisy z bloga (prawa kolumna) | białe |
| 9 | `#kontakt` – adres, telefon, „Umów wizytę”, „Jak dojechać” (biała karta) | kremowe |
| – | Stopka | `#FF6E41` |

Karta usługi w Ofercie, grupy wiekowe i wpisy bloga **prawdopodobnie powinny pochodzić z Contentful** (jeśli w starej wersji tak było) – w makiecie są wpisane na stałe.

## O nas (`o-nas-v2.dc.html`) – kolejność sekcji i tło

| # | Sekcja | Tło |
|---|---|---|
| 1 | H1 „Poznaj Dobre Miejsce”, wstęp, „Umów wizytę”, szerokie zdjęcie zespołu | białe |
| 2 | „Jak zmieniło się Dobre Miejsce” – tekst, 2 kafelki („Na początku” / „Dziś”), film z Facebooka (iframe) | kremowe |
| 3 | „Kompleksowe podejście” – zdjęcie + 3 akapity z linkami do usług | białe |
| 4 | „Opieka od pierwszych dni życia” – wstęp + 3 zdjęcia gabinetu | kremowe |
| 5 | „Jak pracujemy” – 3 karty wartości + „Umów wizytę” | białe |
| 6 | „Obejmujemy opieką dzieci:” – lista z ptaszkami, notka o dorosłych, zdjęcie | białe |
| 7 | `#zespol` „Nasz zespół” – karty założycielek, pasek „+14” | kremowe |
| 8 | „Rejestracja” – zdjęcie, tekst, „Umów wizytę”, telefon | białe |
| 9 | `#kontakt` „Jak do nas trafić” – informacja o zmianie adresu, adres/telefon/godziny, mapa Google (iframe) | kremowe |

Osadzenia Facebooka i Map Google ładują zewnętrzne skrypty i cookies – rozważ ładowanie dopiero po kliknięciu (fasada) lub po zgodzie cookies.

## Obrazy (`assets/`)

`hero-img.webp` i `hero-img-mobile.webp` są już przycięte do organicznego kształtu (przezroczyste tło). Pozostałe zdjęcia dostają kształt przez `border-radius` w CSS.
`niemowlak.webp` – nowe zdjęcie do wpisu „Kiedy warto zgłosić się z niemowlakiem do osteopaty?”.
`dwulatek.webp` – używany tylko w danych makiety O nas; wpis o psychologu zniknął ze strony głównej.
