import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 pt-14 pb-6 px-6 md:px-16">
      
      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-12">

        {/* LEFT SECTION */}
        <div>
          <h2 className="text-xl font-normal text-gray-900 mb-4">
            DigitalBoost
          </h2>

          <p className="text-sm leading-relaxed mb-6">
            We help ambitious businesses scale their online presence and
            drive measurable results through data-driven digital marketing
            strategies.
          </p>

          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>hello@digitalboost.com</span>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+1 (555) 123-4567</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>123 Digital Avenue, Suite 100, New York, NY 10001</span>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm mb-3 text-gray-800">Follow us:</p>
            <div className="flex gap-3">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
                (Icon, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 flex items-center justify-center bg-white rounded-md shadow-sm hover:bg-gray-200 transition"
                  >
                    <Icon size={14} />
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-md font-normal text-gray-900 mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Search Engine Optimization</li>
            <li>Pay-Per-Click Advertising</li>
            <li>Social Media Marketing</li>
            <li>Email Marketing</li>
            <li>Content Marketing</li>
            <li>Analytics & Reporting</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="text-md font-normal text-gray-900 mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Case Studies</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h3 className="text-md font-normal text-gray-900 mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>Marketing Guide</li>
            <li>Industry Reports</li>
            <li>Webinars</li>
            <li>Templates</li>
            <li>ROI Calculator</li>
            <li>Support Center</li>
          </ul>
        </div>

        {/* ✅ LEGAL (MOVE HERE — SAME GRID) */}
        <div>
          <h3 className="text-md font-normal text-gray-900 mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Policy</li>
            <li>GDPR Compliance</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© 2026 DigitalBoost. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookie Policy</span>
        </div>
      </div>
    </footer>
  );
}