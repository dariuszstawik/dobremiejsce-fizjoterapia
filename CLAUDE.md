# Dobre Miejsce – redesign strony (Next.js + Tailwind + Contentful)

Strona gabinetu fizjoterapii dziecięcej **Dobre Miejsce** (Katowice, ul. Waltera-Jankego 48/1, tel. 577 611 464).
Ten projekt to istniejąca strona w Next.js + Tailwind. Część treści (Oferta, Aktualności, Blog) pobierana jest z Contentful.
Cel: **przebudować wygląd i treść do nowej wersji z makiet w `design-ref/`**, zachowując działającą logikę, adresy URL i integrację z Contentful.

Komunikuj się ze mną po polsku. Teksty na stronie są po polsku.

## Najważniejsze zasady

1. **Modyfikujemy istniejący projekt, nie piszemy go od nowa.** Zanim cokolwiek zmienisz, przejrzyj strukturę repozytorium i zaproponuj plan.
2. **Nie zmieniaj pobierania danych z Contentful** (zapytania, typy treści, klucze, `getStaticProps`/`fetch`/funkcje w `lib/`) bez mojej zgody. Zmieniamy warstwę wizualną szablonów.
3. **Adresy URL zostają bez zmian** (SEO i linki z kampanii Google Ads). Jeśli jakaś zmiana adresu jest konieczna – zapytaj i dodaj przekierowanie 301.
4. **Nie aktualizuj Next.js ani głównych zależności w ramach redesignu.** Jeśli uważasz, że trzeba – zaproponuj to jako osobny krok.
5. **Nigdy nie commituj `.env`, `.env.local` ani kluczy Contentful.**
6. Po każdym większym kroku uruchom `npm run build` (i lint, jeśli jest skonfigurowany) i napraw błędy.

## Git

- Pracuj na gałęzi `redesign`.
- Po zakończeniu każdego kroku planu zrób commit (jeden krok = jeden commit).
- Opis commita po polsku: pierwsza linia do 70 znaków, czego dotyczy zmiana; niżej krótko co i dlaczego.
- Przed commitem pokaż listę zmienionych plików i krótkie podsumowanie.
- Nigdy nie rób `git push`, `git reset --hard`, `git rebase` ani force push bez mojej wyraźnej prośby.
- Nie commituj plików .env ani niczego z kluczami.

## Makiety: `design-ref/`

- `design-ref/strona-glowna-v6.dc.html` – wzór strony głównej
- `design-ref/o-nas-v2.dc.html` – wzór strony O nas
- `design-ref/assets/` – zdjęcia i logotypy użyte w makietach
- `design-ref/README.md` – jak czytać makiety (składnia, sekcje, interakcje, breakpointy)
- `design-ref/ZMIANY-TRESCI.md` – ustalenia dotyczące treści i lista rzeczy do poprawienia w Contentful

Makiety to **wzór, nie kod do skopiowania**. Odtwórz je jako komponenty React + klasy Tailwind, zgodnie ze strukturą projektu.
Folder `design-ref/` nie trafia na produkcję (nie importuj z niego niczego w kodzie aplikacji). Potrzebne obrazy skopiuj do `public/` (lub tam, gdzie projekt trzyma obrazy) i używaj `next/image`.

## System wizualny (dodaj do konfiguracji Tailwinda jako tokeny)

**Font:** Figtree 400/500/600/700 (przez `next/font/google`). Bazowo 16px, line-height 1.6.
**Ikony:** w makietach Tabler Icons (webfont, wariant cienki 300 w kartach). W projekcie użyj `@tabler/icons-react` (te same nazwy ikon) – nie ładuj webfontu z CDN.

**Kolory**
| Rola | Hex |
|---|---|
| Tekst główny | `#1F1B18` |
| Nagłówek H1 | `#2E2925` |
| Tekst akapitów | `#524A44` (drugorzędny `#625A54`, wstęp `#3E3732`) |
| Akcent / przycisk główny | `#C9431A` (hover `#A63610`) |
| Linki, etykiety nad nagłówkami, obrys przycisków | `#B23A12` (hover `#93300E`) |
| Pomarańcz marki (ikony, stopka) | `#FF6E41` |
| Tekst w stopce | `#3A1D10` |
| Tło kremowe sekcji | `#FFF7EE` |
| Tło jasne (pigułki, pasek ogłoszeń) | `#FFEFE0` |
| Kafelki ikon | `#FFCEA0` |
| Podkreślenie pod H1 | `#FFC08C` |
| Linie podziału | `#F0E2D3`, na kremowym tle `#EBD9C6` |

