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
  metadataBase: new URL("https://pbag.vercel.app"),
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
    siteName: "Pusat Bimbingan Alternatif Grace",
    images: [
      {
        url: "/images/hero-students.jpg",
        width: 1135,
        height: 1280,
        alt: "PBAG students in Tawau"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "PBAG Grace Training Centre | Sponsor Education in Tawau",
    description:
      "Support PBAG's alternative education centre for undocumented children in Tawau, Sabah.",
    images: ["/images/hero-students.jpg"]
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
