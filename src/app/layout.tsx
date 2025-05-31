import type { Metadata } from "next";
import { Merriweather, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const merriweather = Merriweather({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const lato = Lato({
  variable: "--font-secondary",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "AuroGurukul | Integral Education for a New Era",
  description:
    "Explore Integral Education inspired by Sri Aurobindo and The Mother – nurturing body, mind, and soul through conscious learning.",
  keywords: [
    "Integral Education",
    "Sri Aurobindo",
    "Auroville",
    "Alternative Education",
    "Spiritual Education",
    "AuroGurukul",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  authors: [{ name: "AuroGurukul Team", url: "https://aurogurukul.com" }],
  creator: "AuroGurukul",
  publisher: "AuroGurukul",
  openGraph: {
    title: "AuroGurukul | Integral Education for a New Era",
    description:
      "Experience a holistic approach to education that nurtures the body, mind, and soul.",
    url: "https://aurogurukul.com",
    siteName: "AuroGurukul",
    images: [
      {
        url: "https://aurogurukul.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "AuroGurukul – Integral Education",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AuroGurukul | Integral Education for a New Era",
    description:
      "Discover a new paradigm of education inspired by Sri Aurobindo and The Mother.",
    images: ["https://aurogurukul.com/images/logo.png"],
    creator: "@aurogurukul", // replace if you have a Twitter handle
  },
  metadataBase: new URL("https://aurogurukul.org"),
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${merriweather.variable} ${lato.variable} antialiased`}>
        <Header />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
