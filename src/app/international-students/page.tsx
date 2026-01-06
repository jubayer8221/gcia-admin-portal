// app/international-students/page.tsx
import ProgramsSection from "./components/ProgramsSection";
import HowToApplySection from "./components/HowToApplySection";
import FeesSection from "./components/FeesSection";
import ScholarshipsSection from "./components/ScholarshipsSection";
import AccommodationSection from "./components/AccommodationSection";
import CampusLifeSection from "./components/CampusLifeSection";

export default function InternationalStudentsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="from-primary-700 to-primary-800 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              International Students
            </h1>
            <p className="text-xl text-primary-100">
              Join a vibrant international community at Green University of
              Bangladesh. Experience world-class education in a supportive
              environment.
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-12">
        <ProgramsSection />
        <HowToApplySection />
        <FeesSection />
        <ScholarshipsSection />
        <AccommodationSection />
        <CampusLifeSection />
      </div>
    </div>
  );
}
