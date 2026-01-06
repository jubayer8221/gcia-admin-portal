import {
  GraduationCap,
  BookOpen,
  Users,
  ArrowRight,
  Globe,
  Briefcase,
} from "lucide-react";
import Link from "next/link";

export default function ProgramsSection() {
  const programs = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Undergraduate",
      description:
        "Comprehensive Bachelor's degrees focused on innovation and skill.",
      duration: "4 Years",
      degrees: ["BSc", "BA", "BBA", "LLB"],
      link: "https://www.green.edu.bd/admission-undergraduate-program",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Graduate",
      description: "Advanced Master's and Research-based Doctoral programs.",
      duration: "1-4 Years",
      degrees: ["MSc", "MA", "MBA", "PhD"],
      link: "https://www.green.edu.bd/admission-graduate-program",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Curriculum",
      description:
        "Dual degree and exchange programs with partner universities.",
      duration: "3-4 Years",
      degrees: ["Dual Degree", "Exchange"],
      link: "#",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Professional",
      description: "Industry-aligned certificates for career advancement.",
      duration: "6m - 2 Years",
      degrees: ["Certificate", "Diploma"],
      link: "#",
    },
  ];

  return (
    <section id="programs" className="py-16">
      <div className="flex items-center mb-10">
        <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mr-4">
          <GraduationCap className="w-6 h-6 text-emerald-600" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Academic Programs
          </h2>
          <p className="text-gray-600">
            Find your future among our globally recognized degrees
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 text-emerald-600">
              {program.icon}
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {program.title}
            </h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              {program.description}
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 font-medium">Duration:</span>
                <span className="text-emerald-700 font-bold">
                  {program.duration}
                </span>
              </div>
              <div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">
                  Degrees Offered
                </span>
                <div className="flex flex-wrap gap-2">
                  {program.degrees.map((degree, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-gray-50 text-gray-600 text-xs font-semibold rounded-md border border-gray-100"
                    >
                      {degree}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href={program.link}
              target={program.link.startsWith("http") ? "_blank" : "_self"}
              rel={program.link.startsWith("http") ? "noopener noreferrer" : ""}
              className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-bold text-sm group"
            >
              Explore Program
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Need Guidance?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our international admission counselors are available to help you
              select a program that aligns with your professional aspirations
              and visa requirements.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link
              href="/contact"
              className="px-8 py-3 bg-emerald-600 text-white rounded-xl font-bold text-center hover:bg-emerald-700 transition-colors shadow-md"
            >
              Contact Counselor
            </Link>
            <Link
              href="https://applyonline.green.edu.bd/Admission/Home.aspx"
              className="px-8 py-3 bg-white text-emerald-600 border-2 border-emerald-600 rounded-xl font-bold text-center hover:bg-emerald-50 transition-colors"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
