// components/layout/Header.tsx
"use client";

import { useState } from "react";
import { Menu, X, Phone, Mail, Globe, ChevronDown } from "lucide-react";
import Link from "next/link";
import { menuItems } from "@/src/components/lib/data/menuItems";
import ApplyNowButton from "@/src/components/shared/ApplyNowButton";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      {/* Top Bar */}
      <div className="bg-primary-700 text-white py-2 px-4">
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
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl md:text-2xl group-hover:bg-primary-700 transition-colors">
              GUB
            </div>
            <div>
              <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-primary-800 group-hover:text-primary-700 transition-colors">
                Green University of Bangladesh
              </h1>
              <p className="text-sm md:text-base text-primary-600">
                Center for International Affairs (GCiA)
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.submenu ? (
                  <>
                    <button className="flex items-center text-primary-800 hover:text-primary-600 font-medium px-3 py-2 transition-colors">
                      {item.title}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </button>
                    {activeDropdown === index && (
                      <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-3 z-10 animate-slide-up">
                        {item.submenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.path}
                            className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors group/item"
                          >
                            <div className="font-medium">{subItem.title}</div>
                            {subItem.description && (
                              <div className="text-xs text-gray-500 mt-1 group-hover/item:text-gray-600">
                                {subItem.description}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.path}
                    className="text-primary-800 hover:text-primary-600 font-medium px-3 py-2 transition-colors"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            <ApplyNowButton />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-primary-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 animate-slide-up">
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
