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
      className={`pb-10 fixed top-0 left-0 z-50  w-full transition-all duration-300 ${
        hasScrolled ? "bg-white h-32 shadow-sm" : "bg-transparent h-36"
      }`}
    >
      <nav className="px-4 pt-6 lg:px-6 ">
        {/* <div
          className={`text-base flex justify-between items-center px-4 z-50 transition-all duration-300 mx-auto max-w-screen-xl flex-wrap ${
            hasScrolled ? "bg-white h-24 shadow-sm" : "bg-transparent h-36"
          }`}
        > */}
        <div
          className={`mx-auto flex max-w-screen-xl flex-wrap items-center justify-between `}
        >
          <Link href="/" className="">
            <img
              src="/logo.svg"
              className={` transition-all duration-300 ${
                hasScrolled ? "h-20" : "h-[80%]"
              }`}
              alt="Dobre Miejsce Logo"
              onClick={closeMobileMenu}
            />
          </Link>

          <div className="flex justify-end items-center h-full text-heavy">
            <ul
              className={
                isMobileMenuActive
                  ? " list-none absolute z-40 w-screen top-full left-0 bg-white py-4 flex flex-col justify-center items-center gap-10 lg:static lg:flex-row lg:h-full"
                  : " list-none flex-col justify-center align-center items-center gap-16 lg:flex-row hidden lg:flex lg:justify-end lg:h-full lg:gap-10"
              }
            >
              <li
                onClick={closeMobileMenu}
                className="hover:text-orange cursor-pointer"
              >
                <Link
                  href="/"
                  // className={`${isActive && "text-primaryBlue"}`}
                  onClick={handleRefresh}
                >
                  Start
                </Link>
              </li>

              <li
                onClick={closeMobileMenu}
                className="hover:text-orange cursor-pointer"
              >
                <Link
                  href="/o-nas"
                  // className={`${isActive && "text-primaryBlue"}`}
                  onClick={handleRefresh}
                >
                  O nas
                </Link>
              </li>

              <li
                // onClick={closeMobileMenu}
                onMouseEnter={() => {
                  // Reaguj na najechanie myszą tylko na desktopie
                  if (window.innerWidth > 1024) {
                    handleHover("oferta");
                  }
                }}
                onClick={() => {
                  // Logika toggle - jeśli jest "oferta", zmień na pusty string, w przeciwnym przypadku ustaw "oferta"
                  setIsClicked(isClicked === "oferta" ? "" : "oferta");
                }}
                onMouseLeave={() => {
                  handleHover("");
                  // handleClick("");
                  // closeMobileMenu();
                }}
                className="relative h-full flex justify-center items-center"
              >
                {/* <Link
                  href="" */}
                {/* className={`${isActive && "text-primaryBlue"}`}
                className="cursor-pointer hover:text-orange" onClick=
                {handleRefresh}>  */}
                Oferta
                {/* </Link> */}
                {(isHovered === "oferta" || isClicked === "oferta") && (
                  <div
                    className={`
                absolute w-96 bg-white -left-24 top-full flex flex-col rounded
              `}
                  >
                    <ul className="flex flex-col gap-4 p-6">
                      <Link href="/rehabilitacja-wczesniakow">
                        <li className="flex gap-4 items-center hover:text-orange">
                          rehabilitacja wcześniaków{" "}
                        </li>
                      </Link>

                      <Link href="/rehabilitacja-noworodkow">
                        <li className="flex gap-4 items-center hover:text-orange">
                          rehabilitacja noworodków i niemowląt
                        </li>
                      </Link>

                      <Link href="terapia-si-w-katowicach">
                        <li className="flex gap-4 items-center hover:text-orange">
                          terapia SI w Katowicach
                        </li>
                      </Link>

                      <Link href="/terapia-wad-postawy-u-dzieci">
                        <li className="flex gap-4 items-center hover:text-orange">
                          terapia wad postawy u dzieci
                        </li>
                      </Link>

                      <Link href="/wkladki-ortopedyczne-igli-junior">
                        <li className="flex gap-4 items-center hover:text-orange">
                          wkładki ortopedyczne IGLI Junior
                        </li>
                      </Link>

                      <Link href="/diagnostyka-metoda-prechtla">
                        <li className="flex gap-4 items-center hover:text-orange">
                          diagnostyka metodą Prechtla
                        </li>
                      </Link>

                      <Link href="/diagnostyka-hine">
                        <li className="flex gap-4 items-center hover:text-orange">
                          diagnostyka Hine
                        </li>
                      </Link>
                    </ul>
                  </div>
                )}
              </li>

              {/* <li
                onClick={closeMobileMenu}
                className="hover:text-orange cursor-pointer"
              >
                <Link
                  href="kamila-wlodarczyk"
                  // className={`${isActive && "text-primaryBlue"}`}
                  onClick={handleRefresh}
                >
                  Kamila
                </Link>
              </li>
              <li
                onClick={closeMobileMenu}
                className="hover:text-orange cursor-pointer"
              >
                <Link
                  href="/martyna-cesarczyk"
                  // className={`${isActive && "text-primaryBlue"}`}
                  onClick={handleRefresh}
                >
                  Martyna
                </Link>
              </li> */}
              <li
                onClick={closeMobileMenu}
                className="hover:text-orange cursor-pointer"
              >
                <Link
                  href="/cennik"
                  // className={`${isActive && "text-primaryBlue"}`}
                  onClick={handleRefresh}
                >
                  Cennik
                </Link>
              </li>
              <li
                onClick={closeMobileMenu}
                className="hover:text-orange cursor-pointer"
              >
                <Link
                  href="/blog"
                  // className={`${isActive && "text-primaryBlue"}`}
                  onClick={handleRefresh}
                >
                  Blog
                </Link>
              </li>
              <li
                onClick={closeMobileMenu}
                className="hover:text-orange cursor-pointer"
              >
                <Link
                  href="/kontakt"
                  // className={`${isActive && "text-primaryBlue"}`}
                  onClick={handleRefresh}
                >
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

