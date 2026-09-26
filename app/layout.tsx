import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Fraunces, Inter } from "next/font/google";

import "@/app/globals.css";
import { cn } from "@/lib/cn";

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
    <html className={cn(fraunces.variable, inter.variable)} lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
