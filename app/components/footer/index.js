import Image from "next/image";
import Link from "next/link";
import { IconBrandFacebook, IconBrandInstagram, IconPin } from "@tabler/icons-react";
import { CONTACT } from "@/app/data/site";

const LEGAL_LINKS = [
  { label: "Informacje dla pacjenta", href: "/informacje-dla-pacjenta" },
  { label: "Polityka prywatności", href: "/polityka-prywatnosci" },
];

const SOCIALS = [
  { label: "Facebook", href: CONTACT.facebookUrl, Icon: IconBrandFacebook },
  { label: "Instagram", href: CONTACT.instagramUrl, Icon: IconBrandInstagram },
];

// Stopka wg makiety strona-glowna-v6: tło #FF6E41, tekst #3A1D10 (kontrast 5.5:1).
export default function Footer() {
  return (
    <footer className="bg-brand text-ink-footer">
      <div className="mx-auto flex max-w-content flex-wrap justify-between gap-x-16 gap-y-10 px-gutter pb-14 pt-[60px]">
        <div className="flex max-w-[400px] flex-[1_1_300px] flex-col gap-[18px]">
          <Image
            src="/logo-dobre-miejsce.svg"
            alt="Dobre Miejsce Fizjoterapia Dzieci"
            width={158}
            height={64}
            className="block h-16 w-auto self-start"
          />
          <p className="text-[15px] leading-[1.65]">
            Fizjoterapeuta dzieci Katowice, diagnostyka rozwoju, terapia integracji sensorycznej,
            osteopata dziecięcy, korekcja wad postawy, neurologopeda, trener personalny.
          </p>
          <ul className="flex flex-col items-start gap-1">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-block whitespace-nowrap py-1 text-[15px] leading-normal text-ink-footer underline underline-offset-[3px] hover:text-black"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-x-16 gap-y-10">
          <div className="flex min-w-[200px] flex-col gap-2 text-[15px]">
            <h2 className="mb-2.5 text-xl font-bold">Adres</h2>
            <address className="not-italic leading-[1.75]">
              Dobre Miejsce
              <br />
              Fizjoterapia dzieci
              <br />
              ul. Gen. Zygmunta Waltera
              <br />
              Jankego 48/1
              <br />
              40-612 Katowice
            </address>
            <a
              href={CONTACT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-8 items-center gap-2 text-ink-footer underline underline-offset-[3px] hover:text-black"
            >
              <IconPin size={20} stroke={1.75} aria-hidden="true" />
              zobacz na mapie
            </a>
          </div>

          <div className="flex flex-col gap-2 text-[15px]">
            <h2 className="mb-2.5 text-xl font-bold">Kontakt</h2>
            <a
              href={CONTACT.phoneHref}
              className="text-ink-footer hover:text-black hover:underline"
            >
              tel. {CONTACT.phone}
            </a>
            <ul className="mt-5 flex gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#FFDDBD] text-accent transition-colors hover:bg-white"
                  >
                    <Icon size={22} stroke={1.75} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
