import { Facebook, Instagram, Pin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <section className="relative bg-orange text-secondaryOrange mt-20 px-[5%] mb-0">
        <div className="pb-12 pt-6">
          <div className="container mx-auto px-10">
            <div className="flex flex-wrap">
              <div className="mb-auto mt-6 mr-4 w-full xl:w-1/4">
                <Link href="/">
                  <img
                    src="/logo-kolor.svg"
                    className=""
                    alt="Dobre Miejsce Logo"
                  />
                </Link>
                {/* <LogoDark className="mt-4 w-64" /> */}
                <div className="flex flex-col gap-3 mt-6 text-secondaryOrange">
                  Fizjoterapia dzieci w Katowicach, diagnostyka rozwoju, terapia
                  integracji sensorycznej, korekcja wad postawy.
                </div>
              </div>
              <div className="mb-5 w-full xl:w-1/5">
                {/* <h3 className="mb-4 mt-10 text-xl font-bold text-gray">
                  Fizjoterapia dzieci
                </h3>
                <p>
                  Fizjoterapia dzieci w Katowicach, diagnostyka rozwoju, terapia
                  integracji sensorycznej, korekcja wad postawy. Zapraszamy przy
                  ul. Ceglanej w Katowicach.
                </p> */}
                <div className="flex gap-8 mt-6">
                  {/* <a href="https://www.facebook.com/kopalnia" target="_blank">
                    <img src="/facebook.png" className="w-8" />
                  </a>
                  <a
                    href="https://www.youtube.com/@fundacjakopalniainicjatyw5380"
                    target="_blank"
                  >
                    <img src="/youtube.png" className="w-8" />
                  </a>
                  <a
                    href="https://www.flickr.com/photos/153333342@N06/"
                    target="_blank"
                  >
                    <img src="/flickr.png" className="w-8" />
                  </a> */}
                </div>
              </div>
              <div className="w-full xl:w-1/2 flex flex-wrap mx-4 justify-end">
                <div className="mb-6 w-full md:w-1/2 xl:w-1/3 xl:mr-6 px-3">
                  <h3 className="mb-4 mt-12 text-xl font-bold text-gray">
                    Adres
                  </h3>
                  <p className="leading-loose my-0">
                    Dobre Miejsce Fizjoterapia dzieci
                  </p>
                  <p className="leading-loose my-0">ul. Ceglana 66</p>
                  <p className="leading-loose my-0">40-514 Katowice</p>
                  <div className="leading-loose my-0">
                    <Pin className="inline-block mr-2 text-secondaryOrange" />
                    <a
                      href="https://www.google.pl/maps/place/Dobre+Miejsce+-+Fizjoterapia+dzieci/@50.2433052,19.0117664,17z/data=!3m1!4b1!4m6!3m5!1s0x4716cf8e2b49bc2b:0x4c8eb5961bebe760!8m2!3d50.2433052!4d19.0143413!16s%2Fg%2F11st_59285?entry=ttu&g_ep=EgoyMDI1MDMwOC4wIKXMDSoASAFQAw%3D%3D"
                      className="underline"
                    >
                      zobacz na mapie
                    </a>
                  </div>
                </div>
                <div className="mb-6 w-full md:w-1/2 xl:w-1/3 px-3">
                  <h3 className="mb-4 mt-12 text-xl font-bold text-gray">
                    Kontakt
                  </h3>
                  <p className="leading-loose my-0">
                    Kamila: <a href="tel:+48 539 937 132">539 937 132</a>
                  </p>
                  <p className="leading-loose my-0">
                    Martyna: <a href="tel:+48 577 611 464">577 611 464</a>
                  </p>
                  <div className="flex  gap-3 mt-6 text-secondaryOrange">
                    <a
                      href="https://www.facebook.com/fizjoterapiadzieci.dobremiejsce/"
                      target="_blank"
                    >
                      <Facebook className="text-orange w-9 h-9 bg-secondaryOrange rounded-lg p-2 shrink-0" />{" "}
                    </a>
                    <a
                      href="https://www.instagram.com/dobre_miejsce_fizjoterapia/"
                      target="_blank"
                    >
                      <Instagram className="text-orange w-9 h-9 bg-secondaryOrange rounded-lg p-2 shrink-0" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-screen flex-col justify-center items-center bg-secondaryOrange h-4">
        {/* <p className="text-sm mx-auto text-center mb-2">
          © 2023. Dobre Miejsce FIzjoterapia dzieci. All rights reserved.
        </p> */}

        {/* <p className="text-sm mx-auto text-center mb-2">
          <Link href="/">polityka prywatności</Link>
        </p> */}

        {/* <p className="text-sm mx-auto text-center">
          Created by{" "}
          <a
            href="https://stronyjaksiepatrzy.pl"
            target="_blank"
            className="text-primaryBlue"
          >
            Strony jak się patrzy
          </a>
        </p> */}
      </div>
    </div>
  );
}

