// app/international-students/components/ProgramsSection.tsx
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
      title: "Undergraduate Programs",
      description: "Bachelor's degrees in various disciplines",
      duration: "4 Years",
      degrees: ["BSc", "BA", "BBA", "LLB"],
      link: "https://www.green.edu.bd/admission-undergraduate-program",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Graduate Programs",
      description: "Master's and Doctoral programs",
      duration: "1-4 Years",
      degrees: ["MSc", "MA", "MBA", "PhD"],
      link: "https://www.green.edu.bd/admission-graduate-program",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "International Programs",
      description: "Programs with global curriculum",
      duration: "3-4 Years",
      degrees: ["Dual Degree", "Exchange"],
      link: "#",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Professional Programs",
      description: "Career-oriented certifications",
      duration: "6 Months - 2 Years",
      degrees: ["Certificate", "Diploma"],
      link: "#",
    },
  ];

  return (
    <section id="programs" className="py-12">
      <div className="flex items-center mb-8">
        <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mr-4">
          <GraduationCap className="w-6 h-6 text-primary-600" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-primary-800">
            Academic Programs
          </h2>
          <p className="text-gray-600">
            Explore our diverse range of academic programs
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
          >
            <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-4">
              <div className="text-primary-600">{program.icon}</div>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {program.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{program.description}</p>

            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-700">
                Duration:
              </span>
              <span className="text-sm font-semibold text-primary-600">
                {program.duration}
              </span>
            </div>

            <div className="mb-4">
              <span className="text-sm font-medium text-gray-700 mb-2 block">
                Degrees Offered:
              </span>
              <div className="flex flex-wrap gap-2">
                {program.degrees.map((degree, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                  >
                    {degree}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href={program.link}
              target={program.link.startsWith("http") ? "_blank" : "_self"}
              rel={program.link.startsWith("http") ? "noopener noreferrer" : ""}
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group"
            >
              Learn More
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        ))}
      </div>

      <div className="from-primary-50 to-blue-50 rounded-2xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Need Guidance Choosing a Program?
            </h3>
            <p className="text-gray-600">
              Our admission counselors are here to help you select the perfect
              program based on your interests and career goals.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Counselor
            </a>
            <a
              href="https://applyonline.green.edu.bd/Admission/Home.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-primary-600 text-primary-600 hover:bg-primary-50 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
