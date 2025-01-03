export default function TeamSection() {
  return (
    <section>
      <div className="container mx-auto px-4 py-12 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
        <h2 className="mb-8 text-3xl font-semibold lg:mb-16">Nasz zespół</h2>
        {/* Kamila Section */}
        <div
          className="mb-8 flex flex-col gap-4 lg:flex-row lg:gap-16"
          id="kamila"
        >
          {/* <div> */}
          <img
            src="/kamila-wlodarczyk.png"
            alt="Kamila Włodarczyk"
            className="m-0 w-40 rounded-full p-0 lg:w-auto lg:mb-auto"
          />
          {/* </div> */}
          <div className="text-gray">
            <h3 className="mb-5 text-xl font-semibold lg:text-2xl lg:text-3xl">
              Kamila Włodarczyk
            </h3>
            <p className="text-md lg:text-lg mb-6">
              Jestem terapeutką metody NDT-Bobath. Na co dzień pracuję w
              Górnośląskim Centrum Zdrowia Dziecka w Katowicach w Oddziale
              Neonatologii i Intensywnej Terapii Noworodka oraz jako konsultant
              w Oddziale Neonatologii Szpitala Miejskiego w Rudzie Śląskiej.
            </p>
            <p className="text-md lg:text-lg mb-6">
              Pasja zawodowa zaprowadziła mnie do wyjątkowego porozumienia z
              najmniejszymi pacjentami-jedną z moich misji jest pomoc noworodkom
              i ich Rodzinom w adaptacji do nowego Świata- również tego po
              wyjściu z Oddziału Intensywnej Terapii. Podczas pracy
              terapeutycznej szczególnie ważna jest dla mnie indywidualność
              każdego dziecka i to na jej bazie buduję diagnozę i terapię.
            </p>
            <p className="font-semibold mb-6">Kwalifikacje:</p>
            <ul
              className="text-md flex flex-col gap-2 font-medium lg:gap-4 lg:text-lg"
              style={{ listStyleImage: 'url("/checkmark.png")' }}
            >
              {[
                "PNF kurs podstawowy (PNF Basic course)",
                "NDT-Bobath dla dzieci (EBTA)",
                "Terapia oddechowa noworodków, niemowląt i małych dzieci metodą Zwiększania Przepływów Oddechowych AFE/AFI",
                "Opieka, stymulacja i terapia rozwojowa w oddziałach neonatologicznych",
                "NBAS Skala Oceny Zachowania Noworodka (Skala Brazeltona)",
                "Diagnostyka metodą Prechtla- kurs podstawowy",
                "Podejście osteopatyczne w pediatrii (niemowlaki 0-1)",
                "Karmienie wcześniaka na Oddziale Neonatologicznym",
              ].map((item, index) => (
                <li key={index} className="ml-10 pl-4">
                  <p className="relative -top-2">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Martyna Section */}
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-16" id="martyna">
          {/* <div> */}
          <img
            src="/martyna-cesarczyk.png"
            alt="Martyna Cesarczyk"
            className="m-0 w-40 rounded-full p-0 lg:w-auto lg:mb-auto"
          />
          {/* </div> */}
          <div className="text-gray">
            <h3 className="mb-5 text-xl font-semibold lg:text-2xl lg:text-3xl">
              Martyna Cesarczyk
            </h3>
            <p className="text-md lg:text-lg mb-6">
              Jestem absolwentką kierunku fizjoterapii Śląskiego Uniwersytetu
              Medycznego w Katowicach, studiów podyplomowych na kierunku
              Neurorozwojowa Terapia Dzieci z Chorobami Układu Nerwowego oraz
              studiów podyplomowych pedagogicznych.
            </p>
            <p className="text-md lg:text-lg mb-6">
              Swoje doświadczenie w fizjoterapii pediatrycznej zdobywałam m.in.
              w Górnośląskim Centrum Zdrowia Dziecka w Katowicach, Centrum
              Intensywnej Terapii Olinek w Warszawie, NZOZ Terapia w Rudzie
              Śląskiej i SORO dla Dzieci Niepełnosprawnych w Katowicach.
            </p>
            <p className="text-md lg:text-lg mb-6">
              W dziedzinie fizjoterapii pediatrycznej najbardziej pasjonuje mnie
              praca z dziećmi z mózgowym porażeniem dziecięcym i innymi
              chorobami centralnego układu nerwowego. Mam doświadczenie w pracy
              z niemowlętami i dziećmi z wadami postawy ciała.
            </p>
            <p className="font-semibold mb-6">Kwalifikacje:</p>
            <ul
              className="text-md flex flex-col gap-2 font-medium lg:gap-4 lg:text-lg"
              style={{ listStyleImage: 'url("/checkmark.png")' }}
            >
              {[
                "NDT Bobath Basic dla dzieci 2021 (EBTA)",
                "Kurs diagnozy i terapii Integracji Sensorycznej I i II stopień 2018/2019",
                "PNF podstawowy 2016 (PNF Basic course)",
                "Elastyczny Terapeutyczny Taping w pediatrii 2022",
                "Kinesiotaping podstawowy 2014",
                "Visual Impairment in infants with brain damage dr Andrea Guzetta 2022",
                "Dziecko słabowidzące albo zagrożone rozwojem słabowzroczności u fizjoterapeuty – podstawowe informacje i strategie pracy dr Agata Grzegorzewska 2022",
              ].map((item, index) => (
                <li key={index} className="ml-10 pl-4">
                  <p className="relative -top-2">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
