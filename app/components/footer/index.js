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
                  integracji sensorycznej, osteopata dziecięcy, korekcja wad
                  postawy.
                  <Link className="underline" href="/informacje-dla-pacjenta">
                    Informacje dla pacjenta
                  </Link>
                  <Link className="underline" href="/polityka-prywatnosci">
                    Polityka prywatności
                  </Link>
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
                  <p className="leading-loose my-0">
                    ul. Gen. Zygmunta Waltera Jankego 48/1
                  </p>
                  <p className="leading-loose my-0">40-612 Katowice</p>
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
                  {/* <p className="leading-loose my-0">
                    Kamila: <a href="tel:+48 539 937 132">539 937 132</a>
                  </p> */}
                  <p className="leading-loose my-0">
                    tel. <a href="tel:+48 577 611 464">577 611 464</a>
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
      <div className="w-full flex-col justify-center items-center bg-secondaryOrange h-4">
        {/* <p className="text-sm mx-auto text-center mb-2">
          © 2023. Dobre Miejsce FIzjoterapia dzieci. All rights reserved.
        </p> */}

        {/* <p className="text-sm mx-auto text-center mb-2">
          <Link href="/">polityka prywatności</Link>
        </p> */}
      </div>
    </div>
  );
}
