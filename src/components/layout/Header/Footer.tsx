// components/layout/Footer.tsx
import { Facebook, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-black">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-primary-700 font-bold text-xl">GUB</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Green University</h3>
                <p className="text-primary-200 text-sm">
                  Center for International Affairs
                </p>
              </div>
            </div>
            <p className="text-primary-200 text-sm">
              Connecting minds, building futures globally through international
              education and collaboration.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/international-students"
                  className="text-primary-200 hover:text-red transition"
                >
                  International Students
                </Link>
              </li>
              <li>
                <Link
                  href="/student-exchange"
                  className="text-primary-200 hover:text-red transition"
                >
                  Student Exchange
                </Link>
              </li>
              <li>
                <Link
                  href="/faculty-exchange"
                  className="text-primary-200 hover:text-red transition"
                >
                  Faculty Exchange
                </Link>
              </li>
              <li>
                <Link
                  href="/partnerships"
                  className="text-primary-200 hover:text-red transition"
                >
                  Partnerships
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary-200 hover:text-red transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mt-0.5 mr-3 " />
                <span className="text-primary-200 text-sm">
                  Green University of Bangladesh
                  <br />
                  Purbachal American City, Dhaka
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 " />
                <a
                  href="tel:+8801715020314"
                  className="text-primary-200 hover:text-red transition text-sm"
                >
                  +8801715020314
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3" />
                <a
                  href="mailto:mansur@eee.green.edu.bd"
                  className="text-primary-200 hover:text-red transition text-sm"
                >
                  mansur@eee.green.edu.bd
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 bg-primary-800 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-800 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-800 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <div className="bg-primary-800 rounded-lg p-4">
              <p className="text-sm mb-2">Subscribe to our newsletter</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex px-3 py-2 text-sm bg-green-600 text-gray-800 rounded-l-lg focus:outline-none"
                />
                <button className="bg-primary-600 hover:bg-primary-500 px-4 py-2 text-sm rounded-r-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-300 text-sm text-center md:text-left mb-4 md:mb-0">
              © {new Date().getFullYear()} Green University of Bangladesh –
              Center for International Affairs. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="#"
                className="text-primary-300 hover:text-red text-sm transition"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-primary-300 hover:text-red text-sm transition"
              >
                Terms of Use
              </Link>
              <Link
                href="/sitemap"
                className="text-primary-300 hover:text-red text-sm transition"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
