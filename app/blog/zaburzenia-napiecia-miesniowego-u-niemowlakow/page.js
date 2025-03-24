// import Navbar from "@/app/components/navbar";
// import PageTemplate from "@/app/components/page-template";

// export default function ZaburzeniaNapieciaMiesniowegoUNiemowlakow() {
//   return (
//     <>
//       <Navbar />
//       <PageTemplate
//         isBlog
//         title={
//           <>
//             Zaburzenia napięcia mięśniowego u niemowlaków - jak je rozpoznać i
//             co robić?
//           </>
//         }
//         lead='Jako fizjoterapeuci dziecięcy w gabinecie "Dobre miejsce", często spotykamy się z pytaniami dotyczącymi napięcia mięśniowego u niemowląt. Czy moje dziecko rozwija się prawidłowo? Dlaczego wydaje się takie wiotkie? A może jest zbyt sztywne? W tym artykule postaramy się przybliżyć Wam ten ważny aspekt rozwoju Waszego dziecka.'
//         img="/dobremiejsce008.jpg"
//         alt="Diagnostyka metodą Prechtla w Katowicach"
//       >
//         {
//           <>
//             <div className="max-w-4xl mx-auto">
//               <h2 className="mb-3 mt-6 text-3xl font-bold text-gray">
//                 Czym jest prawidłowe napięcie mięśniowe?
//               </h2>
//               <div className="text-md lg:text-lg mb-6 space-y-2">
//                 <p>
//                   {" "}
//                   Napięcie mięśniowe to stan gotowości mięśni do pracy - to, jak
//                   bardzo są napięte lub rozluźnione w spoczynku i podczas
//                   aktywności. U noworodków i niemowląt prawidłowe napięcie
//                   mięśniowe pozwala na stopniowe osiąganie kolejnych kamieni
//                   milowych rozwoju - od unoszenia główki, przez obracanie się,
//                   siadanie, aż po raczkowanie i chodzenie.
//                 </p>
//                 <p>
//                   W pierwszych miesiącach życia napięcie mięśniowe dynamicznie
//                   się zmienia. Noworodek może mieć zwiększone napięcie w
//                   kończynach (często trzyma zaciśnięte piąstki i zgięte nóżki),
//                   które stopniowo się normalizuje. Z kolei centralna część ciała
//                   (tułów) początkowo może być bardziej wiotka, a z czasem
//                   zyskuje na stabilności.
//                 </p>
//               </div>

