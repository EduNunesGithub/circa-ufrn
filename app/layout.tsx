import type { Metadata } from "next";
import type { ReactNode } from "react";

import {
  IBM_Plex_Mono,
  Instrument_Sans,
  Instrument_Serif,
} from "next/font/google";

import "@/app/globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { cn } from "@/lib/cn";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500"],
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  weight: "variable",
});

const instrumentSerif = Instrument_Serif({
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: "400",
});

export const metadata: Metadata = {
  description: "Next.js, TypeScript and Tailwind CSS application.",
  title: "App",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      className={cn(
        ibmPlexMono.variable,
        instrumentSans.variable,
        instrumentSerif.variable,
      )}
      lang="pt-BR"
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
