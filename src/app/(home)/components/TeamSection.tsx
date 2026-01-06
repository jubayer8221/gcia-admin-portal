// app/(home)/components/TeamSection.tsx
import { Mail, Phone, Award, User, ArrowRight } from "lucide-react";
import { teamMembers } from "@/src/components/lib/data/teamData";
import Link from "next/link";

export default function TeamSection() {
  return (
    <section className="py-24 bg-emerald-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meet Our <span className="text-emerald-400">Dedicated Team</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full mb-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member) => (
            <div key={member.id} className="group relative">
              {/* Card Decoration */}
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-3xl translate-y-2 translate-x-2 opacity-0 group-hover:opacity-10 transition-all duration-300" />

              <div className="relative bg-emerald-900/40 border border-emerald-800/50 p-8 rounded-3xl hover:border-emerald-500/50 transition-all duration-300">
                <div className="flex items-center mb-8">
                  <div className="w-20 h-20 bg-emerald-800 rounded-2xl flex items-center justify-center overflow-hidden border border-emerald-700 group-hover:scale-105 transition-transform">
                    {/* Placeholder for real image or Icon */}
                    <User className="w-10 h-10 text-emerald-400/50" />
                  </div>
                  <div className="ml-6">
                    <h3 className="font-bold text-white text-xl leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-emerald-400 font-medium text-sm mt-1">
                      {member.position}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 border-t border-emerald-800/50 pt-6">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center text-emerald-100/60 hover:text-emerald-400 transition-colors text-sm truncate"
                  >
                    <Mail className="w-4 h-4 mr-3 shrink-0" />
                    {member.email}
                  </a>
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center text-emerald-100/60 hover:text-emerald-400 transition-colors text-sm"
                  >
                    <Phone className="w-4 h-4 mr-3 shrink-0" />
                    {member.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Committee Preview */}
        <div className="mt-20 relative overflow-hidden bg-emerald-900/50 border border-emerald-500/20 rounded-[2rem] p-10 backdrop-blur-sm text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Advisory Committee
              </h3>
              <p className="text-emerald-100/60 text-lg">
                Guided by experts from diverse global academic backgrounds.
              </p>
            </div>
            <Link
              href="#advisory"
              className="bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold px-8 py-4 rounded-full transition-all flex items-center shadow-lg shadow-emerald-500/20"
            >
              View Full Committee <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
