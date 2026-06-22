"use client";

import Link from "next/link";
import { FaPaperPlane, FaChevronUp, FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1a0a09] text-white relative">
      {/* Main Footer */}
      <div className="max-w-325 mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company */}
          <div>
            <h2 className="text-2xl font-heading font-bold mb-4">
              KBC <span className="text-[#c9121f]">Crane</span>
            </h2>

            <p className="text-sm leading-7 text-gray-400 mb-6">
              Your trusted partner in heavy lifting solutions. Engineering precision, delivering reliability.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: <FaFacebookF />, label: "Facebook" },
                { icon: <FaInstagram />, label: "Instagram" },
                { icon: <FaLinkedinIn />, label: "LinkedIn" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-sm text-gray-400 hover:bg-[#c9121f] hover:border-[#c9121f] hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm uppercase tracking-widest font-bold mb-6 text-white font-heading">
              Quick Links
            </h3>

            <ul className="space-y-3.5 text-sm text-gray-400">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Products", path: "/product" },
                { label: "Services", path: "/services" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.path}
                    className="group flex items-center gap-2 hover:text-white transition-colors duration-300"
                  >
                    <span className="w-0 h-[1.5px] bg-[#c9121f] group-hover:w-3 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm uppercase tracking-widest font-bold mb-6 text-white font-heading">
              Services
            </h3>

            <ul className="space-y-3.5 text-sm text-gray-400">
              {[
                { label: "Overhead Cranes", path: "/services" },
                { label: "Gantry Cranes", path: "/services" },
                { label: "EOT Installation", path: "/services" },
                { label: "Crane Maintenance", path: "/services" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.path}
                    className="group flex items-center gap-2 hover:text-white transition-colors duration-300"
                  >
                    <span className="w-0 h-[1.5px] bg-[#c9121f] group-hover:w-3 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Contact */}
          <div>
            <h3 className="text-sm uppercase tracking-widest font-bold mb-6 text-white font-heading">
              Get In Touch
            </h3>

            <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
              <FaPhoneAlt className="text-[#c9121f] shrink-0" />
              <a href="tel:+919712106675" className="hover:text-white transition">
                +91 97121 06675
              </a>
            </div>

            <p className="text-sm text-gray-400 mb-5 leading-6">
              Subscribe to our newsletter for latest updates.
            </p>

            <div className="flex overflow-hidden rounded-md border border-gray-700 focus-within:border-[#c9121f] transition-colors">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-transparent px-4 py-3 text-sm outline-none text-white placeholder:text-gray-500"
              />

              <button className="bg-[#c9121f] px-5 flex items-center justify-center hover:bg-white hover:text-[#c9121f] transition-all duration-300 shrink-0">
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-325 mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500 tracking-wide">
            © 2026 KBC Sales & Service. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6 text-xs text-gray-500">
            <Link href="/about" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/about" className="hover:text-white transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className="absolute right-6 -top-5 w-10 h-10 bg-[#c9121f] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#1a0a09] hover:shadow-xl transition-all duration-300 back-to-top border-2 border-white/20"
        aria-label="Back to top"
      >
        <FaChevronUp className="text-sm" />
      </button>
    </footer>
  );
}