import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { DonationStrip } from "@/components/DonationStrip";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ImpactUpdates } from "@/components/ImpactUpdates";
import { LatestFacebook } from "@/components/LatestFacebook";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Navbar } from "@/components/Navbar";
import { Programs } from "@/components/Programs";
import { Sponsor } from "@/components/Sponsor";
import { Testimonials } from "@/components/Testimonials";
import { TrustTransparency } from "@/components/TrustTransparency";
import { WaysToGive } from "@/components/WaysToGive";

export default function Home() {
  return (
    <LanguageProvider>
      <main>
        <Navbar />
        <Hero />
        <DonationStrip />
        <TrustTransparency />
        <About />
        <Sponsor />
        <WaysToGive />
        <Programs />
        <ImpactUpdates />
        <LatestFacebook />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
