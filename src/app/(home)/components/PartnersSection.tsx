// app/(home)/components/PartnersSection.tsx
import { Building2, Globe, ArrowRight } from "lucide-react";
import { partnerUniversities } from "@/src/components/lib/data/partnersData";
import Link from "next/link";

export default function PartnersSection() {
  const countries = Array.from(
    new Set(partnerUniversities.map((p) => p.country))
  );

  return (
    <section className="py-24 bg-emerald-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/10 rounded-2xl mb-6 border border-emerald-500/20">
            <Globe className="w-8 h-8 text-emerald-400" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-emerald-400">Global Partners</span>
          </h2>
          <p className="text-emerald-100/60 max-w-2xl mx-auto text-lg">
            Collaborating with leading institutions worldwide to provide
            exceptional international opportunities.
          </p>
        </div>

        {/* Modern Pills Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button className="px-6 py-2 bg-emerald-500 text-emerald-950 rounded-full font-bold transition-all shadow-lg shadow-emerald-500/20">
            All Countries
          </button>
          {countries.slice(0, 5).map((country) => (
            <button
              key={country}
              className="px-6 py-2 bg-emerald-900/40 border border-emerald-800 text-emerald-100 hover:border-emerald-500 hover:text-white rounded-full font-medium transition-all"
            >
              {country}
            </button>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {partnerUniversities.slice(0, 12).map((partner) => (
            <div
              key={partner.id}
              className="group bg-emerald-900/20 border border-emerald-800/40 rounded-2xl p-6 transition-all duration-300 hover:bg-emerald-800/40 hover:border-emerald-500/50 flex flex-col items-center justify-center text-center"
            >
              <div className="w-16 h-16 bg-white/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-12 h-12 object-contain grayscale group-hover:grayscale-0 transition-all"
                  />
                ) : (
                  <Building2 className="w-8 h-8 text-emerald-500/40 group-hover:text-emerald-400" />
                )}
              </div>
              <h4 className="font-bold text-emerald-50 text-xs uppercase tracking-wider mb-1">
                {partner.name.split(" ")[0]}
              </h4>
              <div className="text-[10px] text-emerald-400/60 font-medium">
                {partner.country}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/partnerships"
            className="inline-flex items-center space-x-2 text-emerald-400 font-bold hover:text-emerald-300 transition-colors group"
          >
            <span className="border-b border-emerald-400/30 group-hover:border-emerald-400 pb-1">
              Explore all 50+ partner universities
            </span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
