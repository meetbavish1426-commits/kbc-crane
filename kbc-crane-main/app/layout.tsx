import type { Metadata } from "next";
import { Barlow, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "KBC Crane | Industrial Crane Rental Services",
    template: "%s | KBC Crane",
  },

  description:
    "KBC Crane provides industrial crane rental, hydra crane, mobile crane, heavy lifting and machinery shifting services.",

  keywords: [
    "crane rental",
    "industrial crane",
    "mobile crane",
    "hydra crane",
    "heavy lifting",
    "KBC Crane",
  ],

  openGraph: {
    title: "KBC Crane",
    description:
      "Industrial Crane Rental & Heavy Lifting Solutions",
    url: "https://kbccrane.com",
    siteName: "KBC Crane",
    locale: "en_IN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlow.variable} ${inter.variable}`}>
      <body className="overflow-x-hidden font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}