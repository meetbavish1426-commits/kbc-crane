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
  metadataBase: new URL("https://kbccrane.com"),

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

  icons: {
    icon: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "KBC Crane",
    description:
      "Industrial Crane Rental & Heavy Lifting Solutions",
    url: "https://kbccrane.com",
    siteName: "KBC Crane",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/assets/logo.png",
        width: 1200,
        height: 630,
        alt: "KBC Crane",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "KBC Crane",
    description:
      "Industrial Crane Rental & Heavy Lifting Solutions",
    images: ["/assets/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "KBC Crane",
    url: "https://kbccrane.com",
    logo: "https://kbccrane.com/assets/logo.png",
    description:
      "Industrial crane rental, hydra crane, mobile crane and heavy lifting services.",
    telephone: "+91XXXXXXXXXX",
  };

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${barlow.variable} ${inter.variable}`}
    >
      <body className="overflow-x-hidden font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />

        <Navbar />
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "KBC Crane",
      url: "https://kbccrane.com",
      logo: "https://kbccrane.com/assets/logo.png",
    }),
  }}
/>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}