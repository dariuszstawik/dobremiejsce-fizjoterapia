import { HandHeart } from "lucide-react";
import Navbar from "../components/navbar";
import PageTemplate from "../components/page-template";
import Link from "next/link";

export const metadata = {
  title:
    "Terapia oddechowa noworodków, niemowląt i małych dzieci | Dobre Miejsce",
  description:
    "Czy Twoje dziecko ma trudności z oddychaniem, męczy się szybko podczas karmienia lub ma częste infekcje dróg oddechowych? Może to być związane z zaburzeniami mechaniki oddechowej. W Dobrym Miejscu w Katowicach pomagamy najmłodszym pacjentom oddychać swobodniej i rozwijać się harmonijnie.",
  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "Terapia oddechowa noworodków, niemowląt i małych dzieci | Dobre Miejsce",
    description:
      "Czy Twoje dziecko ma trudności z oddychaniem, męczy się szybko podczas karmienia lub ma częste infekcje dróg oddechowych? Może to być związane z zaburzeniami mechaniki oddechowej. W Dobrym Miejscu w Katowicach pomagamy najmłodszym pacjentom oddychać swobodniej i rozwijać się harmonijnie.",
    url: "https://dobremiejsce-fizjoterapia.pl/rehabilitacja-wczesniakow",
    siteName: "Dobre Miejsce - fizjoterapia dzieci",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "https://dobremiejsce-fizjoterapia.pl/baby-hero.jpg",
        width: 1920,
        height: 1272,
        alt: "Fizjoterapia dzieci",
      },
    ],
  },
};

