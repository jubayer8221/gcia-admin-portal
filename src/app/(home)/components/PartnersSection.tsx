// app/(home)/components/PartnersSection.tsx
import { Building2, Globe, ArrowRight } from "lucide-react";
import { partnerUniversities } from "@/src/components/lib/data/partnersData";
import Link from "next/link";

export default function PartnersSection() {
  // Get unique countries for filtering
  const countries = Array.from(
    new Set(partnerUniversities.map((p) => p.country))
  );

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-4">
            <Globe className="w-8 h-8 text-primary-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
            Our Global Partners
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Collaborating with leading institutions worldwide to provide
            exceptional international opportunities
          </p>
        </div>

        {/* Country Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button className="px-4 py-2 bg-primary-600 text-white rounded-lg font-medium">
            All Countries
          </button>
          {countries.slice(0, 5).map((country) => (
            <button
              key={country}
              className="px-4 py-2 bg-white border border-gray-200 text-gray-700 hover:border-primary-300 hover:text-primary-700 rounded-lg font-medium transition-colors"
            >
              {country}
            </button>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {partnerUniversities.slice(0, 12).map((partner) => (
            <div
              key={partner.id}
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-4 flex flex-col items-center justify-center text-center hover:-translate-y-1"
            >
              <div className="w-16 h-16  from-primary-50 to-blue-50 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-10 h-10 object-contain"
                  />
                ) : (
                  <Building2 className="w-8 h-8 text-primary-400" />
                )}
              </div>
              <h4 className="font-medium text-gray-800 text-sm mb-1 group-hover:text-primary-700 transition-colors">
                {partner.name.split(" ")[0]}
              </h4>
              <div className="text-xs text-gray-500">{partner.country}</div>
              <div className="mt-2 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                {partner.category}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/partnerships"
            className="inline-flex items-center bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-50 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            View All Partnerships
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
