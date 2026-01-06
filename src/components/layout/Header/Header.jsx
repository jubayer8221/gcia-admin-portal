// components/layout/Header.tsx
"use client";

import { useState } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  Globe,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { menuItems } from "@/src/components/lib/data/menuItems";
import ApplyNowButton from "@/src/components/shared/ApplyNowButton";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-green shadow-lg">
      {/* Top Bar */}
      <div className="bg-green-900 text-white py-2 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <a
                href="tel:+8801715020314"
                className="text-sm hover:text-primary-200 transition"
              >
                +8801715020314
              </a>
            </div>
            <div className="hidden md:flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <a
                href="mailto:mansur@eee.green.edu.bd"
                className="text-sm hover:text-primary-200 transition"
              >
                mansur@eee.green.edu.bd
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-sm hover:text-primary-200 transition">
              EN
            </button>
            <span className="text-gray-300">|</span>
            <button className="text-sm hover:text-primary-200 transition">
              BN
            </button>
            <Globe className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 w-full bg-emerald-950/95 backdrop-blur-md border-b border-emerald-800/50">
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <Link href="/" className="flex items-center space-x-4 group">
              <div className="relative">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-105 transition-transform duration-300">
                  GUB
                </div>
                <div className="absolute -inset-1 bg-emerald-400/20 rounded-xl blur-sm group-hover:blur-md transition-all"></div>
              </div>

              <div className="flex flex-col">
                <h1 className="text-sm md:text-lg font-bold tracking-tight text-emerald-50 leading-tight">
                  Green University{" "}
                  <span className="text-emerald-400">of Bangladesh</span>
                </h1>
                <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-emerald-300/80 font-medium">
                  Center for International Affairs
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.submenu ? (
                    <>
                      <button
                        className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 
                      ${
                        activeDropdown === index
                          ? "bg-emerald-800 text-white"
                          : "text-emerald-100 hover:text-white hover:bg-emerald-900/50"
                      }`}
                      >
                        {item.title}
                        <ChevronDown
                          className={`w-4 h-4 ml-1.5 transition-transform duration-300 ${
                            activeDropdown === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Modern Dropdown Menu */}
                      {activeDropdown === index && (
                        <div className="absolute left-0 mt-1 w-64 bg-emerald-900 rounded-2xl shadow-2xl border border-emerald-700/50 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                          {item.submenu.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.path}
                              className="flex flex-col px-4 py-3 rounded-xl hover:bg-emerald-800 transition-colors group/item"
                            >
                              <span className="text-sm font-semibold text-emerald-50 group-hover:text-emerald-300 transition-colors">
                                {subItem.title}
                              </span>
                              {subItem.description && (
                                <span className="text-xs text-emerald-400/70 mt-0.5 line-clamp-1">
                                  {subItem.description}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.path}
                      className="px-4 py-2 rounded-lg text-sm font-medium text-emerald-100 hover:text-white hover:bg-emerald-900/50 transition-all"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}

              {/* CTA Button */}
              <Link
                href="/apply"
                className="ml-4 flex items-center bg-emerald-500 hover:bg-emerald-400 text-emerald-950 px-5 py-2 rounded-full font-bold text-sm transition-all hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]"
              >
                Apply Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-emerald-100 hover:bg-emerald-900 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Drawer (Simplistic version) */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-emerald-950 border-t border-emerald-800 p-4 space-y-2">
            {/* Map your menuItems here for mobile */}
          </div>
        )}
      </header>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-green-600 border-t border-gray-100 animate-slide-up">
          <div className="container mx-auto px-4 py-4">
            {menuItems.map((item, index) => (
              <div key={index} className="mb-1">
                <div className="flex items-center justify-between py-3 border-b border-gray-50">
                  <Link
                    href={item.path}
                    className="text-primary-800 font-medium"
                    onClick={() => {
                      if (!item.submenu) setIsMobileMenuOpen(false);
                    }}
                  >
                    {item.title}
                  </Link>
                  {item.submenu && (
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === index ? null : index
                        )
                      }
                      className="text-primary-600"
                      aria-label="Toggle submenu"
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${
                          activeDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {item.submenu && activeDropdown === index && (
                  <div className="pl-4 py-2 bg-gray-50 rounded-lg my-2">
                    {item.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.path}
                        className="block py-3 text-gray-700 hover:text-primary-700 border-b border-gray-100 last:border-0"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="font-medium">{subItem.title}</div>
                        {subItem.description && (
                          <div className="text-sm text-gray-500 mt-1">
                            {subItem.description}
                          </div>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="mt-6 pt-4 border-t border-gray-200">
              <ApplyNowButton className="w-full justify-center" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
