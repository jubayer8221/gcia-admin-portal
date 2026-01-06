// app/(home)/components/QuickLinksSection.tsx
import {
  GraduationCap,
  Users,
  Handshake,
  FileText,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const quickLinks = [
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "International Students",
    description: "Programs, How to Apply, Fees, Scholarships",
    link: "/international-students",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Student & Faculty Exchange",
    description: "Policies and Opportunities",
    link: "/student-exchange",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    textColor: "text-green-600",
  },
  {
    icon: <Handshake className="w-8 h-8" />,
    title: "Partnerships",
    description: "MoUs, Networks, and Major Projects",
    link: "/partnerships",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "GCiA Activities",
    description: "View Activity Reports and Updates",
    link: "#activities",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
  },
];

export default function QuickLinksSection() {
  return (
    <section id="explore" className="section-padding  from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
            Quick Access
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to explore international opportunities at Green
            University
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24  opacity-10 group-hover:opacity-20 transition-opacity duration-300" />

              <div className="p-6 relative z-10">
                <div
                  className={`${link.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div
                    className={` ${link.color} bg-clip-text text-transparent`}
                  >
                    {link.icon}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {link.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6">{link.description}</p>

                <div
                  className={`flex items-center ${link.textColor} font-medium group-hover:underline`}
                >
                  Explore
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
