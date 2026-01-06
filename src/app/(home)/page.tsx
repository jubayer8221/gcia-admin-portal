// app/(home)/page.tsx
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import QuickLinksSection from "./components/QuickLinksSection";
import AnnouncementsSection from "./components/AnnouncementsSection";
import PartnersSection from "./components/PartnersSection";
import TeamSection from "./components/TeamSection";

export default function HomePage() {
  return (
    <div className="">
      <HeroSection />
      <AboutSection />
      <QuickLinksSection />
      <AnnouncementsSection />
      <PartnersSection />
      <TeamSection />
    </div>
  );
}
