"use client";

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
  FaArrowRight,
} from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronRight } from "lucide-react";
 

export default function Home() {
const cranes = [
  {
    title: "Double Girder EOT Crane",
    image: "/assets/double-girder-crane.webp",
    desc: "Heavy-duty crane designed for high-capacity industrial lifting with maximum strength, precision, and smooth material handling operations.",
  },

  {
    title: "Single Girder EOT Crane",
    image: "/assets/eot-crane03.webp",
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
    image: "/assets/electric-chain-hoist02.webp",
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

const heroSlides = [
  {
    image: "/assets/EOT-crane.webp",
     title: "Quality Creates Impact",
     subtitle: "Engineering Excellence in Every Lift",
   },
  {
    image: "/assets/home02.webp",
     title: "Advanced Crane Systems",
     subtitle: "Built for Power, Designed for Precision",
   },
  {
    image: "/assets/home03.webp",
     title: "Excellence In Material Handling",
     subtitle: "Trust KBC for Industrial Solutions",
   },
 
];

const [currentImage, setCurrentImage] = useState(0);
const autoSlideRef = useRef<NodeJS.Timeout | null>(null);
const startAutoSlide = () => {
  if (autoSlideRef.current) {
    clearTimeout(autoSlideRef.current);
  }

  autoSlideRef.current = setTimeout(() => {
    if (!isAnimating.current) {
      isAnimating.current = true;
      setCurrent((prev) => prev + 1);
      setTransition(true);
    }
  }, 4000);
};
useEffect(() => {
  startAutoSlide();

  return () => {
    if (autoSlideRef.current) {
      clearTimeout(autoSlideRef.current);
    }
  };
}, []);
 

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % heroSlides.length);
  }, 5000);

  return () => clearInterval(interval);
}, []);

const activeSlide = heroSlides[currentImage] ?? heroSlides[0];

const sliderItems = [
  cranes[cranes.length - 1], // first clone
  ...cranes,
  cranes[0], // last clone
];

const [current, setCurrent] = useState(1);
useEffect(() => {
  startAutoSlide();
}, [current]);                 // Start from the first actual crane (index 1)
const [transition, setTransition] = useState(true);

const startX = useRef(0);
const endX = useRef(0);
const isAnimating = useRef(false);

const nextSlide = () => {
  if (isAnimating.current) return;

  isAnimating.current = true;

  setCurrent((prev) => prev + 1);
  setTransition(true);

  startAutoSlide(); // reset timer
};

 

const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
  startX.current = e.touches[0].clientX;
  endX.current = e.touches[0].clientX;
};

const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
  endX.current = e.touches[0].clientX;
};
// const isAnimating = useRef(false);

const handleTouchEnd = () => {
  if (isAnimating.current) return;

  const diff = startX.current - endX.current;

  if (Math.abs(diff) < 50) return;

  isAnimating.current = true;

  if (diff > 50) {
    setCurrent((prev) => prev + 1);
  }

  if (diff < -50) {
    setCurrent((prev) => prev - 1);
  }

  setTransition(true);

  startAutoSlide(); // reset timer
};

const handleTransitionEnd = () => {
  isAnimating.current = false;

  if (current === sliderItems.length - 1) {
    setTransition(false);
    setCurrent(1);
  }

  if (current === 0) {
    setTransition(false);
    setCurrent(cranes.length);
  }
};
useEffect(() => {
  if (!transition) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTransition(true);
      });
    });
  }
}, [transition]);
const [emblaRef] = useEmblaCarousel({
  loop: true,
});
useEffect(() => {
  const cards = document.querySelectorAll(".reveal-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.15 }
  );

  cards.forEach((card) => observer.observe(card));

  return () => observer.disconnect();
}, []);

const statsRef = useRef<HTMLDivElement | null>(null);
const [startCount, setStartCount] = useState(false);

const [years, setYears] = useState(0);
const [projects, setProjects] = useState(0);
const [customers, setCustomers] = useState(0);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setStartCount(true);
      }
    },
    { threshold: 0.3 }
  );

  if (statsRef.current) {
    observer.observe(statsRef.current);
  }

  return () => observer.disconnect();
}, []);

