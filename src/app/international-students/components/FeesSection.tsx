"use client";

import {
  DollarSign,
  CreditCard,
  TrendingDown,
  Calculator,
  Shield,
  Clock,
  ArrowRight,
  Wallet,
  Check,
} from "lucide-react";
import { useState } from "react";

export default function FeesSection() {
  const [activeTab, setActiveTab] = useState("undergraduate");

  const programs = {
    undergraduate: [
      {
        faculty: "Science & Engineering",
        fee: "4,500",
        credits: "140",
        total: "৳630,000",
      },
      {
        faculty: "Business Studies",
        fee: "4,000",
        credits: "126",
        total: "৳504,000",
      },
      { faculty: "Law", fee: "4,200", credits: "132", total: "৳554,400" },
    ],
    graduate: [
      {
        faculty: "Graduate Programs",
        fee: "5,500",
        credits: "60",
        total: "৳330,000",
      },
    ],
  };

  return (
    <section id="fees" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 font-bold text-xs uppercase tracking-widest mb-6">
            <DollarSign className="w-4 h-4 mr-2" /> Financial Transparency
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Invest in Your <span className="text-emerald-500">Future</span>
          </h2>
          <p className="text-slate-500 text-lg">
            Clear, competitive, and straightforward tuition structures for our
            international community.
          </p>
        </div>

        {/* Fee Table Section */}
        <div className="bg-slate-50 border border-slate-200 rounded-[2.5rem] p-4 md:p-8 mb-20 shadow-sm">
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1.5 bg-slate-200/50 rounded-2xl">
              {["undergraduate", "graduate"].map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTab(t)}
                  className={`px-8 py-3 rounded-xl font-bold transition-all capitalize ${
                    activeTab === t
                      ? "bg-white text-emerald-600 shadow-md"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="pb-6 font-bold text-slate-900 px-4 text-sm uppercase tracking-wider">
                    Faculty
                  </th>
                  <th className="pb-6 font-bold text-slate-900 px-4 text-sm uppercase tracking-wider">
                    Per Credit
                  </th>
                  <th className="pb-6 font-bold text-slate-900 px-4 text-sm uppercase tracking-wider">
                    Total Credits
                  </th>
                  <th className="pb-6 font-bold text-emerald-600 px-4 text-sm uppercase tracking-wider text-right">
                    Estimated Total
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {programs[activeTab as keyof typeof programs].map((p, i) => (
                  <tr
                    key={i}
                    className="group hover:bg-emerald-50/50 transition-colors"
                  >
                    <td className="py-6 px-4 text-slate-700 font-bold">
                      {p.faculty}
                    </td>
                    <td className="py-6 px-4 text-slate-500 font-medium">
                      ৳{p.fee}
                    </td>
                    <td className="py-6 px-4 text-slate-500 font-medium">
                      {p.credits}
                    </td>
                    <td className="py-6 px-4 text-emerald-600 font-black text-right">
                      {p.total}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Calculator & Scholarships */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Calculator Card */}
          <div className="lg:col-span-3 bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5">
              <Calculator className="w-40 h-40" />
            </div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Calculator className="w-6 h-6 mr-3 text-emerald-400" /> Fee
              Estimator
            </h3>

            <div className="grid md:grid-cols-2 gap-10 relative z-10">
              <div className="space-y-6">
                <div>
                  <label className="block text-emerald-100/40 text-xs font-bold uppercase mb-3">
                    Credits per semester
                  </label>
                  <input
                    type="range"
                    className="w-full accent-emerald-400"
                    min="3"
                    max="18"
                  />
                  <div className="flex justify-between text-[10px] text-emerald-100/40 mt-2 font-bold">
                    <span>3 CREDITS</span>
                    <span>18 CREDITS</span>
                  </div>
                </div>
                <div>
                  <label className="block text-emerald-100/40 text-xs font-bold uppercase mb-3">
                    Scholarship Tier
                  </label>
                  <select className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500">
                    <option>No Scholarship</option>
                    <option>25% Merit Scholarship</option>
                    <option>50% Excellence Tier</option>
                  </select>
                </div>
              </div>

              <div className="bg-emerald-500 rounded-3xl p-8 text-emerald-950">
                <div className="text-xs font-black uppercase tracking-widest opacity-60 mb-1">
                  Total Estimate
                </div>
                <div className="text-4xl font-black mb-6 tracking-tighter">
                  ৳90,500
                </div>
                <button className="w-full py-4 bg-emerald-950 text-white rounded-2xl font-bold hover:bg-black transition-all flex items-center justify-center group">
                  Get Full Quote{" "}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Scholarship Quick Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="h-full bg-emerald-50 border border-emerald-100 rounded-[2.5rem] p-8 flex flex-col">
              <div className="w-12 h-12 bg-emerald-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-200">
                <TrendingDown className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Scholarships Up to 100%
              </h3>
              <p className="text-slate-600 mb-8">
                We reward brilliance. Merit and need-based scholarships are
                available for high-achieving international applicants.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Academic Excellence",
                  "Sports Achievements",
                  "Financial Aid",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center text-slate-700 font-bold text-sm"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-200 flex items-center justify-center mr-3">
                      <Check className="w-3 h-3 text-emerald-700" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
              <button className="mt-auto py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center">
                Explore Scholarships
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
