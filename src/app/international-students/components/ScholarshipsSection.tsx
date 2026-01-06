// app/international-students/components/ScholarshipsSection.tsx
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
      amount: "25-100% tuition waiver",
      description: "For students with outstanding academic achievements",
      eligibility: [
        "Minimum GPA 3.5/4.0 or equivalent",
        "Top 10% of graduating class",
        "Strong letters of recommendation",
      ],
      deadline: "Rolling",
      icon: <Star className="w-6 h-6" />,
      color: "from-yellow-400 to-yellow-600",
    },
    {
      id: 2,
      name: "Need-based Financial Aid",
      category: "financial",
      amount: "Up to 100% tuition + living",
      description: "For students with demonstrated financial need",
      eligibility: [
        "Family income below threshold",
        "Complete financial disclosure",
        "Maintain satisfactory academic progress",
      ],
      deadline: "May 31, 2024",
      icon: <TrendingDown className="w-6 h-6" />,
      color: "from-green-400 to-green-600",
    },
    {
      id: 3,
      name: "Sports Excellence Scholarship",
      category: "talent",
      amount: "25-75% tuition waiver",
      description: "For athletes with national/international achievements",
      eligibility: [
        "National team representation",
        "International competition participation",
        "Sports federation certification",
      ],
      deadline: "Rolling",
      icon: <Award className="w-6 h-6" />,
      color: "from-blue-400 to-blue-600",
    },
    {
      id: 4,
      name: "Cultural Diversity Scholarship",
      category: "diversity",
      amount: "30% tuition waiver",
      description: "For students promoting cultural exchange",
      eligibility: [
        "From underrepresented regions",
        "Active in cultural activities",
        "Commitment to diversity leadership",
      ],
      deadline: "June 15, 2024",
      icon: <Globe className="w-6 h-6" />,
      color: "from-purple-400 to-purple-600",
    },
    {
      id: 5,
      name: "Research Fellowship",
      category: "academic",
      amount: "Full tuition + stipend",
      description: "For graduate students pursuing research",
      eligibility: [
        "Admission to graduate program",
        "Strong research proposal",
        "Faculty recommendation",
      ],
      deadline: "April 30, 2024",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-red-400 to-red-600",
    },
    {
      id: 6,
      name: "Leadership Scholarship",
      category: "talent",
      amount: "50% tuition waiver",
      description: "For students with exceptional leadership qualities",
      eligibility: [
        "Leadership positions held",
        "Community service involvement",
        "Leadership essay submission",
      ],
      deadline: "July 31, 2024",
      icon: <Users className="w-6 h-6" />,
      color: "from-indigo-400 to-indigo-600",
    },
  ];

  const categories = [
    { id: "all", name: "All Scholarships", count: scholarships.length },
    {
      id: "academic",
      name: "Academic",
      count: scholarships.filter((s) => s.category === "academic").length,
    },
    {
      id: "financial",
      name: "Financial Aid",
      count: scholarships.filter((s) => s.category === "financial").length,
    },
    {
      id: "talent",
      name: "Talent-based",
      count: scholarships.filter((s) => s.category === "talent").length,
    },
    {
      id: "diversity",
      name: "Diversity",
      count: scholarships.filter((s) => s.category === "diversity").length,
    },
  ];

  const filteredScholarships =
    activeCategory === "all"
      ? scholarships
      : scholarships.filter((s) => s.category === activeCategory);

  const applicationSteps = [
    {
      step: 1,
      title: "Check Eligibility",
      description: "Review requirements for your chosen scholarship",
    },
    {
      step: 2,
      title: "Prepare Documents",
      description: "Gather required documents and certificates",
    },
    {
      step: 3,
      title: "Submit Application",
      description: "Complete online application form",
    },
    {
      step: 4,
      title: "Interview",
      description: "Participate in scholarship interview if required",
    },
    {
      step: 5,
      title: "Receive Decision",
      description: "Get scholarship award decision",
    },
  ];

  return (
    <section id="scholarships" className="py-12">
      <div className="flex items-center mb-8">
        <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mr-4">
          <Award className="w-6 h-6 text-yellow-600" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-primary-800">
            Scholarships & Financial Aid
          </h2>
          <p className="text-gray-600">
            Financial support opportunities for international students
          </p>
        </div>
      </div>

      <div className="mb-8">
        <p className="text-gray-600 mb-6">
          Green University of Bangladesh offers various scholarships and
          financial aid packages to support outstanding international students.
          Explore our scholarship opportunities below.
        </p>
        <a
          href="https://green.edu.bd/international-scholarship"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group"
        >
          View Official Scholarship Page
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Categories */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Browse by Category
        </h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeCategory === category.id
                  ? "bg-primary-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>

      {/* Scholarships Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredScholarships.map((scholarship) => (
          <div
            key={scholarship.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Header */}
            <div className={` ${scholarship.color} p-6 text-white`}>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  {scholarship.icon}
                </div>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                  {scholarship.category}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{scholarship.name}</h3>
              <div className="text-lg font-semibold">{scholarship.amount}</div>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-gray-600 mb-4">{scholarship.description}</p>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Eligibility Criteria:
                </h4>
                <ul className="space-y-2">
                  {scholarship.eligibility.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 " />
                      <span className="text-sm text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Deadline: {scholarship.deadline}</span>
                </div>
                <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Application Process */}
      <div className="mb-8  from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Scholarship Application Process
        </h3>

        <div className="grid md:grid-cols-5 gap-4 mb-8">
          {applicationSteps.map((step) => (
            <div key={step.step} className="text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl text-primary-600 shadow-sm">
                {step.step}
              </div>
              <h4 className="font-semibold text-gray-800 mb-1">{step.title}</h4>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-6">
          <h4 className="font-bold text-gray-800 mb-4">Required Documents</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 " />
                <span className="text-gray-600">
                  Completed scholarship application form
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 " />
                <span className="text-gray-600">
                  Academic transcripts and certificates
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 " />
                <span className="text-gray-600">
                  Proof of achievements/awards
                </span>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 " />
                <span className="text-gray-600">
                  Personal statement or essay
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 " />
                <span className="text-gray-600">Letters of recommendation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 " />
                <span className="text-gray-600">
                  Financial documents (for need-based)
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Important Dates */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Important Dates & Deadlines
        </h3>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Scholarship Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Application Opens
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Application Deadline
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Decision Announcement
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Merit-based Scholarship
                  </td>
                  <td className="px-6 py-4 text-gray-600">Rolling</td>
                  <td className="px-6 py-4 text-gray-600">Rolling</td>
                  <td className="px-6 py-4 text-gray-600">Within 4 weeks</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                      Open
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Need-based Financial Aid
                  </td>
                  <td className="px-6 py-4 text-gray-600">Jan 1, 2024</td>
                  <td className="px-6 py-4 text-gray-600">May 31, 2024</td>
                  <td className="px-6 py-4 text-gray-600">June 30, 2024</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                      Open
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Cultural Diversity Scholarship
                  </td>
                  <td className="px-6 py-4 text-gray-600">Feb 1, 2024</td>
                  <td className="px-6 py-4 text-gray-600">June 15, 2024</td>
                  <td className="px-6 py-4 text-gray-600">July 15, 2024</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                      Open
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className=" from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h3 className="text-2xl font-bold mb-2">
              Need Help With Your Scholarship Application?
            </h3>
            <p className="text-primary-100">
              Contact our scholarship office for guidance and support with your
              application.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:scholarship@green.edu.bd"
              className="inline-flex items-center justify-center bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Email Scholarship Office
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Schedule Appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
