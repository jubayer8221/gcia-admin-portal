"use client";

import {
  Users,
  Palette,
  Trophy,
  Music,
  BookOpen,
  Heart,
  Globe,
  Coffee,
  ArrowRight,
  Calendar,
  CheckCircle,
  ExternalLink,
  Play,
} from "lucide-react";

export default function CampusLifeSection() {
  const clubs = [
    {
      name: "International Student Association",
      icon: <Globe />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Cultural Club",
      icon: <Palette />,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Sports Club",
      icon: <Trophy />,
      color: "from-orange-500 to-yellow-500",
    },
    {
      name: "Music & Arts Club",
      icon: <Music />,
      color: "from-rose-500 to-red-500",
    },
  ];

  const facilities = [
    {
      name: "Modern Library",
      stats: "50k+ Books",
      icon: <BookOpen />,
      desc: "Digital & physical resources",
    },
    {
      name: "Student Lounge",
      stats: "Relax Zone",
      icon: <Coffee />,
      desc: "Socializing & gaming spaces",
    },
    {
      name: "Sports Complex",
      stats: "Pro Gym",
      icon: <Trophy />,
      desc: "Swimming & indoor courts",
    },
    {
      name: "Global Cafeteria",
      stats: "Cuisines",
      icon: <Users />,
      desc: "Multi-national food courts",
    },
  ];

  return (
    <section id="campus-life" className="py-24 bg-emerald-950 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Life Beyond the <br />
            <span className="text-emerald-400">Classroom</span>
          </h2>
          <p className="text-emerald-100/60 text-lg leading-relaxed">
            Experience a melting pot of cultures. At GUB, we believe that
            education happens everywhere—from the football field to the debating
            podium.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {facilities.map((f, i) => (
            <div
              key={i}
              className="p-8 bg-emerald-900/20 border border-emerald-800/50 rounded-3xl hover:bg-emerald-800/30 transition-all group"
            >
              <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <div className="text-emerald-400 font-bold text-xs uppercase tracking-widest mb-1">
                {f.stats}
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{f.name}</h4>
              <p className="text-emerald-100/40 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Dynamic Club Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">
              Join the <span className="text-emerald-400">Community</span>
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {clubs.map((club, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl aspect-video cursor-pointer"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${club.color} opacity-80 group-hover:opacity-100 transition-opacity`}
                  />
                  <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                    <div className="bg-white/20 w-10 h-10 rounded-lg flex items-center justify-center backdrop-blur-md">
                      {club.icon}
                    </div>
                    <h5 className="font-bold text-lg leading-tight">
                      {club.name}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Events Timeline */}
          <div className="bg-emerald-900/30 border border-emerald-800/50 rounded-[2.5rem] p-8 md:p-10">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Calendar className="w-6 h-6 mr-3 text-emerald-400" /> Season
              Highlights
            </h3>
            <div className="space-y-8">
              {[
                {
                  title: "International Cultural Fest",
                  date: "MAR 15",
                  desc: "A week of global food & music",
                },
                {
                  title: "Global Career Fair",
                  date: "MAY 22",
                  desc: "Meet MNCs and industry leaders",
                },
                {
                  title: "Orientation Week",
                  date: "JAN 07",
                  desc: "Welcoming our new global family",
                },
              ].map((event, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="text-emerald-400 font-black text-sm">
                      {event.date}
                    </div>
                    <div className="w-px h-full bg-emerald-800 my-2" />
                  </div>
                  <div>
                    <h5 className="text-white font-bold group-hover:text-emerald-400 transition-colors">
                      {event.title}
                    </h5>
                    <p className="text-emerald-100/40 text-sm">{event.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Support Services Banner */}
        <div className="bg-emerald-500 rounded-[3rem] p-1 gap-1 flex flex-col md:flex-row overflow-hidden">
          <div className="bg-emerald-950 rounded-[2.8rem] flex-1 p-10 md:p-16">
            <h3 className="text-3xl font-bold text-white mb-6">
              Global Support <span className="text-emerald-400">24/7</span>
            </h3>
            <ul className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "Airport Pickup",
                "Visa Assistance",
                "Medical Center",
                "Cultural Orientation",
              ].map((s, i) => (
                <li
                  key={i}
                  className="flex items-center text-emerald-100/60 font-medium"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-3" /> {s}
                </li>
              ))}
            </ul>
            <button className="flex items-center text-emerald-400 font-bold hover:gap-3 transition-all">
              Learn about support services{" "}
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
          <div className="bg-emerald-400 md:w-1/3 flex items-center justify-center p-12 text-center group">
            <div className="cursor-pointer">
              <div className="w-20 h-20 bg-emerald-950 rounded-full flex items-center justify-center text-emerald-400 mb-4 mx-auto group-hover:scale-110 transition-transform">
                <Play className="fill-current w-8 h-8 ml-1" />
              </div>
              <span className="font-black text-emerald-950 uppercase tracking-tighter text-xl">
                Campus Tour
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
