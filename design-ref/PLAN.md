# Plan redesignu – Dobre Miejsce

Plan prac na gałęzi `redesign`. **Jeden punkt = jeden commit.** Każdy punkt kończy się: `npm run build` → lista zmienionych plików i podsumowanie → commit (opis po polsku). Zakończony punkt odhaczamy w tym pliku w tym samym commicie; opis commita zaczyna się od numeru punktu (np. „8. Mobilny pasek…”), więc `git log --oneline` pokazuje, który commit zamknął który punkt. Skróty przy punktach 1–7 dopisane wstecznie.

Zasady pracy (Contentful, adresy URL, zależności, treści zgodne z KIF, dostępność) – zob. [`CLAUDE.md`](../CLAUDE.md).

## Stan projektu (przegląd z 24.11.2026)

- **Next.js 16.1.1, App Router**, JavaScript (bez TS), React 19.2, **Tailwind 3.4.19**, Node 24.
- **Contentful** (`lib/contentful/client.js`, `client.getEntries` w plikach `page.js`):
  - `blogPost` → `/blog`, `/blog/[slug]`, strona główna,
  - `news` → `/aktualnosci`, `/aktualnosci/[slug]`, strona główna,
  - 7 typów usług (po 1 wpisie): `osteopatiaDziecica`, `neurologopeda`, `terapiaOrtopedyczna`, `fizjoterapiaSportowa`, `psychologDziecicy`, `trenerPersonalny`, `treningPersonalnyDlaKobietWCiazy`.
- Treść w kodzie: pozostałe usługi, O nas, Cennik (`app/pricelistData.js`), Kontakt, 16 stron zespołu.
- Wspólny szablon podstron: `app/components/page-template` (23 podstrony). Strony zespołu – osobne kopie tego samego układu.
- Skrypty zewnętrzne w layoucie: GTM, CookieYes, Elfsight (opinie Google). `middleware.js` – tryb serwisowy (503).
- Rezerwacja online: Booksy. Dane kontaktowe, menu i grupy usług: `app/data/site.js`.
- Lint: `next lint` nie istnieje w Next 16, brak konfiguracji ESLint – weryfikacja przez `npm run build`.

## Decyzje

- Nowe zdjęcia z `assets/nowe-foto/` – na razie pomijamy, używamy zdjęć z makiet.
- Nagłówek i mobilny pasek „Zadzwoń / Umów wizytę” są w `app/layout.js` (stary `Navbar` usunięty z podstron).
- Opis meta strony: „Dobre Miejsce w Katowicach: fizjoterapia niemowląt i dzieci, osteopatia, neurologopedia, integracja sensoryczna. ul. Waltera-Jankego 48/1, tel. 577 611 464.”
- Usługi i grupy wiekowe ze strony głównej – dane w kodzie (`app/data/`); blog i aktualności – z Contentful.

## Otwarte kwestie

- [ ] **Skolioza (FITS)** i **Logopeda** (menu „Oferta”) nie mają własnych podstron – tymczasowo prowadzą do „Wad postawy” i „Neurologopedy”.
- [ ] Menu „Oferta” wg makiety nie zawiera **treningu dla kobiet w ciąży** ani **psychologa** – podstrony istnieją, ale nie ma do nich linku z menu. Dodać trening do grupy „Ruch i trening”?
- [ ] Ostrzeżenia Next 16: `images.domains` → `images.remotePatterns`, `middleware.js` → `proxy.js` – osobny commit, za zgodą.
- [ ] `npm audit`: 15 podatności w zależnościach (m.in. `next`, `postcss`) – osobny krok z aktualizacją, najlepiej przed publikacją.
- [ ] CookieYes zgłasza błąd na `localhost` (baner przypisany do domeny produkcyjnej) – sprawdzić na podglądzie Vercel.
- [ ] Placeholdery do uzupełnienia przed publikacją – lista w [`ZMIANY-TRESCI.md`](ZMIANY-TRESCI.md).

## Punkty planu

### A. Fundamenty

- [x] 1. Przeniesienie `app/.claude/settings.json` → `.claude/settings.json` – `5d843c3`
- [x] 2. Instalacja `@tabler/icons-react` – `06f1808`
- [x] 3. Tokeny Tailwinda, font Figtree, style globalne (focus, skip-link, `prefers-reduced-motion`, typografia `article`) – `3161333`
- [x] 4. Komponenty bazowe UI w `app/components/ui/` (Container, Section, SectionHeading, ButtonLink, Pill, IconTile, Card) – `bee9677`
- [x] 5. Drobne poprawki: opis meta, GTM `<noscript>`, `console.log` – `2512828`

### B. Elementy wspólne

