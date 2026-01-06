// app/(home)/components/AboutSection.tsx
import {
  Globe2,
  Target,
  Users,
  Lightbulb,
  ArrowRight,
  FileText,
} from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 bg-emerald-950 overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Welcome to the{" "}
              <span className="text-emerald-400">
                Center for International Affairs
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-emerald-800 mx-auto rounded-full"></div>
          </div>

          {/* Main Narrative */}
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-7 space-y-6 text-emerald-50/80 text-lg leading-relaxed">
              <p>
                Green University of Bangladesh (GUB) is committed to fostering a
                dynamic and interconnected learning environment. As a
                cornerstone of the global academic landscape, GUB aims to expand
                its global reach by connecting with leading universities and
                research institutions worldwide.
              </p>
              <p>
                We offer students and faculty diverse opportunities for
                learning, growth, and collaboration, ensuring a world-class
                education through international best practices.
              </p>
            </div>

            {/* Stats/Quick Glance Card */}
            <div className="lg:col-span-5 bg-emerald-900/40 border border-emerald-800/50 p-8 rounded-3xl backdrop-blur-sm">
              <div className="flex flex-col space-y-6">
                <div className="flex items-center space-x-4">
                  <Globe2 className="text-emerald-400 w-8 h-8" />
                  <div>
                    <h4 className="text-white font-bold">Global Reach</h4>
                    <p className="text-sm text-emerald-400/70">
                      Connecting with top-tier institutions
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Users className="text-emerald-400 w-8 h-8" />
                  <div>
                    <h4 className="text-white font-bold">Exchange Programs</h4>
                    <p className="text-sm text-emerald-400/70">
                      Student & Faculty mobility
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vision & Mission Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* Vision */}
            <div className="group relative p-8 rounded-3xl bg-emerald-900/20 border border-emerald-800/50 hover:border-emerald-500/50 transition-all duration-300">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-emerald-50/70 leading-relaxed">
                Internationalization of the Green University of Bangladesh
                through broadening the global experiences of students, faculty
                members, and staff.
              </p>
            </div>

            {/* Mission */}
            <div className="group relative p-8 rounded-3xl bg-emerald-900/20 border border-emerald-800/50 hover:border-emerald-500/50 transition-all duration-300">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Lightbulb className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Our Mission
              </h3>
              <p className="text-emerald-50/70 leading-relaxed">
                Creating a functional global platform for sustained cooperation
                and collaboration with international universities in student and
                faculty exchange, joint research, and innovation.
              </p>
            </div>
          </div>

          {/* Activity Report CTA */}
          <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-3xl p-8 md:p-12 shadow-2xl">
            {/* Subtle Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start space-x-3 mb-2">
                  <FileText className="w-6 h-6 text-emerald-200" />
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    GCiA Activities Report
                  </h3>
                </div>
                <p className="text-emerald-100/80 text-lg">
                  Explore our latest global achievements and institutional
                  milestones.
                </p>
              </div>

              <a
                href="https://drive.google.com/file/d/1p5IrOXOUGLfGOj3VTSwn4YkYWUbwhsWZ/view"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center bg-white text-emerald-900 hover:bg-emerald-50 px-8 py-4 rounded-full font-bold text-lg transition-all hover:shadow-xl active:scale-95"
              >
                View Report
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