// <header className="pb-10 fixed top-0 left-0 z-50 bg-white w-full">
//   <nav className="px-4 pt-10 lg:px-6 ">
//     <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
//       <a href="#" className="flex items-center">
//         <img src="/logo.svg" className="m-0 p-0" alt="Dobre Miejsce Logo" />
//       </a>
//       <div
//         className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
//         id="mobile-menu-2"
//       >
//         <ul className="m-0 flex flex-col p-0 font-medium lg:flex-row lg:space-x-8">
//           <li className="m-0 p-0">
//             <a
//               href="#"
//               className="nounderline m-0 block p-0 py-2 text-orange"
//               onClick={(e) => {
//                 handleScroll(e);
//               }}
//             >
//               Home
//             </a>
//           </li>
//           <li className="m-0 p-0">
//             <a
//               href="#o-nas"
//               className="m-0 block p-0 py-2 text-heavy no-underline hover:cursor-pointer hover:text-orange"
//               onClick={(e) => {
//                 handleScroll(e);
//               }}
//             >
//               O nas
//             </a>
//           </li>
//           <li className="m-0 p-0">
//             <a
//               href="#kamila"
//               className="m-0 block p-0 py-2 text-heavy no-underline hover:cursor-pointer hover:text-orange"
//               onClick={(e) => {
//                 handleScroll(e);
//               }}
//             >
//               Kamila
//             </a>
//           </li>
//           <li className="m-0 p-0">
//             <a
//               href="#martyna"
//               className="m-0 block p-0 py-2 text-heavy no-underline hover:cursor-pointer hover:text-orange"
//               onClick={(e) => {
//                 handleScroll(e);
//               }}
//             >
//               Martyna
//             </a>
//           </li>
//           <li className="m-0 p-0">
//             <a
//               href="#cennik"
//               className="m-0 block p-0 py-2 text-heavy no-underline hover:cursor-pointer hover:text-orange"
//               onClick={(e) => {
//                 handleScroll(e);
//               }}
//             >
//               Cennik
//             </a>
//           </li>
//           <li className="m-0 p-0">
//             <a
//               href="#kontakt"
//               className="m-0 block p-0 py-2 text-heavy no-underline hover:cursor-pointer hover:text-orange"
//               onClick={(e) => {
//                 handleScroll(e);
//               }}
//             >
//               Kontakt
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   </nav>
// </header>
//   );
// }
