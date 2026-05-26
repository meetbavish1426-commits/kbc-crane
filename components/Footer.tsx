import Link from "next/link";
import { FaPaperPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2b0d0d] text-white border-t-4 border-[#c41e1e]">
      <div className="max-w-325 mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company */}
          <div>
            <h2 className="text-2xl font-bold mb-6">KBC</h2>

            <p className="text-sm leading-7 text-gray-300">
              © 2026 KBC Sales & Service. Your Partner in Heavy Lifting
              Solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm uppercase tracking-widest font-bold mb-6 text-white">
              Quick Links
            </h3>

            <ul className="space-y-4 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-[#e51b23] transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-[#e51b23] transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/product" className="hover:text-[#e51b23] transition">
                  Products
                </Link>
              </li>

              <li>
                <Link href="/services" className="hover:text-[#e51b23] transition">
                  Services
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-[#e51b23] transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm uppercase tracking-widest font-bold mb-6 text-white">
              Services
            </h3>

            <ul className="space-y-4 text-sm text-gray-300">
              <li>
                <Link href="/services" className="hover:text-[#e51b23] transition">
                  Overhead Cranes
                </Link>
              </li>

              <li>
                <Link href="/services" className="hover:text-[#e51b23] transition">
                  Gantry Cranes
                </Link>
              </li>

              <li>
                <Link href="/services" className="hover:text-[#e51b23] transition">
                  EOT Installation
                </Link>
              </li>

              <li>
                <Link href="/services" className="hover:text-[#e51b23] transition">
                  Crane Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm uppercase tracking-widest font-bold mb-6 text-white">
              Newsletter
            </h3>

            <p className="text-sm text-gray-300 mb-5 leading-6">
              Subscribe our newsletter to get latest updates.
            </p>

            <div className="flex overflow-hidden border border-gray-500">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent px-4 py-3 text-sm outline-none"
              />

              <button className="bg-[#e51b23] px-5 flex items-center justify-center hover:bg-white hover:text-[#e51b23] transition">
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}