import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

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
    <html lang="en">
      <body className="overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}