// import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script"; // 1. Importujemy komponent Script

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dobre Miejsce - fizjoterapia dzieci Katowice",
  description:
    "Fizjoterapia dzieci w Katowicach płynąca z pasji i zaangażowania dwóch fizjoterapeutek pediatrycznych - Kamili Włodarczyk i Martyny Cesarczyk",
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
      "Fizjoterapia dzieci w Katowicach płynąca z pasji i zaangażowania dwóch fizjoterapeutek pediatrycznych - Kamili Włodarczyk i Martyny Cesarczyk",
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
    <html lang="pl">
      <head>{/* Usunęliśmy stąd zwykły <script> */}</head>
      <body className={inter.className}>
        {/* 1. CookieYes - ładowany priorytetowo */}
        <Script
          id="cookieyes"
          src="https://cdn-cookieyes.com/client_data/8f62ee2d82cf94953a61d281/script.js"
          strategy="beforeInteractive"
        />

        {children}
        <Footer />

        {/* 2. Elfsight - ładowany po tym, jak strona będzie gotowa */}
        <div
          className="elfsight-app-22643b69-9881-4d46-bc4a-570ffb677c03"
          data-elfsight-app-lazy
        ></div>
        <Script
          src="https://elfsightcdn.com/platform.js"
          strategy="afterInteractive"
        />
      </body>
      <GoogleAnalytics gaId="G-8GJF8CBHXG" />
    </html>
  );
}