useEffect(() => {
  if (!startCount) return;

  const duration = 2000; // 2 seconds

  let startTime: number;

  const animate = (time: number) => {
    if (!startTime) startTime = time;

    const progress = Math.min((time - startTime) / duration, 1);

    setYears(Math.floor(progress * 10));
    setProjects(Math.floor(progress * 500));
    setCustomers(Math.floor(progress * 13000));

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
}, [startCount]);

const logos = [
  "/assets/1.jpeg",
  "/assets/2.jpeg",
  "/assets/3.jpeg",
  "/assets/4.jpeg",
  "/assets/5.jpeg",
  "/assets/6.jpeg",
  "/assets/7.jpeg",
  "/assets/8.jpeg"
];


  return (
<main className="bg-white text-[#111]">

{/* ═══════════ HERO ═══════════ */}
<section className="relative h-155 sm:h-175 md:h-190 overflow-hidden flex items-center">
  {heroSlides.map((slide, index) => (
    <div
      key={index}
      className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1800 ease-in-out brightness-[0.88] contrast-[1.08] saturate-[1.05] ${
        currentImage === index ? "opacity-100" : "opacity-0"
      }`}
      style={{
        backgroundImage: `url(${slide.image})`,
        transition: "scale(1.05)",
      }}
    />
  ))}

  {/* Overlays */}
  <div className="absolute inset-0 bg-[#0f172a]/30"></div>
  <div className="absolute inset-x-0 bottom-0 h-64 bg-linear-to-t from-black/60 to-transparent"></div>

  <div className="relative z-10 max-w-362.5 mx-auto w-full px-5 sm:px-8 md:px-12">
    <div
      key={currentImage}
      className="max-w-190 animate-heroText pt-24 md:pt-32 lg:pt-36"
    >
      {/* Subtitle */}
      <p className="text-[#e51b23] text-[11px] sm:text-[13px] font-bold uppercase tracking-[0.3em] mb-4 font-heading"
         style={{ animationDelay: "0ms" }}
      >
        KBC Sales & Service
      </p>

      <h1 className="text-white text-[38px] sm:text-[50px] md:text-[68px] leading-[1.05] font-extrabold font-heading tracking-tight">
        {activeSlide.title}
      </h1>

      {/* Description */}
      <p className="text-white/75 text-[15px] sm:text-[17px] mt-4 max-w-130 leading-relaxed font-light">
        {activeSlide.subtitle}
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-3 mt-8">
        <Link
          href="/contact"
          className="bg-[#c9121f] text-white px-7 py-3.5 text-[13px] font-bold uppercase tracking-wider hover:bg-white hover:text-[#c9121f] transition-all duration-300 flex items-center gap-2 font-heading"
        >
          Get A Quote <FaArrowRight className="text-xs" />
        </Link>
        <Link
          href="/product"
          className="border-2 border-white/40 text-white px-7 py-3.5 text-[13px] font-bold uppercase tracking-wider hover:bg-white hover:text-[#1a0a09] hover:border-white transition-all duration-300 font-heading"
        >
          Our Products
        </Link>
      </div>
    </div>
  </div>

  {/* Hero Slide Indicators */}
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
    {heroSlides.map((_, i) => (
      <button
        key={i}
        onClick={() => setCurrentImage(i)}
        className={`h-0.75 rounded-full transition-all duration-500 ${
          currentImage === i
            ? "w-8 bg-[#c9121f]"
            : "w-4 bg-white/40 hover:bg-white/60"
        }`}
        aria-label={`Slide ${i + 1}`}
      />
    ))}
  </div>
</section>


      {/* ═══════════ QUICK LINKS ═══════════ */}
<section className="bg-white shadow-lg relative z-10 -mt-1">
  <div className="max-w-295 mx-auto flex">

    {[                                                                    
      { icon: <FaBoxOpen />, title: "Products", path: "/product" },
      { icon: <FaCogs />, title: "Services", path: "/services" },
      { icon: <FaLightbulb />, title: "About Us", path: "/about" },
    ].map((item) => (
      <Link
        href={item.path}
        key={item.title}
        className="group flex-1 flex flex-col items-center justify-center py-6 border-r border-gray-100 last:border-r-0 transition-all duration-400 hover:bg-linear-to-b hover:from-red-50 hover:to-white"
      >
        {/* ICON */}
        <div className="text-[28px] sm:text-[36px] text-[#c9121f] mb-2.5 transition-all duration-400 group-hover:rotate-6 group-hover:scale-115 group-hover:text-[#1a0a09]">
          {item.icon}
        </div>

        {/* TITLE */}
        <h3 className="text-[13px] sm:text-[14px] font-bold text-[#c9121f] text-center group-hover:text-[#1a0a09] transition-colors duration-300 font-heading tracking-wide">
          {item.title}
        </h3>
      </Link>
    ))}

  </div>
</section>

{/* ═══════════ ABOUT SECTION ═══════════ */}
<section className="pt-8 pb-16 md:pt-10 md:pb-20 bg-white overflow-hidden">
  <div className="max-w-295 mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center">

    {/* Image */}
    <div className="relative group overflow-hidden rounded-xl shadow-xl z-0">
      <img
        src="/assets/loading.webp"
        alt="KBC Crane manufacturer"
        className="w-full h-80 sm:h-100 lg:h-120 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>

    {/* Content */}
    <div className="bg-[#c9121f] text-white p-6 sm:p-8 lg:p-10 lg:-ml-10 z-10 shadow-xl rounded-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <p className="uppercase text-[10px] font-bold tracking-[0.25em] mb-4 text-white/70 font-heading">
        KBC Sales & Service
      </p>

      <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-6 font-heading">
        Leading EOT Crane <br /> Manufacturer.
      </h2>

      <p className="text-[15px] sm:text-base leading-relaxed text-white/85 mb-8 font-light">
        At KBC, we are pioneers in EOT crane technology, driving
        innovation and precision to new heights. With a commitment to
        durability, efficiency, and safety, we engineer world-class cranes.
      </p>

      <Link
        href="/about"
        className="group/link relative inline-flex items-center gap-2 text-sm font-bold pb-1 font-heading tracking-wide"
      >
        Discover the power of reliability with KBC
        <FaArrowRight className="text-xs group-hover/link:translate-x-1 transition-transform" />
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-400 group-hover/link:w-full" />
      </Link>

      {/* Stats */}
      <div ref={statsRef} className="grid grid-cols-3 gap-3 sm:gap-6 border-t border-white/20 mt-8 pt-7">
        <div className="transition-transform duration-300 hover:scale-105">
          <h3 className="text-2xl sm:text-3xl font-extrabold font-heading">{years}+</h3>

          <p className="text-[9px] sm:text-[10px] uppercase tracking-wider mt-1.5 opacity-70 font-heading">
            Years of Experience
          </p>
        </div>

        <div className="transition-transform duration-300 hover:scale-105">
          <h3 className="text-2xl sm:text-3xl font-extrabold font-heading">{projects}+</h3>

          <p className="text-[9px] sm:text-[10px] uppercase tracking-wider mt-1.5 opacity-70 font-heading">
            Projects Completed
          </p>
        </div>

        <div className="transition-transform duration-300 hover:scale-105">
          <h3 className="text-2xl sm:text-3xl font-extrabold font-heading">{(customers / 1000).toFixed(0)}k+</h3>

          <p className="text-[9px] sm:text-[10px] uppercase tracking-wider mt-1.5 opacity-70 font-heading">
            Trusted Customers
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ═══════════ CRANE RANGE ═══════════ */}
<section className="pt-10 pb-10 md:pt-14 md:pb-14 bg-[#fafafa] overflow-hidden">
  <div className="max-w-295 mx-auto px-4 sm:px-6 overflow-hidden">
    <div className="text-center mb-10 md:mb-12">
      <p className="text-[11px] uppercase tracking-[0.25em] text-[#c9121f] font-bold mb-3 font-heading">Our Equipment</p>
      <h2 className="text-2xl md:text-3xl font-extrabold font-heading">
        Our Specialized Crane Range
      </h2>
      <div className="section-divider mt-4" />
    </div>

{/* MOBILE SLIDER */}
<div
  className="sm:hidden overflow-hidden relative"
  onTouchStart={handleTouchStart}
  onTouchMove={handleTouchMove}
  onTouchEnd={handleTouchEnd}
>
  <div
    onTransitionEnd={handleTransitionEnd}
    className={`flex ${
      transition ? "transition-transform duration-700 ease-in-out" : ""
    }`}
    style={{ transform: `translateX(-${current * 100}%)` }}
  >
    {sliderItems.map((crane, index) => (
      <div key={index} className="w-full shrink-0 px-1">
        <div className="min-h-111.5 bg-white rounded-xl shadow-md border border-gray-100 text-center flex flex-col overflow-hidden card-hover">
          <img
            src={crane.image}
            alt={crane.title}
            className="w-full h-47.5 object-cover"
          />

          <div className="p-5 flex flex-col flex-1">
            <h3 className="font-extrabold text-[17px] mb-3 font-heading">
              {crane.title}
            </h3>

            <p className="text-[13px] text-gray-500 leading-6 mb-6">
              {crane.desc}
            </p>

            <div className="mt-auto">
              <Link
                href="/product"
                className="inline-block bg-[#c9121f] text-white text-xs font-bold px-6 py-3 rounded-md hover:bg-[#1a0a09] transition duration-300 font-heading tracking-wider"
              >
                VIEW MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
  <button
  onClick={nextSlide}
  className="absolute bottom-16 right-3 z-20 w-10 h-10 rounded-full bg-[#c9121f] text-white flex items-center justify-center shadow-lg"
>
  <ChevronRight size={20} />
</button>
  <div className="relative w-32 mx-auto mt-5 h-1 bg-gray-200 rounded-full">
  <div
    className="absolute top-0 h-1 bg-[#c9121f] rounded-full transition-all duration-700"
    style={{
      width: `${100 / cranes.length}%`,
      left: `${((current - 1) % cranes.length) * (100 / cranes.length)}%`,
    }}
  />
</div>
</div>
 
    {/* DESKTOP / TABLET MARQUEE */}
    <div className="hidden sm:flex gap-5 sm:gap-6 animate-crane-scroll hover:[animation-play-state:paused]">
      {[...cranes, ...cranes].map((crane, index) => (
        <div
          key={`${crane.title}-${index}`}
          className="w-67.5 sm:w-75 min-h-111.5 bg-white rounded-xl shadow-md border border-gray-100 text-center shrink-0 flex flex-col overflow-hidden card-hover"
        >
          <div className="overflow-hidden">
            <img
              src={crane.image}
              alt={crane.title}
              className="w-full h-42.5 sm:h-46.25 object-cover sm:transition-transform duration-700 sm:hover:scale-110"
            />
          </div>

          <div className="p-5 sm:p-6 flex flex-col flex-1">
            <h3 className="font-extrabold text-[17px] sm:text-[18px] mb-3 font-heading">
              {crane.title}
            </h3>

            <p className="text-[13px] sm:text-[14px] text-gray-500 leading-6 mb-6">
              {crane.desc}
            </p>

            <div className="mt-auto">
              <Link
                href="/product"
                className="inline-block bg-[#c9121f] text-white text-xs font-bold px-6 py-3 rounded-md hover:bg-[#1a0a09] transition duration-300 font-heading tracking-wider"
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
 

      {/* ═══════════ CTA PARALLAX ═══════════ */}
      <section className="relative bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/assets/parallax.webp')" }}>
        <div className="absolute inset-0 bg-[#1a0a09]/70"></div>

        <div className="relative z-10">
          <section className="py-28 text-center">
            <div className="px-6">
              <div className="section-divider" />
              <h2 className="text-white text-3xl md:text-4xl font-extrabold max-w-3xl mx-auto leading-tight font-heading">
                Power Your Progress with Our Precision Cranes, Experience Unmatched
                Strength and Reliability Today
              </h2>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
                <Link
                  href="/contact"
                  className="bg-[#c9121f] text-white px-8 py-3.5 text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-[#c9121f] transition-all duration-300 rounded-md font-heading"
                >
                  INQUIRY NOW
                </Link>

                <Link
                  href="/product"
                  className="border-2 border-white/50 text-white px-8 py-3.5 text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-[#1a0a09] hover:border-white transition-all duration-300 rounded-md font-heading"
                >
                  BROCHURE
                </Link>
              </div>
            </div>
          </section>

 

{/* ═══════════ INDUSTRIES ═══════════ */}
<section className="py-14 md:py-22 bg-white/95 overflow-hidden">
  <div className="max-w-295 mx-auto px-4 sm:px-6">
    <div className="text-center mb-10 md:mb-14">
      <p className="text-[11px] uppercase tracking-[0.25em] text-[#c9121f] font-bold mb-3 font-heading">Industries We Serve</p>
      <h2 className="text-xl sm:text-2xl font-extrabold font-heading">
        Innovative Crane Solutions Across Industries
      </h2>
      <div className="section-divider mt-4" />
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
      {industries.map((item, index) => (
        <div
          key={item.title}
          className="
            reveal-card
            group
            bg-white
            border
            border-gray-200
            rounded-xl
            p-5
            sm:p-7
            flex
            items-start
            gap-4
            sm:block
            sm:text-center
            shadow-sm
            hover:border-[#c9121f]/30
            card-hover
            transition-all
            duration-500
          "
        >
          <div
            className="
              w-14 h-14
              shrink-0
              rounded-xl
              bg-linear-to-br from-red-50 to-red-100
              text-[#c9121f]
              text-xl
              flex
              items-center
              justify-center
              group-hover:bg-linear-to-br group-hover:from-[#c9121f] group-hover:to-[#e51b23]
              group-hover:text-white
              group-hover:rotate-6
              group-hover:scale-110
              transition-all
              duration-500
              sm:mx-auto
              sm:mb-4
            "
          >
            {item.icon}
          </div>

          <div>
            <h3 className="font-bold text-[15px] sm:text-sm leading-6 mb-1.5 sm:mb-3 text-[#111] font-heading">
              {item.title}
            </h3>

            <p className="text-[13px] sm:text-xs text-gray-500 leading-5">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

          {/* ═══════════ WHO WE ARE ═══════════ */}
          <section className="py-24">
            <div className="max-w-190 mx-auto bg-white text-center px-10 py-14 rounded-xl border-b-4 border-[#c9121f] shadow-2xl relative overflow-hidden">
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-[3px] border-l-[3px] border-[#c9121f] rounded-tl-xl" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-[3px] border-r-[3px] border-[#c9121f] rounded-br-xl" />
              
              <h2 className="text-2xl font-extrabold mb-6 font-heading">Who We Are</h2>
              <p className="text-sm text-gray-500 leading-7">
                KBC Sales & Service is one of the leading engineering companies
                manufacturing a wide range of material handling equipment such as
                electric wire rope hoist, electric chain hoist, EOT cranes, gantry
                cranes and industrial lifting solutions.
              </p>
            </div>
          </section>
        </div>
      </section>
      
{/* ═══════════ TRUSTED CLIENTS ═══════════ */}
<section className="py-12 md:py-20 bg-[#fafafa] overflow-hidden">
  <div className="text-center mb-8 md:mb-10">
    <p className="text-[11px] uppercase tracking-[0.25em] text-[#c9121f] font-bold mb-3">
      Trusted Partners
    </p>

    <h2 className="text-2xl md:text-4xl font-extrabold font-heading">
      Our Valuable Clients
    </h2>

    <div className="section-divider mt-4" />
  </div>

  <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
    <div className="overflow-hidden">

      <div className="marquee-track">
        {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
          <div
            key={i}
            className="
              shrink-0
              w-32.5 h-18.75
              md:w-50 md:h-27.5
              bg-white
              rounded-xl
              border border-gray-100
              shadow-sm
              flex items-center justify-center
              px-4
            "
          >
            <img
              src={logo}
              alt={`Client ${i}`}
              className="max-h-10 md:max-h-15 w-auto object-contain"
            />
          </div>
        ))}
      </div>

    </div>
  </div>
</section>
    </main>
  );
}
