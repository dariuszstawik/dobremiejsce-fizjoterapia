export default function Footer() {
  return (
    <footer className="lg:pb-30 bg-orange pb-20 pt-2">
      <div className="container mx-auto px-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        {/* Contact Heading */}
        <div
          id="kontakt"
          className="my-16 flex flex-col items-start gap-4 md:flex-row md:justify-between"
        >
          <h2 className="text-5xl font-semibold text-white">Kontakt</h2>
          <a
            className="rounded-full bg-white px-6 py-3 text-lg font-semibold text-heavy no-underline shadow-lg hover:bg-heavy hover:text-white"
            target="_blank"
            rel="noreferrer noopener nofollow"
            href="https://goo.gl/maps/hcDMV3egvFFVWpzp8"
          >
            Wskazówki dojazdu
          </a>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col justify-between gap-8 font-semibold text-white md:flex-row">
          {/* Phone Section */}
          <div>
            <div className="lg:mb-10">
              <p className="mb-1 text-xl font-bold leading-normal lg:text-3xl">
                Kamila:&nbsp;
                <br className="hidden md:inline lg:hidden" />
                <a
                  className="text-white no-underline hover:text-black"
                  href="tel:48539937132"
                >
                  539 937 132
                </a>
              </p>
              <p className="mb-1 text-xl font-bold leading-normal lg:text-3xl">
                Martyna:&nbsp;
                <br className="hidden md:inline lg:hidden" />
                <a
                  className="text-white no-underline hover:text-black"
                  href="tel:48577611464"
                >
                  577 611 464
                </a>
              </p>
              <p className="m-0 mb-1 p-0 text-xl font-bold leading-normal lg:text-3xl">
                &nbsp;
              </p>
            </div>
            <img
              src="/contact-phone.svg"
              alt="Contact phone icon"
              className="w-60 md:w-auto"
            />
          </div>

          {/* Address Section */}
          <div>
            <div className="lg:mb-10">
              <p className="mb-1 text-xl font-bold leading-normal lg:text-3xl">
                ul. Ceglana 66
              </p>
              <p className="mb-1 text-xl font-bold leading-normal lg:text-3xl">
                Katowice
              </p>
              <p className="m-0 mb-1 p-0 text-xl font-bold leading-normal lg:text-3xl">
                &nbsp;
              </p>
            </div>
            <img
              src="contact-location.svg"
              alt="Location icon"
              className="w-60 md:w-auto"
            />
          </div>

          {/* Socials Section */}
          <div>
            <div className="lg:mb-10">
              <p className="mb-1 text-xl font-bold leading-normal lg:text-3xl">
                <a
                  href="https://dobremiejscefizjoterapiadzieci.booksy.com"
                  rel="noreferrer noopener nofollow"
                  target="_blank"
                  className="text-white no-underline hover:text-heavy"
                >
                  @booksy
                </a>
              </p>
              <p className="mb-1 text-xl font-bold leading-normal lg:text-3xl">
                <a
                  href="https://www.instagram.com/dobre_miejsce_fizjoterapia/"
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                  className="text-white no-underline hover:text-heavy"
                >
                  @instagram
                </a>
              </p>
              <p className="mb-1 text-xl font-bold leading-normal lg:text-3xl">
                <a
                  href="https://www.facebook.com/fizjoterapiadzieci.dobremiejsce/"
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                  className="text-white no-underline hover:text-heavy"
                >
                  @facebook
                </a>
              </p>
            </div>
            <img
              src="contact-socials.svg"
              alt="Social media icons"
              className="w-60 md:w-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