- [x] 6. Nagłówek desktop (sticky, zmniejszanie, mega menu „Oferta”) w layoucie + usunięcie `Navbar` z podstron – `7e143bb`
- [x] 7. Menu mobilne (dialog, rozwijana Oferta, pułapka fokusu, Escape) – `fc57e62`
- [x] 8. Mobilny pasek „Zadzwoń / Umów wizytę” (< 1100px) + pasek ogłoszeń (domyślnie wyłączony; włączanie: `ANNOUNCEMENT` w `app/data/site.js`)
- [ ] 9. Stopka

### C. Strona główna (`/`) wg `strona-glowna-v6`

- [ ] 10. Hero
- [ ] 11. „W czym możemy pomóc?” – grupy wiekowe
- [ ] 12. „Specjaliści w jednym miejscu” – karty usług
- [ ] 13. „Jak pracujemy” + „Poznaj nasz zespół”
- [ ] 14. „Opinie klientów” + „Jak umówić pierwszą wizytę?”
- [ ] 15. FAQ + wpisy bloga + Kontakt; usunięcie nieużywanych starych komponentów strony głównej

### D. O nas (`/o-nas`) wg `o-nas-v2`

- [ ] 16. Sekcje 1–5 (intro, historia z fasadą filmu FB, kompleksowe podejście, opieka od pierwszych dni, jak pracujemy)
- [ ] 17. Sekcje 6–9 (grupy dzieci, zespół, rejestracja, „Jak do nas trafić” z fasadą mapy)

### E. Szablony i strony z Contentful

- [ ] 18. Nowy wygląd `page-template`
- [ ] 19. `/blog`
- [ ] 20. `/blog/[slug]`
- [ ] 21. `/aktualnosci`
- [ ] 22. `/aktualnosci/[slug]`
- [ ] 23. `/osteopata-dzieciecy`
- [ ] 24. `/neurologopeda-katowice`
- [ ] 25. `/terapia-ortopedyczna`
- [ ] 26. `/fizjoterapia-sportowa`
- [ ] 27. `/psycholog-dzieciecy`
- [ ] 28. `/trener-personalny-dla-dzieci`
- [ ] 29. `/trening-personalny-dla-kobiet-w-ciazy-i-po-porodzie`
- [ ] 30. Raport: wpisy i pola w Contentful do poprawy wg `ZMIANY-TRESCI.md` (bez zmian w kodzie)

### F. Usługi z treścią w kodzie

- [ ] 31. `/rehabilitacja-noworodkow`
- [ ] 32. `/rehabilitacja-wczesniakow`
- [ ] 33. `/diagnostyka-hine`
- [ ] 34. `/diagnostyka-metoda-prechtla`
- [ ] 35. `/terapia-si-w-katowicach`
- [ ] 36. `/terapia-wad-postawy-u-dzieci`
- [ ] 37. `/terapia-oddechowa`
- [ ] 38. `/wkladki-ortopedyczne-igli-junior` (URL bez zmian, w treści „wkładki ortopedyczne”)
- [ ] 39. `/blog/witamy-na-blogu2` i `/blog/zaburzenia-napiecia-miesniowego-u-niemowlakow2`

### G. Zespół

- [ ] 40. `/zespol`
- [ ] 41. Wspólny komponent profilu specjalisty + `/kamila-wlodarczyk`
- [ ] 42. `/martyna-cesarczyk`
- [ ] 43. `/aleksandra-deninger`
- [ ] 44. `/aleksandra-fraczek`
- [ ] 45. `/anna-plaszczyk`
- [ ] 46. `/ewelina-roszkowska`
- [ ] 47. `/jakub-smistek`
- [ ] 48. `/julianna-gwozdz`
- [ ] 49. `/kaja-smolenska-ozog`
- [ ] 50. `/kamila-tomaszkiewicz`
- [ ] 51. `/katarzyna-gaweda`
- [ ] 52. `/katarzyna-loranc`
- [ ] 53. `/michal-handzlik`
- [ ] 54. `/michal-matuszak`
- [ ] 55. `/sabina-szober`
- [ ] 56. `/sebastian-niemczyk`

### H. Pozostałe strony

- [ ] 57. `/cennik` (wyszukiwarka i dane z `pricelistData.js` bez zmian logiki)
- [ ] 58. `/informacje-dla-pacjenta`
- [ ] 59. `/kontakt`
- [ ] 60. `/polityka-prywatnosci`
- [ ] 61. `/regulamin-podmiotu-leczniczego`
- [ ] 62. `/maintenance`
- [ ] 63. Sprzątanie: nieużywane komponenty, obrazy i klasy starego wyglądu (lista do akceptacji przed usunięciem)

### I. Kontrola

- [ ] 64. Dostępność (klawiatura, kontrast, aria) i widok mobilny – poprawki
- [ ] 65. Lighthouse (strona główna, O nas, przykładowa usługa, blog) – poprawki

## Weryfikacja

Po każdym punkcie `npm run build`. Dla stron: przegląd w przeglądarce (desktop, < 1100px, < 760px) w porównaniu z makietą; sprawdzenie, że URL i metadane się nie zmieniły. Na koniec test klawiaturą i Lighthouse.
