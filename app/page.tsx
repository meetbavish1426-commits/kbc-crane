'use client';

import Link from "next/link";
import {
  FaBolt,
  FaTrain,
  FaBuilding,
  FaIndustry,
  FaHardHat,
  FaTools,
  FaOilCan,
  FaUtensils,
  FaCogs,
  FaBoxOpen,
  FaLightbulb,
} from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Home() {
const cranes = [
  {
    title: "Double Girder EOT Crane",
    image: "/assets/double-girder-crane.webp",
    desc: "Heavy-duty crane designed for high-capacity industrial lifting with maximum strength, precision, and smooth material handling operations.",
  },

  {
    title: "Single Girder EOT Crane",
    image: "/assets/single-girder-eot-crane.webp",
    desc: "Compact and cost-effective crane solution ideal for warehouses, workshops, and medium-duty lifting applications.",
  },

  {
    title: "Goliath Crane",
    image: "/assets/goliath-crane.webp",
    desc: "Robust outdoor crane engineered for large-scale fabrication yards, construction sites, and heavy material movement.",
  },

  {
    title: "EOT Wire Rope Hoist",
    image: "/assets/eot-wire-rope-hoist.webp",
    desc: "Reliable hoist solution for efficient material handling with superior performance and durability."
  },

  {
    title: "EOT Chain Hoist",
    image: "/assets/eot-chain-hoist.webp",
    desc: "Versatile hoist designed for precise lifting and material handling in various industrial settings."
  }
];

  const industries = [
    { icon: <FaBolt />, title: "Power Sector", desc: "Enhancing efficiency in power generation and distribution." },
    { icon: <FaTrain />, title: "Railway Industry", desc: "Precision lifting for railway maintenance and infrastructure projects." },
    { icon: <FaBuilding />, title: "Infrastructure & Construction", desc: "Reliable cranes for large-scale construction and civil engineering." },
    { icon: <FaIndustry />, title: "Fabrication Industry", desc: "Enhancing efficiency in power generation and distribution." },
    { icon: <FaHardHat />, title: "Steel Industry", desc: "Optimized material handling for steel production and processing." },
    { icon: <FaTools />, title: "Foundry & Casting Industry", desc: "Engineered solutions for molten metal handling and casting." },
    { icon: <FaOilCan />, title: "Oil & Gas Industry", desc: "Safe and durable lifting systems for the energy sector." },
    { icon: <FaUtensils />, title: "Food & Beverage Industry", desc: "Hygienic and efficient material movement solutions." },
  ];

  const images = [
    "/assets/EOT-crane.webp",
    "/assets/home02.webp",
    "/assets/home03.webp",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
<main className="bg-white text-[#111]">
  <section className="relative min-h-130 sm:min-h-150 md:min-h-170 lg:min-h-190 overflow-hidden flex items-center">
    
    {/* Background Images */}
    {images.map((image, index) => (
      <div
        key={index}
        className={`absolute inset-0 bg-cover bg-[center-center] sm:bg-center bg-no-repeat transition-opacity duration-2000 ${
          currentImage === index ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundImage: `url(${image})` }}
      />
    ))}

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/55 sm:bg-black/50 md:bg-black/45"></div>

    {/* Gradient */}
    <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-black/10"></div>

    {/* Content */}
    <div className="relative z-10 w-full max-w-362.5 mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
      <div className="max-w-180 pt-16 sm:pt-20 md:pt-24">
        <h1 className="hero-title text-white text-[38px] sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight">
          Quality Creates <br className="hidden sm:block" />
          Industrial Impact
        </h1>
      </div>
    </div>
  </section>


      {/* QUICK LINKS */}
<section className="bg-white shadow-lg">
  <div className="max-w-295 mx-auto flex">

    {[                                                                    
      { icon: <FaBoxOpen />, title: "Products", path: "/product" },
      { icon: <FaCogs />, title: "Services", path: "/services" },
      { icon: <FaLightbulb />, title: "About Us", path: "/about" },
    ].map((item) => (
      <Link
        href={item.path}
        key={item.title}
        className="group flex-1 flex flex-col items-center justify-center py-5 border-r border-gray-100 last:border-r-0 transition-all duration-300 hover:bg-white"
      >
        {/* ICON */}
        <div className="text-[30px] sm:text-[38px] text-[#e51b23]  mb-2 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:text-[#2b0d0d]">
          {item.icon}
        </div>

        {/* TITLE */}
        <h3 className="text-[13px] sm:text-[#e51b23] font-semibold text-[#e51b23] text-center text-hover group-hover:text-[#2b0d0d] transition-colors duration-300">
          {item.title}
        </h3>
      </Link>
    ))}

  </div>
</section>

{/* ABOUT SECTION */}
<section className="pt-6 pb-14 md:pt-8 md:pb-16 bg-white overflow-hidden">
  <div className="max-w-295 mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center">

    {/* Image */}
    <div className="relative group overflow-hidden shadow-xl z-0">
      <img
        src="/assets/loading.jpg"
        alt="KBC Crane manufacturer"
        className="w-full h-80 sm:h-100 lg:h-120 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
    </div>

    {/* Content */}
    <div className="bg-[#e51b23] text-white p-6 sm:p-8 lg:p-10 lg:-ml-10 z-10 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <p className="uppercase text-[10px] font-bold tracking-[0.2em] mb-4 text-white/80">
        KBC Sales & Service
      </p>

      <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">
        Leading EOT Crane <br /> Manufacturer.
      </h2>

      <p className="text-sm sm:text-base leading-relaxed text-white/90 mb-8 font-light">
        At KBC, we are pioneers in EOT crane technology, driving
        innovation and precision to new heights. With a commitment to
        durability, efficiency, and safety, we engineer world-class cranes.
      </p>

      <Link
        href="/about"
        className="group relative inline-block text-sm font-semibold pb-1"
      >
        Discover the power of reliability with KBC Crane & Service

        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
      </Link>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 sm:gap-6 border-t border-white/20 mt-6 pt-6">
        <div className="transition-transform duration-300 hover:scale-105">
          <h3 className="text-2xl sm:text-3xl font-bold italic">15+</h3>

          <p className="text-[9px] sm:text-[10px] uppercase tracking-wider mt-1 opacity-80">
            Years of Experience
          </p>
        </div>

        <div className="transition-transform duration-300 hover:scale-105">
          <h3 className="text-2xl sm:text-3xl font-bold italic">500+</h3>

          <p className="text-[9px] sm:text-[10px] uppercase tracking-wider mt-1 opacity-80">
            Projects Completed
          </p>
        </div>

        <div className="transition-transform duration-300 hover:scale-105">
          <h3 className="text-2xl sm:text-3xl font-bold italic">13k+</h3>

          <p className="text-[9px] sm:text-[10px] uppercase tracking-wider mt-1 opacity-80">
            Trusted Customers
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* CRANE RANGE */}
<section className="pt-10 pb-8 md:pt-12 md:pb-10 bg-white overflow-hidden">
  <div className="max-w-295 mx-auto px-4 sm:px-6 overflow-hidden">
    <h2 className="text-center text-2xl md:text-3xl font-bold mb-8 md:mb-10">
      Our Specialized Crane Range
    </h2>

    <div className="flex gap-5 sm:gap-6 animate-crane-scroll hover:[animation-play-state:paused]">
      {[...cranes, ...cranes].map((crane, index) => (
        <div
          key={`${crane.title}-${index}`}
          className="w-67.5 sm:w-75 min-h-111.5 bg-white shadow-md border border-gray-100 text-center shrink-0 flex flex-col hover:shadow-xl transition duration-300"
        >
          <img
            src={crane.image}
            alt={crane.title}
            className="w-full h-42.5 sm:h-46.25 object-cover"
          />

          <div className="p-5 sm:p-6 flex flex-col flex-1">
            <h3 className="font-bold text-[17px] sm:text-[18px] mb-4">
              {crane.title}
            </h3>

            <p className="text-[13px] sm:text-[14px] text-gray-600 leading-6 mb-6">
              {crane.desc}
            </p>

            <div className="mt-auto">
              <Link
                href="/product"
                className="inline-block bg-[#f28c00] text-white text-xs font-bold px-6 py-3 hover:bg-[#e51b23] transition duration-300"
              >
                VIEW MORE
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CTA */}
      <section className="relative bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/assets/parallax.webp')" }}>
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10">
          <section className="py-24 text-center">
            <div className="px-6">
              <h2 className="text-white text-3xl md:text-4xl font-bold max-w-3xl mx-auto leading-tight">
                Power Your Progress with Our Precision Cranes, Experience Unmatched
                Strength and Reliability Today
              </h2>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <Link
                  href="/contact"
                  className="bg-white text-black px-7 py-3 text-sm font-bold hover:bg-[#e51b23] hover:text-white transition"
                >
                  INQUIRY NOW
                </Link>

                <Link
                  href="/product"
                  className="bg-white text-black px-7 py-3 text-sm font-bold hover:bg-[#e51b23] hover:text-white transition"
                >
                  BROCHURE
                </Link>
              </div>
            </div>
          </section>

          <section className="py-20 bg-white/95">
            <div className="max-w-295 mx-auto px-6">
              <h2 className="text-center text-[#e51b23] text-xl font-bold mb-12">
                Innovative Crane Solutions Across Industries
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {industries.map((item) => (
                  <div
                    key={item.title}
                    className="bg-white border border-gray-200 p-8 text-center hover:shadow-lg transition"
                  >
                    <div className="text-[#e51b23] text-2xl flex justify-center mb-4">{item.icon}</div>
                    <h3 className="font-bold text-sm mb-3">{item.title}</h3>
                    <p className="text-xs text-gray-500 leading-5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-28">
            <div className="max-w-190 mx-auto bg-white text-center px-10 py-12 border-b-8 border-[#e51b23] shadow-2xl">
              <h2 className="text-2xl font-bold mb-6">Who We Are</h2>
              <p className="text-sm text-gray-600 leading-7">
                KBC Sales & Service is one of the leading engineering companies
                manufacturing a wide range of material handling equipment such as
                electric wire rope hoist, electric chain hoist, EOT cranes, gantry
                cranes and industrial lifting solutions.
              </p>
            </div>
          </section>
        </div>
      </section>
      
<section className="py-20 bg-white text-center pt-6 pb-14 md:pt-8 md:pb-16 overflow-hidden">
  <h2 className="text-xl font-bold mb-12">
    Our Valuable Clients
  </h2>

  {/* Outer Container */}
  <div className="max-w-300 mx-auto overflow-hidden px-6">
    
    {/* Scrolling Track */}
    <div className="flex items-center gap-10 animate-crane-scroll hover:[animation-play-state:paused] w-max">
      
      {[...cranes, ...cranes].map((title, index) => (
        <div
          key={`${title}-${index}`}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 min-w-225 text-gray-400 text-sm"
        >
          <div className="bg-gray-100 h-20 flex items-center justify-center rounded-lg shadow-sm">
            Client Logo 1
          </div>

          <div className="bg-gray-100 h-20 flex items-center justify-center rounded-lg shadow-sm">
            Client Logo 2
          </div>

          <div className="bg-gray-100 h-20 flex items-center justify-center rounded-lg shadow-sm">
            Client Logo 3
          </div>

          <div className="bg-gray-100 h-20 flex items-center justify-center rounded-lg shadow-sm">
            Client Logo 4
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
    </main>
  );
}
