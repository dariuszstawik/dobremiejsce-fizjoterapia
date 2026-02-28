"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Hamburger from "../hamburger";

export default function Navbar() {
  const handleScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const [isMobileMenuActive, setIsMobileMenuActive] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  // Dodajemy efekt dla obsługi przewijania
  useEffect(() => {
    const handleScrollEffect = () => {
      // Zmiana stanu po przewinięciu o 50px
      if (window.scrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    // Dodajemy nasłuchiwanie zdarzenia przewijania
    window.addEventListener("scroll", handleScrollEffect);

    // Czyścimy nasłuchiwanie przy odmontowaniu komponentu
    return () => {
      window.removeEventListener("scroll", handleScrollEffect);
    };
  }, []);

  const handleHover = (item) => {
    setIsHovered(item);
  };

  const handleClick = (item) => {
    setIsClicked(item);
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuActive(false);
  };

  const handleRefresh = () => {
    router.reload();
  };

  return (
    <header
      className={`pb-10 fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        hasScrolled ? "bg-white h-24 shadow-sm" : "bg-transparent h-36"
      }`}
    >
      <nav className="px-4 pt-6 lg:px-6">
        <div
          className={`mx-auto flex max-w-screen-xl flex-wrap items-center justify-between`}
        >
          <Link href="/">
            <img
              src="/logo.svg"
              className={`transition-all duration-300 ${
                hasScrolled ? "h-16" : "h-20" // Zmniejszyłem lekko logo, by lepiej leżało na mobile
              }`}
              alt="Dobre Miejsce Logo"
              onClick={closeMobileMenu}
            />
          </Link>

          <div className="flex justify-end items-center h-full text-heavy">
            <ul
              className={
                isMobileMenuActive
                  ? "list-none absolute z-40 w-full top-full left-0 bg-white py-6 flex flex-col justify-start items-center gap-6 lg:static lg:flex-row lg:min-h-full max-h-[calc(100vh-6rem)] overflow-y-auto shadow-lg lg:shadow-none"
                  : "list-none flex-col justify-center items-center gap-16 lg:flex-row hidden xl:flex lg:justify-end lg:h-full lg:gap-10"
              }
            >
              <li
                onClick={closeMobileMenu}
                className="hover:text-orange cursor-pointer"
              >
                <Link href="/" onClick={handleRefresh}>
                  Start
                </Link>
              </li>

              <li
                onClick={closeMobileMenu}
                className="hover:text-orange cursor-pointer"
              >
                <Link href="/o-nas" onClick={handleRefresh}>
                  O nas
                </Link>
              </li>

              <li
                onClick={closeMobileMenu}
                className="hover:text-orange cursor-pointer"
              >
                <Link href="/zespol" onClick={handleRefresh}>
                  Nasz zespół
                </Link>
              </li>

              <li
                onMouseEnter={() => {
                  if (window.innerWidth > 1024) handleHover("oferta");
                }}
                onClick={() =>
                  setIsClicked(isClicked === "oferta" ? "" : "oferta")
                }
                onMouseLeave={() => handleHover("")}
                className="relative flex flex-col lg:flex-row lg:h-full justify-center items-center cursor-pointer w-full lg:w-auto"
              >
                <div className="hover:text-orange flex items-center justify-center">
                  Oferta
                  {/* Opcjonalna strzałka pokazująca rozwinięcie */}
                  <span className="ml-2 text-xs lg:hidden">
                    {isClicked === "oferta" ? "▲" : "▼"}
                  </span>
                </div>

                {(isHovered === "oferta" || isClicked === "oferta") && (
                  <div
                    className={`
                      relative w-full bg-gray-50 top-0 mt-4 px-4 py-2 rounded
                      lg:absolute lg:w-[450px] lg:bg-white lg:-left-24 lg:top-full lg:mt-0 lg:p-6 lg:shadow-xl lg:border lg:border-gray-100
                      flex flex-col
                    `}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Zmiana tutaj: usunięto gap-4, dodano lg:divide-y lg:divide-gray-100 */}
                    <ul className="flex flex-col text-center lg:text-left text-sm lg:text-base lg:divide-y lg:divide-gray-200">
                      <li className="hover:text-orange group">
                        <Link
                          href="/rehabilitacja-wczesniakow"
                          onClick={closeMobileMenu}
                          className="block w-full py-3 lg:py-3.5 transition-colors"
                        >
                          rehabilitacja wcześniaków
                        </Link>
                      </li>
                      <li className="hover:text-orange group">
                        <Link
                          href="/rehabilitacja-noworodkow"
                          onClick={closeMobileMenu}
                          className="block w-full py-3 lg:py-3.5 transition-colors"
                        >
                          rehabilitacja noworodków i niemowląt
                        </Link>
                      </li>
                      <li className="hover:text-orange group">
                        <Link
                          href="/terapia-si-w-katowicach"
                          onClick={closeMobileMenu}
                          className="block w-full py-3 lg:py-3.5 transition-colors"
                        >
                          diagnoza i terapia SI w Katowicach
                        </Link>
                      </li>
                      <li className="hover:text-orange group">
                        <Link
                          href="/terapia-oddechowa"
                          onClick={closeMobileMenu}
                          className="block w-full py-3 lg:py-3.5 transition-colors"
                        >
                          terapia oddechowa niemowląt i małych dzieci
                        </Link>
                      </li>
                      <li className="hover:text-orange group">
                        <Link
                          href="/terapia-wad-postawy-u-dzieci"
                          onClick={closeMobileMenu}
                          className="block w-full py-3 lg:py-3.5 transition-colors"
                        >
                          terapia wad postawy u dzieci
                        </Link>
                      </li>
                      <li className="hover:text-orange group">
                        <Link
                          href="/wkladki-ortopedyczne-igli-junior"
                          onClick={closeMobileMenu}
                          className="block w-full py-3 lg:py-3.5 transition-colors"
                        >
                          wkładki ortopedyczne IGLI Junior
                        </Link>
                      </li>
                      <li className="hover:text-orange group">
                        <Link
                          href="/terapia-ortopedyczna"
                          onClick={closeMobileMenu}
                          className="block w-full py-3 lg:py-3.5 transition-colors"
                        >
                          terapia ortopedyczna dla dzieci i młodzieży
                        </Link>
                      </li>
                      <li className="hover:text-orange group">
                        <Link
                          href="/diagnostyka-metoda-prechtla"
                          onClick={closeMobileMenu}
                          className="block w-full py-3 lg:py-3.5 transition-colors"
                        >
                          diagnostyka metodą Prechtla
                        </Link>
                      </li>
                      <li className="hover:text-orange group">
                        <Link
                          href="/diagnostyka-hine"
                          onClick={closeMobileMenu}
                          className="block w-full py-3 lg:py-3.5 transition-colors"
                        >
                          diagnostyka Hine
                        </Link>
                      </li>
                      <li className="hover:text-orange group">
                        <Link
                          href="/osteopata-dzieciecy"
                          onClick={closeMobileMenu}
                          className="block w-full py-3 lg:py-3.5 transition-colors"
                        >
                          osteopata dziecięcy
                        </Link>
                      </li>
                      <li className="hover:text-orange group">
                        <Link
                          href="/psycholog-dzieciecy"
                          onClick={closeMobileMenu}
                          className="block w-full py-3 lg:py-3.5 transition-colors"
                        >
                          psycholog dziecięcy
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>

              <li
                onClick={closeMobileMenu}
                className="hover:text-orange cursor-pointer"
              >
                <Link href="/cennik" onClick={handleRefresh}>
                  Cennik
                </Link>
              </li>
              <li
                onClick={closeMobileMenu}
                className="hover:text-orange cursor-pointer"
              >
                <Link href="/aktualnosci" onClick={handleRefresh}>
                  Aktualności
                </Link>
              </li>
              <li
                onClick={closeMobileMenu}
                className="hover:text-orange cursor-pointer"
              >
                <Link href="/blog" onClick={handleRefresh}>
                  Blog
                </Link>
              </li>
              <li
                onClick={closeMobileMenu}
                className="hover:text-orange cursor-pointer"
              >
                <Link href="/kontakt" onClick={handleRefresh}>
                  Kontakt
                </Link>
              </li>
            </ul>

            <Hamburger
              hasCloseIcon={isMobileMenuActive ? true : false}
              toggleMobileMenu={toggleMobileMenu}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
