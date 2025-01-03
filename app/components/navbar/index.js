"use client";

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

  return (
    <header className="-mb-100 relative z-10 -mb-[140px]">
      <nav className="px-4 pt-10 lg:px-6">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <a href="#" className="flex items-center">
            <img src="/logo.svg" className="m-0 p-0" alt="Dobre Miejsce Logo" />
          </a>
          <div
            className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
            id="mobile-menu-2"
          >
            <ul className="m-0 flex flex-col p-0 font-medium lg:flex-row lg:space-x-8">
              <li className="m-0 p-0">
                <a
                  href="#"
                  className="nounderline m-0 block p-0 py-2 text-orange"
                  onClick={(e) => {
                    handleScroll(e);
                  }}
                >
                  Home
                </a>
              </li>
              <li className="m-0 p-0">
                <a
                  href="#o-nas"
                  className="m-0 block p-0 py-2 text-heavy no-underline hover:cursor-pointer hover:text-orange"
                  onClick={(e) => {
                    handleScroll(e);
                  }}
                >
                  O nas
                </a>
              </li>
              <li className="m-0 p-0">
                <a
                  href="#kamila"
                  className="m-0 block p-0 py-2 text-heavy no-underline hover:cursor-pointer hover:text-orange"
                  onClick={(e) => {
                    handleScroll(e);
                  }}
                >
                  Kamila
                </a>
              </li>
              <li className="m-0 p-0">
                <a
                  href="#martyna"
                  className="m-0 block p-0 py-2 text-heavy no-underline hover:cursor-pointer hover:text-orange"
                  onClick={(e) => {
                    handleScroll(e);
                  }}
                >
                  Martyna
                </a>
              </li>
              <li className="m-0 p-0">
                <a
                  href="#cennik"
                  className="m-0 block p-0 py-2 text-heavy no-underline hover:cursor-pointer hover:text-orange"
                  onClick={(e) => {
                    handleScroll(e);
                  }}
                >
                  Cennik
                </a>
              </li>
              <li className="m-0 p-0">
                <a
                  href="#kontakt"
                  className="m-0 block p-0 py-2 text-heavy no-underline hover:cursor-pointer hover:text-orange"
                  onClick={(e) => {
                    handleScroll(e);
                  }}
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
