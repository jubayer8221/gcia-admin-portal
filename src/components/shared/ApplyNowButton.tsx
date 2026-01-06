// components/shared/ApplyNowButton.tsx
import { ArrowRight } from "lucide-react";

interface ApplyNowButtonProps {
  className?: string;
}

export default function ApplyNowButton({
  className = "",
}: ApplyNowButtonProps) {
  return (
    <a
      href="https://applyonline.green.edu.bd/Admission/Home.aspx"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-semibold transition-all transform hover:-translate-y-0.5 hover:shadow-lg ${className}`}
    >
      Apply Now
      <ArrowRight className="w-4 h-4 ml-2" />
    </a>
  );
}
