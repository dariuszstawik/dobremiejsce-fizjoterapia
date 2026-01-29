// import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import { GoogleAnalytics } from "@next/third-parties/google";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

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
      <head>
        <script
          id="cookieyes"
          type="text/javascript"
          src="https://cdn-cookieyes.com/client_data/8f62ee2d82cf94953a61d281/script.js"
          defer
        ></script>
      </head>
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={inter.className}
      >
        {children}
        {/* <Footer /> */}
      </body>
      <GoogleAnalytics gaId="G-8GJF8CBHXG" />
    </html>
  );
}
