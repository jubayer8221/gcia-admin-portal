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
    <section
      id="explore"
      className="py-24 bg-emerald-900/30 border-y border-emerald-800/50"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quick <span className="text-emerald-400">Access</span>
            </h2>
            <p className="text-emerald-100/60">
              Find the essential resources for your international journey.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              className="group bg-emerald-950 border border-emerald-800 p-8 rounded-3xl hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${link.color} flex items-center justify-center mb-8 text-white shadow-lg shadow-black/20 group-hover:scale-110 transition-transform`}
              >
                {link.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {link.title}
              </h3>
              <p className="text-emerald-100/50 text-sm leading-relaxed mb-8 flex-1">
                {link.description}
              </p>
              <div className="flex items-center text-emerald-400 text-sm font-bold tracking-wide uppercase group-hover:text-white transition-colors">
                Explore{" "}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
