"use client";

import {
  Award,
  TrendingDown,
  Users,
  Globe,
  Star,
  BookOpen,
  CheckCircle,
  Clock,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

export default function ScholarshipsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const scholarships = [
    {
      id: 1,
      name: "Merit-based Scholarship",
      category: "academic",
      amount: "25-100% Tuition Waiver",
      description:
        "Awarded to students with exceptional academic records and standardized test scores.",
      eligibility: [
        "Minimum GPA 3.5/4.0",
        "Top 10% of class",
        "Excellent SAT/IELTS scores",
      ],
      deadline: "Rolling",
      icon: <Star className="w-6 h-6" />,
      color: "from-amber-400 to-orange-500",
    },
    {
      id: 2,
      name: "Need-based Aid",
      category: "financial",
      amount: "Full Tuition + Living",
      description:
        "Dedicated to high-achieving students from low-income backgrounds.",
      eligibility: [
        "Income verification",
        "Financial disclosure",
        "Academic consistency",
      ],
      deadline: "May 31, 2026",
      icon: <TrendingDown className="w-6 h-6" />,
      color: "from-emerald-400 to-teal-600",
    },
    {
      id: 4,
      name: "Global Diversity Grant",
      category: "diversity",
      amount: "30% Annual Waiver",
      description:
        "Encouraging applicants from underrepresented countries to foster multiculturalism.",
      eligibility: [
        "Eligible regions only",
        "Leadership potential",
        "Diversity statement",
      ],
      deadline: "June 15, 2026",
      icon: <Globe className="w-6 h-6" />,
      color: "from-blue-400 to-indigo-600",
    },
  ];

  const categories = [
    { id: "all", name: "All Awards" },
    { id: "academic", name: "Academic" },
    { id: "financial", name: "Financial Aid" },
    { id: "diversity", name: "Diversity" },
  ];

  const filteredScholarships =
    activeCategory === "all"
      ? scholarships
      : scholarships.filter((s) => s.category === activeCategory);

  return (
    <section id="scholarships" className="py-16">
      <div className="flex items-center mb-10">
        <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mr-4">
          <Award className="w-6 h-6 text-amber-600" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Scholarships & Aid
          </h2>
          <p className="text-gray-600">
            Empowering international talent through financial support
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-5 py-2 rounded-full font-semibold transition-all ${
              activeCategory === cat.id
                ? "bg-emerald-600 text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {filteredScholarships.map((s) => (
          <div
            key={s.id}
            className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col"
          >
            <div className={`p-6 bg-linier-to-br ${s.color} text-white`}>
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-md">
                  {s.icon}
                </div>
                <span className="text-xs font-bold uppercase bg-white/20 px-3 py-1 rounded-full backdrop-blur-md">
                  {s.category}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-1">{s.name}</h3>
              <p className="text-2xl font-black">{s.amount}</p>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {s.description}
              </p>
              <div className="space-y-3 mb-8 flex-1">
                <p className="text-xs font-bold text-gray-400 uppercase">
                  Requirements
                </p>
                {s.eligibility.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center text-sm text-gray-700 font-medium"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                <div className="flex items-center text-xs text-gray-400">
                  <Clock className="w-4 h-4 mr-1.5" />
                  {s.deadline}
                </div>
                <button className="text-emerald-600 font-bold text-sm hover:underline">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modernized Table */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="p-6 bg-gray-50 border-b border-gray-100">
          <h3 className="text-xl font-bold text-gray-900">
            2026 Scholarship Calendar
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs font-bold uppercase tracking-wider">
                <th className="px-6 py-4">Scholarship Type</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Deadline</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-5 font-bold text-gray-900">
                  Merit Academic Award
                </td>
                <td className="px-6 py-5">
                  <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold">
                    Active
                  </span>
                </td>
                <td className="px-6 py-5 text-gray-600 text-sm">
                  Open Year Round
                </td>
                <td className="px-6 py-5 text-right">
                  <button className="text-emerald-600 hover:text-emerald-700 font-bold text-sm">
                    Details
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-5 font-bold text-gray-900">
                  Need-based Financial Aid
                </td>
                <td className="px-6 py-5">
                  <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold">
                    Active
                  </span>
                </td>
                <td className="px-6 py-5 text-gray-600 text-sm">
                  May 31, 2026
                </td>
                <td className="px-6 py-5 text-right">
                  <button className="text-emerald-600 hover:text-emerald-700 font-bold text-sm">
                    Details
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
