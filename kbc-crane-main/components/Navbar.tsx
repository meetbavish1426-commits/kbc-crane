"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaChevronDown,
  FaChevronRight,
  FaEnvelope,
} from "react-icons/fa";
 

const productMenu = [
  {
    title: "Cranes",
    items: [
      { name: "EOT Crane", slug: "eot-crane" },
      { name: "Double Girder Crane", slug: "double-girder-crane" },
      { name: "Jib Crane", slug: "jib-crane" },
      { name: "Gantry / Goliath Crane", slug: "goliath-crane" },
      { name: "Light Crane System", slug: "light-crane" },
      { name: "Semi Gantry Crane", slug: "semi-gantry-crane" },
      { name: "Underslung Crane", slug: "underslung-crane" },
    ],
  },
  {
    title: "Electrical Hoists",
    items: [
      { name: "Electric Wire Rope Hoist", slug: "electric-wire-hoist" },
      { name: "Electric Chain Hoist", slug: "electric-chain-hoist" },
      { name: "Heavy Duty Crab", slug: "heavy-duty-crab" },
      { name: "Explosion Proof Hoist", slug: "explosion-proof-hoist" },
      { name: "Curvature Type Hoist", slug: "curvature-type-hoist" },
      { name: "Hoist For Goods Lift", slug: "hoist-for-goods-lift" },
    ],
  },
  {
    title: "Customize Crane",
    items: [
      { name: "Grabbing Cranes", slug: "grabbing-cranes" },
      { name: "Steel Plant Crane", slug: "steel-plant-crane" },
      { name: "Hot Metal Crane", slug: "hot-metal-crane" },
      { name: "Power Plant Crane", slug: "power-plant-crane" },
      { name: "Foundry Application Crane", slug: "foundry-crane" },
      { name: "Coil Handling Crane", slug: "coil-handling-crane" },
      { name: "Bridge Crane", slug: "bridge-crane" },
      { name: "Curved Crane", slug: "curved-crane" },
      { name: "Flame Proof Crane", slug: "flame-proof-crane" },
    ],
  },
  {
    title: "Crane Components & Accessories",
    items: [
      { name: "DSL Shrouded Busbar", slug: "dsl-shrouded-busbar" },
      { name: "Heavy Duty Busbar", slug: "heavy-duty-busbar" },
      { name: "Festoon System", slug: "festoon-system" },
      { name: "Wireless Radio Remote", slug: "wireless-radio-remote" },
      { name: "Crane Limit Switch", slug: "crane-limit-switch" },
      { name: "Brakers", slug: "brakers" },
      { name: "Cable & Cable Trolley", slug: "cable-trolley" },
      { name: "Pendant Station", slug: "pendant-station" },
      { name: "Rubber & Spring Buffer", slug: "rubber-spring" },
      { name: "Anti Collision Driver", slug: "anti-collision-driver" },
      { name: "Rail Clamps", slug: "rail-clamps" },
      { name: "Wire Rope", slug: "wire-rope" },
    ],
  },
];

const services = [
  { name: "EOT Crane Maintenance Service", slug: "eot-crane-service" },
  { name: "Crane Modification & Relocation", slug: "crane-modification" },
  { name: "Crane Overhauling", slug: "crane-overhauling" },
  { name: "EOT Crane Annual Maintenance Contract (AMC)", slug: "annual-maintenance" },
  { name: "EOT Health Check Up", slug: "eot-health-check-up" },
  { name: "EOT Crane Repairing Services", slug: "eot-crane-repairing" },
  { name: "EOT Crane Relocation", slug: "eot-crane-relocation" },
  { name: "Crane Capacity Upgrade", slug: "crane-capacity" },
  { name: "Crane Modernization", slug: "crane-modernization" },
  { name: "EOT Crane Erection & Commissioning", slug: "erection-commissioning" },
  { name: "EOT Crane Remote Monitoring", slug: "remote-crane" },
  { name: "EOT Crane Operator Training", slug: "operator-training" },
  { name: "EOT Crane Rope Condition Monitoring", slug: "eot-crane-rope-condition" },
];


 export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<"products" | "services" | null>(null);
  const [mobileSubDropdown, setMobileSubDropdown] = useState<string | null>(null);

  const router = useRouter();
  

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    const closeMenu = () => {
    setMenuOpen(false);
    setMobileDropdown(null);
    setMobileSubDropdown(null);
  };

