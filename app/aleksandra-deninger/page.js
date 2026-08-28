import { Mail, PhoneCall } from "lucide-react";
import Navbar from "../components/navbar";

export const metadata = {
  title:
    "Aleksandra Deninger - fizjoterapeuta dzieci w Katowicach | Dobre Miejsce",
  description:
    "Aleksandra Deninger - fizjoterapeuta dzieci w Katowicach - profil zawodowy, kwalifikacje, dane kontaktowe",
  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Aleksandra Deninger - fizjoterapeuta dzieci",
    description:
      "Aleksandra Deninger - fizjoterapeuta dzieci w Katowicach - profil zawodowy, kwalifikacje, dane kontaktowe",
    url: "https://dobremiejsce-fizjoterapia.pl/katarzyna-gaweda",
    siteName: "Dobre Miejsce - fizjoterapia dzieci",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "https://dobremiejsce-fizjoterapia.pl/katarzyna-gaweda-sm.webp",
        width: 1200,
        height: 800,
        alt: "Fizjoterapia dzieci",
      },
    ],
  },
};

export default function AleksandraDeninger() {
  return (
    <>
      <Navbar />
      <section className="mt-20">
        <div className="container mx-auto mt-20 px-4 pb-12 pt-40 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:pb-20">
          <div
            className="mb-8 flex flex-col gap-4 lg:flex-row lg:gap-16"
            id="sebastian"
          >
            <img
              src="/aleksandra-deninger.webp"
              alt="Aleksandra Deninger"
              className="m-0 w-40 rounded-full p-0 lg:w-auto lg:mb-auto"
            />

            <div className="text-gray">
              <h1 className="mb-4 font-heading text-4xl md:text-5xl font-bold max-w-5xl">
                Aleksandra Deninger
                <span className="block  mt-2 mb-2 text-2xl max-w-5xl font-normal">
                  {" "}
                  Fizjoterapeuta dziecięcy Katowice
                </span>{" "}
              </h1>
              <a
                className="inline-block whitespace-nowrap rounded-full bg-orange px-5 py-4 mb-8  text-white no-underline shadow-lg hover:bg-heavy hover:text-white"
                href="https://dobremiejscefizjoterapiadzieci.booksy.com/"
                target="_blank"
                rel="noreferrer noopener nofollow"
              >
                Umów wizytę
              </a>

              <p className="text-md lg:text-lg mb-6 font-bold">
                Jestem fizjoterapeutką, absolwentką Śląskiego Uniwersytetu
                Medycznego w Katowicach. Ukończyłam również podyplomowe studia z
                zakresu przygotowywania pedagogicznego, a także integracji
                sensorycznej. Posiadam ponad dziesięcioletnie doświadczenie w
                pracy z dziećmi, a w ostatnim czasie szczególnie skupiam się na
                pracy z niemowlętami i małymi dziećmi. Od początku swojej drogi
                zawodowej szczególnie bliska jest mi fizjoterapia pediatryczna
                oraz wspieranie dziecka w osiąganiu kolejnych etapów rozwoju
                ruchowego.
              </p>

              <p className="text-md lg:text-lg mb-6">
                Pracowałam w różnych środowiskach – w placówkach ochrony
                zdrowia, prywatnych gabinetach, przedszkolu terapeutycznym oraz
                szkołach z oddziałami integracyjnymi. Dzięki temu mam szerokie
                doświadczenie w pracy zarówno z niemowlętami, jak i starszymi
                dziećmi z różnorodnymi trudnościami rozwojowymi, neurologicznymi
                i ortopedycznymi.
              </p>

              <p className="text-md lg:text-lg mb-6">
                W swojej pracy zajmuję się m.in. zaburzeniami rozwoju ruchowego,
                nieprawidłowym rozkładem napięcia mięśniowego, wadami postawy,
                wadami wrodzonymi, zespołami genetycznymi i innymi zaburzeniami
                rozwojowymi. Szczególnie ważna jest dla mnie wczesna diagnostyka
                i uważna obserwacja dziecka. Podczas spotkania patrzę nie tylko
                na pojedynczy objaw, ale na dziecko jako całość - jego sposób
                poruszania się, jakość ruchu, napięcie mięśniowe, możliwości i
                ograniczenia oraz codzienne funkcjonowanie.
              </p>
              <p className="text-md lg:text-lg mb-6">
                Dużą wagę przykładam również do współpracy z rodzicami. Wierzę,
                że terapia dziecka nie kończy się w gabinecie, dlatego
                przekazuję rodzicom konkretne i zrozumiałe wskazówki, które mogą
                wykorzystać podczas codziennej opieki, pielęgnacji i zabawy.
              </p>
              <p className="text-md lg:text-lg mb-6">
                Nieustannie rozwijam swoje kompetencje. Ukończyłam liczne
                szkolenia z zakresu neurorozwoju niemowląt i dzieci, diagnostyki
                rozwoju, neurologii dziecięcej i terapii pediatrycznej.
                Szczególnie interesuje mnie okres od urodzenia do pierwszych lat
                życia, kiedy rozwój dziecka jest niezwykle dynamiczny, a
                odpowiednio dobrane wsparcie może mieć ogromne znaczenie.
              </p>
              <p className="text-md lg:text-lg mb-6">
                Moim kolejnym kierunkiem rozwoju zawodowego jest fizjoterapia
                uroginekologiczna oraz opieka nad kobietą w okresie ciąży i po
                porodzie. Jest to dla mnie naturalne rozszerzenie dotychczasowej
                pracy z dziećmi – pozwala spojrzeć na zdrowie kobiety i dziecka
                w sposób całościowy, od okresu ciąży, przez poród i połóg, aż po
                pierwsze lata życia dziecka. W planach zawodowych mam
                rozszerzenie warsztatu o fizjoterapię kobiet w ciąży,
                przygotowanie do porodu, połogu oraz powrotu do sprawności po
                porodzie.
              </p>
              <p className="text-md lg:text-lg mb-6">
                W pracy najważniejsze są dla mnie uważność, indywidualne
                podejście i szacunek do pacjenta oraz jego rodziny. Chcę, aby
                każda osoba, która trafia pod moją opiekę, czuła się wysłuchana,
                otrzymała jasne informacje i miała poczucie, że terapia jest
                rzeczywiście dopasowana do jej potrzeb. Chętnie rozwiewam
                wszelkie wątpliwości rodziców oraz zachęcam do zadawania wielu
                pytań, bo rzetelna wiedza koi troski i pozwala skupić się na
                radości z rodzicielstwa.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