// export default function Footer() {
//   return (
//     <footer className="lg:pb-30 bg-orange pb-20 pt-2">
//       <div className="container mx-auto px-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
//         {/* Contact Heading */}
//         <div
//           id="kontakt"
//           className="my-16 flex flex-col items-start gap-4 md:flex-row md:justify-between"
//         >
//           <h2 className="text-5xl font-semibold text-white">Kontakt</h2>
//           <a
//             className="rounded-full bg-white px-6 py-3 text-lg font-semibold text-heavy no-underline shadow-lg hover:bg-heavy hover:text-white"
//             target="_blank"
//             rel="noreferrer noopener nofollow"
//             href="https://goo.gl/maps/hcDMV3egvFFVWpzp8"
//           >
//             Wskazówki dojazdu
//           </a>
//         </div>

//         {/* Contact Information */}
//         <div className="flex flex-col justify-between gap-8 font-semibold text-white md:flex-row">
//           {/* Phone Section */}
//           <div>
//             <div className="lg:mb-10">
//               <p className="mb-1 text-xl font-bold leading-normal lg:text-3xl">
//                 Kamila:&nbsp;
//                 <br className="hidden md:inline lg:hidden" />
//                 <a
//                   className="text-white no-underline hover:text-black"
//                   href="tel:48539937132"
//                 >
//                   539 937 132
//                 </a>
//               </p>
//               <p className="mb-1 text-xl font-bold leading-normal lg:text-3xl">
//                 Martyna:&nbsp;
//                 <br className="hidden md:inline lg:hidden" />
//                 <a
//                   className="text-white no-underline hover:text-black"
//                   href="tel:48577611464"
//                 >
//                   577 611 464
//                 </a>
//               </p>
//               <p className="m-0 mb-1 p-0 text-xl font-bold leading-normal lg:text-3xl">
//                 &nbsp;
//               </p>
//             </div>
//             <img
//               src="/contact-phone.svg"
//               alt="Contact phone icon"
//               className="w-60 md:w-auto"
//             />
//           </div>

//           {/* Address Section */}
//           <div>
//             <div className="lg:mb-10">
//               <p className="mb-1 text-xl font-bold leading-normal lg:text-3xl">
//                 ul. Ceglana 66
//               </p>
//               <p className="mb-1 text-xl font-bold leading-normal lg:text-3xl">
//                 Katowice
//               </p>
//               <p className="m-0 mb-1 p-0 text-xl font-bold leading-normal lg:text-3xl">
//                 &nbsp;
//               </p>
//             </div>
//             <img
//               src="contact-location.svg"
//               alt="Location icon"
//               className="w-60 md:w-auto"
//             />
//           </div>

//           {/* Socials Section */}
//           <div>
//             <div className="lg:mb-10">
//               <p className="mb-1 text-xl font-bold leading-normal lg:text-3xl">
//                 <a
//                   href="https://dobremiejscefizjoterapiadzieci.booksy.com"
//                   rel="noreferrer noopener nofollow"
//                   target="_blank"
//                   className="text-white no-underline hover:text-heavy"
//                 >
//                   @booksy
//                 </a>
//               </p>
//               <p className="mb-1 text-xl font-bold leading-normal lg:text-3xl">
//                 <a
//                   href="https://www.instagram.com/dobre_miejsce_fizjoterapia/"
//                   target="_blank"
//                   rel="noreferrer noopener nofollow"
//                   className="text-white no-underline hover:text-heavy"
//                 >
//                   @instagram
//                 </a>
//               </p>
//               <p className="mb-1 text-xl font-bold leading-normal lg:text-3xl">
//                 <a
//                   href="https://www.facebook.com/fizjoterapiadzieci.dobremiejsce/"
//                   target="_blank"
//                   rel="noreferrer noopener nofollow"
//                   className="text-white no-underline hover:text-heavy"
//                 >
//                   @facebook
//                 </a>
//               </p>
//             </div>
//             <img
//               src="contact-socials.svg"
//               alt="Social media icons"
//               className="w-60 md:w-auto"
//             />
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