**Kształty i odstępy**

- Kontener: `max-width: 1160px`, padding boczny 24px.
- Sekcje: padding pionowy `clamp(72px, 8vw, 104px)`.
- **Sekcje naprzemiennie białe i kremowe (`#FFF7EE`, na całą szerokość)**. Na kremowym tle karty są białe.
- Zaokrąglenia: karty 20px, kafelki ikon 18–24px, przyciski i pigułki pełne (`9999px`). Zdjęcia w sekcjach mają organiczne kształty (`border-radius` w formacie `a% b% c% d% / e% f% g% h%` – wartości w makietach).
- Przyciski: główny wypełniony `#C9431A`, wysokość 48–52px, cień `0 10px 22px rgba(201,67,26,.22)`; drugorzędny z obrysem 1.5px.
- Etykieta nad nagłówkiem: 13px, 600, wersaliki, `letter-spacing: .08em`, kolor `#B23A12`.
- H2: `clamp(28px, 3.2vw, 40px)`, 700, `letter-spacing: -.015em`.

## Dostępność (wymagana, poziom WCAG 2.1 AA)

- Kontrast tekstu min. 4.5:1 (sprawdzone kolory są w tabeli powyżej – nie rozjaśniaj szarości).
- Prawdziwe `<button>` i `<a href>`, nigdy klikalne `div`. Ikony dekoracyjne `aria-hidden="true"`, przyciski z samą ikoną mają `aria-label`.
- Link „Przejdź do treści”, widoczny focus (`outline: 3px solid #1F1B18`), `lang="pl"`.
- Menu mobilne: `role="dialog"`, pułapka fokusu, Escape zamyka, fokus wraca na przycisk. Akordeon FAQ z `aria-expanded`/`aria-controls`.
- Obsługa `prefers-reduced-motion`.

## Zasady treści (ważne – zawód medyczny)

Fizjoterapeutów obowiązuje Kodeks Etyki Zawodowej Fizjoterapeuty (KIF), który ogranicza reklamę. Teksty na stronie mają **informować, a nie reklamować**:

- bez obietnic efektu („pomagamy wyleczyć…”, „skuteczna terapia”, „bez stresu i płaczu”),
- bez ocen własnej jakości („profesjonalna”, „bogate doświadczenie”, „z pasją”, „najlepsi”),
- bez nazw marek produktów (np. zamiast „wkładki IGLI” → „wkładki ortopedyczne”),
- „specjalizuje się w…” tylko przy formalnej specjalizacji – inaczej „w pracy zajmuje się głównie…”,
- opinie pacjentów: pozostawiamy sekcję z makiety, ale nie dopisujemy własnych.
  Jeśli przenosisz tekst ze starej wersji strony i widzisz takie sformułowanie – zaznacz mi je, nie poprawiaj na własną rękę w Contentful.

## Kolejność pracy

1. Przegląd repozytorium → krótki raport: wersja Next.js (App/Pages Router), Tailwind, struktura komponentów, jak działa Contentful, lista podstron i adresów. Plan zmian. **Czekaj na moją akceptację.**
2. Tokeny w konfiguracji Tailwinda + font + style globalne.
3. Elementy wspólne: nagłówek (zmniejsza się po przewinięciu, mega menu „Oferta”), menu mobilne, stopka, mobilny pasek „Zadzwoń / Umów wizytę”.
4. Strona główna wg `strona-glowna-v6.dc.html`.
5. Strona O nas wg `o-nas-v2.dc.html`.
6. Szablony z Contentful (Oferta, Aktualności, Blog) – dostosowanie wyglądu do nowego systemu.
7. Pozostałe podstrony (Cennik, Kontakt, Zespół itd.) – dostosowanie wyglądu.
8. Kontrola: build, lint, dostępność, widok mobilny, Lighthouse.
