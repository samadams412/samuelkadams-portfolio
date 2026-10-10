import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { PersonJsonLd } from "@/components/layout/person-json-ld";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_DESCRIPTION =
  "Full-stack developer with a systems and infrastructure bent: projects, resume, and build logs.";

export const metadata: Metadata = {
  metadataBase: new URL("https://samuelkadams.com"),
  title: { default: "Sam Adams", template: "%s | Sam Adams" },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: "Sam Adams",
    title: "Sam Adams",
    description: SITE_DESCRIPTION,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <PersonJsonLd />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
