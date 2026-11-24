import { Figtree } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import SiteHeader from "./components/site-header";
import AnnouncementBar from "./components/announcement-bar";
import MobileCtaBar from "./components/mobile-cta-bar";
// Import GoogleAnalytics nie będzie już potrzebny, możesz go usunąć z paczek npm później
import Script from "next/script";

const figtree = Figtree({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-figtree",
});

export const metadata = {
  title: "Dobre Miejsce - fizjoterapia dzieci Katowice",
  description:
    "Dobre Miejsce w Katowicach: fizjoterapia niemowląt i dzieci, osteopatia, neurologopedia, integracja sensoryczna. ul. Waltera-Jankego 48/1, tel. 577 611 464.",
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "xfPCt4cpOku2YCInC_8lRcsPqy-MhPfZ0ctpzI5IvRY",
  },
  openGraph: {
    title: "Dobre Miejsce - fizjoterapia dzieci Katowice",
    description:
      "Dobre Miejsce w Katowicach: fizjoterapia niemowląt i dzieci, osteopatia, neurologopedia, integracja sensoryczna. ul. Waltera-Jankego 48/1, tel. 577 611 464.",
    url: "https://dobremiejsce-fizjoterapia.pl",
    siteName: "Dobre Miejsce - fizjoterapia dzieci",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "https://dobremiejsce-fizjoterapia.pl/dobremiejsce009.jpg",
        width: 1200,
        height: 800,
        alt: "Fizjoterapia dzieci",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className={figtree.variable}>
      <head>
        {/* 1. Google Tag Manager - GŁÓWNY SKRYPT */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-M5WPTT5M');
            `,
          }}
        />
      </head>
      <body>
        <a href="#tresc" className="skip-link">
          Przejdź do treści
        </a>

        {/* 2. GTM Noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M5WPTT5M"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <div
          className="elfsight-app-22643b69-9881-4d46-bc4a-570ffb677c03"
          data-elfsight-app-lazy
        ></div>

        {/* 3. CookieYes - ważne, by był wysoko */}
        <Script
          id="cookieyes"
          src="https://cdn-cookieyes.com/client_data/8f62ee2d82cf94953a61d281/script.js"
          strategy="afterInteractive"
        />

        <AnnouncementBar />
        <SiteHeader />
        <main id="tresc" tabIndex={-1} className="focus:outline-none">
          {children}
        </main>
        <Footer />
        <MobileCtaBar />

        {/* 4. Elfsight */}
        <Script
          src="https://elfsightcdn.com/platform.js"
          strategy="afterInteractive"
        />

        {/* GoogleAnalytics USUNIĘTY STĄD. 
            Identyfikator G-8GJF8CBHXG użyjemy teraz wewnątrz panelu GTM.
        */}
      </body>
    </html>
  );
}

