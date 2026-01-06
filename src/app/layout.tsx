// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/src/components/layout/Header/Header";
import Footer from "@/src/components/layout/Header/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Green University of Bangladesh - Center for International Affairs",
  description: "Connecting Minds, Building Futures Globally",
  keywords: [
    "Green University",
    "Bangladesh",
    "International Affairs",
    "Study Abroad",
    "Exchange Programs",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
