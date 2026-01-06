// app/(home)/components/AnnouncementsSection.tsx
import {
  Calendar,
  TrendingUp,
  Users,
  Award,
  ArrowRight,
  Bell,
} from "lucide-react";
import { announcements } from "@/src/components/lib/data/announcementsData";

const iconMap = {
  event: Calendar,
  update: TrendingUp,
  partnership: Users,
  workshop: Award,
  scholarship: Award,
};

// Modern, high-contrast badges for dark mode
const typeStyles = {
  event: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  update: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  partnership: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  workshop: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  scholarship: "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

export default function AnnouncementsSection() {
  return (
    <section className="py-24 bg-emerald-950 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center space-x-2 mb-4">
              <span className="p-2 bg-emerald-500/10 rounded-lg">
                <Bell className="w-5 h-5 text-emerald-400" />
              </span>
              <span className="text-emerald-400 font-bold tracking-widest uppercase text-sm">
                Update Center
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Latest <span className="text-emerald-400">Announcements</span>
            </h2>
            <p className="text-emerald-50/60">
              Stay connected with the latest news, global partnerships, and
              academic opportunities.
            </p>
          </div>

          <a
            href="#"
            className="group flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors bg-emerald-900/40 px-6 py-3 rounded-full border border-emerald-800/50 hover:bg-emerald-900"
          >
            <span>View all updates</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {announcements.map((announcement) => {
            const Icon =
              iconMap[announcement.type as keyof typeof iconMap] || Calendar;
            return (
              <div
                key={announcement.id}
                className="group relative bg-emerald-900/20 border border-emerald-800/50 rounded-2xl p-6 hover:bg-emerald-900/40 hover:border-emerald-500/40 transition-all duration-300 flex flex-col h-full"
              >
                {/* Accent Line on Hover */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-emerald-400 group-hover:w-full transition-all duration-500 rounded-t-2xl" />

                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border ${
                      typeStyles[announcement.type as keyof typeof typeStyles]
                    }`}
                  >
                    {announcement.type}
                  </div>
                  <Icon className="w-5 h-5 text-emerald-500/50 group-hover:text-emerald-400 transition-colors" />
                </div>

                <h3 className="text-lg font-bold text-emerald-50 mb-3 group-hover:text-white transition-colors line-clamp-2">
                  {announcement.title}
                </h3>

                <p className="text-sm text-emerald-100/60 mb-6 line-clamp-3 leading-relaxed">
                  {announcement.description}
                </p>

                <div className="mt-auto pt-4 border-t border-emerald-800/50 flex items-center justify-between">
                  <div className="flex items-center text-xs text-emerald-400/70">
                    <Calendar className="w-3.5 h-3.5 mr-2" />
                    <span>{announcement.date}</span>
                  </div>
                  <button className="text-emerald-400 hover:text-emerald-200 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
