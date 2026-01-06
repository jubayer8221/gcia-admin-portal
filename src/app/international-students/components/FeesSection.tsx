// app/international-students/components/FeesSection.tsx
"use client";

import {
  DollarSign,
  CreditCard,
  TrendingDown,
  Calculator,
  Shield,
  Clock,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

export default function FeesSection() {
  const [activeTab, setActiveTab] = useState("undergraduate");

  const feeStructures = {
    undergraduate: [
      {
        faculty: "Faculty of Science & Engineering",
        programs: ["BSc in CSE", "BSc in EEE", "BSc in Civil"],
        tuitionPerCredit: 4500,
        totalCredits: 140,
        admissionFee: 15000,
        otherFees: 10000,
        semesterCount: 12,
      },
      {
        faculty: "Faculty of Business Studies",
        programs: ["BBA", "BBS"],
        tuitionPerCredit: 4000,
        totalCredits: 126,
        admissionFee: 15000,
        otherFees: 8000,
        semesterCount: 12,
      },
      {
        faculty: "Faculty of Arts & Social Sciences",
        programs: ["BA in English", "BSS in Economics"],
        tuitionPerCredit: 3500,
        totalCredits: 120,
        admissionFee: 15000,
        otherFees: 6000,
        semesterCount: 12,
      },
      {
        faculty: "Faculty of Law",
        programs: ["LLB (Hons)"],
        tuitionPerCredit: 4200,
        totalCredits: 132,
        admissionFee: 15000,
        otherFees: 9000,
        semesterCount: 12,
      },
    ],
    graduate: [
      {
        faculty: "Graduate Programs",
        programs: ["MBA", "MSc in CSE", "MA in English"],
        tuitionPerCredit: 5500,
        totalCredits: 60,
        admissionFee: 20000,
        otherFees: 12000,
        semesterCount: 6,
      },
    ],
  };

  const paymentOptions = [
    {
      method: "Bank Transfer",
      icon: <CreditCard className="w-6 h-6" />,
      description: "Direct transfer to university bank account",
      processingTime: "1-3 business days",
    },
    {
      method: "Credit/Debit Card",
      icon: <CreditCard className="w-6 h-6" />,
      description: "Secure online payment gateway",
      processingTime: "Instant",
    },
    {
      method: "Mobile Banking",
      icon: <CreditCard className="w-6 h-6" />,
      description: "bKash, Nagad, Rocket, etc.",
      processingTime: "Instant",
    },
  ];

  const scholarships = [
    {
      name: "Merit Scholarship",
      discount: "25-50%",
      criteria: "Outstanding academic performance",
      icon: <TrendingDown className="w-6 h-6" />,
    },
    {
      name: "Need-based Scholarship",
      discount: "Up to 100%",
      criteria: "Financial need assessment",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      name: "Sports Scholarship",
      discount: "25-75%",
      criteria: "National/international sports achievement",
      icon: <TrendingDown className="w-6 h-6" />,
    },
  ];

  return (
    <section id="fees" className="py-12">
      <div className="flex items-center mb-8">
        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
          <DollarSign className="w-6 h-6 text-green-600" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-primary-800">Fee Structure</h2>
          <p className="text-gray-600">
            Tuition fees and payment information for international students
          </p>
        </div>
      </div>

      <div className="mb-8">
        <p className="text-gray-600 mb-6">
          Green University of Bangladesh offers competitive tuition fees for
          international students. All fees are quoted in Bangladeshi Taka (BDT)
          and are subject to annual review.
        </p>
        <a
          href="https://green.edu.bd/international-tuition-fee"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group"
        >
          View Official Fee Structure
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Fee Tabs */}
      <div className="mb-8">
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab("undergraduate")}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeTab === "undergraduate"
                ? "bg-primary-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Undergraduate Programs
          </button>
          <button
            onClick={() => setActiveTab("graduate")}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeTab === "graduate"
                ? "bg-primary-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Graduate Programs
          </button>
        </div>

        {/* Fee Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Faculty/Program
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Tuition per Credit
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Total Credits
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Admission Fee
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Other Fees*
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Estimated Total**
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {feeStructures[activeTab as keyof typeof feeStructures].map(
                  (program, index) => {
                    const estimatedTotal =
                      program.tuitionPerCredit * program.totalCredits +
                      program.admissionFee +
                      program.otherFees;
                    return (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="font-medium text-gray-900">
                            {program.faculty}
                          </div>
                          <div className="text-sm text-gray-500">
                            {program.programs.join(", ")}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-gray-900">
                            ৳{program.tuitionPerCredit.toLocaleString()}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-gray-900">
                            {program.totalCredits}
                          </div>
                          <div className="text-sm text-gray-500">
                            ({program.semesterCount} semesters)
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-gray-900">
                            ৳{program.admissionFee.toLocaleString()}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-gray-900">
                            ৳{program.otherFees.toLocaleString()}
                          </div>
                          <div className="text-xs text-gray-500">
                            *Per semester
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="font-semibold text-primary-600">
                            ৳{estimatedTotal.toLocaleString()}
                          </div>
                          <div className="text-xs text-gray-500">
                            **Approximate
                          </div>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-600">
          <p>
            Note: Fees are subject to change. Additional charges may apply for
            lab courses, thesis, etc.
          </p>
        </div>
      </div>

      {/* Fee Calculator */}
      <div className="mb-8 from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
            <Calculator className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">
              Tuition Fee Calculator
            </h3>
            <p className="text-gray-600">
              Estimate your tuition fees based on program and credits
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Program Type
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                <option value="undergraduate">Undergraduate Program</option>
                <option value="graduate">Graduate Program</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Credits
              </label>
              <input
                type="range"
                min="3"
                max="18"
                defaultValue="15"
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>3 credits</span>
                <span>15 credits</span>
                <span>18 credits</span>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Scholarship Discount
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                <option value="0">No Scholarship</option>
                <option value="25">25% Scholarship</option>
                <option value="50">50% Scholarship</option>
                <option value="75">75% Scholarship</option>
                <option value="100">100% Scholarship</option>
              </select>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h4 className="font-bold text-gray-800 mb-4">Estimated Costs</h4>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Tuition Fees:</span>
                <span className="font-semibold">৳67,500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Admission Fee:</span>
                <span className="font-semibold">৳15,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Other Fees:</span>
                <span className="font-semibold">৳8,000</span>
              </div>
              <div className="flex justify-between border-t pt-3">
                <span className="text-gray-600">Scholarship Discount:</span>
                <span className="font-semibold text-green-600">-৳0</span>
              </div>
              <div className="flex justify-between border-t pt-3 font-bold text-lg">
                <span>Total Estimated Cost:</span>
                <span className="text-primary-600">৳90,500</span>
              </div>
            </div>
            <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-semibold transition-colors">
              Get Detailed Calculation
            </button>
          </div>
        </div>
      </div>

      {/* Payment Options */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Payment Options
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {paymentOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
            >
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <div className="text-green-600">{option.icon}</div>
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                {option.method}
              </h4>
              <p className="text-gray-600 text-sm mb-4">{option.description}</p>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-2" />
                <span>Processing: {option.processingTime}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scholarship Preview */}
      <div className=" from-green-50 to-emerald-50 rounded-2xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Looking for Financial Assistance?
            </h3>
            <p className="text-gray-600">
              We offer various scholarships and financial aid options for
              international students. Check your eligibility and apply today!
            </p>
          </div>
          <a
            href="/international-students#scholarships"
            className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            View Scholarships
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
