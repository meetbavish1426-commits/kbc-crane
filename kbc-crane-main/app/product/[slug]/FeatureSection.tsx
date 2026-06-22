"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaCog,
  FaMousePointer,
  FaCheckCircle,
  FaChartLine,
} from "react-icons/fa";

export default function FeatureSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true);
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const features = [
    { icon: <FaCog />, title: "BEST MECHANICAL STRENGTH" },
    { icon: <FaMousePointer />, title: "EASY TO OPERATE" },
    { icon: <FaCheckCircle />, title: "HIGH QUALITY" },
    { icon: <FaChartLine />, title: "MARKET LEADING PRODUCT" },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-[#f5f6f8] py-12 sm:py-14 overflow-hidden"
    >
      <div className="max-w-[1180px] mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {features.map((item, index) => (
            <div
              key={item.title}
              style={{ transitionDelay: `${index * 150}ms` }}
              className={`group bg-white rounded-xl p-4 sm:p-6 text-center shadow-md border border-gray-100
              transition-all duration-700 ease-out
              ${
                show
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-10 scale-90"
              }
              hover:shadow-xl hover:-translate-y-2`}
            >
              <div className="w-[58px] h-[58px] sm:w-[66px] sm:h-[66px] mx-auto rounded-full border-[3px] border-black flex items-center justify-center text-[20px] sm:text-[22px] group-hover:bg-[#e51b23] group-hover:text-white group-hover:border-[#e51b23] transition-all duration-300">
                {item.icon}
              </div>

              <p className="mt-4 text-[10px] sm:text-[11px] font-extrabold tracking-wide leading-4 text-black">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-9 transition-all duration-700 ease-out delay-[700ms]
          ${
            show
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-90"
          }`}
        >
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-[#e51b23] text-white text-[12px] font-bold px-10 py-4 min-w-[190px] hover:bg-black hover:-translate-y-1 transition-all duration-300"
          >
            CONTACT US
          </a>
        </div>
      </div>
    </section>
  );
}