import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Navbar from "../components/navbar";
import ParagraphWithImageOnTheRight from "../components/paragraph-with-image-on-the-right";

export const metadata = {
  title: "Kontakt | Dobre Miejsce",
  description: "Dobre Miejsce fizjoterapia dzieci",
  robots: {
    index: true,
    follow: true,
  },
};

export default function Kontakt() {
  return (
    <>
      <Navbar />

      <section className="relative py-24 mt-12 md:pt-40 md:pb-24 container mx-auto px-8 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        <ParagraphWithImageOnTheRight
          title="Kontakt"
          subtitle="Dobre Miejsce fizjoterapia dzieci"
          img="/kontakt-new.png"
          alt="Dobre Miejsce"
          buttonLink="https://dobremiejscefizjoterapiadzieci.booksy.com/"
          buttonTitle="Umów wizytę w serwisie Booksy"
          isLeft
        >
          <div className="flex flex-col gap-2 mb-4">
            <h3 className="mb-3 mt-6 text-2xl font-bold text-gray">Adres</h3>
            <div className="flex gap-2">
              <MapPin className="text-orange w-5" /> 40-514 Katowice ul. Ceglana
              66
            </div>
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <h3 className="mb-3 mt-6 basis-2/5 text-2xl font-bold text-gray">
              Kamila Włodarczyk
            </h3>
            <div className="flex gap-2">
              <Mail className="text-orange w-5" />
              <a href="mailto:kamila.wlodarczyk@dobremiejsce-fizjoterapia.pl">
                kamila.wlodarczyk@dobremiejsce-fizjoterapia.pl
              </a>
            </div>
            <div className="flex gap-2">
              <Phone className="text-orange w-4" />
              <a href="tel:+48 539 937 132">539 937 132</a>
            </div>
            <h3 className="mb-3 mt-6 basis-2/5 text-2xl font-bold text-gray">
              Martyna Cesarczyk
            </h3>

            <div className="flex gap-2">
              <Mail className="text-orange w-5" />
              <a href="mailto:martyna-cesarczyk@dobremiejsce-fizjoterapia.pl">
                {" "}
                martyna.cesarczyk@dobremiejsce-fizjoterapia.pl
              </a>
            </div>
            <div className="flex gap-2">
              <Phone className="text-orange w-4" />
              <a href="+48 577 611 464">577 611 464</a>
            </div>
          </div>
          <h3 className="mb-3 mt-6 basis-2/5 text-2xl font-bold text-gray">
            Media społecznościowe{" "}
          </h3>
          <div className="flex flex-col gap-4 mb-8">
            <div>
              <a
                href="https://www.facebook.com/fizjoterapiadzieci.dobremiejsce/"
                target="_blank"
                className="flex gap-2"
              >
                <Facebook className="text-orange w-10 h-5" />
                Znajdź nas na Facebooku
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/dobre_miejsce_fizjoterapia/"
                target="_blank"
                className="flex gap-2"
              >
                <Instagram className="text-orange w-10 h-5" />
                Obserwuj nas na Instagramie
              </a>
            </div>
          </div>
        </ParagraphWithImageOnTheRight>
        <div className="my-10">
          <h3 className="mb-6 mt-6 text-2xl font-bold text-gray">
            Jak nas znaleźć
          </h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.6038595672126!2d19.011766376424642!3d50.24330517155342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716cf8e2b49bc2b%3A0x4c8eb5961bebe760!2sDobre%20Miejsce%20-%20Fizjoterapia%20dzieci!5e0!3m2!1spl!2spl!4v1741305660611!5m2!1spl!2spl"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}
