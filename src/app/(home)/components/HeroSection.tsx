// // app/(home)/components/HeroSection.tsx
// import { ArrowRight } from "lucide-react";
// import Link from "next/link";

// export default function HeroSection() {
//   return (
//     <section className="relative from-primary-700 via-primary-800 to-primary-900 text-white overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 2px, transparent 2px)`,
//             backgroundSize: "40px 40px",
//           }}
//         />
//       </div>

//       <div className="container relative z-10 mx-auto px-4 py-20 md:py-28">
//         <div className="max-w-3xl">
//           <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-600/10 backdrop-blur-sm mb-6 animate-fade-in">
//             <span className="text-sm font-medium">Welcome to GCiA</span>
//           </div>

//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
//             Connecting Minds,
//             <br />
//             <span className="text-primary-300">Building Futures Globally</span>
//           </h1>

//           <p className="text-xl mb-8 text-primary-100 max-w-2xl">
//             Welcome to the Center for International Affairs at Green University
//             of Bangladesh. Your gateway to global education and international
//             collaboration.
//           </p>

//           <div className="flex flex-wrap gap-4">
//             <Link
//               href="#explore"
//               className="inline-flex items-center bg-green-600 text-primary-700 hover:bg-primary-50 px-6 py-3 rounded-lg font-semibold text-lg transition-all transform hover:-translate-y-0.5 hover:shadow-xl group"
//             >
//               Explore GCiA
//               <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
//             </Link>

//             <a
//               href="https://applyonline.green.edu.bd/Admission/Home.aspx"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center border-2 border-white text-white hover:bg-green-600 hover:text-primary-700 px-6 py-3 rounded-lg font-semibold text-lg transition-all"
//             >
//               Apply Now
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Floating Elements */}
//       <div className="absolute top-1/4 right-10 w-64 h-64 bg-primary-600/20 rounded-full blur-3xl animate-float"></div>
//       <div
//         className="absolute bottom-1/4 left-10 w-48 h-48 bg-primary-400/20 rounded-full blur-3xl animate-float"
//         style={{ animationDelay: "2s" }}
//       ></div>
//     </section>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const bgImages = [
  "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1523050853063-9158a65d2030?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80",
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === bgImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-150 md:min-h-175 flex items-center text-white overflow-hidden bg-emerald-950">
      {/* 1. SLIDING BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        {bgImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 scale-110"
              style={{
                backgroundImage: `url(${img})`,
                transform: index === current ? "scale(1)" : "scale(1.1)",
              }}
            />
            {/* Dark Overlay to make static text pop */}
            <div className="absolute inset-0 bg-linear-to-r from-emerald-950 via-emerald-900/60 to-transparent" />
          </div>
        ))}
      </div>

      {/* 2. STATIC CONTENT LAYER (Does not slide) */}
      <div className="container relative z-10 mx-auto px-4 py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 backdrop-blur-md mb-8 animate-fade-in">
            <span className="text-sm font-semibold tracking-wide uppercase">
              Welcome to GCiA
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]">
            Connecting Minds,
            <br />
            <span className="text-emerald-400">Building Futures Globally</span>
          </h1>

          <p className="text-xl md:text-2xl mb-10 text-emerald-50 max-w-2xl leading-relaxed">
            Welcome to the Center for International Affairs at Green University
            of Bangladesh. Your gateway to global education and international
            collaboration.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link
              href="#explore"
              className="inline-flex items-center bg-emerald-500 text-white hover:bg-emerald-400 px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] group"
            >
              Explore GCiA
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="https://applyonline.green.edu.bd/Admission/Home.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border-2 border-white/80 text-white hover:bg-white hover:text-emerald-900 px-8 py-4 rounded-xl font-bold text-lg transition-all backdrop-blur-sm"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>

      {/* 3. STATIC DECORATIVE ELEMENTS */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 flex gap-2 z-20">
        {bgImages.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              current === i ? "w-10 bg-emerald-400" : "w-4 bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