//               <h2 className="mb-3 mt-6 text-3xl font-bold text-gray">
//                 Jak rozpoznać zaburzenia napięcia mięśniowego?{" "}
//               </h2>
//               <div className="text-md lg:text-lg mb-6">
//                 Zaburzenia napięcia mięśniowego mogą przybierać dwie główne
//                 formy: obniżone napięcie (hipotonia) lub podwyższone napięcie
//                 (hipertonia). Oto najczęstsze sygnały, które mogą sugerować
//                 nieprawidłowości:
//                 <h3>Obniżone napięcie mięśniowe (hipotonia): </h3>
//                 <ul
//                   className="mt-4 list-outside gap-32 p-0 pl-12"
//                   style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
//                 >
//                   <li className="my-2 pl-4 lg:my-2">
//                     <p className="relative -top-1">
//                       Dziecko wydaje się bardzo wiotkie, "wylewające się" z rąk
//                       podczas podnoszenia
//                     </p>
//                   </li>
//                   <li className="mb-2 pl-4 lg:mb-2">
//                     <p className="relative -top-1">
//                       Główka często opada na boki, nawet gdy maluch powinien już
//                       mieć kontrolę nad nią
//                     </p>
//                   </li>
//                   <li className="mb-2 pl-4 lg:mb-2">
//                     <p className="relative -top-1">
//                       Pozycja "żabki" z szeroko rozłożonymi nóżkami na podłożu
//                     </p>
//                   </li>
//                   <li className="mb-2 pl-4 lg:mb-2">
//                     <p className="relative -top-1">
//                       Opóźnienie w osiąganiu kamieni milowych rozwoju ruchowego
//                     </p>
//                   </li>
//                   <li className="mb-2 pl-4 lg:mb-2">
//                     <p className="relative -top-1">
//                       Opóźnienie w osiąganiu kamieni milowych rozwoju ruchowego
//                     </p>
//                   </li>
//                   <li className="mb-2 pl-4 lg:mb-2">
//                     <p className="relative -top-1">
//                       Trudności z ssaniem, słabe przysysanie do piersi
//                     </p>
//                   </li>
//                   <li className="mb-2 pl-4 lg:mb-2">
//                     <p className="relative -top-1">
//                       Nadmierna ruchomość w stawach
//                     </p>
//                   </li>
//                   <li className="mb-2 pl-4 lg:mb-2">
//                     <p className="relative -top-1">
//                       Mało aktywności ruchowej, dziecko preferuje leżenie
//                     </p>
//                   </li>
//                   <li className="mb-2 pl-4 lg:mb-2">
//                     <p className="relative -top-1">
//                       "Zwisające" policzki podczas płaczu
//                     </p>
//                   </li>
//                 </ul>
//                 <h3>Podwyższone napięcie mięśniowe (hipertonia):</h3>
//                 <ul
//                   className="mt-4 list-outside gap-32 p-0 pl-12"
//                   style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
//                 >
//                   <li className="my-2 pl-4 lg:my-2">
//                     <p className="relative -top-1">
//                       Dziecko wydaje się sztywne podczas podnoszenia lub
//                       przebierania
//                     </p>
//                   </li>
//                   <li className="mb-2 pl-4 lg:mb-2">
//                     <p className="relative -top-1">
//                       Trudności z rozłożeniem i wyprostowaniem rączek lub nóżek
//                     </p>
//                   </li>
//                   <li className="mb-2 pl-4 lg:mb-2">
//                     <p className="relative -top-1">
//                       Zaciśnięte piąstki utrzymujące się powyżej 3. miesiąca
//                       życia
//                     </p>
//                   </li>
//                   <li className="mb-2 pl-4 lg:mb-2">
//                     <p className="relative -top-1">
//                       Trudności z ułożeniem dziecka na brzuszku - układa się
//                       "jak banan" (wygięte do tyłu)
//                     </p>
//                   </li>
//                   <li className="mb-2 pl-4 lg:mb-2">
//                     <p className="relative -top-1">
//                       Krzyżowanie nóżek, "nożycowanie"
//                     </p>
//                   </li>
//                   <li className="mb-2 pl-4 lg:mb-2">
//                     <p className="relative -top-1">
//                       Trudności z przekraczaniem linii środkowej ciała rękami
//                     </p>
//                   </li>
//                   <li className="mb-2 pl-4 lg:mb-2">
//                     <p className="relative -top-1">
//                       Opóźnienie w osiąganiu kamieni milowych rozwoju ruchowego
//                     </p>
//                   </li>
//                   <li className="mb-2 pl-4 lg:mb-2">
//                     <p className="relative -top-1">
//                       Asymetria w ułożeniu lub ruchach ciała
//                     </p>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </>
//         }
//       </PageTemplate>
//     </>
//   );
// }

import Navbar from "@/app/components/navbar";
import PageTemplate from "@/app/components/page-template";

