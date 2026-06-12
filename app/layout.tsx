import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Me RWABUKUMBA Moussa – Commercial Litigator | Kigali, Rwanda",
    template: "%s | Me RWABUKUMBA Moussa",
  },
  description:
    "Commercial litigator and notary serving businesses, banks and investors in Kigali, Rwanda. 12+ years of experience in litigation, corporate, banking and notary matters.",
  keywords: [
    "commercial litigator Kigali",
    "lawyer Rwanda",
    "attorney Kigali",
    "notary Rwanda",
    "business lawyer Rwanda",
    "RWABUKUMBA Moussa",
    "Africa International Law Firm",
  ],
  openGraph: {
    type: "website",
    locale: "en_RW",
    url: "https://www.rwabukumbalaw.rw",
    siteName: "Me RWABUKUMBA Moussa – Attorney & Notary",
    title: "Me RWABUKUMBA Moussa – Commercial Litigator | Kigali, Rwanda",
    description:
      "Commercial litigator and notary serving businesses, banks and investors in Kigali, Rwanda.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