export default function TerapiaOddechowa() {
  return (
    <>
      <Navbar />
      <PageTemplate
        title={
          <>
            Terapia oddechowa noworodków, niemowląt i małych dzieci
            {/* <br />
            Katowice */}
          </>
        }
        lead="Czy Twoje dziecko ma trudności z oddychaniem, męczy się szybko podczas karmienia lub ma częste infekcje dróg oddechowych? Może to być związane z zaburzeniami mechaniki oddechowej. W Dobrym Miejscu w Katowicach pomagamy najmłodszym pacjentom oddychać swobodniej i rozwijać się harmonijnie."
        img="/baby-hero.jpg"
        alt="Terapia oddechowa w Katowicach"
        // bannerTitle="Rehabilitacja wcześniaków w Katowicach"
        bannerBody="Nie czekaj, aż problem się pogłębi — umów się na konsultację oddechową i zadbaj o spokojny, swobodny oddech swojego dziecka."
      >
        {
          <>
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-3 mt-2 text-3xl font-bold text-gray">
                Kiedy warto zgłosić się na terapię oddechową?
              </h2>

              <div className="text-md lg:text-lg mb-6">
                Terapia oddechowa może być pomocna w przypadku dzieci, które:
                <ul
                  className="mt-4 list-outside gap-32 p-0 pl-12"
                  style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
                >
                  <li className="my-2 pl-4 lg:my-2">
                    <p className="relative -top-2">
                      urodziły się przedwcześnie,
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      przeszły choroby układu oddechowego (np. zapalenie płuc,
                      RSV, COVID-19),
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      zmagają się z dysplazją oskrzelowo-płucną,
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      mają zdiagnozowaną przepuklinę przeponową,
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      przebyły zabiegi kardiochirurgiczne,
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      mają wady w budowie klatki piersiowej (np. klatkę
                      lejkowatą, kurzą),
                    </p>
                  </li>

                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      wykazują zaburzenia mechaniki oddechowej, takie jak
                      spłycenie oddechu, zbyt szybki oddech, napięcie w obrębie
                      klatki piersiowej.
                    </p>
                  </li>
                </ul>
              </div>

              {/* <h2 className="mb-8 mt-6 text-3xl font-bold text-gray">
                Nasze podejście opiera się na delikatnej i uważnej terapii,
                która:
              </h2>
              <div className="text-md lg:text-lg mb-6">
                <ul
                  className="m-0 list-outside gap-32 p-0 pl-12"
                  style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
                >
                  <li className="my-3 pl-4 lg:my-3">
                    <p className="relative -top-2">
                      wspiera prawidłowy rozwój psychoruchowy
                    </p>
                  </li>
                  <li className="mb-3 pl-4 lg:mb-3">
                    <p className="relative -top-2">
                      pomaga w osiąganiu kolejnych kamieni milowych
                    </p>
                  </li>
                  <li className="mb-3 pl-4 lg:mb-3">
                    <p className="relative -top-2">
                      zapobiega potencjalnym trudnościom rozwojowym
                    </p>
                  </li>
                  <li className="mb-3 pl-4 lg:mb-3">
                    <p className="relative -top-2">
                      wzmacnia naturalne mechanizmy adaptacyjne dziecka
                    </p>
                  </li>
                </ul>
              </div> */}

              <h2 className="mb-4 mt-6 text-3xl font-bold text-gray">
                Jak pomagamy?
              </h2>
              <div className="text-md lg:text-lg mb-6">
                W Dobrym Miejscu terapię oddechową prowadzi Kamila Włodarczyk,
                fizjoterapeutka pediatryczna z wieloletnim doświadczeniem w
                pracy z noworodkami i niemowlętami, również w warunkach
                szpitalnych – m.in. w Górnośląskim Centrum Zdrowia Dziecka.
                Podczas terapii wykorzystuje m.in. metodę zwiększania przepływu
                oddechowego AFE (Augmentation Flow Expiration) – nowoczesne i
                skuteczne podejście, które:
                <ul
                  className="mt-6 list-outside gap-32 p-0 pl-12"
                  style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
                >
                  <li className="my-3 pl-4 lg:my-3">
                    <p className="relative -top-2">
                      wspomaga oczyszczanie dróg oddechowych z zalegającej
                      wydzieliny,
                    </p>
                  </li>
                  <li className="mb-3 pl-4 lg:mb-3">
                    <p className="relative -top-2">poprawia wentylację płuc,</p>
                  </li>

                  <li className="mb-3 pl-4 lg:mb-3">
                    <p className="relative -top-2">reguluje rytm oddechowy,</p>
                  </li>
                  <li className="mb-3 pl-4 lg:mb-3">
                    <p className="relative -top-2">
                      wspiera rozwój prawidłowego toru oddechowego,
                    </p>
                  </li>

                  <li className="mb-3 pl-4 lg:mb-3">
                    <p className="relative -top-2">
                      zwiększa komfort dziecka i wspomaga jego rozwój
                      psychoruchowy.
                    </p>
                  </li>
                </ul>
              </div>

              <h2 className="mb-4 mt-6 text-3xl font-bold text-gray">
                Na czym polega terapia?
              </h2>
              <div className="text-md lg:text-lg mb-6">
                Terapia zawsze jest dostosowana indywidualnie do potrzeb dziecka
                – jego wieku, stanu zdrowia oraz historii choroby. Zajęcia
                przebiegają w spokojnej, bezpiecznej atmosferze, z
                uwzględnieniem komfortu zarówno dziecka, jak i rodziców.
              </div>
              <div className="text-md lg:text-lg mb-6">
                Podczas spotkania:
                <ul
                  className="mt-6 list-outside gap-32 p-0 pl-12"
                  style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
                >
                  <li className="my-3 pl-4 lg:my-3">
                    <p className="relative -top-2">
                      oceniamy mechanikę klatki piersiowej i sposób oddychania,
                    </p>
                  </li>
                  <li className="mb-3 pl-4 lg:mb-3">
                    <p className="relative -top-2">
                      pracujemy technikami manualnymi wspomagającymi oddychanie,
                    </p>
                  </li>
                  <li className="mb-3 pl-4 lg:mb-3">
                    <p className="relative -top-2">
                      uczymy rodziców, jak wspierać oddech dziecka w domu.
                    </p>
                  </li>
                </ul>
              </div>
              <h2 className="mb-3 mt-2 text-3xl font-bold text-gray">
                Dlaczego warto rozpocząć terapię jak najwcześniej?
              </h2>

              <div className="text-md lg:text-lg mb-6">
                Układ oddechowy najmłodszych dzieci jest bardzo wrażliwy i
                podatny na zaburzenia. Wczesna interwencja:
                <ul
                  className="mt-4 list-outside gap-32 p-0 pl-12"
                  style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
                >
                  <li className="my-2 pl-4 lg:my-2">
                    <p className="relative -top-2">
                      poprawia jakość oddechu i snu,
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      zapobiega częstym infekcjom dróg oddechowych,
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      wspiera rozwój motoryczny i poznawczy,
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      zmniejsza ryzyko powikłań i hospitalizacji.
                    </p>
                  </li>
                </ul>
              </div>
              <h2 className="mb-3 mt-2 text-3xl font-bold text-gray">
                Wspieramy nie tylko dzieci, ale i rodziców
              </h2>

              <div className="text-md lg:text-lg mb-6">
                Rozumiemy, jak trudne mogą być pierwsze miesiące życia dziecka z
                problemami oddechowymi. Dlatego:
                <ul
                  className="mt-4 list-outside gap-32 p-0 pl-12"
                  style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
                >
                  <li className="my-2 pl-4 lg:my-2">
                    <p className="relative -top-2">
                      dokładnie tłumaczymy przebieg terapii,
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      odpowiadamy na wszystkie pytania i wątpliwości,
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-2">
                      wspieramy emocjonalnie rodziców, dając im narzędzia do
                      codziennego wspierania dziecka.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </>
        }
      </PageTemplate>
    </>
  );
}
