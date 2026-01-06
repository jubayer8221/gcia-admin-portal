// app/(home)/components/AnnouncementsSection.tsx
import { Calendar, TrendingUp, Users, Award, ArrowRight } from "lucide-react";
import { announcements } from "@/src/components/lib/data/announcementsData";

const iconMap = {
  event: Calendar,
  update: TrendingUp,
  partnership: Users,
  workshop: Award,
  scholarship: Award,
};

const typeColors = {
  event: "bg-blue-100 text-blue-800",
  update: "bg-green-100 text-green-800",
  partnership: "bg-purple-100 text-purple-800",
  workshop: "bg-orange-100 text-orange-800",
  scholarship: "bg-yellow-100 text-yellow-800",
};

export default function AnnouncementsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-2">
              Latest Updates
            </h2>
            <p className="text-gray-600">
              Stay updated with GCiA news and events
            </p>
          </div>
          <a
            href="#"
            className="mt-4 md:mt-0 text-primary-600 hover:text-primary-700 font-medium flex items-center"
          >
            View all updates
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {announcements.map((announcement) => {
            const Icon = iconMap[announcement.type];
            return (
              <div
                key={announcement.id}
                className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-primary-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`${
                      typeColors[announcement.type]
                    } px-3 py-1 rounded-full text-xs font-medium`}
                  >
                    {announcement.type.charAt(0).toUpperCase() +
                      announcement.type.slice(1)}
                  </div>
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
                </div>

                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-primary-700 transition-colors">
                  {announcement.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {announcement.description}
                </p>

                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{announcement.date}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