return (
  <>
    {/* Fixed Navbar Spacer */}
    <div className="h-16 md:h-20" />

    <header className="fixed top-0 left-0 right-0 z-9999">
      {/* TOP BAR */}
      <div
        className={`bg-[#1a0a09] text-white overflow-hidden transition-all duration-500 ${
          scrolled
            ? "max-h-0 opacity-0"
            : "max-h-10.5 opacity-100"
        }`}
      >
        <div className="max-w-362.5 mx-auto px-3 sm:px-5 lg:px-8 h-10.5 flex items-center justify-between gap-3 text-[11px] sm:text-sm">
          <div className="flex items-center gap-4 sm:gap-5">
            <a href="#" className="hover:text-[#e51b23] transition duration-300 hover:scale-110" aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="#" className="hover:text-[#e51b23] transition duration-300 hover:scale-110" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="#" className="hover:text-[#e51b23] transition duration-300 hover:scale-110" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 font-medium tracking-wide">
            <a
              href="tel:+919712106675"
              className="flex items-center gap-2 hover:text-[#e51b23] transition"
            >
              <FaPhoneAlt className="text-[#e51b23]" />
              <span>+91 97121 06675</span>
            </a>

            <a
              href="mailto:info@kbccrane.com"
              className="hidden sm:flex items-center gap-2 hover:text-[#e51b23] transition"
            >
              <FaEnvelope className="text-[#e51b23]" />
              info@kbccrane.com
            </a>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav
        className={`w-full transition-all duration-500 ${
          scrolled
            ? "nav-glass shadow-2xl"
            : "bg-white shadow-md"
        }`}
      >
        <div className="max-w-362.5 mx-auto px-3 sm:px-5 lg:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* LOGO */}
            <Link
              href="/"
              className="flex items-center"
            >
  <span className="relative block w-[120px] sm:w-[140px] md:w-[160px] h-[52px] sm:h-[60px] md:h-[70px]">
    <Image
      src="/assets/logo.png"
      alt="KBC Crane Logo"
      fill
      priority
      sizes="(max-width: 640px) 120px, (max-width: 768px) 140px, 160px"
      className="object-contain"
    />
  </span>
            </Link>          
            {/* Desktop Menu */}
           <ul className="hidden lg:flex items-center gap-1 font-heading font-semibold text-[15px] tracking-wide ml-auto">
            
  <li>
    <Link href="/" className="relative px-4 py-3 text-[#1a0a09] hover:text-[#c9121f] transition duration-300 after:absolute after:left-4 after:bottom-1 after:w-0 after:h-[2px] after:bg-[#c9121f] hover:after:w-[calc(100%-32px)] after:transition-all after:duration-400 after:ease-out">
      Home
    </Link>
  </li>

  <li>
    <Link href="/about" className="relative px-4 py-3 text-[#1a0a09] hover:text-[#c9121f] transition duration-300 after:absolute after:left-4 after:bottom-1 after:w-0 after:h-[2px] after:bg-[#c9121f] hover:after:w-[calc(100%-32px)] after:transition-all after:duration-400 after:ease-out">
      About
    </Link>
  </li>

<li className="relative group">
  <Link
    href="/product"
    className="relative px-4 py-3 text-[#1a0a09] hover:text-[#c9121f] transition duration-300 flex items-center gap-1.5 after:absolute after:left-4 after:bottom-1 after:w-0 after:h-[2px] after:bg-[#c9121f] hover:after:w-[calc(100%-32px)] after:transition-all after:duration-400 after:ease-out"
  >
    Products
    <FaChevronDown className="text-[10px] transition-transform duration-300 group-hover:rotate-180" />
  </Link>

  {/* MAIN DROPDOWN */}
  <div className="absolute right-0 top-full invisible opacity-0 translate-y-3 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-white shadow-2xl rounded-lg w-95 z-9999 max-h-[70vh] overflow-visible border border-gray-100">
    {productMenu.map((cat) => (
      <div key={cat.title} className="relative group/sub">
        {/* CATEGORY */}
        <div className="flex items-center justify-between px-6 py-4 text-[#1a0a09] font-bold hover:bg-[#c9121f] hover:text-white cursor-pointer border-b border-gray-50 transition-colors duration-200">
          <span>{cat.title}</span>
          <FaChevronRight className="text-xs opacity-50" />
        </div>

        {/* PRODUCT LIST - RIGHT SIDE */}
<div className="absolute left-full top-0 invisible opacity-0 group-hover/sub:visible group-hover/sub:opacity-100 transition-all duration-300 bg-white shadow-2xl rounded-lg w-87.5 z-99999 max-h-[55vh] overflow-y-auto overscroll-contain pb-4 border border-gray-100">
  {cat.items.map((item) => (
    <Link
      key={item.slug}
      href={`/product/${item.slug}`}
      className="block px-6 py-3.5 text-[#1a0a09] font-medium hover:text-[#c9121f] hover:bg-red-50/60 transition border-b border-gray-50"
    >
      {item.name}
    </Link>
  ))}
</div>
      </div>
    ))}
  </div>
</li>

        <li className="relative group">
          <Link href="/services" className="relative px-4 py-3 text-[#1a0a09] hover:text-[#c9121f] transition duration-300 flex items-center gap-1.5 after:absolute after:left-4 after:bottom-1 after:w-0 after:h-[2px] after:bg-[#c9121f] hover:after:w-[calc(100%-32px)] after:transition-all after:duration-400 after:ease-out">
            Services <FaChevronDown className="text-[10px] transition-transform duration-300 group-hover:rotate-180" />
          </Link>

                <div className="absolute top-full left-1/2 -translate-x-1/2 invisible opacity-0 translate-y-3 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-white shadow-2xl rounded-lg w-107.5 max-h-[75vh] overflow-y-auto z-9999 border border-gray-100">
                  {services.map((item) => (
                    <Link key={item.slug} href={`/services/${item.slug}`} className="block px-7 py-3.5 text-[#1a0a09] font-medium hover:text-[#c9121f] hover:bg-red-50/60 border-b border-gray-50 transition">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </li>

<li>
    <Link href="/brochure" className="relative px-4 py-3 text-[#1a0a09] hover:text-[#c9121f] transition duration-300 after:absolute after:left-4 after:bottom-1 after:w-0 after:h-[2px] after:bg-[#c9121f] hover:after:w-[calc(100%-32px)] after:transition-all after:duration-400 after:ease-out">
      Brochure
    </Link>
  </li>

  <li>
    <Link href="/contact" className="ml-3 bg-[#c9121f] text-white px-6 py-2.5 rounded-md font-bold text-[14px] tracking-wide hover:bg-[#1a0a09] hover:shadow-lg transition-all duration-300">
      Contact
    </Link>
  </li>
  

 
</ul>
              {/* Mobile Button */}
<button
  className="lg:hidden text-2xl text-[#c9121f] z-50"
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label="Toggle Menu"
>
  {menuOpen ? <FaTimes /> : <FaBars />}
</button>


{/* Mobile Menu */}
<div
 className={`lg:hidden fixed top-0 right-0 h-dvh w-[86%] max-w-90 bg-white shadow-2xl z-9999 transition-transform duration-300 ease-in-out overflow-y-auto
${menuOpen ? "translate-x-0" : "translate-x-full"}`}
>
  <div className="min-h-full pt-20 px-5 pb-24 flex flex-col gap-1 font-semibold text-[#1a0a09]">

    <Link href="/" onClick={closeMenu} className="py-3 px-4 rounded-md border-b hover:bg-[#fff3f3] hover:text-[#c9121f] transition">
      Home
    </Link>

    <Link href="/about" onClick={closeMenu} className="py-3 px-4 rounded-md border-b hover:bg-[#fff3f3] hover:text-[#c9121f] transition">
      About
    </Link>

  {/* Products Main Dropdown */}
{/* Products */}
<div className="w-full flex items-center justify-between rounded-md border-b hover:bg-[#fff3f3] hover:text-[#c9121f] transition">
  <button
    onClick={() => {
      if (mobileDropdown === "products") {
      setMobileDropdown(null);
      setMenuOpen(false);
      router.push("/product");
    } else {
      setMobileDropdown("products");
    }}}
    className="flex-1 text-left py-3 px-4"
  >
    Products
  </button>

  <button
    onClick={() =>
      setMobileDropdown(mobileDropdown === "products" ? null : "products")
    }
    className="px-4 py-3"
  >
    <FaChevronDown
      className={`transition-transform duration-300 ${
        mobileDropdown === "products" ? "rotate-180" : ""
      }`}
    />
  </button>
</div>

{mobileDropdown === "products" && (
  <div className="ml-3 my-2 bg-[#fff7f7] border-l-4 border-[#c9121f] rounded-md overflow-hidden">

    {/* Cranes Sub Dropdown */}
    <button
      onClick={() =>
        setMobileSubDropdown(mobileSubDropdown === "cranes" ? null : "cranes")
      }
      className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold border-b"
    >
      <span>Cranes</span>
      <FaChevronDown
        className={`text-xs transition-transform ${
          mobileSubDropdown === "cranes" ? "rotate-180" : ""
        }`}
      />
    </button>

    {mobileSubDropdown === "cranes" && (
      <div className="ml-4 bg-white border-l border-red-200">
        {[
          { name: "EOT Crane", path: "/product/eot-crane" },
          { name: "Double Girder Crane", path: "/product/double-girder-crane" },
          { name: "Jib Crane", path: "/product/jib-crane" },
          { name: "Gantry / Goliath Crane", path: "/product/goliath-crane" },
          { name: "Light Crane System", path: "/product/light-crane" },
          { name: "Semi Gantry Crane", path: "/product/semi-gantry-crane" },
          { name: "Underslung Crane", path: "/product/underslung-crane" },
        ].map((item) => (
          <Link
            key={item.path}
            href={item.path}
            onClick={() => setMenuOpen(false)}
            className="block px-4 py-3 text-sm text-gray-700 border-b hover:text-[#c9121f] transition"
          >
            {item.name}
          </Link>
        ))}
      </div>
    )}

    {/* Electrical Hoists Sub Dropdown */}
    <button
      onClick={() =>
        setMobileSubDropdown(mobileSubDropdown === "hoists" ? null : "hoists")
      }
      className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold border-b"
    >
      <span>Electrical Hoists</span>
      <FaChevronDown
        className={`text-xs transition-transform ${
          mobileSubDropdown === "hoists" ? "rotate-180" : ""
        }`}
      />
    </button>

    {mobileSubDropdown === "hoists" && (
      <div className="ml-4 bg-white border-l border-red-200">
        {[
         { name: "Electric Wire Rope Hoist", path: "/product/electric-wire-hoist" },
{ name: "Electric Chain Hoist", path: "/product/electric-chain-hoist" },
{ name: "Heavy Duty Crab", path: "/product/heavy-duty-crab" },
{ name: "Explosion Proof Hoist", path: "/product/explosion-proof-hoist" },
{ name: "Curvature Type Hoist", path: "/product/curvature-type-hoist" },
{ name: "Hoist For Goods Lift", path: "/product/hoist-for-goods-lift" },
        ].map((item) => (
          <Link
            key={item.path}
            href={item.path}
            onClick={() => setMenuOpen(false)}
            className="block px-4 py-3 text-sm text-gray-700 border-b hover:text-[#c9121f] transition"
          >
            {item.name}
          </Link>
        ))}
      </div>
    )}

   <button
      onClick={() =>
        setMobileSubDropdown(mobileSubDropdown === "customize" ? null : "customize")
      }
      className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold border-b"
    >
      <span>Customize Crane</span>
      <FaChevronDown
        className={`text-xs transition-transform ${
          mobileSubDropdown === "customize" ? "rotate-180" : ""
        }`}
      />
    </button>
    {mobileSubDropdown === "customize" && (
      <div className="ml-4 bg-white border-l border-red-200">
        {[
          { name: "Grabbing Cranes", path: "/product/grabbing-cranes" },
          { name: "Steel Plant Crane", path: "/product/steel-plant-crane" },
          { name: "Hot Metal Crane", path: "/product/hot-metal-crane" },
          { name: "Power Plant Crane", path: "/product/power-plant-crane" },
          { name: "Foundry Application Crane", path: "/product/foundry-crane" },
          { name: "Coil Handling Crane", path: "/product/coil-handling-crane" },
          { name: "Bridge Crane", path: "/product/bridge-crane" },
          { name: "Curved Crane", path: "/product/curved-crane" },
          { name: "Flame Proof Crane", path: "/product/flame-proof-crane" },

        ].map((item) => (
          <Link
            key={item.path}
            href={item.path}
            onClick={() => setMenuOpen(false)}
            className="block px-4 py-3 text-sm text-gray-700 border-b hover:text-[#c9121f] transition"
          >
            {item.name}
          </Link>
        ))}
      </div>
    )}

      <button
      onClick={() =>
        setMobileSubDropdown(mobileSubDropdown === "components" ? null : "components")
      }
      className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold border-b"
    >
      <span>Crane Components</span>
      <FaChevronDown
        className={`text-xs transition-transform ${
          mobileSubDropdown === "components" ? ""        : ""}`}
      />
    </button>
    {mobileSubDropdown === "components" && (
      <div className="ml-4 bg-white border-l border-red-200">
        {[
          { name: "DSL Shrouded Busbar", path: "/product/dsl-shrouded-busbar" },
          { name: "Heavy Duty Busbar", path: "/product/heavy-duty-busbar" },
          { name: "Festoon System", path: "/product/festoon-system" },
          { name: "Wireless Radio Remote", path: "/product/wireless-radio-remote" },
          { name: "Crane Limit Switch", path: "/product/crane-limit-switch" },
          { name: "Brakers", path: "/product/brakers" },
          { name: "Cable & Cable Trolly", path: "/product/cable-trolly" },
          { name: "Pendant Station", path: "/product/pendant-station" },
          { name: "Rubber & Spring Buffer", path: "/product/rubber-spring" },
          { name: "Anti Collision Driver", path: "/product/anti-collision-driver" },
          { name: "Rail Clamps", path: "/product/rail-clamps" },
          { name: "Wire Rope", path: "/product/wire-rope" },
        ].map((item) => (
          <Link
            key={item.path}
            href={item.path}
            onClick={() => setMenuOpen(false)}
            className="block px-4 py-3 text-sm text-gray-700 border-b hover:text-[#c9121f] transition"
          >
            {item.name}
          </Link>
        ))}
      </div>
    )}
  </div>
  )}

    {/* Services Dropdown */}
<div className="w-full flex items-center justify-between rounded-md border-b hover:bg-[#fff3f3] hover:text-[#c9121f] transition">
  <button
    onClick={() => {
      if (mobileDropdown === "services") {
      setMenuOpen(false);
      setMobileDropdown(null);
      router.push("/services");
    }else { setMobileDropdown("services"); } }}
    className="flex-1 text-left py-3 px-4"
  >
    Services
  </button>

  <button
    onClick={() =>
      setMobileDropdown(mobileDropdown === "services" ? null : "services")
    }
    className="px-4 py-3"
  >
    <FaChevronDown
      className={`transition-transform duration-300 ${
        mobileDropdown === "services" ? "rotate-180" : ""
      }`}
    />
  </button>
</div>

    {mobileDropdown === "services" && (
      <div className="bg-[#fff7f7] border-l-4 border-[#c9121f] ml-3 my-2 rounded-md overflow-hidden text-sm font-medium">
        {[
          { name: "EOT Crane Maintenance Service", path: "/services/eot-crane-service" },
          { name: "Crane Modification & Relocation", path: "/services/crane-modification" },
          { name: "Crane Overhauling", path: "/services/crane-overhauling" },
          { name: "Annual Maintenance Contract AMC", path: "/services/annual-maintenance" },
          { name: "EOT Health Check Up", path: "/services/eot-health-check-up" },
          { name: "EOT Crane Repairing Services", path: "/services/eot-crane-repairing" },
          { name: "EOT Crane Relocation", path: "/services/eot-crane-relocation" },
          { name: "Crane Capacity Up Gradation", path: "/services/crane-capacity" },
          { name: "Crane Modernization", path: "/services/crane-modernization" },
          { name: "Erection & Commissioning", path: "/services/erection-commissioning" },
          { name: "Remote Crane Monitoring", path: "/services/remote-crane" },
          { name: "Operator Training", path: "/services/operator-training" },
          { name: "Rope Condition Monitoring", path: "/services/eot-crane-rope-condition" },
        ].map((item) => (
          <Link
            key={item.path}
            href={item.path}
            onClick={() => setMenuOpen(false)}
            className="block px-4 py-3 border-b border-red-100 text-gray-700 hover:bg-white hover:text-[#c9121f] transition"
          >
            {item.name}
          </Link>
        ))}
      </div>
    )}

    <Link href="/brochure" onClick={() => setMenuOpen(false)} className="py-3 px-4 rounded-md border-b hover:bg-[#fff3f3] hover:text-[#c9121f] transition">
      Brochure
    </Link>

    <Link
      href="/contact"
      onClick={() => setMenuOpen(false)}
      className="mt-5 bg-[#c9121f] text-white text-center py-3 rounded-md font-bold hover:bg-[#1a0a09] transition"
    >
      Contact
    </Link>
  </div>
</div>


{/* Background Overlay */}
{menuOpen && (
  <div
    onClick={() => setMenuOpen(false)}
    className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-30 transition-opacity"
  />
)}
</div>
      </div>  
    </nav>
  </header>
    </>
  );
}
