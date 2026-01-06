// app/international-students/components/HowToApplySection.tsx
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
    <section id="how-to-apply" className="py-12">
      <div className="flex items-center mb-8">
        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
          <FileText className="w-6 h-6 text-blue-600" />
        </div>
        <h2 className="text-3xl font-bold text-primary-800">How to Apply</h2>
      </div>

      <div className="mb-6">
        <p className="text-gray-600 mb-4">
          Follow these simple steps to begin your journey at Green University of
          Bangladesh:
        </p>
        <a
          href="https://www.green.edu.bd/admission-req-inti-students"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
        >
          View Detailed Requirements
          <ArrowRight className="w-4 h-4 ml-2" />
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mr-4">
                {step.icon}
              </div>
              <div className="text-2xl font-bold text-gray-300">
                {index + 1}
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-primary-50 rounded-xl p-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Ready to Apply?
            </h3>
            <p className="text-gray-600">
              Start your application process online
            </p>
          </div>
          <a
            href="https://applyonline.green.edu.bd/Admission/Home.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0 inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Apply Now
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
