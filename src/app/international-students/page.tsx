import HeroSlider from "./components/HeroSlider";
import ProgramsSection from "./components/ProgramsSection";
import HowToApplySection from "./components/HowToApplySection";
import FeesSection from "./components/FeesSection";
import ScholarshipsSection from "./components/ScholarshipsSection";
import AccommodationSection from "./components/AccommodationSection";
import CampusLifeSection from "./components/CampusLifeSection";

export default function InternationalStudentsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Dynamic Hero Slider */}
      <HeroSlider />

      {/* Content Sections */}
      <div className="container mx-auto px-4 space-y-8">
        <ProgramsSection />
        <HowToApplySection />
        {/* Note: Ensure FeesSection is updated to match the emerald theme */}
        <FeesSection />
        <ScholarshipsSection />
        <AccommodationSection />
        <CampusLifeSection />
      </div>
    </div>
  );
}
