export default function RegulaminPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12 text-gray-900">
      {/* ================= HEADER ================= */}
      <header className="mb-12 text-center">
        <h1 className="text-2xl font-bold uppercase">
          Regulamin organizacyjny
        </h1>
        <p className="mt-2 font-semibold">Podmiotu Leczniczego</p>
        <p className="mt-1 font-semibold">
          „DOBRE MIEJSCE FIZJOTERAPIA DZIECI SP. Z O.O.”
        </p>
        <p className="mt-4 text-sm text-gray-600">z siedzibą w Katowicach</p>
      </header>

      {/* ================= WSTĘP ================= */}
      <p className="mb-10 text-sm leading-relaxed">
        Niniejszy regulamin został ustalony na podstawie art. 23 ust. 1 oraz
        art. 24 ust. 1 ustawy z dnia 15 kwietnia 2011 r. o działalności
        leczniczej przez kierownika podmiotu leczniczego.
      </p>

      {/* ================= §1 ================= */}
      <Section title="§1. Postanowienia ogólne">
        <p>
          Niniejszy regulamin określa sposób i warunki udzielania świadczeń
          zdrowotnych przez podmiot leczniczy działający pod nazwą: „DOBRE
          MIEJSCE FIZJOTERAPIA DZIECI SP. Z O.O.” z siedzibą w Katowicach.
        </p>

        <p>Ilekroć w niniejszym regulaminie jest mowa o:</p>

        <ul className="list-disc pl-6">
          <li>
            <strong>Kierowniku</strong> – kierownik podmiotu leczniczego, o
            którym mowa w §9;
          </li>
          <li>
            <strong>Monitoringu</strong> – monitoring wizyjny prowadzony w
            Zakładzie Leczniczym;
          </li>
          <li>
            <strong>Podmiocie Leczniczym</strong> – „DOBRE MIEJSCE FIZJOTERAPIA
            DZIECI SP. Z O.O.”;
          </li>
          <li>
            <strong>Regulaminie</strong> – niniejszy regulamin;
          </li>
          <li>
            <strong>Zakładzie Leczniczym</strong> – zakład leczniczy „DOBRE
            MIEJSCE”.
          </li>
        </ul>

        <p>
          Podmiot Leczniczy działa na podstawie Regulaminu oraz obowiązującego
          prawa, w szczególności ustaw o działalności leczniczej, zawodzie
          fizjoterapeuty oraz prawach pacjenta.
        </p>
      </Section>

      {/* ================= §2 ================= */}
      <Section title="§2. Szczegółowe oznaczenie podmiotu leczniczego">
        <p>
          Podmiot leczniczy prowadzony jest w formie spółki z ograniczoną
          odpowiedzialnością pod nazwą „DOBRE MIEJSCE FIZJOTERAPIA DZIECI SP. Z
          O.O.” z siedzibą w Katowicach.
        </p>

        <ul className="list-disc pl-6">
          <li>Adres: ul. Jankego 48 lok. 1, 40-612 Katowice</li>
          <li>NIP: 9542896233</li>
          <li>REGON: 54300371300000</li>
          <li>KRS: 0001200095</li>
          <li>Telefon: 577 611 464</li>
          <li>E-mail: administrator@dobremiejsce-fizjoterapia.pl</li>
          <li>WWW: www.dobremiejsce-fizjoterapia.pl</li>
        </ul>
      </Section>

      {/* ================= §3 ================= */}
      <Section title="§3. Cele i zadania podmiotu leczniczego">
        <p>
          Celem Podmiotu Leczniczego jest organizowanie i udzielanie
          ambulatoryjnych świadczeń zdrowotnych z zakresu fizjoterapii.
        </p>

        <ul className="list-disc pl-6">
          <li>udzielanie świadczeń fizjoterapeutycznych;</li>
          <li>działania edukacyjne i profilaktyczne;</li>
          <li>współpraca z innymi podmiotami leczniczymi;</li>
          <li>inne zadania wynikające z przepisów prawa.</li>
        </ul>
      </Section>

      {/* ================= §4 ================= */}
      <Section title="§4. Struktura organizacyjna zakładu leczniczego">
        <p>
          Podmiot Leczniczy wykonuje działalność leczniczą za pomocą Zakładu
          Leczniczego „DOBRE MIEJSCE”.
        </p>

        <ul className="list-disc pl-6">
          <li>001 – Pracownia Fizjoterapii</li>
          <li>002 – Pracownia Fizjoterapii dla dzieci</li>
        </ul>
      </Section>

      {/* ================= §5 ================= */}
      <Section title="§5. Rodzaj działalności i zakres świadczeń">
        <ul className="list-disc pl-6">
          <li>diagnostyka funkcjonalna;</li>
          <li>kinezyterapia;</li>
          <li>masaże (dorośli);</li>
          <li>fizjoprofilaktyka;</li>
          <li>wydawanie opinii i orzeczeń;</li>
          <li>edukacja pacjentów.</li>
        </ul>
      </Section>

      {/* ================= §6 ================= */}
      <Section title="§6. Miejsce udzielania świadczeń">
        <p>
          Świadczenia udzielane są w Zakładzie Leczniczym przy ul. Jankego 48
          lok. 1 w Katowicach oraz w miejscu wezwania pacjenta.
        </p>
      </Section>

      {/* ================= §7 ================= */}
      <Section title="§7. Organizacja udzielania świadczeń">
        <ul className="list-disc pl-6">
          <li>świadczenia są odpłatne;</li>
          <li>poniedziałek–sobota, 8:00–20:00;</li>
          <li>rejestracja osobista, telefoniczna i online;</li>
          <li>płatność po wizycie (gotówka, karta).</li>
        </ul>
      </Section>

      {/* ================= §8–§15 ================= */}
      <Section title="§8–§15. Zasady, odwołania, jakość, dokumentacja, monitoring">
        <p>
          Kolejne paragrafy regulują m.in. zasady punktualności, odwoływania
          wizyt, jakość świadczeń, udostępnianie dokumentacji medycznej oraz
          monitoring wizyjny zgodnie z RODO i ustawą o prawach pacjenta.
        </p>
      </Section>

      {/* ================= §16 ================= */}
      <Section title="§16. Postanowienia końcowe">
        <p>Regulamin wchodzi w życie z dniem 15 lutego 2026 r.</p>
      </Section>

      {/* ================= ZAŁĄCZNIK 1 ================= */}
      <Section title="Załącznik nr 1 – Cennik świadczeń zdrowotnych">
        <table className="w-full border text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-3 py-2 text-left">Świadczenie</th>
              <th className="border px-3 py-2">Cena brutto</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-3 py-2">
                Pierwsza wizyta diagnostyczna (dzieci)
              </td>
              <td className="border px-3 py-2">—</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">
                Terapia dzieci po 1. roku życia
              </td>
              <td className="border px-3 py-2">—</td>
            </tr>
          </tbody>
        </table>
      </Section>

      {/* ================= ZAŁĄCZNIK 2 ================= */}
      <Section title="Załącznik nr 2 – Dokumentacja medyczna">
        <table className="w-full border text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-3 py-2 text-left">Rodzaj</th>
              <th className="border px-3 py-2">Opłata</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-3 py-2">Kopia / wydruk</td>
              <td className="border px-3 py-2">0,59 zł / str.</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Odpis / wyciąg</td>
              <td className="border px-3 py-2">16,95 zł / str.</td>
            </tr>
          </tbody>
        </table>
      </Section>
    </main>
  );
}

function Section({ title, children }) {
  return (
    <section className="mb-10 space-y-4">
      <h2 className="text-lg font-bold uppercase">{title}</h2>
      <div className="space-y-3 text-sm leading-relaxed">{children}</div>
    </section>
  );
}
