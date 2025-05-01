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
    "Przyjazna przestrzeń w Katowicach, która powstała, by wspierać prawidłowy rozwój noworodków, niemowląt i większych dzieci",
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "xfPCt4cpOku2YCInC_8lRcsPqy-MhPfZ0ctpzI5IvRY",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={inter.className}
      >
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-8GJF8CBHXG" />
    </html>
  );
}
