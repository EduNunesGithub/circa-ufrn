import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Fraunces, Inter } from "next/font/google";

import "@/app/globals.css";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  description: "Next.js, TypeScript and Tailwind CSS application.",
  title: "App",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html className={`${fraunces.variable} ${inter.variable}`} lang="en">
      <body>{children}</body>
    </html>
  );
}
