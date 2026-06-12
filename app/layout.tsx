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
        url: "/images/classroom-learning.jpg",
        width: 1060,
        height: 410,
        alt: "PBAG students learning in Tawau"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "PBAG Grace Training Centre | Sponsor Education in Tawau",
    description:
      "Support PBAG's alternative education centre for undocumented children in Tawau, Sabah.",
    images: ["/images/classroom-learning.jpg"]
  }
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "NGO"],
  name: "Pusat Bimbingan Alternatif Grace",
  alternateName: "Grace Training Centre",
  url: "https://pbag.vercel.app",
  logo: "https://pbag.vercel.app/images/pbag-logo.png",
  image: "https://pbag.vercel.app/images/classroom-learning.jpg",
  description:
    "Pusat Bimbingan Alternatif Grace is an alternative education centre in Tawau, Sabah supporting undocumented children through education, skills training, and community care.",
  telephone: "+60198088281",
  email: "gtctawau@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "TB 14354-14356, Lot 8-10, Pekan Kinabutan, Mile 5 1/2, Jalan Apas",
    addressLocality: "Tawau",
    addressRegion: "Sabah",
    postalCode: "91000",
    addressCountry: "MY"
  },
  sameAs: ["https://www.facebook.com/gtctawau"]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