export default function ZaburzeniaNapieciaMiesniowegoUNiemowlakow() {
  return (
    <>
      <Navbar />
      <PageTemplate
        isBlog
        title={
          <>
            Zaburzenia napięcia mięśniowego u niemowlaków - jak je rozpoznać i
            co robić?
          </>
        }
        lead='Jako fizjoterapeuci dziecięcy w gabinecie "Dobre miejsce", często spotykamy się z pytaniami dotyczącymi napięcia mięśniowego u niemowląt. Czy moje dziecko rozwija się prawidłowo? Dlaczego wydaje się takie wiotkie? A może jest zbyt sztywne? W tym artykule postaramy się przybliżyć Wam ten ważny aspekt rozwoju Waszego dziecka.'
        img="/dobremiejsce008.jpg"
        alt="Diagnostyka metodą Prechtla w Katowicach"
      >
        {
          <>
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-3 mt-10 text-3xl font-bold text-gray">
                Czym jest prawidłowe napięcie mięśniowe?
              </h2>
              <div className="text-md lg:text-lg mb-6 space-y-2">
                <p>
                  {" "}
                  Napięcie mięśniowe to stan gotowości mięśni do pracy - to, jak
                  bardzo są napięte lub rozluźnione w spoczynku i podczas
                  aktywności. U noworodków i niemowląt prawidłowe napięcie
                  mięśniowe pozwala na stopniowe osiąganie kolejnych kamieni
                  milowych rozwoju - od unoszenia główki, przez obracanie się,
                  siadanie, aż po raczkowanie i chodzenie.
                </p>
                <p>
                  W pierwszych miesiącach życia napięcie mięśniowe dynamicznie
                  się zmienia. Noworodek może mieć zwiększone napięcie w
                  kończynach (często trzyma zaciśnięte piąstki i zgięte nóżki),
                  które stopniowo się normalizuje. Z kolei centralna część ciała
                  (tułów) początkowo może być bardziej wiotka, a z czasem
                  zyskuje na stabilności.
                </p>
              </div>

              <h2 className="mb-3 mt-10 text-3xl font-bold text-gray">
                Jak rozpoznać zaburzenia napięcia mięśniowego?{" "}
              </h2>
              <div className="text-md lg:text-lg mb-6">
                Zaburzenia napięcia mięśniowego mogą przybierać dwie główne
                formy: obniżone napięcie (hipotonia) lub podwyższone napięcie
                (hipertonia). Oto najczęstsze sygnały, które mogą sugerować
                nieprawidłowości:
                <h3 className="mb-2 mt-4 text-xl font-bold text-gray">
                  Obniżone napięcie mięśniowe (hipotonia):{" "}
                </h3>
                <ul
                  className="mt-4 list-outside gap-32 p-0 pl-12"
                  style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
                >
                  <li className="my-2 pl-4 lg:my-2">
                    <p className="relative -top-1">
                      dziecko wydaje się bardzo wiotkie, "wylewające się" z rąk
                      podczas podnoszenia,
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-1">
                      główka często opada na boki, nawet gdy maluch powinien już
                      mieć kontrolę nad nią,
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-1">
                      pozycja "żabki" z szeroko rozłożonymi nóżkami na podłożu,
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-1">
                      opóźnienie w osiąganiu kamieni milowych rozwoju ruchowego,
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-1">
                      trudności z ssaniem, słabe przysysanie do piersi,
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-1">
                      nadmierna ruchomość w stawach,
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-1">
                      mało aktywności ruchowej, dziecko preferuje leżenie,
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-1">
                      "zwisające" policzki podczas płaczu.
                    </p>
                  </li>
                </ul>
                <h3 className="mb-2 mt-4 text-xl font-bold text-gray">
                  Podwyższone napięcie mięśniowe (hipertonia):
                </h3>
                <ul
                  className="mt-4 list-outside gap-32 p-0 pl-12"
                  style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
                >
                  <li className="my-2 pl-4 lg:my-2">
                    <p className="relative -top-1">
                      dziecko wydaje się sztywne podczas podnoszenia lub
                      przebierania,
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-1">
                      trudności z rozłożeniem i wyprostowaniem rączek lub nóżek,
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-1">
                      zaciśnięte piąstki utrzymujące się powyżej 3. miesiąca
                      życia,
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-1">
                      trudności z ułożeniem dziecka na brzuszku - układa się
                      "jak banan" (wygięte do tyłu),
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-1">
                      krzyżowanie nóżek, "nożycowanie",
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-1">
                      trudności z przekraczaniem linii środkowej ciała rękami,
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-1">
                      opóźnienie w osiąganiu kamieni milowych rozwoju ruchowego,
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-1">
                      asymetria w ułożeniu lub ruchach ciała.
                    </p>
                  </li>
                </ul>
              </div>

              <h2 className="mb-3 mt-10 text-3xl font-bold text-gray">
                Co może powodować zaburzenia napięcia mięśniowego?
              </h2>
              <div className="text-md lg:text-lg mb-6">
                <p>Przyczyny mogą być różnorodne:</p>
                <ul
                  className="mt-4 list-outside gap-32 p-0 pl-12"
                  style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
                >
                  <li className="my-2 pl-4 lg:my-2">
                    <p className="relative -top-1">
                      czynniki okołoporodowe (np. trudny poród, niedotlenienie),
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-1">wcześniactwo,</p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-1">uwarunkowania genetyczne,</p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-1">przedłużona żółtaczka,</p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-1">zaburzenia neurologiczne,</p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-1">choroby metaboliczne,</p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-1">
                      nieprawidłowe pozycjonowanie dziecka w życiu codziennym.
                    </p>
                  </li>
                </ul>
                <p className="mt-4">
                  Ważne jest, aby pamiętać, że niektóre przejściowe zaburzenia
                  napięcia mogą być wariantem normy rozwojowej i mogą samoistnie
                  ustąpić z czasem.
                </p>
              </div>

              <h2 className="mb-3 mt-10 text-3xl font-bold text-gray">
                Co robić, gdy zauważysz niepokojące sygnały?
              </h2>
              <div className="text-md lg:text-lg mb-6">
                <ol
                  className="mt-4 list-outside gap-32 p-0 pl-12 list-decimal"
                  // style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
                >
                  <li className="my-2 pl-4 lg:my-2">
                    <p className="relative">
                      Skonsultuj się z pediatrą - to pierwszy krok. Lekarz może
                      skierować Was na szczegółową diagnostykę lub do
                      specjalisty.
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative">
                      Odwiedź fizjoterapeutę dziecięcego - wczesna interwencja
                      fizjoterapeutyczna może znacząco pomóc w normalizacji
                      napięcia mięśniowego i wspieraniu prawidłowego rozwoju.
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative">
                      Stosuj odpowiednie pozycjonowanie i noszenie -
                      fizjoterapeuta pokaże Ci, jak prawidłowo nosić, karmić i
                      układać dziecko, aby wspierać prawidłowe napięcie.
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative">
                      Wykonuj regularnie ćwiczenia - specjalista dobierze
                      odpowiednie ćwiczenia, które możesz wykonywać z dzieckiem
                      w domu.
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative">
                      Zapewnij dziecku stymulację sensoryczną - różnorodne
                      doświadczenia dotykowe, wzrokowe i słuchowe wspierają
                      rozwój neurologiczny.
                    </p>
                  </li>
                </ol>
              </div>

              <h2 className="mb-3 mt-10 text-3xl font-bold text-gray">
                Jak wspierać prawidłowe napięcie mięśniowe na co dzień?
              </h2>
              <div className="text-md lg:text-lg mb-6">
                <ul
                  className="mt-4 list-outside gap-32 p-0 pl-12"
                  style={{ listStyleImage: 'url("/checkmark-sm.png")' }}
                >
                  <li className="my-2 pl-4 lg:my-2">
                    <p className="relative -top-1">
                      zapewnij dziecku czas na brzuszku pod Twoim nadzorem, gdy
                      jest przytomne - to wzmacnia mięśnie szyi i tułowia,
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-1">
                      ogranicz czas spędzany w leżaczkach, bujaczkach i
                      nosidełkach - zbyt długi czas w tych pozycjach może
                      niekorzystnie wpływać na napięcie mięśniowe,
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-1">
                      noś dziecko w różnych pozycjach - zmiana pozycji stymuluje
                      różne grupy mięśniowe,
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-1">
                      baw się z dzieckiem, zachęcając je do sięgania po zabawki
                      z różnych kierunków,
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-1">
                      masuj delikatnie ciało dziecka - to pomaga w regulacji
                      napięcia mięśniowego,
                    </p>
                  </li>
                  <li className="mb-2 pl-4 lg:mb-2">
                    <p className="relative -top-1">
                      kąpiel w ciepłej wodzie może pomóc w rozluźnieniu
                      nadmiernie napiętych mięśni.
                    </p>
                  </li>
                </ul>
              </div>

              <h2 className="mb-3 mt-10 text-3xl font-bold text-gray">
                Kiedy szukać pomocy?
              </h2>
              <div className="text-md lg:text-lg mb-6 space-y-4">
                <p>
                  Zawsze lepiej jest działać profilaktycznie. Jeśli masz
                  jakiekolwiek wątpliwości dotyczące napięcia mięśniowego
                  Twojego dziecka, nie wahaj się skonsultować z fizjoterapeutą
                  dziecięcym. W naszym gabinecie "Dobre miejsce" przeprowadzamy
                  szczegółową ocenę rozwoju psychomotorycznego oraz napięcia
                  mięśniowego i pomagamy rodzicom wdrożyć odpowiednie działania
                  wspierające.
                </p>
                <p>
                  Pamiętaj, że wczesna interwencja jest kluczowa! Im wcześniej
                  zauważymy i zaczniemy pracować nad nieprawidłowościami w
                  napięciu mięśniowym, tym lepsze efekty możemy osiągnąć. Małe
                  dzieci mają niezwykłą zdolność do adaptacji, a ich układ
                  nerwowy charakteryzuje się dużą plastycznością.
                </p>
                <p className="italic mt-12">
                  Ten artykuł ma charakter informacyjny i nie zastępuje
                  konsultacji ze specjalistą. Każde dziecko rozwija się w swoim
                  tempie, a indywidualna ocena jest niezbędna do właściwej
                  diagnozy i terapii.
                </p>
              </div>
            </div>
          </>
        }
      </PageTemplate>
    </>
  );
}
