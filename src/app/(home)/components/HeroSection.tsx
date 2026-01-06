// app/(home)/components/HeroSection.tsx
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative from-primary-700 via-primary-800 to-primary-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 2px, transparent 2px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm mb-6 animate-fade-in">
            <span className="text-sm font-medium">Welcome to GCiA</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Connecting Minds,
            <br />
            <span className="text-primary-300">Building Futures Globally</span>
          </h1>

          <p className="text-xl mb-8 text-primary-100 max-w-2xl">
            Welcome to the Center for International Affairs at Green University
            of Bangladesh. Your gateway to global education and international
            collaboration.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#explore"
              className="inline-flex items-center bg-white text-primary-700 hover:bg-primary-50 px-6 py-3 rounded-lg font-semibold text-lg transition-all transform hover:-translate-y-0.5 hover:shadow-xl group"
            >
              Explore GCiA
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="https://applyonline.green.edu.bd/Admission/Home.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-primary-700 px-6 py-3 rounded-lg font-semibold text-lg transition-all"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-primary-600/20 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-1/4 left-10 w-48 h-48 bg-primary-400/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
    </section>
  );
}
