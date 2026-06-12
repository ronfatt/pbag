import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "PBAG Grace Training Centre | Sponsor Education in Tawau",
  description:
    "Support Pusat Bimbingan Alternatif Grace, an alternative education centre in Tawau helping undocumented children learn, grow, and build a better future.",
  keywords: [
    "PBAG",
    "Grace Training Centre",
    "Tawau donation",
    "Sabah charity",
    "sponsor a child",
    "alternative education Malaysia"
  ],
  openGraph: {
    title: "Give Every Child A Chance To Learn | PBAG Tawau",
    description:
      "Sponsor or donate to PBAG and help undocumented children in Tawau receive education, skills training, and community care.",
    type: "website",
    locale: "en_MY",
    siteName: "Pusat Bimbingan Alternatif Grace"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
