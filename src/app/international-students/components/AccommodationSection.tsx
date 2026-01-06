"use client";

import {
  Home,
  Wifi,
  Utensils,
  Bus,
  Shield,
  Users,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  Mail,
  Info,
  Car,
} from "lucide-react";
import { useState } from "react";

export default function AccommodationSection() {
  const [activeTab, setActiveTab] = useState("on-campus");

  const accommodationOptions = {
    "on-campus": [
      {
        name: "International Student Hostel",
        location: "Purbachal American City",
        amenities: ["WiFi", "Meals", "Laundry", "24/7 Security"],
        roomTypes: ["Single", "Double", "Shared"],
        priceRange: "৳8,000 - ৳15,000",
        distance: "5 mins walk",
        rating: 4.5,
      },
      {
        name: "GUB Residence Hall",
        location: "Main Campus Premises",
        amenities: ["WiFi", "AC", "Gym", "Common Kitchen"],
        roomTypes: ["Single AC", "Double AC"],
        priceRange: "৳12,000 - ৳20,000",
        distance: "On Campus",
        rating: 4.8,
      },
    ],
    "off-campus": [
      {
        name: "Green Valley Apartments",
        location: "Purbachal Sector 4",
        amenities: ["Furnished", "WiFi", "Parking", "Market Access"],
        roomTypes: ["Studio", "1-2 Bedroom"],
        priceRange: "৳15,000 - ৳30,000",
        distance: "10 mins shuttle",
        rating: 4.3,
      },
    ],
  };

  return (
    <section id="accommodation" className="py-20 bg-emerald-950">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 mb-4">
              <span className="p-3 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
                <Home className="w-6 h-6 text-emerald-400" />
              </span>
              <span className="text-emerald-400 font-bold tracking-widest uppercase text-sm">
                Living at GUB
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Your Home <span className="text-emerald-400">Away From Home</span>
            </h2>
            <p className="text-emerald-100/60 text-lg leading-relaxed">
              We provide secure, comfortable, and affordable living spaces
              designed to foster academic success and a vibrant community life
              for our global students.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex p-1 bg-emerald-900/40 border border-emerald-800 rounded-2xl backdrop-blur-sm">
            {["on-campus", "off-campus"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 capitalize ${
                  activeTab === tab
                    ? "bg-emerald-500 text-emerald-950 shadow-lg"
                    : "text-emerald-400 hover:text-white"
                }`}
              >
                {tab.replace("-", " ")}
              </button>
            ))}
          </div>
        </div>

        {/* Accommodation Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {accommodationOptions[
            activeTab as keyof typeof accommodationOptions
          ].map((option, index) => (
            <div
              key={index}
              className="group bg-emerald-900/20 border border-emerald-800/50 rounded-[2.5rem] overflow-hidden hover:border-emerald-500/50 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row">
                {/* Visual Side */}
                <div className="md:w-2/5 relative h-64 md:h-auto bg-emerald-800/50 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent z-10" />
                  <Home className="w-20 h-20 text-emerald-400/20 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-emerald-950/80 backdrop-blur-md text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500/30 flex items-center">
                      <Star className="w-3 h-3 mr-1 fill-emerald-400" />{" "}
                      {option.rating}
                    </span>
                  </div>
                </div>

                {/* Content Side */}
                <div className="md:w-3/5 p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {option.name}
                    </h3>
                    <div className="flex items-center text-emerald-400/60 text-sm">
                      <MapPin className="w-4 h-4 mr-1.5" /> {option.location}
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-end">
                      <span className="text-emerald-100/40 text-xs uppercase font-bold tracking-widest">
                        Pricing
                      </span>
                      <span className="text-xl font-bold text-emerald-400">
                        {option.priceRange}{" "}
                        <small className="text-[10px] text-emerald-100/40 uppercase">
                          /mo
                        </small>
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {option.amenities.map((amenity, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-bold text-emerald-100/60 bg-emerald-800/30 border border-emerald-700/50 px-2 py-1 rounded-md uppercase tracking-tighter"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-emerald-800/50">
                    <div className="text-xs text-emerald-100/40">
                      <span className="block font-bold text-emerald-400/80">
                        {option.distance}
                      </span>
                      Dist. from Campus
                    </div>
                    <button className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl hover:bg-emerald-500 hover:text-emerald-950 transition-all">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Facilities & Transportation Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-2xl font-bold text-white mb-6">
              Standard <span className="text-emerald-400">Inclusions</span>
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {[
                {
                  icon: <Wifi />,
                  label: "Giga-Speed WiFi",
                  desc: "Campus-wide coverage",
                },
                {
                  icon: <Shield />,
                  label: "Security",
                  desc: "24/7 Monitoring & Guards",
                },
                {
                  icon: <Utensils />,
                  label: "Dining",
                  desc: "Multi-cuisine meal plans",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center p-4 bg-emerald-900/30 border border-emerald-800/50 rounded-2xl"
                >
                  <div className="text-emerald-400 mr-4">{item.icon}</div>
                  <div>
                    <div className="text-white font-bold text-sm">
                      {item.label}
                    </div>
                    <div className="text-emerald-100/40 text-xs">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Transportation Card */}
          <div className="lg:col-span-2 bg-gradient-to-br from-emerald-800/40 to-emerald-950 border border-emerald-700/50 rounded-[2.5rem] p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Bus className="w-32 h-32 text-emerald-400" />
            </div>

            <div className="relative z-10 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-2">
                Campus Shuttle Network
              </h3>
              <p className="text-emerald-100/60 mb-8 max-w-md">
                Our fleet of 70+ buses ensures you are always connected to the
                heart of the city, free of charge.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mt-auto">
                <div className="bg-emerald-950/50 p-4 rounded-2xl border border-emerald-800">
                  <div className="flex items-center text-emerald-400 font-bold mb-1 text-sm">
                    <Car className="w-4 h-4 mr-2" /> Frequency
                  </div>
                  <div className="text-white text-sm">Every 15-20 minutes</div>
                </div>
                <div className="bg-emerald-950/50 p-4 rounded-2xl border border-emerald-800">
                  <div className="flex items-center text-emerald-400 font-bold mb-1 text-sm">
                    <MapPin className="w-4 h-4 mr-2" /> Route Coverage
                  </div>
                  <div className="text-white text-sm">
                    All major Dhaka sectors
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Footer */}
        <div className="bg-emerald-500 rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-black text-emerald-950 mb-6">
              Ready to secure your spot?
            </h3>
            <p className="text-emerald-900/80 text-lg font-medium mb-10">
              Accommodation fills up quickly. Contact our International Student
              Desk today for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-10 py-5 bg-emerald-950 text-white rounded-full font-bold hover:bg-black transition-all shadow-xl active:scale-95 flex items-center justify-center">
                Apply for Housing <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-emerald-900/30 text-emerald-900 rounded-full font-bold hover:bg-emerald-900/10 transition-all flex items-center justify-center">
                <Mail className="w-5 h-5 mr-2" /> Contact Office
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
