import { FileText, CheckCircle, Clock, Upload, ArrowRight } from "lucide-react";

export default function HowToApplySection() {
  const steps = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Check Requirements",
      description: "Review admission requirements for international students",
    },
    {
      icon: <Upload className="w-6 h-6" />,
      title: "Submit Application",
      description: "Complete online application with required documents",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Application Review",
      description: "Admission committee reviews your application",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Receive Decision",
      description: "Get admission decision and invitation letter",
    },
  ];

  return (
    <section id="how-to-apply" className="py-16">
      <div className="flex items-center mb-8">
        <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mr-4">
          <FileText className="w-6 h-6 text-emerald-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900">How to Apply</h2>
      </div>

      <div className="mb-10">
        <p className="text-gray-600 mb-4 max-w-2xl">
          Follow these simple steps to begin your journey at Green University of
          Bangladesh. Our application process is designed to be streamlined for
          global applicants.
        </p>
        <a
          href="https://www.green.edu.bd/admission-req-inti-students"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold"
        >
          View Detailed Requirements
          <ArrowRight className="w-4 h-4 ml-2" />
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                {step.icon}
              </div>
              <div className="text-3xl font-bold text-gray-100">
                0{index + 1}
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-emerald-600 rounded-2xl p-8 text-white shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">
              Ready to Apply for 2026?
            </h3>
            <p className="text-emerald-50">
              Start your application process today through our dedicated
              international portal.
            </p>
          </div>
          <a
            href="https://applyonline.green.edu.bd/Admission/Home.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap inline-flex items-center bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-xl font-bold transition-all shadow-sm"
          >
            Apply Online Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
