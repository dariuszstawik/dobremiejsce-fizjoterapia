import Navbar from "../components/navbar";

export const metadata = {
  title: "Polityka prywatności | Dobre Miejsce",
  description:
    "Dbamy o Twoją prywatność. Na stronie znajdziesz informacje o tym, jakie dane gromadzimy na naszej stronie i w jakim celu.",
};

export default function PolitykaPrywatnosci() {
  return (
    <>
      <Navbar />
      <section className="py-32 mt-12 md:py-40 container mx-auto px-8 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        <div className="max-w-4xl mx-auto text-gray-800">
          <h1 className="text-3xl font-bold mb-8">Polityka prywatności</h1>
          <p className="mb-6 font-semibold">
            Dobre Miejsce – fizjoterapia dzieci
          </p>

          <p className="mb-6">
            Dbamy o Twoją prywatność. Poniżej znajdziesz informacje o tym, jakie
            dane gromadzimy na naszej stronie i w jakim celu.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4">
            1. Administrator danych osobowych
          </h2>
          <p className="mb-6">
            Administratorem danych osobowych jest:
            <br />
            <strong>Dobre Miejsce – fizjoterapia dzieci</strong>
            <br />
            ul. Ceglana 66
            <br />
            40-514 Katowice
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4">
            2. Zakres i cel przetwarzania danych
          </h2>
          <p className="mb-4">
            Nasza strona korzysta z narzędzia <strong>Google Analytics</strong>{" "}
            w celu analizowania statystyk odwiedzin i sposobu korzystania z
            witryny. Dzięki temu możemy lepiej dostosować treści do potrzeb
            użytkowników.
          </p>
          <p className="mb-4">Google Analytics może zbierać dane takie jak:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>adres IP (anonimizowany),</li>
            <li>
              informacje o urządzeniu, systemie operacyjnym i przeglądarce,
            </li>
            <li>dane o czasie odwiedzin i przeglądanych podstronach.</li>
          </ul>
          <p className="mb-6">
            Nie zbieramy żadnych danych umożliwiających identyfikację
            użytkowników. Na stronie nie ma formularzy kontaktowych ani
            możliwości pozostawienia danych osobowych.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4">
            3. Pliki cookies
          </h2>
          <p className="mb-4">
            Strona korzysta z plików <strong>cookies</strong>, które umożliwiają
            działanie Google Analytics. Przy pierwszej wizycie wyświetlany jest
            baner cookies, który pozwala użytkownikowi wyrazić zgodę na
            wykorzystanie plików cookies do celów analitycznych.
          </p>
          <p className="mb-4">Użytkownik może:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>zaakceptować lub odrzucić zbędne pliki cookies,</li>
            <li>
              zmienić ustawienia cookies w przeglądarce w dowolnym momencie.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-12 mb-4">
            4. Udostępnianie danych
          </h2>
          <p className="mb-4">
            Dane zbierane przez Google Analytics są przekazywane firmie{" "}
            <strong>Google LLC</strong>, która działa jako podmiot
            przetwarzający dane na podstawie zawartej umowy powierzenia danych.
            Dane mogą być przechowywane na serwerach zlokalizowanych poza
            Europejskim Obszarem Gospodarczym, przy czym Google zapewnia
            stosowanie odpowiednich mechanizmów zabezpieczających (np.
            standardowych klauzul umownych).
          </p>
          <p className="mb-6">
            Dostęp do danych mają wyłącznie osoby upoważnione przez
            Administratora w celu obsługi strony internetowej i analizy
            statystyk odwiedzin.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4">
            5. Środki bezpieczeństwa
          </h2>
          <p className="mb-4">
            W celu ochrony danych oraz zapewnienia bezpiecznego korzystania ze
            strony, stosujemy następujące środki techniczne i organizacyjne:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              certyfikat SSL – zapewniający szyfrowanie połączenia między
              użytkownikiem a stroną,
            </li>
            <li>
              regularna aktualizacja haseł dostępowych do systemów
              administracyjnych,
            </li>
            <li>
              aktualizacja oprogramowania strony w miarę potrzeb i pojawiających
              się aktualizacji bezpieczeństwa.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-12 mb-4">6. Twoje prawa</h2>
          <p className="mb-4">
            Zgodnie z RODO przysługują Ci następujące prawa:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>prawo dostępu do danych,</li>
            <li>prawo sprostowania danych,</li>
            <li>prawo ograniczenia przetwarzania,</li>
            <li>prawo sprzeciwu wobec przetwarzania danych,</li>
            <li>
              prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych
              Osobowych, jeśli uznasz, że przetwarzanie danych narusza przepisy
              prawa.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
