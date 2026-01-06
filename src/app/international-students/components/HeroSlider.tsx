"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80", // Replace with GUB Campus Pic
    title: "International Students",
    description:
      "Join a vibrant international community at Green University of Bangladesh. Experience world-class education in a supportive environment.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523050853063-9158a65d2030?auto=format&fit=crop&q=80", // Replace with GUB Library/Lab
    title: "Global Excellence",
    description:
      "Our programs are designed to meet international standards, preparing you for a successful career anywhere in the world.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80", // Replace with Student Life Pic
    title: "Campus Life",
    description:
      "Discover a home away from home with modern accommodation and a diverse range of student clubs and activities.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () =>
    setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden bg-emerald-900">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] scale-105"
            style={{
              backgroundImage: `url(${slide.image})`,
              transform: index === current ? "scale(1)" : "scale(1.1)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-900/60 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-left-8 duration-700">
                {slide.title}
              </h1>
              <p className="text-xl text-emerald-50 mb-8 animate-in fade-in slide-in-from-left-12 duration-1000">
                {slide.description}
              </p>
              <div className="flex gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <a
                  href="#how-to-apply"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-xl font-bold transition-all flex items-center gap-2"
                >
                  Get Started <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${
              i === current ? "w-8 bg-emerald-500" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
