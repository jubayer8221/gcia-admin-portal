// app/(home)/components/TeamSection.tsx
import { Mail, Phone, Award, User, ArrowRight } from "lucide-react";
import { teamMembers } from "@/src/components/lib/data/teamData";

export default function TeamSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dedicated professionals working to expand international
            opportunities at GUB
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start mb-6">
                  <div className="w-20 h-20  from-primary-100 to-primary-50 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-105 transition-transform">
                    <User className="w-10 h-10 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">
                      {member.name}
                    </h3>
                    <p className="text-primary-700 font-semibold">
                      {member.position}
                    </p>
                  </div>
                </div>

                {member.department && (
                  <p className="text-gray-600 text-sm mb-6">
                    {member.department}
                  </p>
                )}

                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-gray-400 mr-3 " />
                    <a
                      href={`tel:${member.phone}`}
                      className="text-gray-600 hover:text-primary-700 transition-colors text-sm"
                    >
                      {member.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-gray-400 mr-3 " />
                    <a
                      href={`mailto:${member.email}`}
                      className="text-gray-600 hover:text-primary-700 transition-colors text-sm break-all"
                    >
                      {member.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Committee Preview */}
        <div className="mt-16  from-primary-50 to-blue-50 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Advisory Committee
              </h3>
              <p className="text-gray-600">
                Meet our esteemed advisory committee members
              </p>
            </div>
            <a
              href="#advisory"
              className="mt-4 md:mt-0 inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              View Committee
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
